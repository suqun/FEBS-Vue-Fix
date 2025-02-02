package cc.mrbird.febs.common.runner;

import cc.mrbird.febs.common.exception.RedisConnectException;
import cc.mrbird.febs.common.service.CacheService;
import cc.mrbird.febs.system.domain.User;
import cc.mrbird.febs.system.manager.UserManager;
import cc.mrbird.febs.system.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 缓存初始化
 */
@Slf4j
@Component
public class CacheInitRunner implements ApplicationRunner {

    @Autowired
    private UserService userService;

    @Autowired
    private CacheService cacheService;
    @Autowired
    private UserManager userManager;

    @Autowired
    private ConfigurableApplicationContext context;

    @Override
    public void run(ApplicationArguments args) {
        try {
            log.info("Redis连接中 ······");
            cacheService.testConnect();

            log.info("缓存初始化 ······");
            log.info("缓存用户数据 ······");
            List<User> list = this.userService.list();
            //缓存用户，部门关系
            this.userService.findSubordinatesMap().stream().forEach((map)-> {
                try {
                    cacheService.saveUserSubordinates(map.getDeptId(),map.getUserIds());
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });

            for (User user : list) {
                userManager.loadUserRedisCache(user);
            }
        } catch (Exception e) {
            log.error("缓存初始化失败，{}", e.getMessage());
            log.error(" ____   __    _   _ ");
            log.error("| |_   / /\\  | | | |");
            log.error("|_|   /_/--\\ |_| |_|__");
            log.error("                        ");
            log.error("MICRO-PRO启动失败              ");
            if (e instanceof RedisConnectException)
                log.error("Redis连接异常，请检查Redis连接配置并确保Redis服务已启动");
            // 关闭 FEBS
            context.close();
        }
    }
}

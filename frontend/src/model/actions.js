const MUTATIONS = {
  user: {
    logout: 'logout',
    changeUnreadCount:"changeUnreadCount"
  },
  drawer: {
    changeDrawer: `changeDrawer`,
  },
  page: {
    keepAlivePush: 'keepAlivePush',
    setCurrent: 'setCurrent',
    setCurrentName: 'setCurrentName',
    clear: 'clear'
  },
  menu: {
    setCurrentMenu: 'setCurrentMenu'
  }
};

const ACTIONS = {
  user: {
    loadUser: 'loadUser',
    setUser: 'setUser'
  },
  page: {
    add: 'add',
    open: 'open',
    close: 'close',
    closeOthers: 'closeOthers'
  },
  resources: {
    setLastGroup: `setLastGroup`,
    load: `load`
  },
  menu: {
    setOrigin: 'setOrigin',
    loadOrigin: 'loadOrigin',
  },
  lang: {
    change: 'change',
    load: 'load'
  }
};
export {
  MUTATIONS,
  ACTIONS
}

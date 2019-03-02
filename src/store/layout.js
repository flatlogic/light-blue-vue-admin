export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarActiveElement: null,
  },
  mutations: {
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
    setSidebarState(state, value) {
      state.sedebarClose = value;
    },
    handleSwipe(state, e) {
      if (e.direction === 4 && !state.chatOpen) {
        state.sidebarClose = false;
      }

      if (e.direction === 2 && !state.sidebarClose) {
        state.sidebarClose = true;

      }
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
  },
  actions: {
    switchSidebar({ commit }, value) {
      commit('switchSidebar', value);
    },
    changeSidebarActive({ commit }, index) {
      commit('changeSidebarActive', index);
    },
  },
};

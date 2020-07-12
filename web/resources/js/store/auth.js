const state = {
  user: null
};

const getters = {};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

const actions = {
  async register(context, data) {
    /* 中略 */
  },
  async login(context, data) {
    const response = await axios.post("/api/login", data);
    context.commit("setUser", response.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

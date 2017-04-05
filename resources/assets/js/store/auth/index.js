import * as MutationTypes from './MutationTypes';

const state = {
    user: {
        name: ''
    },
    token: ''
};

const mutations = {
    [MutationTypes.SAVE_USER](state, response) {
        state.token = response.data.token;
        state.user.name = response.data.user.name;
    },
    [MutationTypes.LOGOUT](state) {
        state.token = '';
        state.user.name = '';
    },
    [MutationTypes.FETCH_USER_SUCCESS](state, user) {
        state.user.name = user.name;
    },
    [MutationTypes.FETCH_USER_FAILURE](state) {
        state.user.name = '';
        state.token = '';
    },
    [MutationTypes.UPDATE_USER](state, user) {
        state.user.name = user.name;
    }
};
const actions = {
    [MutationTypes.SAVE_USER]({commit}, response) {
        commit(MutationTypes.SAVE_USER, response);
    },
    [MutationTypes.LOGOUT]({commit}) {
        commit(MutationTypes.LOGOUT);
    },
    [MutationTypes.FETCH_USER_SUCCESS]({commit}, user) {
        commit(MutationTypes.FETCH_USER_SUCCESS, user);
    },
    [MutationTypes.FETCH_USER_FAILURE]({commit}) {
        commit(MutationTypes.FETCH_USER_FAILURE);
    }
};
const getters = {
    authUser: state => state.user,
    authToken: state => state.token,
    isLoggedIn: state => state.token !== ''
};
export default {
    state,
    mutations,
    actions,
    getters
}
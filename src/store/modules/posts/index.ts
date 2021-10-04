import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { PostsState } from '@/store/modules/posts/types';
import { RootState } from '@/store/types';

const state: PostsState = {
  data: [],
  error: false,
};

const posts: Module<PostsState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

export default posts;

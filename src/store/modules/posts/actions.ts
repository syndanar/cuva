import { ActionTree } from 'vuex';
import axios from 'axios';
import { PostsState, Post } from './types';
import { RootState } from '@/store/types';

const actions: ActionTree<PostsState, RootState> = {
  fetchData({ commit }): void {
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts/',
    }).then((response) => {
      const payload: Post = response && response.data;
      commit('postsLoaded', payload);
    }, () => {
      commit('postsError');
    });
  },
};

export default actions;

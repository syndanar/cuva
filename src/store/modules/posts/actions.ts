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
  fetchPost({ commit, state }, id: number): void {
    if (!state.data.find((post) => post.id === id)) {
      axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      }).then((response) => {
        const payload: Post = response && response.data;
        commit('postLoaded', payload);
      }, () => {
        commit('postError');
      });
    }
  },
};

export default actions;

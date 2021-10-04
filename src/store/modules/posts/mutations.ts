import { MutationTree } from 'vuex';
import { PostsState, Post } from '@/store/modules/posts/types';

const mutations: MutationTree<PostsState> = {
  postsLoaded(state, posts: Array<Post>) {
    state.error = false;
    state.posts = posts;
  },
  postsError(state) {
    state.error = true;
    state.posts = [];
  },
};

export default mutations;

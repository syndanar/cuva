import { MutationTree } from 'vuex';
import { PostsState, Post } from '@/store/modules/posts/types';

const mutations: MutationTree<PostsState> = {
  postsLoaded(state, posts: Array<Post>) {
    state.error = false;
    state.data = posts;
  },
  postsError(state) {
    state.error = true;
    state.data = [];
  },
  postLoaded(state, post: Post) {
    state.error = false;
    if (state.data.indexOf(post) === -1) {
      state.data.push(post);
    }
  },
  postError(state) {
    state.error = true;
  },
};

export default mutations;

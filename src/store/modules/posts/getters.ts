import { GetterTree } from 'vuex';
import { PostsState } from './types';
import { RootState } from '@/store/types';

const getters: GetterTree<PostsState, RootState> = {
  posts: (state: PostsState) => state.posts,
};

export default getters;

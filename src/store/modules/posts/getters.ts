import { GetterTree } from 'vuex';
import { PostsState } from './types';
import { RootState } from '@/store/types';

const getters: GetterTree<PostsState, RootState> = {
  getPosts: (state: PostsState) => state.data,
  getPost: (state: PostsState) => (id: number) => state.data.find((post) => post.id === id),
};

export default getters;

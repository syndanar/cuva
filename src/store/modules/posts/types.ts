export interface Post {
  title: string,
  body: string,
}

export interface PostsState {
  posts: Array<Post>,
  error: boolean
}

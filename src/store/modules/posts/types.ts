export interface Post {
  id: number,
  title: string,
  body: string,
}

export interface PostsState {
  data: Array<Post>,
  error: boolean
}

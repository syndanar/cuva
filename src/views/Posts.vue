<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="post in computedPosts" :key="`post-${post.id}`">
          <v-card class="card" elevation="3">
            <v-img
              height="250"
              src="https://picsum.photos/400/250"
            ></v-img>
            <router-link :to="{name: 'Post', params: { id: post.id }}">
              <v-card-title v-html="post.title" />
            </router-link>
            <v-card-text v-html="post.body" />
          </v-card>
      </v-col>
    </v-row>
    <v-spacer class="pa-3"/>
    <v-pagination
      v-model="page"
      :length="pagesCount"
    ></v-pagination>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import Vue from 'vue';
import { Post } from '@/store/modules/posts/types';

const postsNS = namespace('posts');
const CARDS_PER_PAGE = 12;

@Component({
  name: 'Posts',
})
export default class PostsPage extends Vue {
  @postsNS.Action('fetchData') fetchData: (() => void) | undefined

  @postsNS.Getter('getPosts') posts?: Array<Post>;

  page = 1;

  get pagesCount(): number {
    return this.posts ? Math.ceil(this.posts.length / CARDS_PER_PAGE) : 0;
  }

  get computedPosts(): Array<Post> {
    return this.posts
      ? this.posts.slice((this.page - 1) * CARDS_PER_PAGE, this.page * CARDS_PER_PAGE) : [];
  }

  created(): void {
    if (this.fetchData) {
      this.fetchData();
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 2em;
  height: 100%;
  text-decoration: none;
}
</style>

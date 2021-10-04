<template>
  <v-container>
    <v-row>
      <v-col><router-link :to="{name : 'Posts'}">Back to Posts</router-link></v-col>
    </v-row>
    <template v-if="post">
      <v-row>
        <v-col>
          <h1>{{post.title}}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img
            height="250"
            src="https://picsum.photos/400"
          />
        </v-col>
        <v-col>
          <v-spacer class="pa-2"/>
          {{ post.body }}
          <v-spacer class="pa-5"/>
          <v-form @submit.prevent="sendForm" v-if="!formSent">
            <h2>Отправить заявку на бронь</h2>
            <v-text-field
              v-model="form.address"
              label="Адрес"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="form.name"
              label="Имя"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="form.phone"
              label="Телефон"
              :rules="[rules.required]"
              v-mask="'+7 (###) ###-##-##'"
            />
            <v-btn type="submit" color="primary">Отправить</v-btn>
          </v-form>
          <div class="d-flex justify-center flex-column mt-6" v-if="formSent">
            <v-icon
              color="#66BB66"
              size="70"
            >mdi-check-circle</v-icon>
            <v-spacer class="pa-5"></v-spacer>
            <div class="text-center">
              Бронь успешно подтверждена.<br/>Спасибо.
            </div>
          </div>

        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Post } from '@/store/modules/posts/types';
import { Booking } from '@/interfaces/booking';

const postsNS = namespace('posts');

@Component({
  name: 'PostPage',
})
export default class PostPage extends Vue {
  @postsNS.Action('fetchPost') fetchPost: ((arg0: number) => void) | undefined

  @postsNS.Getter('getPost') getPost: ((arg0: number) => Post) | undefined

  private formSent = false;

  private form: Booking = {
    address: null,
    name: null,
    phone: null,
  }

  private rules = {
    required: (value: string) => !!value || 'This field is required.',
  }

  get postId(): number {
    return parseInt(this.$route.params.id, 10);
  }

  get post(): Post | undefined {
    return this.getPost ? this.getPost(this.postId) : undefined;
  }

  created(): void {
    if (this.fetchPost) {
      this.fetchPost(this.postId);
    }
  }

  sendForm(): void {
    this.formSent = true;
  }
}
</script>

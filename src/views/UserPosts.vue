<template>
  <section class="posts my-5">
    <h1 class="my-5">POSTS</h1>
    <b-list-group v-if="!isLoading && userPosts">
      <div v-for="post in userPosts" :key="post.id">
          <router-link :to="'/users/' + uid + '/posts/' + post.id">
              <b-list-group-item variant="primary">{{post.title}}</b-list-group-item>
          </router-link>
      </div>
    </b-list-group>
    <div class="spinner-grow fast text-primary" role="status" v-else>
      <span class="sr-only">Loading...</span>
    </div>
    <div v-if="isError">
      <p>Sorry, Something went wrong</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UserPost'
})
export default class UserList extends Vue {
  loading = true;
  uid = ''
  get userPosts(): [] {
    return this.$store.state.posts;
  }
  get isError(): boolean {
    return this.$store.state.isError;
  }
  get isLoading(): boolean {
    return this.$store.state.isLoading;
  }
  private mounted() {
    this.uid = this.$route.params.id;
    this.$store.dispatch('loadPosts', this.uid);
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/app.scss';
  .posts {
    font-family: $roboto;
    max-width: 1200px;
    padding: 0 32px;
    margin: 0 auto;
    color: $main-col;
    .list-group-item-primary {
      background: $black-col;
    }
  }
</style>

<template>
  <section class="post my-5">
    <h1 class="my-5">POST</h1>
    <b-card bg-variant="light" :header="userPost.title" text-variant="dark" class="text-center" v-if="!isLoading && userPost">
      <b-card-text>{{userPost.body}}</b-card-text>
    </b-card>
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
  components: {
  },
  name: 'UserPost'
})
export default class UserPost extends Vue {
  pid = ''
  get userPost(): [] {
    return this.$store.state.post;
  }
  get isError(): boolean {
    return this.$store.state.isError;
  }
  get isLoading(): boolean {
    return this.$store.state.isLoading;
  }
  
  private mounted() {
    this.pid = this.$route.params.postId;
    this.$store.dispatch('loadPost', this.pid);
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/app.scss';
.post {
  font-family: $roboto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  color: $main-col;
  .list-group-item-primary {
    background: $black-col;
  }
}
</style>

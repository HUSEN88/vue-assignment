<template>
  <section class="users">
    <h1 class="mt-4">Bloggers</h1>
    <hr>
    <div class="cards-container" v-if="!isLoading && usersList">
      <app-user-card v-for="user in usersList" :key="user.id" :user="user"></app-user-card>
    </div>
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
import UserCard from '../components/UserCard.vue'
@Component({
  components: {
    appUserCard: UserCard,
  },
  name: 'UsersList'
})
export default class UserList extends Vue { 
  get usersList(): [] {
    return this.$store.state.users;
  }
  get isLoading(): boolean {
    return this.$store.state.isLoading;
  }
  get isError(): boolean {
    return this.$store.state.isError;
  }
  private mounted () {
    this.$store.dispatch('loadUsers');
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/app.scss';
.users {
  font-family: $roboto;
  color: $sec-col;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .cards-container {
    padding: 0 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(298px, 298px));
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
}

</style>

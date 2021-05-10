<template>
    <div class="nav">
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#"><img src="https://www.pinclipart.com/picdir/big/3-38139_blogger-blog-logo-png-transparent-background-clipart.png" class="brand-logo" alt="Brand logo">  VueBlog</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" to="/">Bloggers</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Navbar'
})
export default class HelloWorld extends Vue {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/app.scss';
.nav {
  font-family: $roboto;
  background-color: $main-col;
  padding: 0 32px;
  a {
    font-weight: bold;
    color:$white;

    &.router-link-exact-active {
      color:$gray;
    }
    .brand-logo {
      width: 40px;
    }
  }
}
</style>

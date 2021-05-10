<template>
    <div class="card">
        <header>
          <div class="avatar">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" :alt="user.username" />
          </div>
        </header>
        <h3>{{user.name}}</h3>
        <p class="location"><img src="./../assets/images/location.png" class="icon" alt=""> {{user.address.city}}</p>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
        </div>
        <div class="contacts">
          <a :href="'mailto:' + user.email" target="_blank"><img src="./../assets/images/email.png" class="icon" alt="Email"></a>
          <a :href="'tel:' + user.phone" target="_blank"><img src="./../assets/images/phone.png" class="icon" alt="Phone"></a>
        </div>
        <router-link :to="'/users/' + user.id + '/posts'">
          <footer>
            <p>View Posts</p>
          </footer>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    
  name: 'UserCard'
})
export default class UserCard extends Vue { 
  @Prop() user!: [];
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/app.scss';
    .card {
        font-family: $roboto;
        position: relative;
        background: #fff;
        box-shadow: 0 10px 7px -5px rgba(#000, 0.4);

        .location {
            font-size: 14px;
            font-style: italic;
            .icon {
                width: 16px;
            }
        }

        header {
            position: relative;
            width: 100%;
            height: 60px;
            background-color: $main-col;

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: inherit;
            }

            &::before {
                -webkit-transform: skewY(-8deg);
                -moz-transform: skewY(-8deg);
                -ms-transform: skewY(-8deg);
                -o-transform: skewY(-8deg);
                transform: skewY(-8deg);
                -webkit-transform-origin: 100% 100%;
                -moz-transform-origin: 100% 100%;
                -ms-transform-origin: 100% 100%;
                -o-transform-origin: 100% 100%;
                transform-origin: 100% 100%;
            }

            &::after {
                -webkit-transform: skewY(8deg);
                -moz-transform: skewY(8deg);
                -ms-transform: skewY(8deg);
                -o-transform: skewY(8deg);
                transform: skewY(8deg);
                -webkit-transform-origin: 0 100%;
                -moz-transform-origin: 0 100%;
                -ms-transform-origin: 0 100%;
                -o-transform-origin: 0 100%;
                transform-origin: 0 100%;
            }

            .avatar {
                position: absolute;
                left: 50%;
                top: 30px;
                margin-left: -50px;
                z-index: 5;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                background: #ccc;
                border: 3px solid #fff;

                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    -o-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    width: 100px;
                    height: auto;
                }
            }
        }

        h3 {
            position: relative;
            margin: 80px 0 30px;
            text-align: center;
            font-size: 24px;

            &::after {
                content: '';
                position: absolute;
                bottom: -15px;
                left: 50%;
                margin-left: -15px;
                width: 30px;
                height: 1px;
                background: $main-col;
            }
        }

        .desc {
            padding: 0 1rem 2rem;
            text-align: center;
            line-height: 1.5;
            color: $main-col;
            font-size: 16px;
            opacity: 0.6;
        }

        .contacts {
            width: 200px;
            max-width: 100%;
            margin: 0 auto 2rem;

            a {
                .icon {
                    position: relative;
                    width: 30px;
                }
            }
        }

        a {
            &:hover {
                color: $gray;
                text-decoration: none;
            }

            footer {
                position: relative;
                padding: 1rem;
                background-color: $sec-col;
                text-align: center;

                p {
                    color: #e2e2e2;
                    font-size: 16px;
                    margin-bottom: 0;
                    -webkit-transition: color .4s;
                    -moz-transition: color .4s;
                    -ms-transition: color .4s;
                    -o-transition: color .4s;
                    transition: color .4s;

                    &:hover {
                        color: $gray;
                        text-decoration: none;
                        ;
                    }
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: -27px;
                    left: 50%;
                    margin-left: -15px;
                    border: 15px solid transparent;
                    border-bottom-color: $sec-col;
                }
            }
        }
    }

</style>
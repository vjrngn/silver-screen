<style>
    .navbar-inverse {
        background: #1DA1F2;
        border-bottom: #1DA1F2;
    }
    .navbar-inverse .navbar-brand {
        color: #ffffff;
    }
</style>

<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand text-center" href="#">{{ title }}</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="nav-item pull-xs-right">
                    <a class="nav-link" href="" @click="logout()">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import auth from '../services/auth'
    export default {
        props: ['title'],
        data() {
            isLoggedIn: auth.isLoggedIn
        },
        methods: {
            logout () {
                auth.logout();
                this.$route.router.redirect('login')
            }
        }
    }
</script>

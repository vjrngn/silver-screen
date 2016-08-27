<style scoped>
    .box-container {
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
    .login-header {
        align-items: center;
    }
</style>

<template>
    <section>
        <div class="row box-container login-header">
            <div class="col-sm-6 col-sm-offset-3">
                <h4 class="text-xs-center text-muted text-capitalize">Welcome to the Silver Screen </h4>
            </div>
        </div>
        <form @submit.prevent="login()">
            <div class="row box-container">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-block">
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password">
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    import auth from '../services/auth'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                auth.login(this, email, password)
                this.$route.router.redirect('/')
            }
        }
    }
</script>
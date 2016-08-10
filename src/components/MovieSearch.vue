<!--
 MovieSearch is a custom input search box that encapsulates the
 behaviour of performing some action based on user input.

 Here, we are fetching movies from an API.

-->

<template>
    <input type="text"
           class="form-control"
           placeholder="Movie Name"
           v-model="movie"
           autofocus
           @keyup.enter="fetchMovies"
    >
</template>

<script>
    import secrets from '../../config';
    export default {
        data() {
            return {
                movie: ''
            }
        },

        methods: {
            fetchMovies() {
                this.$http
                    .get(`https://api.themoviedb.org/3/search/movie?query=${this.movie}&language=en&&api_key=${secrets.API_KEY}`)
                    .then(function(response) {
                        this.$dispatch('MovieReceived', response.data);
                    });
            }
        }
    }
</script>

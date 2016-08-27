<!--
  This file (App.vue) serves as the base skeleton of our application.
  This is where we wire-up each of our components into the structure we want.

  If you're coming from EmberJS, this is similar to application.hbs
-->


<style>
    body {
        background: #F5F8FA;
    }
    #container {
        margin-top: 75px;
    }
    a {
        color: white;
    }
</style>

<template>
    <section>
        <app-header title="Silver Screen"></app-header>

        <div class="container" id="container">
            <movie-search></movie-search>

            <hr>
            <div class="row">
                <movie-list :movies="movies"></movie-list>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        data() {
            return {
                movies: []
            }
        },
        components: {
            appHeader: require('./components/AppHeader.vue'),
            movieSearch: require('./components/MovieSearch.vue'),
            movieCard: require('./components/MovieCard.vue'),
            movieList: require('./components/MovieList.vue')
        },

        events: {
            // Event fired by the custom MovieSearch component when the movie results have been received.
            MovieReceived(movieData) {
                let m = movieData.results.map(movie => {
                    return {
                        summary: movie.overview,
                        title: movie.original_title,
                        image: movie.poster_path ? movie.poster_path : ''
                    };
                });

                this.$set('movies', m);
            }
        }
    }
</script>

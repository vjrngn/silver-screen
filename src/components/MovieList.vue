<!--
    MovieList is a component in itself that houses the MovieCard.
    Here we specify how a list should look. For example, you may
    like to have a vertical list on mobile but use a grid on
    desktop. This is where you can specify different layouts.

    Nesting components within one another is a really powerful way
    to build standalone UIs that can be easily woven into other
    components
-->

<template>
    <div>
        <div class="row" v-for="movie in movies">
            <movie :title="movie.title" :image="movie.image" :summary="movie.summary"></movie>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['movies'],
        components: {
            movie: require('./MovieCard.vue')
        }
    };
</script>

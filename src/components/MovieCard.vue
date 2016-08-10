<!--
    MovieCard.vue is the component that defines the markup
    and behaviour of how one single movie is displayed.

    Notice how the style, html (the look) and javascript (the behaviour)
    are encapsulated together. This allows us to focus on one single
    unit our UI whilst giving us the flexibility of reusability
-->


<style scoped>
    .card-block {
        padding: 0em;
    }
    .card-summary {
        padding: 1.25em;
    }
    img {
        width: 185px;
        height: 278px;
        float: right;
    }

    .card-img {
        border-radius: 0px;
    }
</style>

<template>
    <div class="card card-block">
        <img class="card-img" :src=`https://image.tmdb.org/t/p/original${image}` :alt="title">
        <div class="card-summary">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ summary }}</p>
            <a href="#" class="btn btn-primary">Check It Out!</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'image', 'summary']
    }
</script>

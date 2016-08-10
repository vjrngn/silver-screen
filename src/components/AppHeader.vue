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
        </div>
    </nav>
</template>

<script>
export default {
    props: ['title']
}
</script>

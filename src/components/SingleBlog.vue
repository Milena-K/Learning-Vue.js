<template>
  <div class="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.body }}</article>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {},
            id: this.$route.params.id
        }
    },
    created() {
        fetch("http://jsonplaceholder.typicode.com/posts/" + this.id )
            .then( response => response.json() )
            .then( data => this.blog = data)
    }
}
</script>

<style>

</style>
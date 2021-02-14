<template>
  <div class="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
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
        fetch("https://blogs-5bed4-default-rtdb.firebaseio.com/posts/" + this.id + ".json")
            .then( response => response.json() )
            .then( data => this.blog = data)
    }
}
</script>

<style>

</style>
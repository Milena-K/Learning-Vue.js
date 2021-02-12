<template>
<div id="show-blogs">
  <div v-for="blog in blogs" :key="blog.Id" class="single-blog">
      <h3> {{ blog.title }} </h3>
      <p> {{ blog.body }} </p>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        }
    },
    methods: {

    },
    created() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.blogs = data.slice(0,10))
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
<template>
<div id="show-blogs">
    <input type="text" v-model="search" placeholder="search box">
  <div v-for="blog in filteredBlogs" :key="blog.Id" class="single-blog">
      <h3> {{ blog.title }} </h3>
      <p> {{ blog.body }} </p>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: ""
        }
    },
    methods: {

    },
    created() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.blogs = data.slice(0,10))
    },
    computed: {
        filteredBlogs() {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}
</script>

<style>
#show-blogs{
    width: 800px;
    margin: 0px auto;
}

#show-blogs input {
    width: 800px;
    text-align: center;
    font-size: 20px;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
<template>
<div id="show-blogs">
    <input type="text" v-model="search" placeholder="search box">
  <div v-for="blog in filteredBlogs" :key="blog.Id" class="single-blog">
      <h3> {{ blog.title | to-uppercase }} </h3>
      <p> {{ blog.body }} </p>
  </div>
</div>
</template>

<script>
import SearchMixin from '../mixins/SearchMixin'

export default {
    data() {
        return {
            blogs: [],
            search: ""
        }
    },
    created() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.blogs = data.slice(0,10))
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    mixins: [
        SearchMixin
    ]
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
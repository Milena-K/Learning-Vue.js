<template>
<div id="show-blogs">
    <input type="text" v-model="search" placeholder="search box">
  <div v-for="blog in filteredBlogs" :key="blog.Id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h3> {{ blog.title | to-uppercase }} </h3></router-link>
      <p> {{ blog.body | snippet }} </p>
  </div>
</div>
</template>

<script>
import SearchMixin from '../mixins/SearchMixin';

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
        },
        snippet(value) { 
            return value.slice(0,100) + '...'
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
    border-radius: 20px;
    width: 770px;
    text-align: center;
    font-size: 20px;
}

.single-blog{
    border-radius: 20px;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background: #eee;
    width: 800px;
}

h3 {
    color: #2c3e50;
}

</style>
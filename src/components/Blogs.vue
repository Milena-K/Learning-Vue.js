<template>
<div id="show-blogs">
    <input type="text" v-model="search" placeholder="search box">
  <div v-for="blog in filteredBlogs" :key="blog.Id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h3> {{ blog.title | to-uppercase }} </h3></router-link>
      <p> {{ blog.content | snippet }} </p>
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
        fetch("https://blogs-5bed4-default-rtdb.firebaseio.com/posts.json/")
            .then(response => response.json())
            .then(data => {
                for(const key in data) {
                    data[key].id = key;
                    this.blogs.push(data[key]);
                }
            })
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
    border-radius: 2px;
    width: 780px;
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
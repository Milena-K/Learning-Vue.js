<template>
<div class="center grid">
<vs-row class="mh" align="center" justify="space-between" direction="column">
<vs-col v-for="blog in blogs" :key="blog.id" w="2" class="post"> 

    <vs-card type="3" > 
        <template #title>
        <h3>{{ blog.title }}</h3>
        </template>
        <template #img>
        <img src="../assets/cupcake.png" alt="">
        </template>
        <template #text>
        <p>{{ blog.content | snippet }}</p>
        </template>
  </vs-card>

</vs-col>
</vs-row>
</div>
</template>
<!--
<template>
<div id="show-blogs" class="center grid">
  <input type="text" v-model="search" placeholder="search box">
  <div v-for="blog in filteredBlogs" :key="blog.Id" class="single-blog" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
    <router-link v-bind:to="'/blog/' + blog.id">
      <h3> {{ blog.title | to-uppercase }} </h3>
    </router-link>
    <p> {{ blog.content | snippet }} </p>
  </div>
  <vs-row>
      <vs-col v-for="(col,index) in 3" :key="index" vs-type="flex" vs-justify="center" vs-align="center" w="4">
        33.3%
      </vs-col>
    </vs-row>
</div>
</template>
!-->

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
            return value.slice(0,5) + '...'
        }
    },
    mixins: [
        SearchMixin
    ]
}
</script>

<style scoped>
.post{
    width: 100%;
}

</style>
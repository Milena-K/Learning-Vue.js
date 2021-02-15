<template>
    <div class="single-blog">
        <div class="blog-start">
            <h1>{{ blog.title }}</h1>
            <article class="blog-content">{{ blog.content }}</article>
        </div>
        <div class="blog-end">
            <p><strong>Author: {{ blog.author }}</strong></p>
            <strong>Categories:</strong>
            <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
        </div>
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
.single-blog {
  margin: 190px;
  background-color: white;
  border-radius: 20px;
  color: #0C2D48;
  width: 50%;
  margin: 200px auto;
  text-align: left;
  padding: 80px;
}

.blog-end {
    padding-top: 70px;
}

.blog-content {
    font-size: 20px;
}

.blog-start {
    content: " s ";
    height: 300px;
}

</style>

<template>
<div>
<div id="add-blog">
  <form v-if="!submitted">
    <h1>What's on your mind?</h1>
    <label for="blog-title" >Blog Title:</label>      
    <input type="text" name="blog-title" v-model.lazy="blog.title" required>
    <label for="blog-content">Blog Content:</label>
    <textarea type="text" name="blog-content" v-model.lazy="blog.content">
    </textarea>
    <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Ninjas</label>
        <input type="checkbox" v-model="blog.categories" value="ninjas">
        <label>Wizards</label>
        <input type="checkbox" v-model="blog.categories" value="wizards">
        <label>Mario</label>
        <input type="checkbox" v-model="blog.categories" value="mario">
        <label>Cheese</label>
        <input type="checkbox" v-model="blog.categories" value="cheese">
    </div>
    <label>Author: </label>
    <select v-model="blog.author"> 
        <option v-for="author in authors" :key="author">{{ author }}</option>
    </select>
    <br>
    <button @click.prevent="post">Add Blog</button>
    <hr>
    </form>
    <div v-if="submitted">
        <h1>Ey, thanks for posting!</h1>
    </div>
  </div>

    <div class="single-blog">
        <div class="blog-start">
            Preview:
            <h1>{{ blog.title }}</h1>
            <article class="blog-content">{{ blog.content }}</article>
        </div>
        <div class="blog-end">
            <p><strong>Author: {{ blog.author }}</strong></p>
            <strong>Categories:</strong>
            <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: "",
                content: "",
                author: "",
                categories: []
            },
            authors: [
                "The Best Ninja",
                "Kinda Anonymous",
                "Authorski"
            ],
            submitted: false,
        }
    },
    methods: {
        post: function() {
            this.$http.post("https://blogs-5bed4-default-rtdb.firebaseio.com/posts.json", this.blog).then(function(){
                this.submitted = true;
            });

        }
    }
}
</script>

<style>
button {
    margin: 12px;
}
#add-blog *{
    box-sizing: border-box;
}
#add-blog {
    color: white;
    margin: 20px auto;
    max-width: 500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    text-align: left;
}
#preview span{
    font-weight: bold;
}
h3{
    text-align: center;
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}

</style>

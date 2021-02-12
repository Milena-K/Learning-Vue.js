<template>
<div id="add-blog">
  <form v-if="!submitted">
    <h1>Add a New Blog Post</h1>
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
    <!-- Sakam poseben element da napravam za ova, ama podocna -->
    <div id="preview">
       <h3>Privew Blog</h3> 
       <p><span>Blog Title:</span> {{ blog.title }} </p>
       <p><span>Blog Content:</span> </p>
       <p style="white-space: ">{{ blog.content }}</p>
       <p><span>Blog Categories: </span></p>
       <ul>
           <li v-for="category in blog.categories" :key="category">{{ category }}</li>
       </ul>
       <p><span> Author: </span></p>
       <p>{{ blog.author }} </p>
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
            this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function(){
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
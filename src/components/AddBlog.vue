<template>
<div id="new-blog">

    <div id="add-blog">
        <form v-if="!submitted">
            <h1>What's on your mind?</h1>

            <input id="blog-title" v-model.lazy="blog.title" placeholder="Blog Title" required>

            <textarea id="blog-content" v-model.lazy="blog.content" placeholder="Blog Content"/>

            <div id="checkboxes">
                <p>Blog Categories:</p>
                <label>Ninjas</label>
                <input class="red-chkbox" type="checkbox" v-model="blog.categories" value="ninjas">
                <label>Wizards</label>
                <input class="red-chkbox" type="checkbox" v-model="blog.categories" value="wizards">
                <label>Mario</label>
                <input class="red-chkbox" type="checkbox" v-model="blog.categories" value="mario">
                <label>Cheese</label>
                <input class="red-chkbox" type="checkbox" v-model="blog.categories" value="cheese">
            </div>

            <label id="blog-author">Author: </label>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{ author }}</option>
            </select>

            <br>
            <button id="add-btn" @click.prevent="post">Add Blog</button>
        </form>

        <div v-if="submitted">
            <h1>Ey, thanks for posting!</h1>
        </div>

        <hr>
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
    #new-blog {
        display: flex;
        flex-flow: column;
    }

    form, #add-blog {
        color: white;
        display: flex;
        flex-flow: column;
        margin: 0 auto;
    }

    form {
        max-width: 100%;
        font-size: 20px;
    }

    hr {
        margin-top: 20px;
        width: 50%;
    }

    #add-blog input, select, button, p, textarea{
        border-radius: 20px;
        margin: 10px;
        padding: 10px;
        border: none;
    }

    #checkboxes {
        margin-bottom: 20px;
    }

    #blog-title {
        color: #0C2D48;
    }

    #blog-content {
        height: 90px;
        word-wrap: break-all;
        color: #0C2D48;
        max-width: 750px;
        max-height: 200px;
    }

    #add-btn {
        width: 30%;
        margin: 0 auto;
        background-color: #DB1F48;
        color: white;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #0C2D48;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }

</style>

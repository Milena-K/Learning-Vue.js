<template>
<div class="grid">
    <vs-row class="mh" align="center" justify="space-around" direction="column">

        <vs-input
            warn
            v-model="search"
            placeholder="Search" />

        <vs-col
            v-for="blog in filteredBlogs"
            :key="blog.id"
            style="margin: 20px;"
            w="2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">

            <router-link
                :to="'/blog/' + blog.id"
                style="text-decoration: none; color: inherit;">
                <vs-card color="primary" type="3">
                    <template #title>
                    <h3>{{ blog.title }}</h3>
                    </template>
                    <template #img>
                    <img src="../assets/strawberry.png" alt="">
                    </template>
                    <template #text>
                    <p>{{ blog.content | snippet }}</p>
                    </template>
                </vs-card>
            </router-link>

        </vs-col>
    </vs-row>
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
            return value.slice(0,50) + '...'
        }
    },
    mixins: [
        SearchMixin

    ]
}
</script>

<style>
</style>

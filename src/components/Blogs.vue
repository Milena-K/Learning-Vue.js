<template>
<div class="grid">

    <vs-input
        warn
        v-model="search"
        style="margin: 40px 0 40px 75px;"
        placeholder="Search" />

    <vs-row class="mh" align="center" justify="space-around" direction="row">

        <vs-col
            v-for="blog in filteredBlogs"
            :key="blog.id"
            style="margin: 20px;"
            w="2">

            <router-link
                :to="'/blog/' + blog.id"
                style="text-decoration: none; color: inherit;">
                <vs-card color="primary" type="3">
                    <template #title>
                    <h3>{{ blog.title | snippet }}</h3>
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
            if ( value.length >= 50 )
                return value.slice(0,50) + '...'
            return value;
        }
    },
    mixins: [
        SearchMixin

    ]
}
</script>

<style>
#banner {
    display: flex;
    position: relative;
    flex-basis: content;
}

#banner img {
    width: 100%;
    border-radius: 20px;
}

</style>

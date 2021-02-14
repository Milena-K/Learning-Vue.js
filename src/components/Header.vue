<template>

<div class="center">
    <vs-navbar color="#5428AB" text-white center-collapsed v-model="active" shadow shadowScroll>
        <vs-navbar-item to="/" exact :active="active == 'Blogs'" id="Blogs">
            Blogs
        </vs-navbar-item>
        <vs-navbar-item to="/add" exact :active="active == 'New Blog'" id="New Blog">
           New Blog
        </vs-navbar-item>
    </vs-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: 'Blogs'
        }
    }
}
</script>

<style scoped>
a:-webkit-any-link {
    text-decoration: none;
}
button {
    margin: 10px;
    font-size: 25px;
}
</style>

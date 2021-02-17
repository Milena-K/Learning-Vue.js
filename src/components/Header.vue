<template>

<div class="center">
    <vs-navbar color="#E5DDC8" center-collapsed square v-model="active" >
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

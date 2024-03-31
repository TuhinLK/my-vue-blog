<template>
  <div>
    <h1>Blog Home</h1>
    <BlogForm />

    <div class="blog-list">
      <BlogEntry v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { useBlogStore } from '../stores/blogStore'
import BlogEntry from '../components/BlogEntry.vue'
import BlogForm from '../components/BlogForm.vue'

export default {
  components: { BlogEntry, BlogForm },
  setup() {
    const blogStore = useBlogStore();
    const blogs = blogStore.blogs;

    return {blogs}
  }
}
</script>
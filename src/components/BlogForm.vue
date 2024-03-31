<template>
  <form @submit.prevent="addBlog">
    <input type="text" v-model="title" placeholder="Title">
    <textarea v-model="content" placeholder="Write your blog..."></textarea>
    <button type="submit">Post</button>
  </form>
</template>

<script>
import { useBlogStore } from '../stores/blogStore'
export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    addBlog() {
      const blogStore = useBlogStore();
      blogStore.addBlog(this.title, this.content);
      // Reset the form
      this.title = '';
      this.content = '';
    }
  }
}
</script>

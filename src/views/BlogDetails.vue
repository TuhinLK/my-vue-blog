<template>
  <div v-if="!isEditing">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.content }}</p>
    <button @click="editBlog">Edit</button>
    <button @click="deleteBlog">Delete</button>
  </div>
  <div v-else>
    <input type="text" v-model="editableTitle" />
    <textarea v-model="editableContent"></textarea>
    <button @click="saveChanges">Save</button>
    <button @click="isEditing = false">Cancel</button>
  </div>
</template>

<script>
import { useBlogStore } from '../stores/blogStore';
import { useRouter } from 'vue-router';
import { reactive, ref, watch } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const blogStore = useBlogStore();
    const router = useRouter();

    const blog = ref(null);
    const isEditing = ref(false);
    const editableTitle = ref('');
    const editableContent = ref('');

    watch(() => blogStore.blogs, (newBlogs) => {
      const foundBlog = newBlogs.find((blog) => blog.id === parseInt(props.id));
      if (foundBlog) {
        blog.value = foundBlog;
        editableTitle.value = foundBlog.title;
        editableContent.value = foundBlog.content;
      }
    }, { immediate: true });

    const editBlog = () => {
      isEditing.value = true;
    };

    const deleteBlog = () => {
      blogStore.deleteBlog(blog.value.id);
      router.push('/');
    };

    const saveChanges = () => {
      blogStore.updateBlog(blog.value.id, editableTitle.value, editableContent.value);
      isEditing.value = false;
    };

    return {
      blog,
      isEditing,
      editableTitle,
      editableContent,
      editBlog,
      deleteBlog,
      saveChanges,
    };
  },
};
</script>
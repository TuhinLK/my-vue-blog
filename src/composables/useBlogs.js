import { ref } from 'vue';

export function useBlogs() {
    const blogs = ref([
        // Your initial blogs data
    ]);

    const deleteBlog = (id) => {
        const index = blogs.value.findIndex((blog) => blog.id === id);
        if (index !== -1) {
            blogs.value.splice(index, 1);
        }
    };

    const updateBlog = (id, newTitle, newContent) => {
        const index = blogs.value.findIndex((blog) => blog.id === id);
        if (index !== -1) {
            blogs.value[index].title = newTitle;
            blogs.value[index].content = newContent;
        }
    };

    return {
        blogs,
        deleteBlog,
        updateBlog,
    };
}
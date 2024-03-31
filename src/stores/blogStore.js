import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: []
    }),
    actions: {
        addBlog(title, content) {
            this.blogs.push({
                id: Date.now(), // Placeholder ID (In a real app, you'd fetch this from an API)
                title,
                content
            })
        },
        deleteBlog(id) {
            const index = this.blogs.findIndex((blog) => blog.id === id);
            if (index !== -1) {
                this.blogs.splice(index, 1);
            }
        },
        updateBlog(id, newTitle, newContent) {
            const index = this.blogs.findIndex((blog) => blog.id === id);
            if (index !== -1) {
                const updatedBlog = {
                    ...this.blogs[index],
                    title: newTitle,
                    content: newContent
                };
                this.blogs.splice(index, 1, updatedBlog);
            }
        }    }
})
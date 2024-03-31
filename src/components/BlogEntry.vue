<template>
  <div class="blog-entry">
    <h3>{{ blog.title }}</h3>
    <p>{{ blog.content.substring(0, 150) }}...
      <router-link :to="'/blog/' + blog.id">See More</router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>

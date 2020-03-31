<template>
<div class="container">
    <h1>REPORT</h1>
    <section class="index">
        <card class="card" v-for="post in posts"
            v-bind:key="post.fields.slug"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :headerImage="post.fields.headerImage"
            :publishedAt="post.fields.publishedAt"/>
    </section>
</div>

</template>

<script>
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
    components: {
        Card
    },
    layout: 'default',
    async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt',
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 50%;
    }
}   



.container {
    margin: 0 auto;
    padding: 4rem 0;
    h1 {
        font-size: 64px;
        font-weight: 800;
        margin-bottom: 2rem;
    }
}

@media (min-width: 1200px){
    .container {
        max-width: 1140px;
    }
}

@media (min-width: 992px){
.container {
    max-width: 960px;
}
}

</style>
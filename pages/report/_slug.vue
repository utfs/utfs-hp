<template>
  <section class="slug">
    <p class="type">REPORT</p>
    <p class="slug__date">
      {{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}
    </p>
    <h1 class="slug__title">{{ post.fields.title }}</h1>
    <img class="slug__image" v-bind:src="post.fields.headerImage.fields.file.url"/>
    <div class="slug__body" v-html="$md.render(post.fields.body)"></div>
  </section>
</template>
<script>

import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
  transition: 'slide-left',
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)
  }
}
</script>
<style lang="scss" scoped>
.slug {
    margin: 0 auto;
    .type {
        font-size: 64px;
        font-weight: 800;
    }
    &__date {
        font-size: 1.15rem;
        line-height: 180%;
        font-weight: bold;
    }
    &__title {
        text-align: left;
        font-weight: bolder;
        font-size: 24px;
        line-height: 160%;
        font-size: 2.5rem;
        margin-top: 0;
        margin-bottom: 2rem;
    }
    &__date {
        font-size: 1.0rem;
        color: rgb(57, 72, 85);
        text-align: right;
    }
    &__image {
        margin-bottom: 2rem;
        object-fit: cover;
        width: 100%;
        max-height: 400px;
    }
    &__body {
        margin-bottom: 4rem;
    }
}


@media (min-width: 1200px){
    .slug {
        max-width: 1140px;
    }
}

@media (min-width: 992px){
    .slug {
    max-width: 960px;
    }
}
</style>
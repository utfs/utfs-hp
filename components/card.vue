<template>
  <article class="card">
    <nuxt-link v-bind:to="'/report/' + slug" class="wrapper">
        <div>
            <img class="card_image" v-bind:src="headerImage.fields.file.url"/>
            <p class="card_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
            <h2 class="card_title">{{ title }}</h2>
        </div>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  props: ['title', 'slug', 'headerImage', 'publishedAt']
}
</script>
<style lang="scss" scoped>
.card {
  padding: 10px 20px;
  margin: 10px 10px;
  text-align: center;
}
.wrapper {
  text-decoration: none;
  &>div {
    margin-bottom: 2rem;
  }
  transition: opacity .3s;
  &:hover {
      opacity: .7;
  }
}
.card_title {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: left;
    line-height: 200%;
    letter-spacing: .1rem;

}
.card_date {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 200%;
    letter-spacing: .1rem;
}
.card_image {
    display: block;
    height: 250px;
    width: 100%;
    background-color: #999;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 8px;
    object-fit: cover;
  transition: opacity .3s;
  &:hover {
      opacity: .7;
  }
}
</style>
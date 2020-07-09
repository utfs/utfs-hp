<template>
    <div>
        <nuxt-link v-if="!isExternal" class="button" :to="to">{{content}}<i class="el-icon-arrow-right"></i> </nuxt-link>
        <a class="anchor" target="blank" v-if="isExternal" :href="to">{{content}}</a>
    </div>
</template>
<script>
export default {
    props: {
        isExternal: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    display: inline-block;
    // background-color: #090C9B;
    border: 2px solid #090C9B;
    color: #090C9B;
    text-decoration: none;
    padding: 1rem 4rem;
    font-size: 1.25rem;
    font-weight: 600;
    // border-radius: 1.625rem;
    margin-bottom: 2rem;
    transition: all .3s ;
    &:hover {
      // opacity: .7;
      background-color:#090C9B;
      color: white;
    }
}

.anchor {
    display: inline-block;
    // border: 2px solid #090C9B;
    color: white;
    background-color: #090C9B;
    text-decoration: none;
    padding: 1rem 4rem;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2rem;
    transition: opacity .3s ;
    &:hover {
      opacity: .7;
    }
}

@media screen and (max-width:924px) {
    .anchor {
        padding: 1rem;
    }
}
</style>
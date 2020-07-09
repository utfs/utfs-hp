
<template>
    <div class="join">
        <h1>JOIN US</h1>
        <section class="container ">
            <h2 class="container__title">Recruit</h2>
            <h3 class="container__subtitle">新歓情報</h3>
            <p class="container__description">東大金融研究会は、通年で新しいメンバーを求めています。お気軽にご連絡ください。</p>
            <p class="container__description">2020年度の新歓は説明会を行う予定ですが、Covid-19の感染拡大の影響で予定は未定です。</p>
        </section>
        <section class="container ">
            <h2 class="container__title">Wanted</h2>
            <h3 class="container__subtitle">こんな人を求めています</h3>
            <p class="container__description">
                東大金融研究会は、下の例にあげられるような積極的な人材を募集しています。ただ、下に挙げられたような思いがなくても、東大金融研究会には様々なメンバーがいます。
            </p>
            <ul>
                <li>金融の知識を付けたい方</li>
                <li>事業立ち上げを行いたい方</li>
                <li>学内の活動では得られない人脈を築きたい方</li>
                <li>在学中にビジネス経験を得たい方</li>
            </ul>
        </section>
        <section class="container"> 
            <h2 class="container__title">Access</h2>
            <h3 class="container__subtitle">連絡方法</h3>
            <p class="container__description">
                詳しい新歓情報は公式Line@にて連絡しています。少しでも興味を持った方は下にご連絡ください。
            </p>
            <img class="container__qr" src="~/assets/images/line-qr.jpg" alt="">
            <the-button
                to="https://line.me/R/ti/p/%40893brbzj"
                :isExternal="true"
                content="詳しい情報はこちら"
            ></the-button>
        </section>
    </div>
</template> 
<script>
import Meta from '~/assets/mixins/meta' // ←追加
import TheButton from '~/components/theButton.vue'
export default {
    mixins: [Meta],
    data () {
        return {
        meta: {
            title: 'About',
            description: '東大金融研究会の団体説明です。',
            type: 'article',
            url: 'https://utfs.club/about',
        },
        }
    },
    components: {
        TheButton
    }
    
}
</script>
<style lang="scss" scoped>
.join {
    padding: 4rem 8rem;
    h1 {
        font-size: 64px;
        font-weight: 800;
    }
    .container {
        padding: 4rem 10rem; 
        &__title {
            color: #090C9B;
            font-size: 3rem;
            font-weight: bold;
            letter-spacing: .25rem;
            margin-bottom: 1rem;
        }
        &__subtitle {
            color: #9F9FA3;
            font-size: 1.25rem;
            margin-bottom: 4rem;
            
        }
        &__description {
            font-weight: bold;
            margin-bottom: 2rem;
            color: #2C2A54;
        }
        &__qr {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
            height: auto;
        }
        ul, ol {
        color: #090C9B;/*文字色*/
        border: dashed 2px #090C9B;/*破線 太さ 色*/
        background: #f1f8ff; /*背景色*/
        padding: 0.5em 0.5em 0.5em 2em;
        }

        ul li, ol li {
        line-height: 1.25;
        font-weight: 600;
        padding: 0.5em 0;
        text-align: left;

        }
    }

}


@media screen and (max-width: 924px) {
  .join {
    padding: 4rem 0;
    .container {
        padding: 2rem 1rem;
        &__title {
            letter-spacing: 0;
        }
    }
  }
}



</style>
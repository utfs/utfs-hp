<template>
    <div class="about">
        <h1>ABOUT</h1>
        <section class="container ">
            <h2 class="container__title">About Us</h2>
            <h3 class="container__subtitle">私たちについて</h3>
            <p class="container__description">東大金融研究会は、各分野で将来の日本を支える人財を生み出すことを目的に、実践的に金融・ビジネスを学ぶ学生団体です。</p>
            <p class="container__description">これまでの活動としては、実際に証券会社の方々を招いた実践的な投資の勉強会、ベンチャーから大手企業まで訪問しCEOや幹部の方々とのディスカッション、さらには文化面においてもスポーツ選手から俳優・タレントによる講演など幅広く行ってきました。</p>
            <p class="container__description">さらに、意欲的な人にはインターンや事業立ち上げの経験を通じてより実践的な活動の場が与えられ、得た知識のアウトプットをすることができます。</p>
        </section>
        <section class="container ">
            <h2 class="container__title">Activities</h2>
            <h3 class="container__subtitle">活動内容</h3>
            <p class="container__description">東大金融研究会では、月2回程度の勉強会や各分野の専門家を呼んだ講演会、ケーススタディを通して、金融・財務・ビジネスの実践的な知識をつけて行きます。</p>
            <h3 class="container__category">①金融勉強会</h3>
            <p class="container__description">実際に証券会社などで働く金融のプロの方々を招いたクローズドな投資の勉強会を定期的に行います。そこで得た知見を生かしてグループで銘柄選択をするケーススタディを行うなど、専門的で実践的な金融の知識がつきます。</p>
            <h3 class="container__category">②多様な専門家を呼んだ勉強会</h3>
            <p class="container__description">金融に留まらず、東大金融研究会では、ビジネスやスポーツ、芸能界で活躍する様々な専門家を呼んだ講演会や勉強会を開催します。多様な強みを持つ専門家との関わりから様々な分野で活躍する人材を生み出します。</p>
        </section>
        <section class="container">
            <h2 class="container__title">Organization</h2>
            <h3 class="container__subtitle">団体情報</h3>
            <table class="table">
                <tr>
                    <th>団体</th>
                    <td>東大金融研究会</td>
                </tr>
                <tr>
                    <th>設立</th>
                    <td>２０２０年２月</td>
                </tr>
                <tr>
                    <th>代表者</th>
                    <td>大塚健太郎</td>
                </tr>
                <tr>
                    <th>顧問</th>
                    <td>伊藤潤一（元Goldman Sachs）</td>
                </tr>
               <tr>
                    <th>所属人数</th>
                    <td>約３０人</td>
                </tr>
            </table>
        </section>
    </div>
</template> 

<script>
import Meta from '~/assets/mixins/meta' // ←追加
export default {
  mixins: [Meta], // ←追加
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
}
</script>

<style lang="scss" scoped>
.about {
    padding: 4rem 8rem;
    h1 {
        font-size: 64px;
        font-weight: 800;
    }
    .container {
        padding: 4rem 10rem; 
        &__title {
            color: #1a1ae2;
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
        &__category {
            color: black;
            font-size: 1.25rem;
            line-height: 200%;
            margin-bottom: 1rem;
            font-weight: 700;
            text-align: left;
        }
        &__description {
            font-weight: bold;
            margin-bottom: 2rem;
        }
    }
    .table {
    width: 100%;
        th, td {
            border: 1px solid #ccc;
            padding: 20px;
        }
        th {
            font-weight: bold;
            background-color: #dedede; 
        }
    }

}

@media screen and (max-width: 924px) {
  .about {
    padding: 4rem 0;
    .container {
        padding: 2rem 1rem;
        &__title {
            letter-spacing: 0;
        }
        .table {
                th, td {
                    padding: .75rem;
                    text-align: left;
                }
            }
    }
  }
}



</style>
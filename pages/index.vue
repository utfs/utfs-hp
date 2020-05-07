<template>
  <div class="container">
    <div>
      <div class="first-view">
        <div class="first-view__title">
        <!-- <h2>東大金融研究会</h2> -->
            <img src="~/assets/images/logo-white.png" alt="">
          <h3>将来の日本を支える人材を生み出す学生プラットフォーム</h3>
        </div>
        <img src="~/assets/images/hp-first-view-min.png" alt="">
      </div>
      <div class="introduction">
        <p>金融は、経済の血流とも言えるもの<br>東大金融研究会は、金融を学ぶことを通じて将来の日本経済を担う人材を生み出していきます</p>
      </div>
      <section class="about">
        <h2 class="about__title">About Us</h2>
        <h3 class="about__subtitle">私たちについて</h3>
        <p class="about__description">東大金融研究会は、各分野で将来の日本を支える人財を生み出すことを目的に、実践的に金融・ビジネスを学ぶ学生団体です。<br><br>これまでの活動としては、実際に証券会社の方々を招いた実践的な投資の勉強会、ベンチャーから大手企業まで訪問しCEOや幹部の方々とのディスカッション、さらには文化面においてもスポーツ選手から俳優・タレントによる講演など幅広く行ってきました。</p>
        <div >
          <!-- <nuxt-link class="about__button" to="/about">組織概要はこちら<i class="el-icon-arrow-right"></i> </nuxt-link> -->
          <the-button
            to="/about"
            content="組織概要はこちら"
            class="the-button"
          ></the-button>
        </div>
      </section>
      <section class="activity">
        <div class="activity__inner">
          <h2 class="activity__title">Activity</h2>
          <p class="activity__description">東大金融研究会では、月2回程度の勉強会や各分野の専門家を呼んだ講演会、ケーススタディを通して、金融・財務・ビジネスの実践的な知識をつけて行きます。</p>
          <div class="activity__wrapper">
            <div class="activity__card">
              <img src="~/assets/images/activity2.jpg" alt="" >
              <h3>金融アクティビティ</h3>
              <p>実際に証券会社などで働く金融のプロの方々を招いたクローズドな投資の勉強会や発表会を定期的に行います</p>
            </div>
          <div class="activity__card">
              <img src="~/assets/images/activity1.jpg" alt="" >
              <h3>幅広い専門家を招いた勉強会</h3>
              <p>ビジネスやスポーツ、芸能界で活躍する様々な専門家を呼んだ講演会や勉強会を開催します</p>
            </div>
          </div>
          <nuxt-link class="activity__link" to="report">＞詳しい活動レポートはこちら</nuxt-link>
        </div>
      </section>
      <section class="about">
        <h2 class="about__title">Join</h2>
        <h3 class="about__subtitle">新歓情報</h3>
        <p class="about__description">
          現在新会員を積極的に募集しています。
          <br><br>
          新規募集説明会などを予定しておりますので、Line@に登録して情報をおまちください。
        </p>
        <the-button
          to="/join"
          content="新歓情報はこちら"
          class="the-button"
        ></the-button>
        <div>
          <!-- <nuxt-link class="about__button" to="/about">新歓情報はこちら<i class="el-icon-arrow-right"></i> </nuxt-link> -->
        </div>
      </section>
      <section class="contact">
        <div class="contact__wrapper">
          <h2 class="contact__title">Contact</h2>
          <h3 class="contact__subtitle">お問い合わせ</h3>
          <img src="~/assets/images/ic_contact.png" alt="">
          <p class="contact__description">研究会に対するお問い合わせはこちらからお願いします。<br>（新歓情報に関しては、「Join」ページからご参照ください。）<br>また、当会のTwitterのフォローもお願いします</p>
          <!-- <a class="contact__form-link" href="">お問い合わせはこちら</a> -->
          <the-button
            to="https://forms.gle/34gZ337DdRNCNP1K9"
            :isExternal="true"
            content="お問い合わせはこちら"
          ></the-button>
          <a target="blank" class="contact__twitter-link" href="https://twitter.com/ut_fin_society" >
            <img src="~/assets/images/ic_twitter.png" alt="">
          </a>
        </div>
      </section>
      
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TheButton from '~/components/theButton.vue'

export default {
  components: {
    Logo,
    TheButton
  },
  layout: 'default',
  head () {
  return {
    titleTemplate: null,
    title: '東大金融研究会公式HP',
  }
},
}
</script>

<style lang="scss" scoped>



section {
  padding: 4rem;
}

.the-button {
  margin-bottom: 2rem;
}

.first-view {
  width: 100vw;
  height: 720px;
  &__title {
    position: absolute;
    color: white;
    top: 50%;
    left: 15%;
    text-align: left;
    &>img {
      height: 4rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 3rem;
      line-height: 6rem;
    }
    h3 {
      font-size: 1.5rem;
      letter-spacing: 4px;
    }
  }
  &>img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.introduction {
  padding: 40px 40px;
  background-color: #F5F2F2;
  p {
    color: dimgray;
    text-align: center;
    font-size: 1rem;
    line-height: 32px;
  }
}
.about {
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
  }
  &__description {
    padding: 4rem 20%;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &__button {
    display: inline-block;
    // background-color: #1a1ae2;
    border: 2px solid #1a1ae2;
    color: #1a1ae2;
    text-decoration: none;
    padding: 1.5rem 4rem;
    font-size: 1.25rem;
    font-weight: 600;
    // border-radius: 1.625rem;
    margin-bottom: 2rem;
    transition: all .3s ;
    margin-bottom: 2rem;
    &:hover {
      // opacity: .7;
      background-color:#1a1ae2;
      color: white;
    }
  }

}

.activity {
  background-color: white;
  position: relative;
  overflow: hidden;
  padding: 80px 0;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 80%;
    margin: 3% -10% 0;
    background: #1a1ae2;
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 80%;
    margin: 3% -10% 0;
    // background: #df6209;
    background-color: #CE2D4F;
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    z-index: -2;
  }
  &__inner {
    box-sizing: boder-box;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 100px 12rem 120px;
    color: #fff;
    text-align: center;
  }
  &__title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }
  &__description {
  padding: 4rem 20%;
  color: white;
  }
  &__wrapper {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
  }
  &__card {
      width: 48%;
    img {
      height: 240px;
      object-fit: cover;
      width: 80%;
      border-radius: 2rem;
      margin-bottom: 1rem;
    }
    h3 {
      color: white;
      font-size: 1.125rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      color: white;
      padding: 0 10%;
      font-size: 1rem;
    }
  }
  &__link {
    text-decoration: underline;
    float: right;
    color: white;
  }
}

.contact {
  padding: 4rem 20% 8rem;
  &__wrapper {
    padding: 2rem;
      background-color: #F5F2F2;
    border-radius: 1rem;
    &>img {
    width: 120px;
    height: 120px;
  }
  }
  &__title {
    color: #1a1ae2;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &__subtitle {
    color: #9F9FA3;
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  &__description {
    padding: 2rem 4rem;
    text-align: center;
  }

  &__form-link {
    display: inline-block;
    border: 2px solid #1a1ae2;
    color: #1a1ae2;
    text-decoration: none;
    padding: .75rem 4rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 1.25rem;
    margin-bottom: 2rem;
    transition: opacity .3s ;
    &:hover {
      opacity: .7;
    }
  }
  &__twitter-link {
    cursor: pointer;
    display: block;
    transition: opacity .3s;
    &:hover {
      opacity: .7;
    }
    img {
      height: 50px;
      width: 50px;
      border-radius: 30px;
    }
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media screen and (max-width: 924px) {
  section {
    padding: 4rem 0;
  }
  .first-view {
    &__title {
      padding: 0 20px;
      width: 100%;
      left: 0;
      top: 40%;
      h3 {
        line-height: 200%;
      }
      img {
        height: inherit;
        width: 100%;
      }
    }
  }
  .about {
    &__description {
      padding: 40px 20px;
    }
  }
  .activity {
    &::before {
      width: 110%;
      height: 90%;
      transform: rotate(5deg);
    }
    &::after {
      width: 110%;
      height: 90%;
      transform: rotate(-5deg);

    }
    &__inner {
      padding: 100px 10px 120px;
    }
    &__description {
      padding: 40px 20px;
    }
    &__wrapper {
      flex-direction: column;
      padding: 2rem 20px;
    }
    &__card {
      width: 100%;
      margin-bottom: 1rem;
      img {
        height: 180px;
        width: 100%;
      }
      p {
        padding: 0;
      }
    }
  }
  .contact {
    padding: 4rem 0;
    &__description {
      padding: 2rem 0;
      text-align: left;
    }
    &__form-link {
      padding: .75rem 1rem;
    }
  }
}

</style>

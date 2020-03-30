<template>
  <div class="container">
    <div>
      <div class="first-view">
        <div class="first-view__title">
        <!-- <h2>東大金融研究会</h2> -->
            <img src="~/assets/images/logo-white.png" alt="">
          <h3>将来の日本を支える人材を生み出す学生プラットフォーム</h3>
        </div>
        <img src="~/assets/images/hp-first-view.png" alt="">
      </div>
      <div class="introduction">
        <p>金融は、経済の血流とも言えるもの<br>東大金融研究会は、金融を学ぶことを通じて将来の日本経済を担う人材を生み出していきます</p>
      </div>
      <section class="about">
        <h2 class="about__title">About</h2>
        <p class="about__description">東大金融研究会は、各分野で将来の日本を支える人財を生み出すことを目的に、実践的に金融・ビジネスを学ぶ学生団体です。<br><br>これまでの活動としては、実際に証券会社の方々を招いた実践的な投資の勉強会、ベンチャーから大手企業まで訪問しCEOや幹部の方々とのディスカッション、さらには文化面においてもスポーツ選手から俳優・タレントによる講演など幅広く行ってきました。<br><br>さらに、意欲的な人にはインターンや事業立ち上げの経験を通じてより実践的な活動の場が与えられ、得た知識のアウトプットをすることができます。</p>
        <div style="height: 42px">
          <nuxt-link class="about__button" to="/about">More +</nuxt-link>
        </div>
      </section>
      <section class="activity">
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
      </section>
      <section class="contact">
        <div class="contact__wrapper">
          <h2 class="contact__title">Contact</h2>
          <img src="~/assets/images/ic_contact.png" alt="">
          <p class="contact__description">研究会に対するお問い合わせはこちらからお願いします。<br>また、当会のTwitterのフォローもお願いします</p>
          <a class="contact__form-link" href="">お問い合わせはこちら</a>
          <a class="contact__twitter-link" >
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

export default {
  components: {
    Logo
  },
  layout: 'default'
}
</script>

<style lang="scss">

section {
  padding: 4rem;
}

.first-view {
  width: 100vw;
  height: 640px;
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
  }
}

.introduction {
  padding: 20px 40px;
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
    color: #3535D5;
    font-size: 40px;
    font-weight: bold;
  }
  &__description {
    padding: 40px 20%;
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
  }
  &__button {
    display: inline-block;
    background-color: #3535D5;
    color: white;
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

}

.activity {
  background-color: #3535D5;
  &__title {
    color: white;
    font-size: 40px;
    font-weight: bold;
  }
  &__description {
  padding: 40px 20%;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  color: white;
  }
  &__wrapper {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 4rem;
  }
  &__card {
      width: 40%;
      border-radius: 1rem;
    img {
      height: 280px;
      object-fit: cover;
      width: 80%;
      border-radius: 1rem;
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
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0 10%;
      text-align: left;
    }
  }
}

.contact {
  padding: 4rem 20%;
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
    color: #3535D5;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  &__description {
    padding: 2rem 4rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &__form-link {
    display: inline-block;
    border: 2px solid #3535D5;
    color: #3535D5;
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
</style>

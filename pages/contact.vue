<template>
  <section class="contact-container">
    <template v-if="!finished">
      <div class="title-container">
            <h2 class="title-container__title">Contact</h2>
            <h3 class="title-container__subtitle">お問い合わせ</h3>    
      </div>
      <p class="center-text">加入についてのお問い合わせは<nuxt-link clas="center-text__anchor" to="/join">こちら</nuxt-link></p>
      <form class="form" name="contact" method="POST" data-netlify="true" @submit.prevent>
        <div class="field">
          <label class="field__label">
            お名前
            <span>必須</span>
          </label>
          <el-input placeholder="山田　太郎" v-model="form.name" type="text" name="name" />
          <transition appear>

            <p v-if="message.name" class="message">{{message.name}}</p>
            <p v-else class="message-empty"></p>
          </transition>
        </div>
        <div>
          <label class="field__label">
            メールアドレス
            <span>必須</span>
          </label>
          <el-input placeholder="info@palledad.com" v-model="form.email" type="email" name="email" />
          <p v-if="message.email" class="message">{{message.email}}</p>
          <p v-else class="message-empty"></p>
        </div>
        <div>
          <label class="field__label">
            電話番号
          </label>
          <el-input placeholder="0311111111" v-model="form.tel" type="number" name="tel" />
          <p v-if="message.tel" class="message">{{message.tel}}</p>
          <p v-else class="message-empty"></p>
        </div>
        <div>
          <label class="field__label">
            所属
          </label>
          <el-input placeholder="株式会社パルダッド" v-model="form.company" type="text" name="company" />
          <p v-if="message.company" class="message">{{message.company}}</p>
          <p v-else class="message-empty"></p>
        </div>
        <div>
          <label class="field__label">
            件名
            <span>必須</span>
          </label>
            <el-input placeholder="お問い合わせ件名" v-model="form.title" type="text" name="title" />
          <p v-if="message.title" class="message">{{message.title}}</p>
          <p v-else class="message-empty"></p>
        </div>
        <div>
          <label class="field__label">
            お問い合わせ内容
            <span>必須</span>
          </label>
          <el-input type="textarea" :rows="10" id="form-content" v-model="form.content" name="content" />
          <p class="space"></p>
          <p v-if="message.content" class="message">{{message.content}}</p>
          <p v-else class="message-empty"></p>
        </div>
        <div v-show="false">
            <label for="message">スパムでない場合は空欄</label>
            <input type="text" name="bot-field" v-model="botField"/>
        </div>
        <p class="cta-button-container">
          <button class="cta-button" @click="handleSubmit" v-text="'送信'" />
        </p>
      </form>
    </template>
    <template v-else>
      <p v-text="'お問い合わせ頂きありがとうございました。'" />
      <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
    </template>
  </section>
</template>
<script>
import axios from 'axios';
import Meta from '~/assets/mixins/meta' // ←追加
export default {
  mixins: [Meta], // ←追加
  data() {
    return {
      form: {
        name: '',
        email: '',
        content: '',
        tel: '',
        title: '',
        company: '',
        botField : '',
      },
      message : {
        name: '',
        email: '',
        tel: '',
        company: '',
        title: '',
        content: ''
      },
      finished: false,
      meta: {
        title: 'CONTACT（お問い合わせ）',
        description: '株式会社PalledAd（パルダッド）のお問い合わせページです。',
        type: 'article',
        url: 'https://palledad.com/contact',
      },
    }
  },
  computed: {
  },
  methods: {
    validateEmail(){
      let reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      return reg.test(this.form.email);
    },
    validateTel(){
      let reg = /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/;
      return reg.test(this.form.tel);
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      let isMessage = false;
      this.message.name = "";
      this.message.email = "";
      this.message.tel = "";
      this.message.company = "";
      this.message.title = "";
      this.message.content = "";
      this.message.title = "";
      if (this.form.name === ""){
        this.message.name = "お名前を記入して下さい"
        isMessage = true;
      }
     if (this.form.tel === ""){
        // this.message.tel = "電話番号を記入して下さい"
        // isMessage = true;
      } else if (!this.validateTel()) {
        this.message.tel = "電話番号が不適切な形態です"
        isMessage = true;
      }
      if (this.form.email === ""){
        this.message.email = "メールアドレスを記入して下さい"
        isMessage = true;
      } else if (!this.validateEmail()) {
        this.message.email = "メールアドレスが不適切な形態です"
        isMessage = true;
      }
      if (this.form.company === ""){
        // this.message.company = "会社名を記入して下さい"
        // isMessage = true;
      }
      if (this.form.title === ""){
        this.message.title = "件名を記入して下さい"
        isMessage = true;
      }
      if (this.form.content = ""){
        this.message.content = "お問い合わせ内容を記入して下さい"
        isMessage = true;
      }
      if (isMessage === false ){
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        axios
          .post(
            '/',
            this.encode({
              'form-name': 'contact',
              ...this.form
            }),
            axiosConfig
          )
          .then(() => {
            this.finished = true
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
.space {
  height: 8px;
}
.el-input {
  height: 48px;
  &__inner {
    &:focus {
      border-color: #090C9B !important;
    }
    height: 64px;
    line-height: 64px;
  }
}
.message {
  height: 2rem;
  border: 1px #ea7e7e solid;
  background-color: #ffe1e6;
  color: #da4a4a;
  padding: .5rem 1rem;
  font-size: .75rem;
  line-height: 1rem;
}
.message-empty {
  height: 2rem;
}
.title-container {
    padding: 2rem 0;
    text-align: center;
    &__title {
        color: #090C9B;
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: .25rem;
        margin-bottom: 1rem;
    }
    &__subtitle{
        color: #9F9FA3;
        font-size: 1.25rem;
        margin-bottom: 4rem;
    }
    img {
        margin-bottom: 1rem;
    }
    &__sub {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;

    }
}
.contact-container {
  padding: 64px;
  text-align: center;
}
.center-text {
  text-align: center;
  margin-bottom: 2rem;
  &__anchor {
      color: #090C9B;
  }
}
label {
  text-align: left;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  line-height: 1.25rem;
  span {
    margin-left: .5rem;
    background-color: #E01D52;
    color: white;
    font-size: .75rem;
    padding: .25rem .375rem;
  }
}
.form {
  width: 540px;
  margin: auto;
}
.field {
  &__label {
  display: block;
  }
  &__input {
    width: 540px;
    height: 64px;
    border-color: lightgrey;
    border-radius: 4px;
    font-size: 2rem;
    line-height: 40px;
    &[type="text"]:focus {
      border-color: red;
    }
  }
}
.cta-button-container {
  margin-top: 4rem;
  text-align: center;
}
.cta-button {
  cursor: pointer;
  border: 1px #090C9B solid;
  width: 180px;
  height: 48px;
  font-size: 1rem;
  font-weight: 800;
  color: #090C9B;
  border-radius: 32px;
  transition: all .2s;
  &:hover {
    color: white;
    background-color: #090C9B;
  }
}
@media screen and ( max-width: 900px ) {
  .form {
    width: 100%;
  }
  .contact-container {
    padding: 2rem 1rem;
  }
}
</style>
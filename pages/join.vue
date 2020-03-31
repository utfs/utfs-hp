
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
            <p class="container__description">・金融の知識を付けたい方</p>
            <p class="container__description">・事業立ち上げを行いたい方</p>
            <p class="container__description">・人脈を築きたい方</p>
        </section>
    </div>
</template> 
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


</style>
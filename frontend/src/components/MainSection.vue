<template>
    <main class="main">
        <h1>Мой Дневничок</h1>
        <ul class="board_cards"> 
            <CardDiary v-for="(card, index) in cardsData"
            :key="card.id"
            :title="card.title"
            :text="card.body"
            :index="index"
            :date="card.date"
            /> 
        </ul>
    </main>
</template>

<script>
import  CardDiary from "@/components/CardDiary.vue";
    
export default {
    components: {
        CardDiary
    },
    data () {
        return {
            testData: [
        { id: 1, title: 'testTitle1', text: 'testText', date: new Date},
        { id: 2, title: 'testTitle2', text: 'testText2', date: new Date},
    ]
        }
    },
    props: {
        cardsData: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
.main {
border-radius: 80px 80px 0px 0px;
background: var(--grey, #F6F6F6);
max-width: $maxWidth;
}
.board_cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
}
@media screen and (max-width: $tablet) {
    .board_cards{
        grid-template-columns: 1fr 1fr;
        gap: 30px;
  }
}
@media screen and (max-width: $mobile) {
    .board_cards{
       display: flex;
       width: 100%;
       flex-direction: column;
       gap: 20px;
  }
}

</style>
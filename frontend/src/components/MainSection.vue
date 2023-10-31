<template>
    <main class="main">
        <h1>Мой Дневничёк</h1>
        <ul class="board_cards"> 
            <CardDiary v-for="(card, index) in testData"
            :key="card.id"
            :title="card.title"
            :text="card.text"
            :date="card.date"
            :index="index"
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

</style>
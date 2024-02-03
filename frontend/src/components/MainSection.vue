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

</style>
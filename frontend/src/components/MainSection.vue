<template>
    <main class="main">
        <h1>Мой Дневничёк</h1>
        <ul> 
            <CardDiary /> 

        </ul>


    </main>
</template>

<script>
import  CardDiary from "@/components/CardDiary.vue";
export default {
    components: {
        CardDiary
    }
}
</script>
<style lang="scss" scoped>
.main {
border-radius: 80px 80px 0px 0px;
background: var(--grey, #F6F6F6);

}

</style>
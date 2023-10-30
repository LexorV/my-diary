<template>
    <li class="card">
        <h2 class="title">
            {{ title }}
        </h2>
        <p class="text">
            {{  text }}
        </p>

    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Загаловок"
        },
        text: {
            type: String,
            default: "Текст..."
        },
        date: {
            type: String,
            default: new Date 
        },
        index: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    height: 580px;
    width: 587px;
    border-radius: 20px;
    background-color: white;
    padding: 70px 40px 70px 30px;
}
.title {
    @extend %text-middle;
    font-size: 42px;
}
.text {
    @extend %text-small
}
.card:nth-child(1) {
    background-color: #050F28;
}


</style>
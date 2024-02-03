<template>
    <div class="overlay">
        <form class="modal" @submit.prevent="addRecording">
            <button @click="closeModal" type="button" class="close_button"> <img
                    src="@/assets/images/close-icon.svg"></button>
            <h3 class="title">Новая запись</h3>
            <div class="box_input">
                <BasicInput v-model:value="title" :value="title" />
                <BasicInput v-model:value="date" :value="date" title="Дата" inputType="datetime-local" />
            </div>
            <BasicTextarea v-model:value="text" :value="text" />

            <BasicButton text="ПОДЕЛИТСЯ НАБОЛЕВШИМ" type="submit" />
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios';
import BasicInput from '@/ui/BasicInput.vue'
import BasicButton from '@/ui/BasicButton.vue'
import BasicTextarea from '@/ui/BasicTextarea.vue'
import { API } from '@/constants/index.js'
export default {
    components: {
        BasicInput,
        BasicButton,
        BasicTextarea
    },
    props: {
        closeModal: {
            type: Function,
            default: () => { }
        },
        updateCards: {
            type: Function,
            default: () => { }
        }
    },
    setup() {
        const title = ref('')
        const text = re


    },
    data() {
        return {
            title: '',
            text: '',
            date: ''
        }
    },
    methods: {
        addRecording() {
            axios
                .post(`${API}/recording`,
                    {
                        title: this.title,
                        body: this.text,
                        date: this.date
                    })
                .then((res) => {
                    this.updateCards(res.data)
                    this.closeModal()
                })
                .catch(error => console.log(error))
        },
    },
}
</script>
<style lang="scss" scoped>
.overlay {
    top: 0;
    right: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgb(0, 0, 0, 0.5);
}

.title {
    text-align: left;
    margin: 0;
    font-size: 42px;
    @extend %text-middle
}

.close_button {
    background-color: initial;
    border: none;
    position: absolute;
    right: 34px;
    top: 27px;
    cursor: pointer;
}

.modal {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 44px;
    top: 10%;
    left: 25%;
    width: 1200px;
    height: 637px;
    background-color: white;
    opacity: 1;
    border-radius: 40px;
    z-index: 11;
    padding: 60px 40px;
}

.box_input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 42px;
    width: 100%;
}

.board_cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
}
</style>
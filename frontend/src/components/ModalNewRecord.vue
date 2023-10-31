<template>
    <div class="overlay">
        <form class="modal">
            <h3>Новая запись</h3>
            <div class="box_input">
                <BasicInput />
                <BasicInput />
            </div>
            <BasicTextarea />
            
            <BasicButton type="submit" />
        </form>
    </div>
  
</template>

<script>
import BasicInput from '@/ui/BasicInput.vue'
import BasicButton from '@/ui/BasicButton.vue'
import BasicTextarea from '@/ui/BasicTextarea.vue'

    
export default {
    components: {
        BasicInput,
        BasicButton,
        BasicTextarea
    },
   
    data () {
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
.modal {
    position: relative;
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
    display: flex;
    gap: 42px;
    width: 100%;
}
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
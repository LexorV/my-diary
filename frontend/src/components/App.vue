<template> 
    <HeaderMenu :openModal="switchModal"  />
    <MainSection :cardsData="recordings" />
    <ModalNewRecord :updateCards="updateCards" :closeModal="switchModal" v-if="modalOn" />
  <router-view />
</template>

<script>
import axios from 'axios';
import HeaderMenu from '@/components/HeaderMenu.vue'
import MainSection from '@/components/MainSection.vue'
import ModalNewRecord from '@/components/ModalNewRecord.vue'
import { API } from '@/constants/index.js'
export default {
  name: 'App',
  components: {
    HeaderMenu,
    MainSection,
    ModalNewRecord,
  },
  mounted () {
    axios
      .get(`${API}/recording`)
      .then(res => (this.updateCards(res.data)))
      .catch(error => console.log(error))
  },
  data () {
    return {
      modalOn: false,
      recordings: [],
    }
  },
  methods: {
    switchModal () {
      this.modalOn = !this.modalOn
    },
    updateCards (newCards) {
      this.recordings = newCards
    }


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>

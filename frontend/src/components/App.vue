<template> 
    <HeaderMenu />
    <MainSection />
    <ModalNewRecord />
  <router-view />
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import MainSection from '@/components/MainSection.vue'
import ModalNewRecord from '@/components/ModalNewRecord.vue'
export default {
  name: 'App',
  components: {
    HeaderMenu,
    MainSection,
    ModalNewRecord,
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

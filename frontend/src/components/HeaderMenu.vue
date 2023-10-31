<template>
  <header class="header"> 
    <img class="logo" alt="logo" src="../assets/images/Logo.jpg">
    <BasicButton @click="openModal" type="button" text="НАПИСАТЬ" />
  </header>
</template>
   
<script>
import BasicButton from '@/ui/BasicButton.vue';
export default {
  components: {
    BasicButton
  },
  name: 'headerMenu',
  props: {
        openModal: {
            type:Function,
            default: () => {}
        }
    }
}
</script>
   
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  max-width: $maxWidth;
}
.logo {
  max-width: 448px;

}

.menu {
  display: flex;
  justify-content: center;
  width: 100%;
}

.heading {
  margin: 0;
  width: 100%;
}

@media screen and (max-width: 450px) {
  .heading {
    font-size: 16px;
  }
}
</style>
   
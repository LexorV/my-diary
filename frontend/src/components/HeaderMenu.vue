<template>
  <header class="header"> 
    <img class="logo" alt="logo" src="../assets/images/Logo.jpg">
  </header>
</template>
   
<script>
export default {
  name: 'headerMenu',
}
</script>
   
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
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
   
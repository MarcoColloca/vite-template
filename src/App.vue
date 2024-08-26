<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components:{
      AppHeader,
      AppMain,
      AppFooter,
    },

    data(){
      return{
        test: 'Hello!',
      }
    }
  }
</script>




<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>




<style lang="scss">
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  header,
  footer{
    flex-shrink: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main{
    flex-grow: 1;
  }
}
</style>

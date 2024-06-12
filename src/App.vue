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
</style>

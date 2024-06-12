<script>
    export default {
        
    }
</script>





<template>
    <a class="back-top-button" href="#top">
        <font-awesome-icon :icon="['fas', 'arrow-up-long']" />
    </a>
</template>




<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;

    .back-top-button{
        position: absolute;
        right: 20px;
        bottom: 20px;
        background-color: $app-orange;
        color: $app-white;
        width: 50px;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        border-radius: 50%;
    }
</style>
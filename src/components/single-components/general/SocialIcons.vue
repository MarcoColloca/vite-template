<script>
    export default {
        data(){
            return{
                test: 'test',
                socialIcons: [
                    {
                        name: 'twitter',
                        href: 'https://twitter.com/'
                    },
                    {
                        name: 'facebook-f',
                        href: 'https://www.facebook.com/'
                    },
                    {
                        name: 'instagram',
                        href: 'https://www.instagram.com/'
                    },
                    {
                        name: 'linkedin',
                        href: 'https://www.linkedin.com/'
                    },
                ]
            }
        }
    }
</script>




<template>
    <ul class="social-icons-box">
        <li v-for="icon in socialIcons">
           <a :href="icon.href" target="_blank">
                <font-awesome-icon :icon="['fab', `${icon.name}`]" />
           </a> 
        </li>
    </ul>
</template>



<style lang="scss" scoped>
    .social-icons-box{
        display: flex;
        gap: 15px;
        font-size: 18px;    
        justify-content: flex-end;
        color: rgb(78, 78, 78);
        a{
            padding: 5px;
            &:hover{
                color: black;
            }
        }
    }
</style>
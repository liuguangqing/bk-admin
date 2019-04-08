<template>

    <div class="app-container">
        <h2>000</h2>
        <article-note :note-type="type"></article-note> 
    </div>
</template>
<script>
    import ArticleNote from '@/components/bigstudent/article.vue'
    
    export default {
        data(){
            return{
                type:0
            }
        },
        components: {
            ArticleNote
        },
        methods: {
            // 得到wangeditor传过来的html数据
            getHtml(data){
                this.content = data
            }
        },
        mounted() {
        }
    }
</script>
<style lang="less" scoped>
    
</style>



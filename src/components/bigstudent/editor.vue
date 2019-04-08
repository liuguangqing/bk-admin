<template>
    <div>
        <div ref="editor" style="text-align:left">
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: 'editor',
        data () {
            return {
                editor: null,
            }
        },
        props: {
            value: {
                default: ""
            }
        },
        mounted() {;
            this.editor = new E(this.$refs.editor)
            // 配置服务器端地址
            this.editor.customConfig.uploadImgServer = '/admin/uploadimg'
            this.editor.customConfig.onchange = (html) => { // 获取内容
                // console.log(html)
                this.$emit("send-html", html);
            }
            this.editor.create();
            this.editor.txt.html(this.value); // 设置内容
        }
    }
</script>

<style scoped>
</style>
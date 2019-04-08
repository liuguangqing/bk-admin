<template>
    <div class="note-container">
        <el-form :model="addForm" :rules="addFormRules" label-position="top" ref="addForm" class="addForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="addForm.title"></el-input>
            </el-form-item>
            <el-form-item label="摘要（选填）" prop="abstract">
                <el-input :rows="3" type="textarea" v-model="addForm.abstract"></el-input>
            </el-form-item>
            <el-form-item label="正文" prop="content">
                <Editor @send-html="getHtml"/>
                <el-input v-model="addForm.content" style="display:none"></el-input>
            </el-form-item>
            <el-form-item label="封面图（建议680*240）" prop="showPic">
                <el-upload
                        class="avatar-uploader"
                        action="/shop/upload/uploadFile"
                        :show-file-list="false"
                        :on-success="showPicSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="addForm.showPic" :src="addForm.showPic" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="原创/转载" prop="original">
                <el-radio-group v-model="addForm.original">
                    <el-radio :label="1">原创</el-radio>
                    <el-radio :label="2">转载</el-radio>
                </el-radio-group>
                <el-input v-model="addForm.reprint" v-show="addForm.original==2" style="width:330px;margin-left:15px;" placeholder="请输入转载网址"></el-input>
            </el-form-item>
            <el-form-item label="标签" prop="label">
                <el-input v-model="addForm.label"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native="submitForm('addForm')">提交</el-button>
                <!-- <el-button @click="resetForm('addForm')">重置</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Editor from '@/components/bigstudent/editor.vue'
    export default {
        props:['note-type'],
        data(){
            let checkTitle = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('标题不能为空'))
                    /*
                    this.$message({
                        showClose: true,
                        message: '标题不能为空',
                        type: 'error',
                        duration:2000
                    });
                    */
                }
                callback()
            }
            let checkContent = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('正文不能为空'))
                }
                callback()
            }
            let checkOriginal = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请选择类型'))
                }
                if(value==2 && this.addForm.reprint==''){
                    callback(new Error('请输入转载网址'))
                }
                callback()
            }
            return{
                addForm:{
                    type:this.noteType,
                    title:'',
                    abstract:'',
                    content:'',
                    showPic:'',
                    original:'',
                    reprint:'',
                    label:''
                },
                addFormRules:{
                    title: [
                        { validator: checkTitle, trigger: 'blur' }
                    ],
                    content:[
                        { validator: checkContent, trigger: 'blur' }
                    ],
                    original:[
                        { validator: checkOriginal, trigger: 'blur' }
                    ]
                }
            }
        },
        components: {
            Editor   
        },
        methods: {
            // 得到wangeditor传过来的html数据
            getHtml(data){
                this.addForm.content = data
                console.log(this.addForm.content)
            },
            // 统一上传图片函数
            beforeAvatarUpload(file) {
                const isJPG = file.type.includes('jpg');
                const isJPEG = file.type.includes('jpeg');
                const isPNG = file.type.includes('png');
                const isGIF = file.type.includes('gif');
                const isLt2M = file.size / 1024 / 1024 < 1;
                if(!isJPG && !isJPEG && !isPNG && !isGIF){
                    this.$message.error('请上传jpg,png,gif格式的图片');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 1MB!');
                }
                // return isJPG && isLt2M ;
                return isLt2M && (isJPEG || isPNG || isJPG);
            },
            // 上传封面图
            showPicSuccess(res, file){
                this.addForm.showPic = res.url
            },
            // 提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    console.log(this.addForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            // 重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        },
        mounted() {
        }
    }
</script>
<style lang="less" scoped>
    .note-container{
        width: 80%;
        margin: auto;
    }
    .addForm .content label{
        float: initial;
    }
    .avatar-uploader{
        display: inline-block;
        width: 80px;
        height: 80px;
        background: #f7f7f7;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
    }
    .avatar-uploader .el-upload {
        border-radius: 6px;
    cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
    .avatar {
        width: 340px;
        height: 120px;
        display: block;
    }
</style>
<template>
    <div class="app-container ">
        <div class="addData-container">
            
            <el-form :model="labelForm" status-icon :rules="rules"  ref="labelForm" label-width="100px" class="demo-ruleForm">
                <!-- <el-form-item label="父菜单：" prop="name">
                    <el-input v-model.number="labelForm.name"></el-input>
                </el-form-item> -->
                <el-form-item label="父菜单：" prop="menu">
                    <el-select v-model="labelForm.menu" placeholder="请选择" @change="getMenu">
                        <el-option key="0" label="选择菜单" value="0"></el-option>
                        <el-option
                        v-for="item in menuData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="二级菜单：" v-show="labelForm.menu!=0">
                    <el-select v-model="labelForm.submenu" placeholder="请选择" @change="getSubmenu">
                        <el-option key="0" label="选择菜单" value="0"></el-option>
                        <el-option
                        v-for="item in submenuData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="菜单名字：" prop="name">
                    <el-input v-model.number="labelForm.name"></el-input>
                </el-form-item>

                <el-form-item label="菜单编码：" prop="code">
                    <el-input v-model.number="labelForm.code"></el-input>
                </el-form-item>

                <!-- 大学专业 -->
                <div v-show="labelForm.submenu!=0">
                    <el-form-item label="类型：">
                        <el-radio-group v-model="labelForm.type">
                            <el-radio :label="1">基本专业(1)</el-radio>
                            <el-radio :label="2">特设专业(2)</el-radio>
                            <el-radio :label="3">军事专业(3)</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注：" prop="tips">
                        <el-input v-model.number="labelForm.tips"></el-input>
                    </el-form-item>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('labelForm')">保存</el-button>
                    <el-button @click="resetForm('labelForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <small>中国大学共有13个学科，92个大学专业类，630个大学专业。13个学科分别是：哲学、经济学、法学、教育学、文学、历史学、理学、工学、农学、医学、军事学、管理学、艺术学</small>
        </div>
    </div>  
</template>
<script>
    export default {
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入对应内容'));
                }
                callback()
            }
            var checkMenu = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择'));
                }
                callback()
            }
            return {
                labelForm: {
                    menu: '0',
                    name: '',
                    submenu:'0',
                    code: '',
                    type: 1,
                    tips: ''
                },
                rules: {
                    menu: [ { validator: checkMenu, trigger: 'change' } ],
                    name: [ { validator: checkName, trigger: 'blur' } ],
                    code: [ { validator: checkName, trigger: 'blur' } ]
                },
                menuData: [{label: '语文',value: '01'},{label: '数学',value: '02'}],
                submenuData: [{label: '英语',value: '03'},{label: '化学',value: '04'}]
            };
        },
        computed:{

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                        // this.$message({
                        //     message: '保存失败',
                        //     type: 'warning'
                        // });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 编辑标签
            handleEdit(index, row) {
                console.log(index, row);
            },
            // 删除标签
            handleDelete(index, row) {
                console.log(index, row);
            },
            // 选择
            getMenu(value){
                console.log('value:'+value)
                // let obj = this.areaData.find((item)=>{
                //     return item.value === value;
                // });
                // this.cityData = obj.children
            },
            getSubmenu(value){
                console.log('value:'+value)
                // let obj = this.areaData.find((item)=>{
                //     return item.value === value;
                // });
                // this.cityData = obj.children
            }
        }
    }
</script>
<style lang="less" scoped>
    .addData-container{
        width: 80%;
        margin: auto;
    }
</style>



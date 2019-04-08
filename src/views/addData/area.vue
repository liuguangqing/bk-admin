<template>
    <div class="app-container ">
        <div class="addData-container">
            <el-form :model="labelForm" status-icon :rules="rules" ref="labelForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="选择省：" prop="province">
                    <el-select v-model="labelForm.province" placeholder="请选择" @change="getProvince">
                        <el-option
                        v-for="item in areaData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="选择市/区：" prop="city">
                    <el-select v-model="labelForm.city" placeholder="请选择">
                        <el-option
                        v-for="item in cityData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="是否热门：">
                    <el-radio-group v-model="labelForm.isHot">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('labelForm')">保存</el-button>
                    <el-button @click="resetForm('labelForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>  
</template>
<script>
    import area from '@/assets/data/area'
    
    export default {
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择'));
                }
                callback()
            };
            return {
                labelForm: {
                    province: '',
                    city:'',
                    isHot:0
                },
                rules: {
                    province: [
                        { validator: checkName, trigger: 'change' }
                        // { type: 'number', required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    city: [
                        { validator: checkName, trigger: 'change' }
                    ]
                },
                areaData: area,
                cityData:[]
            };
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
            // 选择省
            getProvince(value){
                let obj = this.areaData.find((item)=>{
                    return item.value === value;
                });
                this.cityData = obj.children
            },
        }
    }
</script>
<style lang="less" scoped>
    .addData-container{
        width: 80%;
        margin: auto;
    }
</style>



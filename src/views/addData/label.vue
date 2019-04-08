<template>
    <div class="app-container ">
        <div class="addData-container">
            <!-- 添加标签 -->
            <el-form :model="labelForm" status-icon :rules="rules2" :inline="true" ref="labelForm" label-width="60px" class="demo-ruleForm">
                <el-form-item label="标签：" prop="name">
                    <el-input v-model.number="labelForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('labelForm')">保存</el-button>
                    <el-button @click="resetForm('labelForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- 标签列表 -->
            <el-table :data="tableData" stripe style="width: 100%">

                <el-table-column label="日期" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="姓名" width="180">
                    <template slot-scope="scope">
                        {{ scope.row.name }}
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
    </div>  
</template>
<script>
    export default {
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入标签名'));
                }
                callback()
            };
            return {
                labelForm: {
                    name: ''
                },
                rules2: {
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
            // 编辑标签
            handleEdit(index, row) {
                console.log(index, row);
            },
            // 删除标签
            handleDelete(index, row) {
                console.log(index, row);
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



<template>
    <div class="app-container ">
        <div class="addData-container">
            <!-- 添加标签 -->
            <el-form :model="labelForm" status-icon :rules="rules2" ref="labelForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="网站名称：" prop="website">
                    <el-input v-model="labelForm.website"></el-input>
                </el-form-item>
                <el-form-item label="网站地址：" prop="weburl">
                    <el-input v-model="labelForm.weburl"></el-input>
                </el-form-item>
                <el-form-item label="排序：" prop="sort">
                    <el-input v-model.number="labelForm.sort"></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="tips">
                    <el-input v-model.number="labelForm.tips"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('labelForm')">保存</el-button>
                    <el-button @click="resetForm('labelForm')">重置</el-button>
                </el-form-item>
            </el-form>

            <!-- 标签列表 -->
            <el-table :data="tableData" stripe style="width: 100%">

                <el-table-column label="日期" width="">
                    <template slot-scope="scope">
                        <!-- <i class="el-icon-time"></i> -->
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="网站名称" width="" prop="website"></el-table-column>

                <el-table-column label="网站地址" width="" prop="weburl"></el-table-column>

                <el-table-column label="排序" width="" prop="sort"></el-table-column>

                <el-table-column label="备注" width="" prop="tips"></el-table-column>

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

            <!-- 编辑友链 -->
            <el-dialog title="友链编辑" :visible.sync="labelVisible">
                <el-form :model="labelForm" status-icon :rules="rules2" ref="labelForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="网站名称：" prop="website">
                        <el-input v-model="labelForm.website"></el-input>
                    </el-form-item>
                    <el-form-item label="网站地址：" prop="weburl">
                        <el-input v-model="labelForm.weburl"></el-input>
                    </el-form-item>
                    <el-form-item label="排序：" prop="sort">
                        <el-input v-model.number="labelForm.sort"></el-input>
                    </el-form-item>
                    <el-form-item label="备注：" prop="tips">
                        <el-input v-model.number="labelForm.tips"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!-- <el-button type="primary" @click="submitForm('labelForm')">保存</el-button>
                        <el-button @click="resetForm('labelForm')">重置</el-button> -->
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="labelVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm('labelForm')">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>  
</template>
<script>
    export default {
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入内容'));
                }
                callback()
            };
            return {
                labelVisible:false,
                labelForm: {
                    website: '',
                    weburl:'',
                    sort:'',
                    tips:''
                },
                rules2: {
                    website: [ {required: true, message: '请输入网站名称', trigger: 'blur'} ],
                    weburl: [ {required: true, message: '请输入网站地址', trigger: 'blur'} ],
                    sort: [ {required: true, message: '请输入排序值，数字越大越靠前', trigger: 'blur'} ]
                },
                tableData: [{
                    id:1,
                    date: '2016-05-02',
                    website: '王小虎',
                    weburl: 'http://atestadmin.51fanbei.com/operator/main.htm',
                    sort:0,
                    tips:'嘿嘿'
                }, {
                    id:2,
                    date: '2016-05-02',
                    website: '王小虎',
                    weburl: 'https://fanyi.baidu.com/?aldtype=85&keyfrom=alading#zh/en',
                    sort:1,
                    tips:'嘿嘿'
                }, {
                    id:3,
                    date: '2016-05-01',
                    website: '王小虎',
                    weburl: 'https://fanyi.baidu.com/?aldtype=85&keyfrom=alading#zh/en',
                    sort:2,
                    tips:'嘿嘿'
                }, {
                    id:4,
                    date: '2016-05-03',
                    website: '王小虎',
                    weburl: 'https://fanyi.baidu.com/?aldtype=85&keyfrom=alading#zh/en',
                    sort:3,
                    tips:'嘿嘿'
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
                        //
                        this.labelVisible = false
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
            //
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 编辑标签
            handleEdit(index, row) {
                console.log(index, row);
                this.labelVisible = true
                this.labelForm = row
            },
            // 删除标签
            handleDelete(index, row) {
                console.log(row)
                this.$confirm('此友链将被删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.tableData.forEach((el,i)=>{
                        if(el.id == row.id){
                            this.tableData.splice(this.tableData.indexOf(row), 1)
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
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



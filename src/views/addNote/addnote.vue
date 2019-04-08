<template>
  <div class="note-container app-container">
    <!-- <div  v-highlight v-html="vals"></div> -->
    <el-form
      :model="addForm"
      :rules="addFormRules"
      label-position="top"
      ref="addForm"
      class="addForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="addForm.title"></el-input>
      </el-form-item>
      <!-- <el-form-item label="文章类型" prop="typer">
        <el-select v-model="addForm.typer" placeholder="一级菜单">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="作者/责编" prop="author">
        <el-input v-model="addForm.author"></el-input>
      </el-form-item>
      <el-form-item label="摘要" prop="desc">
        <el-input :rows="3" type="textarea" v-model="addForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="正文" prop="content">
        <!-- <Editor @send-html="getHtml"/> -->
        <Editor ref="editor" :height="400" v-model="addForm.content" />
        <el-input v-model="addForm.content" style="display:none"></el-input>
      </el-form-item>
      <el-form-item label="封面图（建议680*240）" prop="showPic">
        <el-upload
          class="avatar-uploader"
          action="/admin/uploadimg"
          :show-file-list="false"
          :on-success="showPicSuccess"
          :before-upload="beforeImgUpload"
          name="file"
        >
          <img v-if="addForm.showPic" :src="addForm.showPic" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="原创/转载" prop="original">
        <el-radio-group v-model="addForm.original">
          <el-radio :label="1">原创</el-radio>
          <el-radio :label="2">转载</el-radio>
        </el-radio-group>
        <el-input
          v-model="addForm.reprint"
          v-show="addForm.original==2"
          style="width:330px;margin-left:15px;"
          placeholder="请输入转载网址"
        ></el-input>
      </el-form-item>
      <el-form-item label="关键词" prop="essaykeyword">
        <el-input v-model="addForm.essaykeyword" placeholder="请输入文章关键词"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="essaydescription">
        <el-input v-model="addForm.essaydescription" placeholder="请输入文章描述"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="label">
        <el-select
          v-model="focusData"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
          style="width:100%"
        >
          <el-option
            v-for="(item,indx2) in blurData"
            :key="indx2"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="标签" prop="label">
        <div class="tabBox" @click="getFocus">
          <p class="tab" v-for="(item,index) in focusData" :key="index">
            {{item}}
            <i class="del" @click="delTab(item)">×</i>
          </p>
          <div class="inputBox">
            <input class="input" id="input" ref="input" placeholder="请输入" type="text">
            <ul class="blurCon">
              <li v-for="(item,index) in blurData" :key="index" @click="addTab(item)">{{item}}</li>
            </ul>
          </div>
        </div>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click.native="submitForm('addForm')">提交</el-button>
        <!-- <el-button @click="resetForm('addForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import Editor from "@/components/bigstudent/editor.vue";
import Editor from "./addnote3";
import { checkTitle, checkOriginal, doImgUpload } from "@/api/checkParam";
import getServe from "@/api/article";
export default {
  props: ["note-type"],
  data() {
    let originalCheck = (rule, value, callback) => {
      checkOriginal(rule, value, callback, this.addForm.reprint);
    };
    return {
      vals: "<pre><code><span>asd</span></code></pre>",
      addForm: {
        type: this.noteType,
        title: "",
        author: "",
        desc: "",
        content: "",
        showPic: "",
        original: "",
        reprint: "",
        label: "",
        essaykeyword: "",
        essaydescription:""
      },
      addFormRules: {
        title: [{ required: true, message: "标题不能为空", trigger: "blur" }],
        essaykeyword: [{ required: true, message: "文章关键词不能为空", trigger: "blur" }],
        essaydescription: [{ required: true, message: "文章描述不能为空", trigger: "blur" }],
        desc: [{ required: true, message: "摘要不能为空", trigger: "blur" }],
        author: [{ required: true, message: "作者不能为空", trigger: "blur" }],
        content: [
          { required: true, message: "正文内容不能为空", trigger: "blur" }
        ],
        original: [
          { required: true, validator: originalCheck, trigger: "blur" }
        ],
        // label: [
        //   { required: true, message: "标签不能为空", trigger: "change" }
        // ]
      },
      blurData: ["语文", "数学"],
      focusData: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  components: {
    Editor
  },
  methods: {
    // 提交文章接口
    async saveArticle(params) {
      let res = await getServe.addArticle(params);
    },
    async getNav() {
      let res = await getServe.navData();
      console.log("nav", fn(res.data));
      function fn(arrs) {
        let arrtemp = [];
        rec(arrs);
        function rec(arrs) {
          if (arrs.length > 0) {
            arrs.forEach(element => {
              if (element.rank == "yi" && element.data.length > 0) {
                rec(element.data);
              } else {
                arrtemp.push(element.title);
              }
            });
          }
        }
        return arrtemp;
      }
      this.blurData = fn(res.data);
      console.log(this.blurData);
    },
    // 得到wangeditor传过来的html数据
    getHtml(data) {
      this.addForm.content = data;
      console.log(this.addForm.content);
    },
    // 统一上传图片函数
    beforeImgUpload(file) {
      doImgUpload(file);
    },
    // 上传封面图
    showPicSuccess(res, file) {
      console.log(res);
      this.addForm.showPic = res.location;
    },
    // 定位输入标签的焦点
    getFocus() {
      document.getElementById("input").focus();
    },
    // 删除标签
    delTab(item) {
      console.log(item);
      var index = this.focusData.indexOf(item);
      if (index > -1) {
        this.focusData.splice(index, 1);
      }
    },
    // 添加标签
    addTab(item) {
      let obj = this.focusData;
      console.log(item);

      if (obj.length == 0) {
        obj.push(item);
      }

      obj.forEach((el, i) => {
        if (obj.indexOf(item) == -1) {
          obj.push(item);
          console.log(obj);
          return false;
        } else {
          console.log("已存在");
          return false;
        }
      });
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!');
          let tagsTemp = "";
          for (let item of this.focusData) {
            tagsTemp += item + ",";
          }
          tagsTemp = tagsTemp.substr(0, tagsTemp.length - 1);
          this.addForm.tags = tagsTemp;
          console.log(this.addForm);
          this.saveArticle(this.addForm);
        } else {
          console.log("error submit!!");
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
    // this.saveArticle({ name: 123 });
    // this.getrightData();
    this.getNav();
  }
};
</script>
<style lang="less" scoped>
.note-container {
  width: 80%;
  margin: auto;
}
.addForm .content label {
  float: initial;
}
.avatar-uploader {
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
  border-color: #409eff;
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
.tabBox {
  height: 36px;
  line-height: 36px;
  border: 1px solid #dcdfe6;
  padding: 0 10px;
  border-radius: 4px;
  .tab {
    display: inline-block;
    padding: 0 5px;
    height: 24px;
    line-height: 24px;
    margin-top: 6px;
    border-radius: 3px;
    background: #409eff;
    color: #fff;
    margin-right: 8px;
    .del {
      cursor: pointer;
    }
  }
  .inputBox {
    display: inline-block;
    width: 100px;
    position: relative;
    height: 24px;
    line-height: 24px;
    margin-top: 6px;
    .blurCon {
      position: absolute;
      top: 24px;
      left: 50px;
      width: 100%;
      background: #fff;
      box-shadow: 0 0 0.5rem 0.0625rem rgba(7, 17, 27, 0.1);
      padding: 5px 0;
      z-index: 1;
      transform: translate(0, -108%);
      li {
        padding: 0 8px;
        cursor: pointer;
        &:hover {
          background: #efefef;
        }
      }
    }
  }
  .input {
    width: 100%;
    height: 100%;
  }
}


</style>
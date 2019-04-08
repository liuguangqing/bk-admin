<template>
  <div class="dashboard-container">
    <component :is="currentRole"/>
  </div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import getservie from '../../api/article.js'
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  methods:{
    // ...mapActions(['getNewData']),
    async getCount(){
      let m = await getservie.rightData()
      console.log('m>>>>>>>>>>>>')
      console.log(m)
    }
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
    this.getCount()
    // console.log(getNewData())
  }
}
</script>

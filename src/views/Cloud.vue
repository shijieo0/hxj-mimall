<template>
  <div class="cloud">
    <Dragon msg="Cloud Dragon Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dragon from '@/components/Dragon.vue'
import axios from "axios";
import jsonp from "jsonp";

export default {
  name: 'Cloud',
  components: {
    Dragon
  },
  data(){
    return {
      age: 30,
      data: ''
    }
  },
  mounted(){
    // let url = "http://www.baidu.com"
    let url = "https://www.imooc.com/activity/servicetime?callback=__jp0"
    axios.get(url).then(()=>{

    })
    jsonp(url, (err, res)=>{
      let result = res;
      this.data = result;
    })
  }
}
</script>
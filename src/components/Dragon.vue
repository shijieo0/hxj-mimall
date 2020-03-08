<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="item in data" :key="item.name">
            {{item.name}} {{item.age}} {{item.sex}}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import jsonp from "jsonp";

export default {
  name: 'Dragon',
  props: {
    msg: String
  },
  data(){
    return {
      age: 30,
      data: [
          {name: 'Tony', age: '28', sex: 'male'},
          {name: 'Tom', age: '27', sex: 'male'},
          {name: 'lily', age: '26', sex: 'famale'}
      ]
    }
  },
  mounted(){
    // let url = "http://www.baidu.com"
    let url = "https://www.imooc.com/activity/servicetime?callback=__jp0"
    axios.get(url).then(()=>{

    })
    jsonp(url, (err, res)=>{
      console.log(err);
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

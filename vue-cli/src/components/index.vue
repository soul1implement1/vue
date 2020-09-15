<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    得到loginInfo:{{$route.params.user}},{{$route.params.pass}}
    <br>
    得到response:{{$route.params.res}}
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'msg--index-vue-client'
      }
    }
  }
</script>

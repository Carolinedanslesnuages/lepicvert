<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> Bientôt ouverture de la nouvelle version de Lepicvert.net
      
      
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>

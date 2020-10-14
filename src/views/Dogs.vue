<template>
  <div>
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="dogs" />
  </div>
</template>

<script>
import dogs from '@/data/dogs'
export default {
  name: 'Dogs',
  data () {
    return {
      dogs
    }
  }
}
</script>

<style scoped>

</style>

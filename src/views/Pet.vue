<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // cats () { return this.$store.state.cats }, -> identical as ...mapState(['cats']), but a bad practice
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    // this.cats is equal as doing this[cats], like on next line
    this.animal = this[this.$route.params.species][this.$route.params.id]
  }
}
</script>

<style scoped>

</style>

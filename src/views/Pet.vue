<template>
  <div>
    {{ pet().name }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {}
  },
  computed: {
    // cats () { return this.$store.state.cats }, -> identical as ...mapState(['cats']), but a bad practice
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    pet () {
      // this.cats is equal as doing this[cats], like on next line
      return this[this.$route.params.species][this.$route.params.id]
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
   <PetTable
   species="cats"
   :pets="cats"
   />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  components: {
    PetTable
  },
  name: 'Cats',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}

</script>

<style scoped>

</style>

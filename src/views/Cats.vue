<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${data.value.toLowerCase()}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  name: 'Cats',
  data () {
    return {
      cats // same as cats: cats
    }
  }
}

</script>

<style scoped>

</style>

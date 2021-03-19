<template>
  <!-- // <v-layout
  //   justify-center
  //   align-center
  // >  -->
  <section class="container">
    <v-flex class="text-center">
        <v-row>
          <Collection/>
        </v-row>
    </v-flex>
  </section>
</template>


<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('web3',[
      'collectorPageSwitch'
    ])
  },
  methods: {
    ...mapMutations('web3',[
      'collectorPageSwitchFlip'
    ])
  }
}
</script>

<style>
.container{
    background-color: #ECEFF1;
}

</style>
-->

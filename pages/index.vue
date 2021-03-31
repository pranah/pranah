<template>
<div>
  <div v-if="currentAccount != null">
  <MyProfile v-if="clickedAt == 0"/>
  <Publisher v-else-if="clickedAt == 1"/>
  <MarketPlace v-else-if="clickedAt == 2"/>
  <About v-else-if="clickedAt == 4"/>
  <ReadPage v-else-if="clickedAt == 5"/>
  </div>
  <section class="container" v-else >
    <div >
        <!-- <Welcome v-if="currentAccount != null"/> -->
              <Login />   
            <p class="subtitle"> 
            eBook Publishing Using NFTs <br> <br>

            An eBook publishing platform where each copy of each title are represented by NFTs,<br>
             thereby making them unique to enable new behaviors for the readers and giving them more <br>freedom over the content they own.
           
              </p>
              <p class = 'tag'>(MetaMask needs to be connected to Goerli Test Network)</p>
      </div>
  </section>

</div>


  
  
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('web3', [
      'currentAccount',
      'clickedAt'
    ])
  },
}
</script>

<style>
  .container {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
   /* background-color: #ECEFF1; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
  display: block;
  font-weight: 300;
  font-size: 200px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 26px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.tag{
  color: #526488;

}
</style>
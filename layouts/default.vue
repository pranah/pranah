<template>
<!-- <div>
  <Navbar />
</div> -->
  <v-app >
    <div>
        <Navbar />
            <!-- <v-navigation-drawer
      expand-on-hover
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="10%"
      
    >
      <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
        
      <v-navigation-drawer
        app
        expand-on-hover
        v-model="sidebar"
      >
         <!-- <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list> 
               <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
      </v-navigation-drawer>
      <v-content>
      <router-view></router-view>
    </v-content>
    
    
  </div>
  </v-app>
 
  
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      links: [
        { to: '/', name: 'Home' },
        { to: '/collector', name: 'Reader' },
        { to: '/publisher', name: 'Author' },
        { to: '/about', name: 'About' },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      miniVariant: false,
      title: 'Prana',
      peerCount: 'LibP2P Peers: ' + this
    }
  },
  components: {
    Navbar
  },
  methods: {
      ...mapActions({
        fetchProvider: 'web3/fetchProvider',
        getAccount: 'web3/getAccount',
      })
  },
  created() {
    this.fetchProvider();
    this.getAccount();
  },
  async fetch() {
  }
  
}
</script>
<style >
  .main{
background-color: #ECEFF1;
/* height: 100vh; */
}

</style>

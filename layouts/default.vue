<template>

  <!-- <Navbar /> -->

  <v-app >
    <div>
      <!-- <img class="logo" height="30" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"> -->
    <div class="nav">
        <Navbar />
              <!-- <img class="logo" height="30" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"> -->
    </div>
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
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        app
        expand-on-hover
        v-model="sidebar"
        width="15%"
        class="navdrawer"

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


        <v-list
          nav
          class="navlist"
        >
       
          <v-divider></v-divider>
          <v-list-item link @click="setClickedAt(0)">
            <v-list-item-icon>
              <v-icon x-large color="navy">mdi-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
            <v-list-item link @click="setClickedAt(1)">
            <v-list-item-icon>
              <v-icon x-large color="navy">mdi-pen</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Publish</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link @click="setClickedAt(2)">
            <v-list-item-icon>
              <v-icon x-large color="navy">mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Marketplace</v-list-item-title>
          </v-list-item>
          <!-- <v-divider></v-divider>
            <v-list-item link @click="setClickedAt(3)">
            <v-list-item-icon>
              <v-icon x-large color="navy">mdi-google-circles-extended</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Community</v-list-item-title>
          </v-list-item> -->
          <v-divider></v-divider>
            <v-list-item link @click="setClickedAt(4)">
            <v-list-item-icon>
              <v-icon x-large color="navy">mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </v-list> 
               <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
          class="navlist"
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
import { mapState, mapActions, mapMutations } from 'vuex'

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
  computed: {
    ...mapState('web3',[
      'clickedAt'
    ])
  },
  methods: {
      ...mapActions({
        fetchProvider: 'web3/fetchProvider',
        getAccount: 'web3/getAccount',
      }),
      ...mapMutations('web3',[
      'publisherPageSwitchFlip',
      'setClickedAt'
    ]),
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
  .nav{
    z-index: 20;
  }
  .main{
background-color: #ECEFF1;
/* height: 100vh; */
}
  .navlist{
    padding: 2px;
    top: 20%;
    height: 40px;
}
.logo{
  top: 10%;
  position:fixed;
}
  /* .navdrawer{
    elevation = "12";
  } */
</style>

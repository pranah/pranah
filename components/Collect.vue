
<template>
<!-- <section class="container"> -->
    <v-col>
      <h1 class="heading">Marketplace</h1>
        <!-- <center><img class="logo-prana" height="40" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"></center> -->
        <v-tabs
          v-model="tabs"
          centered
          grow
         
        
        >
          <v-tab
           class="tabs"
            v-for="title in titles"
            :key="titles.indexOf(title)"
          >
            {{title}}
          </v-tab>
        </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        
        <v-layout row wrap >
            <v-flex class="cards" background-color = "#ffff" xs12 sm6 md4 lg4 v-for="content in collectableContent" :key="collectableContent.indexOf(content)">
              <div class="boxContainer">
                <v-card width="500" height="550" :elevation="20" class="ma-3 card-style" color = "">
                  <div class="image">
                    <Content v-bind:content="content"/>  
                  </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="middleButtons">
                        <v-btn
                        large
                        color="green"
                        @click="purchase(content)"
                        >
                        BUY
                        </v-btn> 
                        </div>
                    </v-card-actions>
                            <!-- <div class="middle">
                            <div class="text">
                                <h1><b>{{content.title}}</b></h1><br>
                                <b>Price: </b>{{content.price}} ETH<br>
                                <b>ISBN: </b>{{content.isbn}}<br>
                                <b>Author: </b>{{content.publisher}}<br>
                            </div>  
                            </div>  -->
                </v-card>
              </div>
            </v-flex>
        </v-layout>

      </v-tab-item>
      <v-tab-item>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 class="cards" v-for="content in resaleTokens" :key="resaleTokens.indexOf(content)">
              <div class="boxContainer">
                <v-card max-width="300" :elevation="20" class="ma-3" color = "">
                <div class="ribbon ribbon-top-left"><span>{{ordinal_suffix_of(content.copyNumber)}} Copy</span></div>
                  <div class="image">
                    <ResaleToken v-bind:content="content"/>  
                  </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="middleButtons">
                        <v-btn
                        large
                        color="green"
                        @click="buyToken(content)"
                        >
                        BUY
                        </v-btn> 
                        </div>
                    </v-card-actions> 
                            <!-- <div class="middle-resale">
                            <div class="text">
                                <h1><b>{{content.title}}</b></h1><br>
                                <b>Resale Price: </b>{{content.resalePrice}} ETH<br>
                                <b>ISBN: </b>{{content.isbn}}<br>
                                <b>Copy Number: </b>{{content.copyNumber}}<br><br>
                                //<b>Author: </b>{{content.publisher}}<br>
                            </div>  
                            </div>  -->
                </v-card>
              </div>
            </v-flex>
        </v-layout>
      </v-tab-item>
       <v-tab-item>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 class="cards" v-for="content in rentTokens" :key="rentTokens.indexOf(content)">
              <div class="boxContainer">
                <v-card max-width="300" :elevation="20" class="ma-3" color = "">
                   <div class="ribbon ribbon-top-left"><span>{{ordinal_suffix_of(content.copyNumber)}} Copy</span></div>
                  <div class="image">
                    <RentToken v-bind:content="content"/>  
                  </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="middleButtons">
                        <v-btn
                        large
                        color="green"
                        @click="rentToken(content)"
                        >
                        RENT
                        </v-btn> 
                        </div>
                    </v-card-actions> 
                            <!-- <div class="middle">
                            <div class="text">
                                <h1><b>{{content.title}}</b></h1><br>
                                <b>Renting Price: </b>{{content.rentingPrice}} ETH<br>
                                <b>ISBN: </b>{{content.isbn}}<br>
                                <b>Copy Number: </b>{{content.copyNumber}}<br><br>
                            </div>  
                            </div>  -->
                </v-card>
              </div>
            </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
    </v-col>
<!-- </section>-->

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  
    computed: {
        ...mapState('web3', [
            'collectableContent',
            'resaleTokens',
            'rentTokens'
        ])
    },
    methods: {
        ...mapActions('web3', [
            'getCollectables',
            'purchase',
            'buyToken',
            'rentToken'
        ]),
        ordinal_suffix_of(i) {
          var j = i % 10,
          k = i % 100;
          if (j == 1 && k != 11) {
            return i + "st";
          }
          if (j == 2 && k != 12) {
            return i + "nd";
          }
          if (j == 3 && k != 13) {
            return i + "rd";
          }
        return i + "th";
          }
    },
    data () {
      return {
        tabs: null,
        titles: ['BUY FROM AUTHOR', 'BUY FROM OTHER READERS','RENT FROM OTHER READERS']

      }
    },
}
</script>

<style>
/* .tabs {
  background-color: #0D47A1;
  -moz-text-decoration-color: wheat;
} */
.card-style{
  width:500px;
}
.cards {
  align-items: center;
  padding-block: 3%;
  padding-left: 6%;
  /* width:500px; */
}
.boxContainer {

  position: relative;
  width: 80%;
}

.image {

  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility:visible;
}

.middle {

  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 70%;
  bottom: -40%;
  left: 50%;
  height: 40%;
  width: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.middle-resale {

  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 72%;
  bottom: -40%;
  left: 50%;
  height: 0%;
  width: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.middleButtons {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.boxContainer:hover .image {
  opacity: 0.3;
}

.boxContainer:hover .middle {
  opacity: 4;
}

.boxContainer:hover .middle-resale {
  opacity: 4;
}

.boxContainer:hover .middleButtons {
  opacity: 4;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 14px;
  /* width: 95%; */
  padding: 6px 16px;
}

@import url(https://fonts.googleapis.com/css?family=Lato:700);
/* body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f0f0;
} */
.box {
  position: relative;
  max-width: 600px;
  width: 90%;
  height: 400px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,.1);
}

/* common */
.ribbon {
  z-index: 20;
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  /* text-transform: uppercase; */
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}
</style> 





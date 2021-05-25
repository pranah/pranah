<template>
<section class="container">
  <v-col>
  <!-- <center><img class="logo-prana" height="40" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"></center> -->
  
    
        <h1 class="heading" >Personal Collection</h1>
        <v-tabs
          v-model="tabs"
          centered
          grow
         >
          <v-tab
            v-for="title in titles"
            :key="titles.indexOf(title)"
          >
            {{title}}
          </v-tab>
        </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 v-for="content in collectedContent" :key="collectedContent.indexOf(content)">
                <div class="boxContainer">
                <v-card max-width="300" :elevation="20" class="ma-3" color = "">
                <div class="ribbon ribbon-top-left"><span>{{ordinal_suffix_of(content.copyNumber)}} Copy</span></div>
                    <div class="image">
                    <MyCopy v-bind:content="content"/> 
                    </div>
                    <v-card-actions>
                        <div class="middleButtons">
                        <v-row justify="center">
                        <v-col align-self="center">
                        <v-row justify="center">
                            <center>
                            <!-- <nuxt-link to="/readPage"> -->
                            <v-btn large color="green" @click="requestFile(content, collectedContent.indexOf(content))" >Read</v-btn>
                            <!-- </nuxt-link> -->
                            </center>
                        </v-row>
                        </v-col>
           
                        <v-col>
                        <v-row justify="center">
                        <ResaleDialog v-bind:content="content"/>
                        </v-row>
                        </v-col>
                        
                        <v-col>
                        <v-row justify="center">
                        <RentDialog v-bind:content="content"/>
                        </v-row>
                        </v-col>

                        <v-col>
                        <v-row justify="center">
                        <GiveawayDialog v-bind:content="content"/>
                        </v-row>
                        </v-col>
                        </v-row>
                         </div>
                    </v-card-actions>
                </v-card>
                </div>
            </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 v-for="content in rentedTokens" :key="rentedTokens.indexOf(content)">
              <div class="boxContainer">
                <v-card max-width="300" :elevation="20" class="ma-3" color = "">
                  <div class="ribbon ribbon-top-left"><span>{{ordinal_suffix_of(content.copyNumber)}} Copy</span></div>
                  <div class="image">
                    <RentToken v-bind:content="content"/>  
                  </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="middleButtons">
                        <!-- <v-btn
                        large
                        color="green"
                        @click="requestFile(content, rentedTokens.indexOf(content))"
                        >
                        READ
                        </v-btn>  -->
                        <!-- <nuxt-link to="/readPage"> -->
                        <center>
                        <v-btn large color="green" @click="requestFile(content, rentedTokens.indexOf(content))" >Read</v-btn>
                        </center>
                        <!-- </nuxt-link> -->
                        </div>
                    </v-card-actions> 
                            <div class="middle">
                            <div class="text">
                                <h1><b>{{content.title}}</b></h1><br>
                                <!-- <b>Price: </b>{{content.rentingPrice}} ETH<br> -->
                                <b>Copy Number: </b>{{content.copyNumber}}<br>
                                <b>ISBN: </b>{{content.isbn}}<br><br>
                            </div>  
                            </div> 
                </v-card>
              </div>
            </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 v-for="content in publishedContent" :key="publishedContent.indexOf(content)">
                    <div class="boxContainer">
                    <v-card  max-width="300" :elevation="20" class="ma-3" color = "">
                        <div class="image">
                        <Content v-bind:content="content"/> 
                        </div>
                        <v-card-actions>
                            <!-- <v-spacer></v-spacer> -->
                            <v-row justify="center">
                            <div class="middleButtons">
                            <!-- <nuxt-link to="/readPage"> --><center>
                            <v-btn large color="green" @click="requestFile(content, publishedContent.indexOf(content))" >Read</v-btn>
                            </center>
                            <!-- </nuxt-link> -->
                            </div>
                            <!-- <div class="middle">
                            <div class="text">
                                <h1><b>{{content.title}}</b></h1><br>
                                <b>Price: </b>{{content.price}} ETH
                                <b>ISBN: </b>{{content.isbn}}<br>
                                <b>Author: </b>{{content.publisher}}<br>
                            </div>  
                            </div> -->
                        </v-row>
                        </v-card-actions>
                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
      </v-tab-item>
    </v-tabs-items>
    </v-col>  
</section>      
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    data: () => ({
        dialog: false,
        tabs: null,
        fileRequested: false,
        titles: ['MY BOOKS', 'RENTED BOOKS','MY PUBLISHED BOOKS']
    }),
    computed: {
        ...mapState('web3', [
            'collectedContent',
            'rentedTokens',
            'publishedContent'
        ] ),
        ...mapState('ipfs', [
            'textFile'
        ])
    },
    methods: {
        ...mapActions({
            signMessage: 'web3/signMessage',
            putForResale: 'web3/putForResale',
            requestContent: 'ipfs/requestContent'
        }),
        ...mapMutations({
            getFile: 'ipfs/getFile'
        }),
        ...mapMutations('web3',{
          setClickedAt: 'setClickedAt'
        }
        ),
        requestFile(content, index){
          this.setClickedAt(5)
            console.log(content)
            console.log(index)
            // this.requestContent(content.bookHash)
            this.getFile({content, index})
        },
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
    }
}
</script>

<style>
a {  text-decoration: none}

.container{
    background-color: #ECEFF1;
    align-items: center;
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
  top: 87.5%;
  bottom: -20%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.middleButtons {
  
  transition: .5s ease;
  opacity: 0;
  position:absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  align-items:center;
}

.boxContainer:hover .image {
  opacity: 0.3;
}

.boxContainer:hover .middle {
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
.heading {
  font-size: 40px;
  color: cornflowerblue;
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
/* border: 5px solid red; */
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #3498db;
  /* background-color: red; */
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

<!-- <v-dialog v-model="dialog" fullscreen scrollable max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="blue"
                                    dark
                                    small
                                    outlined
                                    v-bind="attrs"
                                    v-on="on"
                                    @click = 'requestFile(content.bookHash)'
                                    >
                                    Read
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn small outlined color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                    </v-card-actions>
                                <File v-bind:textFile="textFile" />    
                                <File v-bind:textFile="content.bookContent" />    
                                </v-card>
                            </v-dialog> -->
                            <!-- <v-btn small outlined color="blue" @click="requestFile(content.bookHash)" to="/readPage">Read</v-btn> -->
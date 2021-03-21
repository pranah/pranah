<template>
<div class="container">
<div class="form-style-8">
    <v-row>
        <v-col>  
            <!-- <center><img class="logo-prana" height="40" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"></center>  -->
            <h3 class="heading">Publish Work</h3>
            <v-form class="publishForm">
                <v-text-field 
                    required
                    label="Title"
                    v-model="content.title"
                />
                  <!-- <v-text-field 
                     required
                     label="Content to Publish (file path)"
                     v-model="content.file"
                 />  -->
                <v-text-field 
                    type="number" 
                    min="1000000000000" 
                    max="9999999999999" 
                    required
                    label="ISBN"
                    v-model="content.isbn"
                />
                

                <v-text-field 
                    type="number"
                    min="0" 
                    max="999999" 
                    required
                    label="Price in ETH"
                    v-model="content.price"
                />
                <v-text-field 
                    type="number"
                    min="0" 
                    max="999999" 
                    required
                    label="Creator's Cut (Your cut in percentage of any secondary transactions)"
                    v-model="content.transactionCut"
                />
                <v-file-input
                accept=".jpg, .png"
                placeholder="Cover Image"
                label="File"
                v-model="image"
                v-on:change="imageUpload()"
                ></v-file-input>

                <v-file-input
                accept=".txt, .rtf, .pdf"
                placeholder="Content to Publish"
                label="File"
                v-model="file"
                v-on:change="fileUpload()"
                ></v-file-input>
                <!-- <v-btn small outlined color="blue" @click="publish(content)">Publish</v-btn>  -->
                <v-btn x-large  outlined color="blue" @click="publish(content)">Publish</v-btn>
            </v-form>
        </v-col>
    </v-row>    
    </div>
        </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data: () => ({
        content: {
            title: '',
            image: null,
            file: null,
            isbn: 0,
            price: 0,
            transactionCut: 0
        },
        file: null,
        image: null,
    }),
    computed: {
        ...mapState('fleek',[
            'client'
        ]),
        ...mapState('web3', [
            'prana'
        ]),
    },
    methods: {
        ...mapActions('ipfs',[
            'publish'
        ]),
        fileUpload(){
            var reader = new FileReader()
            reader.readAsArrayBuffer(this.file);
            reader.onloadend = () => {
            this.content.file = Buffer(reader.result)
            console.log(this.content.file)
            }
        },
        imageUpload(){
            var reader = new FileReader()
            reader.readAsArrayBuffer(this.image);
            reader.onloadend = () => {
            this.content.image = Buffer(reader.result)
            console.log(this.content.image)
            }
        }
    },
}
</script>

<style lang="scss">


   
// <link href= "http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel='stylesheet' type='text/css'>
.form-style-8{
	font-family: 'Open Sans Condensed', arial, sans;
	width: 500px;
	padding: 30px;
	background: #FFFFFF;
	margin: 50px auto;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);

}
.form-style-8 h2{
	background: #4D4D4D;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	color: #797979;
	font-size: 18px;
	font-weight: 100;
	padding: 20px;
	margin: -30px -30px 30px -30px;
}
.form-style-8 input[type="text"],
.form-style-8 input[type="date"],
.form-style-8 input[type="datetime"],
.form-style-8 input[type="email"],
.form-style-8 input[type="number"],
.form-style-8 input[type="search"],
.form-style-8 input[type="time"],
.form-style-8 input[type="url"],
.form-style-8 input[type="password"],
.form-style-8 textarea,
.form-style-8 select 
{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	width: 100%;
	padding: 7px;
	border: none;
	border-bottom: 1px solid #ddd;
	background: transparent;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
	height: 45px;
}
.form-style-8 textarea{
	resize:none;
	overflow: hidden;
}
.form-style-8 input[type="button"], 
.form-style-8 input[type="submit"]{
	-moz-box-shadow: inset 0px 1px 0px 0px #45D6D6;
	-webkit-box-shadow: inset 0px 1px 0px 0px #45D6D6;
	box-shadow: inset 0px 1px 0px 0px #45D6D6;
	background-color: #2CBBBB;
	border: 1px solid #27A0A0;
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 14px;
	padding: 8px 18px;
	text-decoration: none;
	text-transform: uppercase;
}
.form-style-8 input[type="button"]:hover, 
.form-style-8 input[type="submit"]:hover {
	background:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);
	background-color:#34CACA;
}

    /* .form{
        width: 600px;
        
    } */
</style>


<!--
<div class="form">
    <v-row>
        <v-col>  
            //    <center><img class="logo-prana" height="40" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"></center> 
            <h3 class="heading">Publish Work</h3>
            <v-form class="publishForm">
                <v-text-field 
                    required
                    label="Title"
                    v-model="content.title"
                />
                //  <v-text-field 
                //     required
                //     label="Content to Publish (file path)"
                //     v-model="content.file"
                // /> 
                <v-text-field 
                    type="number" 
                    min="1000000000000" 
                    max="9999999999999" 
                    required
                    label="ISBN"
                    v-model="content.isbn"
                />
                

                <v-text-field 
                    type="number"
                    min="0" 
                    max="999999" 
                    required
                    label="Price in ETH"
                    v-model="content.price"
                />
                <v-text-field 
                    type="number"
                    min="0" 
                    max="999999" 
                    required
                    label="Creator's Cut (Your cut in percentage of any secondary transactions)"
                    v-model="content.transactionCut"
                />
                <v-file-input
                accept=".jpg, .png"
                placeholder="Cover Image"
                label="File"
                v-model="image"
                v-on:change="imageUpload()"
                ></v-file-input>

                <v-file-input
                accept=".txt, .rtf, .pdf"
                placeholder="Content to Publish"
                label="File"
                v-model="file"
                v-on:change="fileUpload()"
                ></v-file-input>
                //  <v-btn small outlined color="blue" @click="publish(content)">Publish</v-btn> 
                <v-btn small outlined color="blue" @click="publish(content)">Publish</v-btn>
            </v-form>
        </v-col>
    </v-row>    
    </div>
    -->
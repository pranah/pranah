<template>
<div class="container">
    <v-row>
        <v-col>  
              <!-- <center><img class="logo-prana" height="40" @click="open = !open" src="~/static/pranalogofinal.svg" alt="logo"></center> -->
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
                /> -->
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
                <!-- <v-btn small outlined color="blue" @click="publish(content)">Publish</v-btn> -->
                <v-btn small outlined color="blue" @click="publish(content)">Publish</v-btn>
            </v-form>
        </v-col>
    </v-row>    
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

    .publishForm {
    margin: 5%;
    }
//     @import url('https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap');

// $all: all .5s ease;
// $sai: 'Saira Semi Condensed', sans-serif;

// *{
//     @include tf($tf-fm: $sai);
//     @include other($ot-tsi: $all)
// }

// body{
//     background: #dfdfdf
// }

// .container{
//     @include bm(100%, 100%, $bm-pd: 0 16px, $bm-dp: $fl);
//     @include flex-center($rnw)
// }

// form{
//     @include bm(400px, $bm-dp: $fl);
//     @include flex-center($cw);
//         div, label, input, textarea{
//             @include bm(100%)
//         }
// }

// .field:nth-of-type(2){
//     @include bm($bm-mg: 16px 0)
// }

// label, input, textarea{
//     @include bm($bm-pd: 8px)
// }

// label, [placeholder]{
//     @include tf(#555)
// }

// label i{
//     @include bm($bm-mg: 0 10px 0 0)
// }

// .field:focus-within label{
//     @include tf(#000, $tf-ls: 2px)
// }

// input, textarea{
//     background: rgba(255,255,255,.5);
//     border: none;
//     @include other($ot-br: 4px, $ot-bs: $o-b);
//         &:focus{
//             background: rgba(255,255,255,1);
//             @include other($ot-bs: none)
//         }
// }

// textarea{
//     resize: none;
//         &::-webkit-scrollbar{
//             @include bm(0)
//         }
// }

// button{
//     background: #2f4ad0;
//     @include bm($bm-pd: 8px 16px, $bm-mg: 16px 0 50px 0);
//     @include tf(#fff);
//     border: none;
//     @include other($ot-br: 4px, $ot-cr: pointer, $ot-bs: $o-b);
//         &:hover{
//             @include tf($tf-ls: 2px);
//             @include other($ot-bs: none)
//         }
// }

// .social-media{
//     @include bm($bm-dp: $fl);
//     @include fb($rw, $fb-jc: $sa);
//         :not(&){
//             @include tf($tf-fs: 14px)
//         }
//         span{
//             @include tf($tf-fs: 16px)
//         }
//         span .fas{
//             @include bm($bm-mg: 0 0 0 10px)
//         }
//         a{
//             @include tf(#000, $tf-fs: 20px)
//         }
// }

// @media (max-width: 425px){
//     form{
//         @include bm(100%)
//     }
// }
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
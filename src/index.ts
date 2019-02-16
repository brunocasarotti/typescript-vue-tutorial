// src/index.ts

import Vue from "vue";
//import from './components/';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div> Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>`,
    data:{
        name: "My name"
    },
    components: {
        //HelloComponent
    }
});
import Vue from "vue";
import HelloComponent from './components/Hello.vue';

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
        HelloComponent
    }
});
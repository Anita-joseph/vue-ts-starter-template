import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import Todo from "./components/toDo.vue";
import Navigation from "./components/Navigation.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div class="container">
        Name: <input bg-white focus:outline-1 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" v-model="name" type="text">
        <HelloComponent :name="name" :initialEnthusiasm="5" />
    </div>`,
    data: {
        name: "World"
	},
	components: {
    HelloComponent, Todo, Navigation
	}
});
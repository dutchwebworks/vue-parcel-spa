import Vue from "vue";
import App from "../vue/app.vue";

new Vue({ render: createElement => createElement(App) }).$mount('#app');
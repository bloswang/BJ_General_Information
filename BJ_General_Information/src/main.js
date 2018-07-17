import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./rem.js"
import "./assets/css/main.scss"
import "animate.css"
import "vue-fullpage/vue-fullpage.css"
import VueFullpage from 'vue-fullpage'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
require('jquery')
Vue.use(VueFullpage);
Vue.use(MintUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})

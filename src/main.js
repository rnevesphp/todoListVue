import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// el new vue ==> asigna todos los componentes creados en un unico doc vue y los monta con la funcion $mount en el elemento que posee el id #app
new Vue({
  render: h => h(App),
}).$mount('#app')

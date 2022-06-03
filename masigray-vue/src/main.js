import { createApp } from 'vue'
import App from './App.vue'

// router 의 셋팅값을 읽어들여서 사용한다.
import router from './router/index.js'

// Vue Root 객체에 router 사용하기 적용
createApp(App).use(router).mount('#app')
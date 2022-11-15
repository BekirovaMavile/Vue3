// import Vue from 'vue'
// import Vuex from 'vuex'
// import ads from './ads'

// Vue.use(Vuex)

// export default new Vuex.Store({
// 	modules: {
// 		ads
// 	}
// })

import { createStore } from 'vuex'
import ads from './ads'
import user from './user'

const store = createStore({
  modules: {
		ads, user
	}
});

export default store;

import { createStore } from 'vuex'
import user from '@/store/modules/user'
import actions from '@/store/actions'
import motations from '@/store/mutations'

const store = createStore({
  modules: {
    user
  },
  actions,
  motations
})

export default store

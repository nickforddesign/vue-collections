import makeMixin from './mixin'
import Collection from './collection'

export default class VueCollection {
  static install(Vue, Vuex) {
    Vue.mixin(makeMixin(Vue))
    Collection.init(Vue, Vuex)
  }
  static Collection(...args) {
    return new Collection(...args)
  }
}

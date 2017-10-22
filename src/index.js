import makeMixin from './mixin'
import Collection from './collection'

export default class VueCollections {
  static install(Vue) {
    Vue.mixin(makeMixin(Vue))
    Collection.init(Vue)
  }
  static Collection(...args) {
    return new Collection(...args)
  }
}

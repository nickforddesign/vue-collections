import makeMixin from './mixin'
import Collection from './collection'

export default class VueCollection {
  static install(Vue) {
    Vue.mixin(makeMixin(Vue))
    Collection.init(Vue)
  }
}

export { Collection }

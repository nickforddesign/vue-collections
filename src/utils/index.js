// import _ from 'lodash'
// import moment from 'moment'
// import { Request } from 'vue-requests'

import { isEmpty } from 'ramda'

// export { Request }

export function isDef (obj) {
  if (obj === undefined) return false
  return !isEmpty(obj)
}
// sorting

// export const sortByDate = (key, a, b) => {
//   return moment.utc(a[key]) > moment.utc(b[key]) ? 1 : -1
// }

export const sort = (key, a, b) => {
  return a[key] < b[key] ? 1 : -1
}

// reset collection or model state

export const resetState = (state, defaults) => {
  Object.keys(defaults).forEach(key => {
    state[key] = defaults[key]
  })
}

// reset all collection or model states

export const resetAllStates = (state, modules) => {
  Object.keys(modules).forEach(key => {
    resetState(state[key], modules[key].defaults())
  })
}

import { isEmpty } from 'ramda'

export function isDef (obj) {
  if (obj === undefined) return false
  return !isEmpty(obj)
}

// insert model into collection, or update existing model
export async function insertModel (vm, model = {}) {
  const model_data = translateModel(vm, model)
  let match = vm.models.find(data => data.id === model_data.id)
  if (match) {
    match = model_data
  } else {
    const method = vm.reverse
      ? 'unshift'
      : 'push'
    vm.models[method](model_data)
  }
}

// insert multiple models into collection
export async function insertModels (vm, models = []) {
  return models.map((model) => {
    insertModel(vm, model)
  })
}

// delete a model by id from collection
export async function deleteModel (vm, id) {
  const index = vm.models.findIndex(model => model[vm.id_attribute] === id)
  if (index > -1) {
    vm.models.splice(index, 1)
  }
}

// convert model data based on schema
export function translateModel (vm, data) {
  const Model = vm.Model
  return Model
    // ? new Model(data).$data
    ? new Model(data).$data
    : data
}

// encode entire collection based on schema
export function encodeModels (vm) {
  const Model = vm.Model
  return vm.models.map(data => {
    return new Model(data).encode()
  })
}

// reset collection or model state
export function resetState (state, defaults) {
  Object.keys(defaults).forEach(key => {
    state[key] = defaults[key]
  })
}

// reset all collection or model states
export function resetAllStates (state, modules) {
  Object.keys(modules).forEach(key => {
    resetState(state[key], modules[key].defaults())
  })
}

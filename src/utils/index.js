import { isEmpty } from 'ramda'

export function isDef (obj) {
  if (obj === undefined) return false
  return !isEmpty(obj)
}

// insert model into collection, or update existing model
export async function insertModel (vm, model = {}) {
  const model_data = translateModel(vm, model)
  const id_attribute = vm.id_attribute
  // console.log({id_attribute})
  let match = vm.models.find(data => data[id_attribute] === model_data[id_attribute])
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

// reencode entire collection based on schema
export function encodeModels (vm) {
  const Model = vm.Model
  if (Model) {
    return vm.models.map(data => {
      return new Model(data).encode()
    })
  }
}

// validate models paramater
export function validateModels (models) {
  let valid = true
  if (models) {
    if (!(models instanceof Array)) {
      throw new TypeError(`Collection expected models as an array, received ${typeof models}`)
    }
  }
  return valid
}

// convert iterator to object
export function iteratorToObject (iterator) {
  const obj = {}
  for (let tuple of iterator) {
    obj[tuple[0]] = tuple[1]
  }
  return obj
}

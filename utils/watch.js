export const setWatcher = (page) => {
  const data = page.data
  const watch = page.data.watch
  Object.keys(watch).forEach(key => {
    let targetData = data
    const targetKey = key
    const watchFn = watch[key].handler || watch[key]
    const deep = watch[key].deep
    observe(targetData, targetKey, watchFn, deep, page)
  })
}

const observe = (obj, key, watchFn, deep, page) => {
  
  console.log('obj',obj);
  let oldVal = obj[key]
  console.log('oldVal',oldVal);
  if (oldVal !== null && typeof oldVal === 'object' && deep) {
    Object.keys(oldVal).forEach(item => {
      observe(oldVal, item, watchFn, deep, page)
    })
  }
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set(value) {
      console.log('value',value);
      if (value === oldVal) return
      watchFn.call(page, value, oldVal)
      oldVal = value
    },
    get() {
      return oldVal
    }
  })
}
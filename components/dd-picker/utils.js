const formatOptions = (options,valueKey)=>{
  const newOptions=options&&options.map(i=>{
    return {
      label:i[valueKey.label],
      value:i[valueKey.value],
      ...i
    }
  })
  return newOptions
}

export default {
  formatOptions
};
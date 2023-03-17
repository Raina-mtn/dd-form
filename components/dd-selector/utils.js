const formatOptions = (options,valueKey)=>{
  const newOptions=options&&options.map(i=>{
    return {
      text:i[valueKey.text],
      value:i[valueKey.value],
      ...i
    }
  })
  return newOptions
}

export default {
  formatOptions
};
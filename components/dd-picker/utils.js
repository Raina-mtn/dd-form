const formatOptions = (options,valueKey)=>{
  const newOptions=options.map(i=>(
    {
      label:i[valueKey.label],
      value:i[valueKey.value]
    }
  ))
  return newOptions
}

export default {
  formatOptions
};
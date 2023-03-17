export const formatOptions = (options,valueKey)=>{
  const newOptions=options.map(i=>{
    if(i[valueKey.children]){
      i[valueKey.children] = formatOptions(i[valueKey.children],valueKey)
    }
    return {
      label:i[valueKey.label],
      value:i[valueKey.value],
      children:i[valueKey.children],
      ...i
    }
  })
  return newOptions.length?newOptions:[{}]
}

export const searchParent = (node, list, valueKey={children:'children', value:'value'}) => {
  // let t = []
  // for (let i = 0; i < map.length; i++) {
  //   const e = map[i]
  //   if (e[valueKey.value] === node) {
  //     //若查询到对应的节点，则直接返回
  //     t.push(e[valueKey.value])
  //     break
  //   } else if (e[valueKey.children] && e[valueKey.children].length !== 0) {
  //     //判断是否还有子节点，若有对子节点进行循环调用
  //     let p = searchParent(e[valueKey.children], node, valueKey)
  //     //若p的长度不为0，则说明子节点在该节点的children内，记录此节点，并终止循环
  //     if (p.length !== 0) {
  //       p.unshift(e)
  //       t = p.map(i=>i[valueKey.value])
  //       break
  //     }
  //   }
  // }
  // t.map(i=>{
  //   console.log('i',i);
  //   return i[valueKey.value]
  // })
  // return t

  let result = [];
  let traverse = (node, path, list) => {
    if (list.length === 0) {
      return;
    }
    for (let item of list) {
      path.push(item);
      if (item[valueKey.value] === node) {
        result = JSON.parse(JSON.stringify(path));
        return;
      }
      const children = Array.isArray(item[valueKey.children]) ? item[valueKey.children] : [];
      traverse(node, path, children); // 遍历
      path.pop(); // 回溯
    }
  }
  traverse(node, [], list);
  return result.map(i=>i[valueKey.value]);
}
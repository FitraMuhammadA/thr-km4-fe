function addMoreData(object, key, value) {
  object[key]  = value
  return object
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'))
console.log(addMoreData({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']))
console.log(addMoreData({ name: 'Edo', age: 20 }, 'isMarried', false))

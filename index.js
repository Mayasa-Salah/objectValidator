const personSchema = {
  name: 'string',
  age: 'number',
  siblings: 'array',
  metaData: 'object',
  active: 'boolean'
}

function objectValidator (obj) {
  if (!Object.keys(obj).length) {
    console.log('Invalid: Empty object')
  }
  for (const key in obj) {
    const valueType = `${typeof obj[key]}`
    if (valueType === 'object' && personSchema[key] === 'array') {
      if (Array.isArray(obj[key])) {
        continue
      }
      console.log(`Invalid key type ${key}, should be ${personSchema[key]} but it's ${valueType}`)
      return
    }
    if (valueType !== personSchema[key]) {
      console.log(`Invalid key type ${key}, should be ${personSchema[key]} but it's ${valueType}`)
      return
    }
  }
  console.log('Valid object')
}

const obj = {

}

objectValidator(obj)

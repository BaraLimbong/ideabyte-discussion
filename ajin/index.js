console.log('ajin')

for (let i = 0; i < 5; i++) {
  let result = ''
  for (let j = 0; j < 5; j++) {
    if (i % 2 === 0) {
      result += '*'
    } else {
      result += i
    }
  }
  console.log(result)
}

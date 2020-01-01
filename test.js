const decode = require('./decode')

const errors = []

function runTest (title, actual, expected, whenFails) {
  const ok = actual === expected
  process.stdout.write(ok ? '√' : 'ƒ')
  !ok && errors.push(`FAIL: ${title} ${whenFails}; actual: ${actual}, expected: ${expected}`)
}

function tests () {
  runTest('decode', typeof decode, 'function', 'decode should be a function')
  runTest('decode', decode('cXVpY2sgYnJvd24gZm94'), 'quick brown fox', 'decode() should properly work')
  runTest('decode', decode('cXVpY2sgYnJvd24gZm94IQ=='), 'quick brown fox!', 'decode() should properly work')
  runTest('decode', decode('cXVpY2sgYnJvd24gZm94IQ===='), 'quick brown fox!', 'decode() should properly work')
  runTest('decode', decode('cXVpY2sgYnJvd24gZm94IQ'), 'quick brown fox!', 'decode() should properly work')
  runTest('decode', decode(''), '', 'decode() should properly work')

  console.log('\nDONE!')
  errors.length > 0 && console.log(errors)
}

tests()

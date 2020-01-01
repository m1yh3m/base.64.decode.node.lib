const { binaryForChar } = require('@m1yh3m/base.64.table.node.lib')

function tokenify (str, count) {
  const len = str.length
  const out = []
  for (let i = 0; i < len; i += count) {
    out.push(str.substr(i, count))
  }
  return out
}

function decode (base64 /* string */) {
  return base64
    .replace(/=/g, '') // remove padded =
    .split('') // array of letters
    .map(i => binaryForChar(i)) // get binary from table
    .join('') // put all the 6bit binary numbers together
    .split() // this puts the string in [] so that we can map over it
    .map(i => tokenify(i, 8)) // create 8bit binary numbers
    .pop() // this brings the mapped content one level up // reverses split() above
    .filter(i => i.length === 8) // remove the padded binary number which is incomplete
    .map(i => parseInt(i, 2)) // get the number out of 8bit binary
    .map(i => String.fromCharCode(i)) // convert to ASCII
    .join('') // convert to string
}

module.exports = decode

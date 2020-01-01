# base.64.decode.node.lib

Node library for decoding base 64 strings to ASCII

```javascript
var decode = require("@m1yh3m/base.64.decode.node.lib");
// undefined
decode("cXVpY2sgYnJvd24gZm94");
// 'quick brown fox'
decode("cXVpY2sgYnJvd24gZm94==");
// 'quick brown fox'
decode("cXVpY2sgYnJvd24gZm94=");
// 'quick brown fox'
decode("cXVpY2sgYnJvd24gZm94IQ=");
// 'quick brown fox!'
decode("cXVpY2sgYnJvd24gZm94IQ==");
// 'quick brown fox!'
decode("cXVpY2sgYnJvd24gZm94IQ============");
// 'quick brown fox!'
```

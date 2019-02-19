const benchmark = require('./lib/benchmark')
const xmlJs = require('./lib/implementations/xml-js')
const jstoxml = require('./lib/implementations/jstoxml')

benchmark.execute(xmlJs.NAME, xmlJs.executeFn)
benchmark.execute(jstoxml.NAME, jstoxml.executeFn)
# json-to-xml-benchmarks

Benchmarks for various implementations of JSON to XML conversion libraries

### Usage

Run `npm run benchmark`

In order to make more accurate memory assessment, modify `index.js` to only run one implementation at a time, to make sure memory leaks from one implementation are not affecting other ones.

Node that leak detection is based on memory growth between garbage collection sessions. Leak is reported if heap usage has increased for five consecutive garbage collections - so make sure you run enough iterations for garbage collection to happen.
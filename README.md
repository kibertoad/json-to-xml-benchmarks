# json-to-xml-benchmarks

Benchmarks for various implementations of JSON to XML conversion libraries

### Usage

Run `npm run benchmark`

In order to make more accurate memory assessment, modify `index.js` to only run one implementation at a time, to make sure memory leaks from one implementation are not affecting other ones
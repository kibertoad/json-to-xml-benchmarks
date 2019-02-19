const Benchmark = require('benchmark');
const memwatch = require('node-memwatch');

memwatch.on('leak', function(info) {
  console.log(`Leak detected: ${JSON.stringify(info)}`);
});

memwatch.on('stats', function(stats) {
  console.log(`Memory stats after GC: ${JSON.stringify(stats)}`);
});

async function execute(executionName, executionFn) {
  console.log(`Start benchmarking: ${executionName}`);
  const benchmark = new Benchmark(
    executionName,
    () => {
      executionFn();
    },
    { async: false, minSamples: 20, cycles: 30, initCount: 5 }
  );

  benchmark // add listeners
    .on('cycle', function(event) {})
    .on('error', function(event) {
      console.error(event.message);
    })
    .on('complete', function() {
      console.log(
        `Finished benchmark for ${executionName}. Mean execution time: ${this.stats.mean} Count ${
          this.count
        }`
      );
    })
    .run();
}

module.exports = {
  execute
};

var dest = './build',
  src = './src',
  mui = './node_modules/material-ui/src';

module.exports = {
  markup: {
    src: src + "/vendor/**",
    dest: './build/vendor'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/App.js',
      dest: dest,
      outputName: 'app.js'
    }],
    extensions: ['.js'],
  }
};

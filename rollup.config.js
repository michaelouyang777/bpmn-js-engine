import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
const packages = require('./package.json')

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    name: `${packages.name}`,
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    json()
  ]
};
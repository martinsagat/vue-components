import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      typescript(),
      commonjs(),
      scss({
        fileName: 'dist/style.css',
        sourceMap: false,
        prefix: `@import "./src/styles/_variables.scss";`,
        watch: ['src/styles'],
      }),
    ]
  }
];

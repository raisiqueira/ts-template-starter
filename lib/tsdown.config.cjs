import { defineConfig } from 'tsdown'

export default defineConfig(options => ({
  entry: 'src/index.ts',
  sourcemap: !options.watch,
  minify: !options.watch,
  dts: true,
  format: ['esm', 'cjs'],
  loader: {
    '.js': 'jsx',
  },
}))

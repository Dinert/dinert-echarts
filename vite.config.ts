import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // 打包文件目录
        outDir: 'es',

        sourcemap: true, // 是否打包map文件
        // 压缩
        // minify: false,
        rollupOptions: {
            // 忽略打包vue文件
            external: ['vue', 'lodash', 'echarts'],
            input: ['./packages/index.ts'],

            output: [
                {
                    format: 'es',
                    // 打包后文件名
                    entryFileNames: '[name].mjs',

                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    // 配置打包根目录
                    dir: 'es',
                },
                {
                    // 打包格式
                    format: 'cjs',
                    //   //打包后文件名
                    entryFileNames: '[name].js',

                    //   preserveModules: true,
                    exports: 'named',
                    //   //配置打包根目录
                    dir: 'lib',
                },
                {
                    format: 'umd',
                    exports: 'named',
                    dir: 'dist',
                    name: 'dinert-echarts',
                    globals: {
                        'vue': 'Vue',
                        'lodash': 'lodash',
                        'echarts': 'echarts'
                    },
                }
            ],
        },
        lib: {
            entry: './index.ts',
        },
    },
    plugins: [
        vue(),
        dts({
            entryRoot: './packages',

            outDir: ['./es/src', './lib/src'],

            // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsconfigPath: './tsconfig.json',
            copyDtsFiles: true,
            include: ['packages/**/*.ts']
        }),

    ],
    resolve: {
        alias: {
            '@packages': `${path.resolve(__dirname, 'packages')}`,
            '@src': `${path.resolve(__dirname, 'src')}`,
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
    },
    server: {
        port: 8023
    }
})

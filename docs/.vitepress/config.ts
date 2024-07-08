import path from 'path'
import {defineConfig} from 'vitepress'

import {mdPlugin} from './plugins/markdown-config'


function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
}
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/dinert-echarts/' : '/',
    vite: {
        resolve: {
            alias: {
                '@packages': _resolve('../../packages'),
                '@docs': _resolve('../../docs'),
            }
        },
        plugins: [
        ],
        server: {
            port: 8033
        }
    },

    themeConfig: {
        siteTitle: 'dinert-echarts',
        nav: [
            {text: '指南', link: '/guide/installation'},
            {text: '使用', link: '/examples/init'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Dinert/dinert-echarts'},
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '基础',
                    items: [
                        {
                            text: '安装',
                            link: '/guide/installation'
                        },
                        {
                            text: '快速开始',
                            link: '/guide/quickstart'
                        },

                    ]
                },
            ],
            '/examples/': [
                {
                    text: '图表初始化',
                    link: '/examples/init',
                },
            ]
        }

    },
    markdown: {
        lineNumbers: true,
        config: md => mdPlugin(md)
    }
})

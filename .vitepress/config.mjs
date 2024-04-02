import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/vitepress-blog/',
    srcDir: './src',
    title: 'abandon',
    description: 'A VitePress Site',
    themeConfig: {
        i18nRouting: true,
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            // {
            //     text: '个人成长',
            //     items: [
            //         {
            //             text: '大江南北游记',
            //             link: '/column/Travel/' // 表示docs/column/Travel/index.md
            //         },
            //         {
            //             text: '所思·所想',
            //             link: '/column/Growing/' // 表示docs/column/Growing/index.md
            //         }
            //     ]
            // },
            // {
            //     text: 'Koa',
            //     items: [
            //         {
            //             text: '基本使用',
            //             link: '/koa-learn/koa'
            //         }
            //     ]
            // },
            // {
            //     text: 'TS',
            //     items: [
            //         {
            //             text: '泛型&泛型约束',
            //             link: '/typescript-learn/泛型'
            //         }
            //     ]
            // },
            // {
            //     text: 'React',
            //     items: [
            //         {
            //             text: 'hook函数',
            //             items: [
            //                 {
            //                     text: 'useState注意事项',
            //                     link: '/react-modules/hooks/state'
            //                 },
            //                 {
            //                     text: 'useRef注意事项',
            //                     link: '/react-modules/hooks/useRef'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '开发事项',
            //             items: [
            //                 {
            //                     text: '移动端适配rem',
            //                     link: '/react-modules/development/rem'
            //                 },
            //                 {
            //                     text: 'CSS Modules',
            //                     link: '/react-modules/development/css-module'
            //                 },
            //                 {
            //                     text: 'Fragment',
            //                     link: '/react-modules/development/fragment'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '路由模块',
            //             items: [
            //                 {
            //                     text: '基础使用',
            //                     link: '/react-modules/router/react-router-dom'
            //                 }
            //             ]
            //         },
            //     ]
            // },
            // {
            //     text: 'uniapp',
            //     items: [
            //         {
            //             text: '小程序',
            //             items: [
            //                 {
            //                     text: 'painter',
            //                     link: '/uniapp/mp-weixin/painter/painter'
            //                 }
            //             ]
            //         },

            //     ]
            // },
            // {
            //     text: '算法',
            //     items: [
            //         {
            //             text: '数据结构',
            //             items: [
            //                 {
            //                     text: '数据结构',
            //                     link: '/algorithm/data-structure/time-complexity'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '所思·所想',
            //             link: '/column/Growing/' // 表示docs/column/Growing/index.md
            //         }
            //     ]
            // }
        ],

        sidebar: [
            // {
            //     text: '个人成长',
            //     items: [

            //     ]
            // },
            // {
            //     text: 'Koa',
            //     items: [
            //         {
            //             text: '基本使用',
            //             link: '/koa-learn/koa'
            //         }
            //     ]
            // },
            // {
            //     text: 'TS',
            //     items: [
            //         {
            //             text: '泛型&泛型约束',
            //             link: '/typescript-learn/泛型'
            //         }
            //     ]
            // },
            // {
            //     text: 'React',
            //     items: [
            //         {
            //             text: 'hook函数',
            //             items: [
            //                 {
            //                     text: 'useState注意事项',
            //                     link: '/react-modules/hooks/state'
            //                 },
            //                 {
            //                     text: 'useRef注意事项',
            //                     link: '/react-modules/hooks/useRef'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '开发事项',
            //             items: [
            //                 {
            //                     text: '移动端适配rem',
            //                     link: '/react-modules/development/rem'
            //                 },
            //                 {
            //                     text: 'CSS Modules',
            //                     link: '/react-modules/development/css-module'
            //                 },
            //                 {
            //                     text: 'Fragment',
            //                     link: '/react-modules/development/fragment'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '路由模块',
            //             items: [
            //                 {
            //                     text: '基础使用',
            //                     link: '/react-modules/router/react-router-dom'
            //                 }
            //             ]
            //         },
            //     ]
            // },
            // {
            //     text: '算法',
            //     items: [
            //         {
            //             text: '数据结构',
            //             items: [
            //                 {
            //                     text: '数据结构',
            //                     link: '/algorithm/data-structure/time-complexity'
            //                 }
            //             ]
            //         }
            //         // {
            //         //     text: '所思·所想',
            //         //     link: '/column/Growing/' // 表示docs/column/Growing/index.md
            //         // }
            //     ]
            // },
            // {
            //     text: 'uniapp',
            //     items: [
            //         {
            //             text: '小程序',
            //             items: [
            //                 {
            //                     text: 'painter',
            //                     link: '/uniapp/mp-weixin/painter/painter'
            //                 }
            //             ]
            //         },

            //     ]
            // },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    }
})

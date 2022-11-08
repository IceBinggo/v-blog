module.exports = {
    title: 'LRB的个人博客', // 网站的标题
    description: 'LRB的个人博客', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {  //主题配置
        logo: '/img/logo.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            {
                text: '基础',
                items: [
                    { text: 'HTML', link: '/基础/HTML/' },
                    { text: 'CSS', link: '/基础/CSS/' },
                    { text: 'JavaScript', link: '/基础/JavaScript/' },
                ]
            },
            {
                text: '框架',
                items: [
                    { text: 'Vue', link: '/框架/Vue/' },
                    { text: 'React', link: '/框架/React/' },
                ]
            },
            {
                text: 'Node服务端',
                link: '/css_docs/',
                items: [
                    { text: 'Node', link: '/Node服务端/Node/' },
                    { text: '数据库', link: '/Node服务端/数据库/' },
                ]
            },
            { text: 'H5移动端', link: '/h5_docs/' },
            { text: '小程序', link: '/wx_docs/' },
            { text: '面试题', link: '/interview/' },
        ]
    }
}
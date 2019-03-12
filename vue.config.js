
module.exports = {
    css: {
        loaderOptions: {
        // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: ` @import "@/assets/css/_variable.scss";`
            }
        }
    },
     // devServer: {
    //     port: "8080",
    //     proxy: {
    //         '/apis': {
    //             target: 'http://127.0.0.1:8686', // target host
    //             ws: true, // proxy websockets
    //             changeOrigin: true, // needed for virtual hosted sites 
    //             pathRewrite: { 
    //                 '^/apis': '' // rewrite path 
    //                 } 
    //             }, 
    //         } 
    // } 
}
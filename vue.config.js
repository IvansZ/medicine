
module.exports = {
    css: {
        loaderOptions: {
       
            sass: {
                
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
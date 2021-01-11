const path = require('path'); // node提供的 路径的库
const fs = require('fs');  // node提供的 文件系统file_system的库
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 转换成html的插件
const srcRoot = path.resolve(__dirname, 'src'); // src文件夹的路径
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');  // page文件夹的路径
const mainFile = 'index.js'; // 入口文件

function getHtmlArray(entryMap){
    let htmlArray = [];
    Object.keys(entryMap).forEach((key)=>{
        let fullPathName = path.resolve(pageDir, key);
        let fileName = path.resolve(fullPathName, key + '.html');
        if (fs.existsSync(fileName)) {
            htmlArray.push(new HtmlWebpackPlugin({
                filename: key + '.html',
                template: fileName,
                chunks: [ 'common', key]
            }));
        }
    });
    return htmlArray;
}

function getEntry(){
    let entryMap = {};
    // fs.readdirSync(pageDir)找到page文件夹下面所有的路径
    fs.readdirSync(pageDir).forEach((pathname)=>{
        // pathname是相对路径，fullpathName是绝对路径
        let fullPathName = path.resolve(pageDir, pathname);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);
        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    });
    return entryMap;
}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: devPath, //dev目录里不再有生成html文件
        // hot: true,
        proxy: {
            '/comment': {
                target: 'http://localhost:8080/'
            }
        },
        port: 3000
    },
    entry: entryMap,
    resolve: {
        alias: {
            component: path.resolve(srcRoot,'component')
        }, // 路径别名
        extensions: ['.js','.jsx'] //省略后缀
    },
    output: { path: devPath, filename: '[name].min.js' },
    module: {
        rules: [
            {   test: /\.(js|jsx)$/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'eslint-loader'}
                ],
                include: srcRoot
            },
            {   test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: srcRoot
            },
            {   test: /\.scss$/ , 
                use:['style-loader','css-loader','sass-loader',{
                    loader: 'sass-resources-loader',
                    options: {
                        resources: srcRoot + '/component/common.scss'
                    }
                }], 
                include: srcRoot
            },
            {   test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192', 
                include: srcRoot}
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin(),
    ].concat(htmlArray)
}
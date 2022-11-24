const Fontmin = require('fontmin');
const fs = require('fs');
const path = require('path');
/**
 * 遍历指定目录下的所有文件
 * @param {*} dir 
 */
 const getAllFile = function(dir){
    let res=[]
    function traverse(dir){
        fs.readdirSync(dir).forEach((file)=>{
            const pathname = path.join(dir,file)
            if(fs.statSync(pathname).isDirectory()){
                traverse(pathname)
            }else{
                res.push(pathname)
            }
        })
    }
    traverse(dir)
    return res;
}

const srcPath = 'assets/font/font.ttf'; // 字体源文件
const destPath = 'assets/font/fontmin';    // 输出路径
const datapath = [
    "assets/data",
    "pages",
    "components",
];
var text = "";
datapath.forEach((path)=>{
    files = getAllFile(path)
    files.forEach((file)=>{
        console.log(`正在处理 ${file} 文件`)
        var data = fs.readFileSync(file, 'utf-8');    
        text += data.toString()
    })
})

// 初始化
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))
    .use(Fontmin.ttf2eot())     // eot 转换插件
    .use(Fontmin.ttf2woff())    // woff 转换插件     
    .use(Fontmin.ttf2svg())     // svg 转换插件
    .use(Fontmin.css())         // css 生成插件
    .dest(destPath);            // 输出配置

console.log(`读取源字体 ${srcPath} 成功`);

// 执行
fontmin.run(function (err, files, stream) {

    if (err) {                  // 异常捕捉
        console.error(err);
    }

    console.log(`字体文件已保存至 ${destPath}`);        // 成功
});
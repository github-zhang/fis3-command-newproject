# fis-command-newproject

## Usage

     Usage: fis newproject -d
     Options:

       -d <path>     项目所在路径 如: D:/code/nodejs/6-20151102/项目名成
       
      
 
1.    在下载此模块前，我已经安装了fis3（全局），然后将模块复制、粘贴到fis3安装文件夹中的node_modules文件夹内。
2.    在fis3/lib/cli.js 文件中，找到

          fis.set('modules.commands', ['init', 'install', 'release', 'server', 'inspect','newproject']);
          
     代码，大约在107行,添加  **,'newproject'** （不修改此文件也能使用 newproject 插件，但是在命令行中输入fis3，将看不到 newproject的提示信息）
3.    将模块中的example文件中文件 **structure-config.json** 复制到你项目的根目录
4.    在命令行中输入:

          fis3 newproject -d structure-config.json
   
5.    此时在当前目录下，会生成 structure-config.json 里面配置的文件。（在默认配置里面会有 fis3-postpackager-loader，fis-optimizer-html-minifier，fis-parser-less 3个插件需要全局下载一下）
6.    在Git Bash命令工具中输入:
          
          fis3 release -d output
     
     ![fis3 release -d output 结果](http://img2012.static.suishenyun.net/10c9e56b349eec0cf45f59e479c719ec/007379bdc7c96166ba5e1a2ad7d798e8.png!w480.jpg "fis3 release -d output 结果")

     这时在output文件夹里会有发布需要的文件。如果是需要的是测试版本，则可以运行 

          fis3 release -d output prod

     此时output文件夹里面的文件只有css、js、img文件被压缩了，html没有被压缩，具体的情况可以根据自己的需求修改配置文件 fis-conf.js
 
## 目的
 
 
1.   开发工具的目的是为了：使用一些公用css和html5 模版和规范，优化图片，压缩css,js,html。用于发布、测试、二次开发。

2.   通过一些fis3插件功能还能：
     
     1.自动合并图片，生成雪碧图；
          
     2.将图片生成base64代码；
          

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

          fis newproject -d structure-config.json
   

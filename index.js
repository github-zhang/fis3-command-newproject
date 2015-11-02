exports.name = 'newproject';
exports.desc = 'build the project structure.';
exports.options = {
  '-h, --help': '根据structure-config.json配置文件,新建项目文档、文件结构',
  '-d <path>': 'project config.json path'
};

exports.run = function(argv, cli) {
  // 如果输入为 fis3 newfile -h
  // 或者 fis3 newfile --help
  // 则输出帮助信息。
  if (argv.h || argv.help) {
    return cli.help(exports.name, exports.options);
  }

  // 可以通过 argv 知道命令行中有哪些参数以及是什么值。

  if (argv.d ) {
    console.log(" 路径地址 -d ： "+argv.d);
    console.log(" 配置文件地址： " + process.env.PWD + "/" + argv.d);

    require('./lib/buildfile.js')(process.env.PWD + "/" + argv.d);
  }
};

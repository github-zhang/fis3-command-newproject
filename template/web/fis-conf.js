fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.html:js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.scss', {
  // fis-parser-node-sass 插件进行解析
  parser: fis.plugin('node-sass', {
    // options... 
  }),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css',
  useHash: true
});

fis.match('*.html', {
	// fis-optimizer-html-minifier 插件进行压缩，需下载
  optimizer: fis.plugin('html-minifier',{
  	removeComments : true,
  	collapseWhitespace : true
  })
});

fis.match('*.html:css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});
//选择的是添加 MD5 戳，直接修改文件的 URL
fis.match('*.{js,css,png}', {
  useHash: true
});

fis.match('::package', {
	//fis3-postpackager-loader 插件因为不能全局安装，所以需要每次运行 npm install fis3-postpackager-loader
	postpackager: fis.plugin('loader', {
		allInOne: true
	})
});

//fis3 release prod 启动开发者模式
fis.media('prod').match('*.js', {
  optimizer: null
}).match('*.html:js', {
  optimizer: null
}).match('*.html', {
  optimizer: null
}).match('*.css', {
  optimizer: null
});

fis.set('project.ignore', ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js','structure-config.json']);
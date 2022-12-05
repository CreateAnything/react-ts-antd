module.exports = {
	env: {
		browser: true,//要检查的js代码是运行在浏览器端
		commonjs:true,//使用commonjs模块化规范
		es2021: true,// 对ES2021以前的语法都可以进行检查
	},
	extends: [
		"eslint:recommended", // 继承eslint官方推荐的检查规则
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',// 和env中配置的ECMA版本对应
		sourceType: 'module', // 如果我们在初始化的时候选择了模块化规范是Commonjs 如果要想同时支持ESmodule，那么必须在解析配置这里写上这一句，否则会报错
	},
	plugins: [
		'react',
	],
	rules: {
	},
};

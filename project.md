# React+Vite+Ts项目

## 1.react项目的创建

### 1.1.使用命令创建项目

1. 执行vite init 命令 创建react+ts项目

### 1.2.在项目中使用eslint

1. 执行 npm i eslint -D安装eslint

2. 执行npx eslint --init初始化eslint，此时会生成.eslintrc配置文件如

   ```json
   {
     "env": {
       "browser": true,
       "commonjs": true,
       "es2021": true
     },
     "extends": [
       "eslint:recommended",
       "plugin:react/recommended"
     ],
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module",
       "project": "./tsconfig.json",
       "ecmaFeatures": {
         "tsx": true
       }
     },
     "plugins": ["react"],
     "rules": {
     }
   }
   
   ```

3. 在vscode中下载Eslint插件并开启保存自动formateEslint

### 1.3.使用prettier格式化代码

1. 执行 npm i prettier -D下载依赖

2. 在根目录中创建.prettierrc文件用来配置格式化规则

   ```json
   {
     "printWidth": 80,
     "tabWidth": 2,
     "useTabs": false,
     "semi": true,
     "singleQuote": false,
     "jsxSingleQuote": true,
     "trailingComma": "all",
     "bracketSpacing": false,
     "jsxBracketSameLine": false,
     "arrowParens": "always"
   }
   ```

   pprettier的规则有很多列如

   ```json
   {
       'tabWidth': 2,  // tab缩进大小,默认为2
       'useTabs': false,  // 使用tab缩进，默认false
       'semi': false,  // 使用分号, 默认true
       'singleQuote': true,  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
       'trailingComma': 'es5', // 行尾逗号,默认none,可选 none|es5|all
       // es5 包括es5中的数组、对象
       // all 包括函数对象等所有可选
       // 箭头函数参数括号 默认avoid 可选 avoid| always
       // avoid 能省略括号的时候就省略 例如x => x
       // always 总是有括号
       // arrowParens: 'avoid'
       // quoteProps:'consistent',
       'no-alert': 0, //禁止使用alert confirm prompt
       'no-array-constructor': 2, //禁止使用数组构造器
       'no-bitwise': 0, //禁止使用按位运算符
       'no-caller': 1, //禁止使用arguments.caller或arguments.callee
       'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
       'no-class-assign': 2, //禁止给类赋值
       'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
       'no-const-assign': 2, //禁止修改const声明的变量
       'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
       'no-continue': 0, //禁止使用continue
       'no-control-regex': 2, //禁止在正则表达式中使用控制字符
       'no-debugger': 2, //禁止使用debugger
       'no-delete-var': 2, //不能对var声明的变量使用delete操作符
       'no-div-regex': 1, //不能使用看起来像除法的正则表达式/=foo/
       'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
       'no-dupe-args': 2, //函数参数不能重复
       'no-duplicate-case': 2, //switch中的case标签不能重复
       'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
       'no-empty': 2, //块语句中的内容不能为空
       'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
       'no-empty-label': 0, //禁止使用空label
       'no-eq-null': 2, //禁止对null使用==或!=运算符
       'no-eval': 1, //禁止使用eval
       'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
       'no-extend-native': 2, //禁止扩展native对象
       'no-extra-bind': 2, //禁止不必要的函数绑定
       'no-extra-parens': 0, //禁止非必要的括号
       'no-extra-semi': 2, //禁止多余的冒号
       'no-fallthrough': 1, //禁止switch穿透
       'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
       'no-func-assign': 2, //禁止重复的函数声明
       'no-implicit-coercion': 1, //禁止隐式转换
       'no-implied-eval': 2, //禁止使用隐式eval
       'no-inline-comments': 0, //禁止行内备注
       'no-inner-declarations': [2, 'functions'], //禁止在块语句中使用声明（变量或函数）
       'no-invalid-regexp': 2, //禁止无效的正则表达式
       'no-invalid-this': 2, //禁止无效的this，只能用在构造器，类，对象字面量
       'no-iterator': 2, //禁止使用__iterator__ 属性
       'no-label-var': 2, //label名不能与var声明的变量名相同
       'no-labels': 2, //禁止标签声明
       'no-lone-blocks': 2, //禁止不必要的嵌套块
       'no-lonely-if': 2, //禁止else语句内只有if语句
       'no-loop-func': 1, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
       'no-mixed-requires': [0, false], //声明时不能混用声明类型
       'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
       'linebreak-style': [0, 'windows'], //换行风格
       'no-multi-str': 2, //字符串不能用\换行
       'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
       'no-native-reassign': 2, //不能重写native对象
       'no-negated-in-lhs': 2, //in 操作符的左边不能有!
       'no-nested-ternary': 0, //禁止使用嵌套的三目运算
       'no-new-func': 1, //禁止使用new Function
       'no-new-object': 2, //禁止使用new Object()
       'no-new-require': 2, //禁止使用new require
       'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
       'no-obj-calls': 2, //不能调用内置的全局对象，比如Math() JSON()
       'no-octal': 2, //禁止使用八进制数字
       'no-octal-escape': 2, //禁止使用八进制转义序列
       'no-path-concat': 0, //node中不能使用__dirname或__filename做路径拼接
       'no-plusplus': 0, //禁止使用++，--
       'no-process-env': 0, //禁止使用process.env
       'no-process-exit': 0, //禁止使用process.exit()
       'no-proto': 2, //禁止使用__proto__属性
       'no-redeclare': 2, //禁止重复声明变量
       'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
       'no-restricted-modules': 0, //如果禁用了指定模块，使用就会报错
       'no-return-assign': 1, //return 语句中不能有赋值表达式
       'no-script-url': 0, //禁止使用javascript:void(0)
       'no-self-compare': 2, //不能比较自身
       'no-sequences': 0, //禁止使用逗号运算符
       'no-shadow': 1, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
       'no-shadow-restricted-names': 2, //严格模式中规定的限制标识符不能作为声明时的变量名使用
       'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
       'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
       'no-sync': 0, //nodejs 禁止同步方法
       'no-ternary': 0, //禁止使用三目运算符
       'no-this-before-super': 0, //在调用super()之前不能使用this或super
       'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
       'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
       'no-unexpected-multiline': 2, //避免多行表达式
       'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
       'no-unreachable': 2, //不能有无法执行的代码
       'no-unused-expressions': 2, //禁止无用的表达式
       'no-use-before-define': 2, //未定义前不能使用
       'no-useless-call': 2, //禁止不必要的call和apply
       'no-void': 2, //禁用void操作符
       'no-var': 0, //禁用var，用let和const代替
       'no-warning-comments': [
           1,
           {
             terms: ['todo', 'fixme', 'xxx'],
             location: 'start'
           }
       ], //不能有警告备注
       'no-with': 2, //禁用with
       'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
       'arrow-spacing': 0, //=>的前/后括号
       'accessor-pairs': 0, //在对象中使用getter/setter
       'block-scoped-var': 0, //块语句中使用var
       'brace-style': [1, '1tbs'], //大括号风格
       'callback-return': 1, //避免多次调用回调什么的
       'comma-spacing': 0, //逗号前后的空格
       'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
       complexity: [0, 11], //循环复杂度
       'computed-property-spacing': [0, 'never'], //是否允许计算后的键名什么的
       'consistent-return': 0, //return 后面是否允许省略
       'constructor-super': 0, //非派生类不能调用super，派生类必须调用super
       curly: [2, 'all'], //必须使用 if(){} 中的{}
       'default-case': 0, //switch语句最后必须有default
       'dot-location': 0, //对象访问符的位置，换行的时候在行首还是行尾
       'dot-notation': [
         0,
         {
           allowKeywords: true
         }
       ], //避免不必要的方括号
       'eol-last': 0, //文件以单一的换行符结束
       'func-names': 0, //函数表达式必须有名字
       'func-style': [0, 'declaration'], //函数风格，规定只能使用函数声明/函数表达式
       'generator-star-spacing': 0, //生成器函数*的前后空格
       'guard-for-in': 0, //for in循环要用if语句过滤
       'handle-callback-err': 0, //nodejs 处理错误
       'id-length': 0, //变量名长度
       'init-declarations': 0, //声明时必须赋初值
       'key-spacing': [
         0,
         {
           beforeColon: false,
           afterColon: true
         }
       ], //对象字面量中冒号的前后空格
       'lines-around-comment': 0, //行前/行后备注
       'max-depth': [0, 4], //嵌套块深度
       'max-nested-callbacks': [0, 2], //回调嵌套深度
       'max-params': [0, 3], //函数最多只能有3个参数
       'max-statements': [0, 10], //函数内最多有几个声明
       'new-parens': 2, //new时必须加小括号
       'object-curly-spacing': [0, 'never'], //大括号内是否允许不必要的空格
       'object-shorthand': 0, //强制对象字面量缩写语法
       'one-var': 0, //连续声明
       'operator-assignment': [0, 'always'], //赋值运算符 += -=什么的
       // 'operator-linebreak': [2, 'after'], //换行时运算符在行尾还是行首
       'padded-blocks': 0, //块语句内行首行尾是否要空行
       'prefer-const': 0, //首选const
       'prefer-spread': 0, //首选展开运算
       'prefer-reflect': 0, //首选Reflect的方法
       'quote-props': [0, 'always'], //对象字面量中的属性名是否强制双引号
       radix: 2, //parseInt必须指定第二个参数
       'id-match': 0, //命名检测
       'require-yield': 0, //生成器函数必须有yield
       'sort-vars': 0, //变量声明时排序
       'space-after-keywords': [0, 'always'], //关键字后面是否要空一格
       'space-before-blocks': [0, 'always'], //不以新行开始的块{前面要不要有空格
       'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
       'space-in-parens': [0, 'never'], //小括号里面要不要有空格
       'space-infix-ops': 0, //中缀操作符周围要不要有空格
       'space-return-throw-case': 0, //return throw case后面要不要加空格
       'space-unary-ops': [
         0,
         {
           words: true,
           nonwords: false
         }
       ], //一元运算符的前/后要不要加空格
       'spaced-comment': 0, //注释风格要不要有空格什么的
       strict: 2, //使用严格模式
       'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
       'valid-jsdoc': 0, //jsdoc规则
       'valid-typeof': 2, //必须使用合法的typeof的值
       'vars-on-top': 2, //var必须放在作用域顶部
       'wrap-iife': [2, 'inside'], //立即执行函数表达式的小括号风格
       'wrap-regex': 0, //正则表达式字面量用小括号包起来
       yoda: [2, 'never'], //禁止尤达条件
       // ry-eslint-old-add
       // indent: [
       //   2,
       //   2,
       //   {
       //     SwitchCase: 1
       //   }
       // ], //缩进风格
       'no-whitespace-before-property': 2, //链式允许多空格
       'no-trailing-spaces': 2, //一行结束后面不要有空格
       'no-undef': 1, //不能有未定义的变量
       'no-irregular-whitespace': 2, //不能有不规则的空格
       'no-multi-spaces': 2, //不能用多余的空格
       'no-unused-vars': [
         2,
         {
           vars: 'all',
           args: 'after-used'
         }
       ], //不能有声明后未被使用的变量或参数
       // 'no-param-reassign': 2, //禁止给参数重新赋值
       'max-len': 0, //字符串最大长度
       'no-self-assign': 0, //自己给自己赋值
       'import/extensions': 0, // file extension
       'camelcase': 0, //强制驼峰法命名
       "import/no-unresolved": 0, // handle webpack alias , unable to resolve the path
       "import/first": 0,
       'vue/no-side-effects-in-computed-properties': 0, // 禁止在计算属性中对属性修改
       'new-cap': 0, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
       'import/prefer-default-export': 'off',
       'no-new': 0, //禁止在使用new构造一个实例后不赋值
       'prefer-template': 2,//此规则旨在标记+运算符对字符串的使用
       'global-require':0,
   }
   ```

3. 如果过项目中个别代码无须格式化则在根目录创建.prettierignore文件进行配置

   ```json
   /dist/*
   .local
   .output.js
   /node_modules/**
   
   **/*.svg
   **/*.sh
   
   /public/*
   ```

4. 如果在项目中eslint规范和prettier格式化冲突须执行npm i eslint-plugin-prettier eslint-config-prettier -D

   1. 在eslintrc中进行配置plugin:prettier/recommended后面的会覆盖前面的规则

      ```json
        "extends": [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:prettier/recommended"
        ],
      ```

5. 在vscode中须下载Prettier插件并在设置中保存自动格式化才能实现自动保存格式化

   ![image-20221206184650695](C:\Users\wmq39\AppData\Roaming\Typora\typora-user-images\image-20221206184650695.png)

<img src="C:\Users\wmq39\AppData\Roaming\Typora\typora-user-images\image-20221206184715491.png" alt="image-20221206184715491" style="zoom:100%;" />

6.可以在packge.json中配置命令格式化所有文件  "prettier": "prettier --write ."

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "prettier": "prettier --write ."
  },
```

在控制台中执行npm run prettier就可以一次性全部格式化

### 1.4.使用husxky+ lint-staged  完成规范化提交


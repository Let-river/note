
@[toc]
##### javascript 语言核心定义的类

数组类(Array)、函数类(Function)、日期类(Date)、正则类(RegExp)、错误类（Error）


##### null 与 undefined

null为关键字，通常认为null是它自有类型的唯一一个成员，表示数字、字符串、和对象“无值”的。typeof预算结果为字符串“object”，也就是说，可以将null认为是一个特殊的对象值，含义是“非对象”。

undefined是预定义的全局变量，它的值就是“未定义”。typeof预算结果为字符串“undefined”，表明这个值是这个类型的唯一成员。


##### 全局对象（golbal object）

全局对象在Javascript中有着重要的用途：全局对象的属性是全局定义的符号，Javascript程序可以直接使用。

当javascript解释器启动时（或者浏览器加载新页面的时候），他将创建一个新的全局对象，并给它一组定义的初始属性：
- 全局属性，比如undefined、Infinity和NaN
- 全局函数，比如isNaN()、parseInt（）和eval    （）
- 构造函数，比如Data()、RegExp()、String（）、Object（）和Array（）
- 全局对象，比如Math和JSON


##### 进制转换

其它转十进制：parseInt(字符串,进制)

十进制转其它：数字.toString(进制)


##### 控制自己输出小数点位置和有效数字位数，或者决定是否需要指数计数法

toFixed()根据小数点后的指定位数将数字转换为字符串

toExponential()使用指数计数法将数字转换为指数形式的字符串，其中小数点前只有一位，小数点后的位数则由参数指定

toPrecision()根据指定的有效数字位数将数字转换成字符串。如果有效数字的位数小于数字整数部分的位数，则转换成指数形式。


##### 对象转换成原始值

toString（）的作用是返回一个反应这个对象的字符串。
很多类定义了特定版本的toString（）方法：
数组类的toString（）方法将每个数组元素转换为一个字符串，并在元素之间添加逗号后合并成结果字符串。
函数类的toString()方法返回这个函数的实现定义的表示方式（实际上，这里的实现方式通常是将用户定义的函数转换为Javascript源代码字符串）。
日期类定义的toString（）方法返回一个可读的（可被Javascript解析的）日期和时间字符串。
RegExp类定义的toString（）方法将RegExp对象转换为表示正则表达式直接量的字符串。

valueOf()这个方法的任务并未详细定义：如果存在任意原始值，它就默认将对象转换为表示它的原始值。对象是复合值，而且大多数对象无法真正表示为一个原始值，因此默认的valueOf（）方法简单的返回对象本身，而不是返回一个原始值。
数组、函数和正则表达式简单地继承了这个默认方法，调用这些类型的实例的valueOf()方法只是简单返回对象本身。
日期类定义的valueOf（）方法会返回它的一个内部表示1970年1月1日以来的毫秒数。（获取时间戳）


对象到字符串的转换步骤：

- 如果对象具有toString（）方法，则调用这个方法。如果它返回一个原始值，Javascript将这个值转换为字符串（如果不是字符串），并返回这个字符串结果。

- 如果对象没有toString（）方法，或者这个方法并不返回一个原始值，那么Javascript会调用valueOf（）方法。如果存在这个方法，则Javascript调用它。如果返回值是原始值，Javascript将这个值转换为字符串（如果不是字符串），并返回这个字符串结果。

- 否则，Javascript无法从toString（）或valueOf（）获得一个原始值，此时它将抛出一个类型错误异常。

对象到数字的转换步骤（与上做了相同的事，只是会先尝试使用valueOf（）方法）：

- 如果对象具有valueOf（）方法，后者返回一个原始值，则Javascript将这个原始值转换为数字（如果需要的话）并返回这个数字

- 否则，如果对象具有toString（）方法，后者返回一个原始值，则Javascript将其转换并返回

- 否则，Javascript抛出一个类型错误异常



##### 使用var或不使用声明全局变量

当声明一个Javascript全局变量时，实际上是定义了全局对象的一个属性。
当使用var声明一个变量时，创建的这个属性是不可配置的，也就是说这个变量无法通过delete运算符删除。
在非严格模式下，给一个未声明的变量赋值，Javascript会自动创建一个全局变量。以这种方式创建的变量是全局对象的正常的可配置属性，并可以删除。

局部对象可以当作是跟函数调用相关的某个对象的属性。ECMAScript 3规范中称该对象为“调用对象”，ECMAScript 5规范称为“声明上下文对象”。


##### 表达式

表达式在Javascript中是短句，那么语句就是JavaScript整句或命令。

表达式计算出一个值，但语句用来执行以使某件事发生。

1. 原始表达式，原始表达式是表达式的最小单位--它们不再包含其它表达式。Javascript中的原始表达式包含常量或直接量、关键字和变量。

2. 对象和数组的初始化表达式

  数组的初始化表达式是通过一对方括号隔开的列表构成。数组初始化表达式中的元素初始化表达式也可以是数组初始化表达式。
	
  对象初始化表达式和数组初始化表达式非常相似，只是方括号被花括号代替，并且每个子表达式都包含一个属性名和一个冒号作为前缀。对象直接亮也可以嵌套。
	
3. 函数定义表达式，一个典型的函数定义表达式包含关键字function，跟随其后的是一对圆括号，括号内是一个以逗号分隔的列表，列表包含有0个或多个标识符（参数名），然后再跟随一个由花括号包裹的Javascript代码段（函数体）

4. 属性访问表达式，属性访问表达式运算符得到一个对象属性或一个数组元素的值。两种语法：

	一个对象表达式后跟随一个句点和标识符
	
	一个对象表达式后跟随一个方括号，方括号内饰另外一个表达式
	
5. 调用表达式

6. 对象创建表达式，对象创建表达式创建一个对象并调用一个函数（这个函数称做构造函数）初始化新对象的属性。

##### 运算符

左值：表达式只能出现在赋值运算符的左侧。在javascript中，变量、对象属性和数组元素均是左值。ECMAscript规范允许内置函数返回一个左值，但自定义的函数不能返回。

运算符的副作用：前后的表达式运算会相互影响。赋值运算符就是最明显的一个例子：如果给一个变量或属性赋值，那么使用这个变量或属性的表达式的值都会发生改变。比如，‘++’、‘--’、‘delete’

```
	b=(a++)+a;
```

	
一元算术运算符：

	一元加法（+）、一元减法（-）、递增（++）、递减（--）
	
其他一元：按位求反（~）、逻辑非（!）、删除属性（delete）、检测操作数类型（typeof）、返回undefined值（void)


逻辑与的三层理解：
	
	第一层理解，当操作数都是布尔值的时候，“&&” 对两个值执行布尔与（AND）操作，只有在第一个操作数和第二个操作数都是true的时候，它才返回true。
	
	第二层理解，“&&”可以对真值和假值进行布尔与（AND）操作。如果两个操作数都是真值，那么返回一个真值。
	
	第三层理解，运算符首先计算左操作数的值，如果计算结果是假值，那么整个表达式的结果一定也是假值，因此“&&”这时简单地返回左操作数的值，不会对右操作数进行计算。
	反过来讲，如果左操作数的计算结果是真值，“&&”运算符将计算右操作数的值并将其返回作为整个表达式的计算结果。
	
	
表达式计算：eval()只有一个参数。如果传入的参数不是字符串，它直接返回这个参数。如果是字符串，它会把字符串当成javascript代码进行编译，如果编译失败则抛出一个语法错误异常。如果编译成功，则开始执行这段代码，并返回字符串中最后一个人表达式或语句的值，如果最火一个表达式或语句没有值，则返回undefined。
（关于eval()最重要的是，它使用了调用他的变量作用域环境。）



void 运算符（操作数可以是任意类型）：操作数会照常计算，但忽略计算结果并返回undefined。
```
	<a href="javascript:void window.open();">打开一个新窗口</a>
```

逗号运算符（,）：二元运算符，操作数可以是任意类型。它首先计算左操作数（结果被忽略），然后计算右操作数，最后返回右操作数的值。
	
	
##### 语句

JavaScript程序无非就是一系列可执行语句的集合。默认情况下，JavaScript解释器依照语句的编写顺序依次执行。

表达式语句（赋值和函数调用）与声明语句（声明变量和定义新函数）。

表达式在Javascript中是短句，那么语句就是JavaScript整句或命令。

表达式计算出一个值，但语句用来执行以使某件事发生。

”使某件事发生“的一个方法是计算带有副作用的表达式（赋值和函数调用）;
另一个方法是改变语句的默认执行顺序（条件语句、循环语句和跳转语句（break、return、和throw））

1.表达式语句：
	
	具有副作用的表达式是JavaScript中最简单的语句：
	
	赋值语句
	递增和递减运算符
	delete运算符
	函数调用
	
2.复合语句和空语句

	逗号运算符可以将几个表达式连接在一起，形成一个表达式。
	同样，花括号也可以将多条语句括起来，形成一条复合语句（使用在JavaScript中任何希望使用一条语句的地方）。
	
	Javascript执行空语句时不会执行任何操作，实践证明，当创建一个具有空循环体的循环时，空语句有时是很用的：
	
```
  // 初始化一个数组
  for(var i=0; i<a.length; a[i++] = 0) /* empty */ ;
```
	
3.声明语句

	var 语句用来声明一个或多个变量
	
	funtion 用来定义函数

4.条件语句
	
	条件语句是通过判断指定表达式的值来决定执行还是跳过某些语句。
	
	if/else 语句
	switch 语句（当所有分支都依赖于同一个表达式，case指明执行的起点（按照”===“判断），break指明终点）
	
5.循环
	
while 是一个基本循环语句
		
```
  // 输出 0~9
  var count = 0;
  while(count < 10){
    console.log(count);
    count++;
  }
```
	
do/while 语句，执行一次后判断是否继续执行
		
```
  var _arr = [1,2,3], i=0;
  do{
    console.log(_arr[i])
  } while( ++i < _arr.length); // 分号结尾
```
for 语句提供了一种比while语句更加方便的循环控制结构。（在使用 continue 语句时，while循环和for并不等价）
		
```
  // 遍历链表数据结构，并返回链表中的最后一个对象（也就是第一个不包含next属性的对象）
  funtion tail(o){
    for(; o.next; o=o.next) /* empty */ ;
    return o;
  }
```
for/in 语句枚举属性
		
```
  // 将所有对象属性复制至一个数组中
  var o = {x:1, y:2, z:3};
  var a = [], i = 0;
  for(a[i++] in o) /* empty */ ;
```
		
6.跳转

	break 语句跳转到循环或其他语句的结束
	
	continue 语句是终止本次循环的执行并开始下一次循环的执行
	
	JavaScript 中的语句可以命名或带有标签，break和continue可以标识目标循环或者其他语句标签
	
	return 语句让解释器跳出函数体的执行，并提供本次调用的返回值。
	
	throw 语句触发或者”抛出“一个异常，通常与try/catch/finally语句一同使用。
	
6.1 标签语句

语句是可以添加标签的，标签是由语句前的标识符和冒号组成
	
```
  mainloop: while(token != null){
    // ...
    continue mainloop; // break和continue是JavaScript中唯一可以使用语句标签的语句。
    // ...
  }
```
	
	标签的命名空间和变量或函数的命名空间是不同的。
	
	一个语句标签不能和它内部的语句标签重名，但在两个代码段不相互嵌套的情况下是可以出现同名的语句标签的。
	
	带有标签的语句还可以带有标签，也就是说，任何语句可以有很多个标签。
	
6.2 break 语句
	
	单独使用break语句的作用是立即退出最内层的循环或switch语句（跳出非最内层时和标签一起用）
	
	当break和标签一块使用时（不可换行），程序将跳转到这个标签所标识的语句块的结束，或者直接终止这个闭合语句块的执行
	
	注意：不管break语句带不带标签，它的控制权都无法越过函数的边界。
	
6.3 continue 语句 page108

	结束本次循环，转而执行下一次循环
	
	当continue和标签一块使用时（不可换行），可以跳出多层次嵌套的循环体逻辑
	
6.4 return 语句
		
	只能在函数体内出现
	
6.5 throw 语句
		
	抛出异常
	
6.6 try/catch/finally语句

	JavaScript的异常处理机制
	
	catch 为块级作用域
	
7 其他语句类型

7.1 with 语句 （严格模式下禁止使用）
	
with语句用于临时扩展作用域链：
	
```
  with(object)
  statement
```
	
这条语句将object添加到作用域链的头部，然后执行statement，最后把作用域链恢复到原始状态
	
```
  with(document.form[0]){
    // 直接访问表单元素，例如
    name.value = "";
    address.value = "";
  }

```
	不推荐使用with，使用后代码将变得难以优化，并使程序运行得更慢
	
	等价：
	
```
  var f = document.forms[0];
  f.name.value = "";
  f.address.value = "";

```
	
	
	with 语句可模拟块级作用域
	
	
7.2 debugger 语句

debugger语句通常什么也不做。然而，当调试程序可用并运行的时候，JavaScript解释器将会（非必需）以调试模式运行。

实际上，这条语句用来生成一个断点，这时可以使用调试器输出变量的值、检查调用栈等。

只有在调试器已经运行的中，这条语句才会真正产生一个断点
	
	
7.3 “use strict”

这是 ECMAScript 引入的一条指令。（指令不是语句，但非常接近语句）

使用“use strict”指令的目的是说明后续的代码将会解析为严格代码。

严格模式和非严格模式之间的区别如下：

- 在严格模式下禁止使用with语句

- 在严格模式中，所有的变量都要先声明，如果给一个未声明的变量、函数、函数参数、catch从句参数或全局对象的属性赋值，将获抛出一个引用错误类型。（非严格模式下，这种隐式声明的全局变量的方法是给全局对象新添加一个新属性）

- 在严格模式中，调用的函数（不是方法）中的一个this值是undefined。（非严格模式下，调用函数的中的this值总是全局对象）

- 在严格模式下，当通过call()或apply()来调用函数时，其中的this值就是通过call()或apply()传入的第一个参数（非严格模式下，null和undefined值被全局对象和转化为对象的非对象值所替代）

- 在严格模式中，给只读属性赋值和给不可扩展的对象创建新成员都将抛出一个类型错误异常（非严格模式下，只是简单的操作失败，不会报错）

- 在严格模式中，传入eval()的代码不能在调用程序所在的上下文中声明变量或定义函数。（非严格模式下可以这么做。相反，变量和函数的定义是在eval()创建的新作用域中，这个作用域在eval()返回时就弃用了）

- 在严格模式下，函数里的arguments对象拥有传入函数值的静态副本。（非严格模式下，arguments对象里的数组元素和函数参数都是指向同一个值的引用。）

- 在严格模式下，当delete运算符后跟随非法标识符（比如变量、函数、函数参数）时，将会抛出一个语法错误异常。

- 在严格模式下，试图删除一个不可配置的属性将会抛出一个类型错误异常

- 在严格模式下，在一个对象直接量中定义两个或多个同名属性将产生一个语法错误

- 在严格模式下，不允许使用八进制整数直接量（以0为前缀，而不是0x为前缀）

- 在严格模式下，标识符eval和arguments当做关键字，它们的值是不能更改的。

- 在严格模式中限制了对调用栈的检测能力，在严格模式的函数中，arguments.caller和arguments.callee都会抛出一个类型错误异常。严格模式的函数同样具有caller和arguments属性，当访问这两个属性时将抛出类型异常。




##### 对象

三类对象：

- 内置对象，是由ECMAScript规范定义的对象或类。（数组、函数、日期、正则和错误）

- 宿主对象，是由Javascript解释器所嵌入的宿主环境（比如web浏览器）定义的。客户端JavaScript中表示网页结果的HTMLElement对象均是宿主对象。

- 自定义对象，是由运行中的JavaScript代码创建的对象
		
两类属性：

- 自有属性，是直接在对象中定义的属性

- 继承属性，是在对象的原型对象中定义的属性


出了名和值之外，每个属性还有一些与之相关的值，称为“属性特性”：

- 可写，表明是否可以设置该属性的值

- 可枚举，表明是否可以通过for/in循环返回该属性

- 可配置，表明是否可以删除或修改该属性


每个对象除了包含属性之外，还拥有三个相关的“对象特性”：

- 对象的原型，指向另一个对象，本对象的属性继承自它的原型对象

- 对象的类，是一个标识对象类型的字符串

- 对象的扩展标记，指明了是否可以向该对象添加新属性


每一个对象（除null外）都和另一个对象（即原型）相关联。

- 所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过JavaScript代码Object.prototype获的原型对象的引用。

- 通过关键字new和构造函数调用创建的对象的原型就是构造函数的prototype属性的值。

没有原型的对象为数不多，Object.peototype就是其中之一。它不继承任何属性。
	

1. 对象的创建：

可以通过对象直接量、关键字new和 Object.create()函数来创建对象


new运算符创建并初始化一个新对象。关键字new后跟随一个函数调用。（这里的函数称做构造函数，用以初始化一个新创建的对象）

```
  var o = new Object(); // 创建一个空对象，和{}一样

  var a = new Date();
```

Object.create()方法创建了一个新对象，其中第一个参数就是这个对象的原型。第二个参数用以对对象的属性进行进一步描述。

Object.create()是一个静态函数，而不是提供给某个对象调用的方法

```
  var o2 = Object.create(null); // o2不继承任何属性和方法
  var o3 = Object.create(Object.prototype);  // 创建一个空对象，和{}与new Object()一样
```
	
2. 属性的查询和设置

通过点（.）或方括号（[]）运算符


3. 删除属性

delete 运算符

让人意外的是，delete只是断开属性和宿主对象的联系，而不是去操作属性中的属性。

	
4. 检测属性

可以通过in运算符、`hasOwnPreperty()`和`propertyIsEnumerable()`方法来完成这个工作，甚至仅通过属性查询也可以做到这一点

- in运算符的左侧是属性名（字符串），右侧是对象。如果对象的自有属性或继承属性中包含这个属性则返回true。

- 对象的`hasOwnProperty()`方法用来检测给定的名字是否是对象的自有属性。对于继承属性他将返回false。

- 对象的`propertyIsEnumerable()`方法是`hasOwnProperty()`方法的增强版，只有检测到时自有属性且这个属性可枚举时才返回true。

- 另一种更简便的方法是使用“!==”判断一个属性是否undefined


5. 枚举属性

for/in 遍历可枚举的属性（包括自有属性和继承的属性）

`Object.keys()` 返回一个数组，这个数组由对象中可枚举的自有属性的名称组成

`Object.getOwnPropertyNames()` 与 `Object.keys()` 类型，只是它返回对象的所有自有属性的名称，而不仅仅是可枚举的属性。

	
6. 属性的getter和setter

我们知道，对象属性是由名字、值和一组特性构成的。在es5中，属性值可以用一个或两个方法代替，这两个方法就是getter和setter。

由getter和setter定义的属性称做“存取器属性”，它不同于“数据属性”，数据属性只有一个简单的值。


当程序查询存取器属性的值时，JavaScript调用getter方法（无参数）。

当程序设置一个存取器属性的值时，JavaScript调用setter方法，将赋值表达式右侧的值当做参数传入setter。（忽略返回值）

	
和数据属性不同，存取器属性不具有可写性。

- 如果属性同时具有getter和setter，那么它是一个读/写属性。
- 若只有getter，那么它是一个只读属性。
- 若只有setter，那么它是一个只写属性。

	
```
  var p = {
    // x,y是普通的可读写数据属性
    x: 1.0,
    y: 1.0,

    get r(){
      return Math.sqrt(this.x*this.x + this.y*this.y);
    },
    set r(newValue){
      var oldValue = Math.sqrt(this.x*this.x + this.y*this.y);
      var ratio = newValue/oldValue;
      this.x *= ratio;
      this.y *= ratio;
    }	
  }

  p.r  // 调用 getter 方法
  p.r = 3; // 调用 setter 方法
```

7. 属性的特性

除了包含名字和值之外，属性还包含了一些标识他们可写、可枚举和可配置的特性。

在ECMAScript 3中，这些特性无法被设置，所有创建的属性都是可写的、可枚举的和可配置的，且无法对这些特性做修改。


在本节中，我们将存取器属性的getter和setter方法看成是属性的特性。按照这个逻辑，我们可以把数据属性的值同样看做属性的特性。

因此，可以认为一个属性包含一个名字和4个特性，值（value）、可写性（writable）、可枚举性（enumerable）、可配置性（configurable）。

存取器属性不具有值（value）特性和可写性（enumerable），他们的可写性是由setter方法存在与否决定的。

因此存取器属性的4个特性是读取（get）、写入（set）、可枚举性、和可配置性。


为了实现属性特性的查询和设置操作，ECMAScript 5中定义了一个名为“属性描述符”的对象，这个对象代表那4个特性。

调用 `Object.getOwnPropertyDescriptor()` 可以获取某个对象特定自有属性的属性描述符：
```
  Object.getOwnPropertyDescriptor({x:'1'},'x');
  // {value: '1', writable: true, enumerable: true, configurable: true} 
```

通过 ‘Object.defineProperty()’ 设置自有属性的特性，参数分别为：要修改的对象、要创建或修改的属性名称以及属性描述符对象
```
  var o = {};
  Object.defineProperty(o,"x",{
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
  })

  o.x;  // => 1
  Object.keys(o); // => [] 属性存在，但不可枚举

  Object.defineProperty(o,'x',{ writable: false }); // 修改属性 x 的特性，让它变为只读

  o.x = 2; // 操作失败，但不报错（严格模式下抛出类型错误异常）
  o.x; // => 1

  Object.defineProperty(o,'x',{ value: 2 }); // 因为属性是可配置的，所以可以通过这种方式对它进行修改
  o.x; // => 2

  Object.defineProperty(0,'x',{ get: function(){ retrun 0;}}); // 将属性 x 从数据属性修改为存取器属性
  o.x; // => 0
```

如果要同时修改或创建多个属性，则需要使用 `Object.defineProperties()`方法，第一个参数是要修改的对象，第二个参数是一个映射表，它包含要新建或创建的属性的名称，以及它的属性描述符。
```
  var p = Object.defineProperties({},{
    x: { value:1, writable: true, enumerable: true, configurable:true },
    y: { value:2, writable: true, enumerable: true, configurable:true },
    r: { 
      get: function(){
        retrun Math.sqrt(this.x*this.x + this.y*this.y);
      },
      enumerable: true,
      configurable:true 
    }
  })
```
	
任何岁 `defineProperty()` 或 `defineProperties()` 违反规则的使用都会抛出类型错误异常，完整的规则如下：

- 如果对象是不可扩展的，则可以编辑已有的自有属性，但不能给它添加新属性。

- 如果属性是不可配置的，则不能修改它的可配置性和可枚举性。

- 如果存取器是不可配置的，则不能修改其getter和setter方法 ，也不能将它转为数据属性。

- 如果数据属性是不可配置的，则不能将它转换为存取器属性。

- 如果数据属性是不可配置的，则不能将它的可写性从false修改为tru，但可以从true修改为false。

- 如果数据属性是不可配置且不可写的，则不能修改它的值。然而可配置但不可写属性的值是可以修改的（实际上是先将它标记为可写的，然后修改它的值，最后转换为不可写的）。

```
  /**
   * 复制属性的特性
   */
   Object.defineProperty(Object.prototype,'extend',{
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o){
      var names = Object.getOwnPropertyNames(o); // 得到所有的自有属性，包括不可枚举属性

      // 遍历它们
      for(var i = 0; i < names.length; i++){
        if (names[i] in this) continue; // 如果属性已经存在，则跳过
        var desc = Object.getOwnPropertyDescriptor(o,names[i]); // 获取 o 中的属性描述符
        Object.defineProperty(this, names[i], desc); // 用它给 this 创建一个属性
      }
    }
  })
```

8. 对象的三个属性

每一个对象都有与之相关的原型、类和可扩展性。
	
8.1 原型属性

对象的原型属性是用来继承属性的，这个属性非常重要，以至于我们经常把“o的原型属性”直接叫做“o的原型”	

在ECMAScript 5 中，将对象作为参数传入Object.getPrototypeOf()可以查询它的原型。

使用 `isPrototypeOf()` 方法检测一个对象是否是另一个对象的原型（或处于原型链中），例如，可以通过 `p.isPrototypeOf(o)` 来检测p是否是o的原型。

8.2 类属性

对象的类属性是一个字符串，用以表示对象的类型信息。

es3 和 es5 都未提供设置这个属性的方法，并且只有一种简介的方法可以查询它。默认的 `toString()` 方法（继承自Object.prototype）返回了如下种格式的字符串：

  [object class]

```
  /* classof()函数 */
  function classof(o){
    if (o === null) retrun "Null";
    if (O === undefined) retrun "Undefined";
    retrun Object.prototype.toString.call(o).slice(8,-1);
  }
```

对于自定义的类来说，没办法通过类属性来区分对象的类。都是 “Object”
	

8.3 可扩展性

对象的可扩展性用以表示是否可以给对象添加新属性。

ECMAScript 5 定义了用来查询和设置对象可扩展性的函数。


通过将对象传入 `Object.isExtensible()` 来判断该对象是否是可扩展的。

如果想将对象转换为不可扩展的，需要调用 `Object.preventExtensions()`将待转换的对象作为参数传进去。
（注意：一旦将对象转换为不可扩展的，就无法再将其转换为可扩展的了。同样需要注意的是，preventExtensions只影响到对象本身的可扩展性。如果给一个不可扩展的对象的原型添加属性，这个不可扩展的对象同样会集成这些新属性）

可扩展属性的目的是将对象“锁定”，以避免外界的干扰。


`Object.seal()`将对象设置为不可扩展的，同时将对象的所有自有属性都设置为不可配置的。也就是说，不能给这个对象添加新属性，而且它已有的属性也不能删除或配置，不过它已有的可写属性依然可以设置。

可以使用`Object.isSealed()`来检测对象是否封闭，对于那些已经封闭起来的对象是不能解封的。


`Object.freeze()`将更严格的锁定对象--“冻结”。除了将对象设置为不可扩展的和将其属性设置为不可配置的之外，还将它自有的所有数据属性设置为只读得的的（如果对象的存取器属性具有setter方法，存取器属性将不受影响，仍可以通过给属性赋值调用它们）

使用 `Object.isFrozen()`来检测对象是否冻结。


`Object.preventExtensions()`、`Object.seal()` 和 `Object.freeze()` 都返回传入的对象，也就是说，可以通过函数嵌套的方式调用它们：
```
  // 创建一个封闭对象，包括一个冻结的原型，和一个不可枚举的属性
  var o = Obejct.seal(Object.create(Object.freeze({x:1}),{y: {value: 2, wirtable: true}}));
```

	
9. 序列化对象

对象序列化是指将对象的状态转换为字符串，也可将字符串还原为对象。

ECMAScript 5 提供了内置函数 `JSON.stringify()` 和 `JSON.parsre()` 用来序列化和还原JavaScript对象。

这些方法都使用JSON作为数据交换格式，JSON的全程是“JavaScript Object Notation” -- JavaScript对象表示法。

JSON的语法是JavaScript语法的子集，它并不能表示JavaScript里的所有值。支持对象、数组、字符串、无穷大数字、true， false和null，并且它们可以序列化和还原。

NaN、Infinity和-Infinity序列化的结果是null，日期对象序列化的结果是ISO格式的日期字符串（参照Date.toJSON（）函数） ，但JsoN.parse（）依然保留它们的字符串形态，而不会将它们还原为原始日期对象。

函数、RegExp， Error对象和undefined值不能序列化和还原。

JSON.stringify（）只能序列化对象可枚举的自有属性。对于一个不能序列化的属性来说，在序列化后的输出字符串中会将这个属性省略掉。

JsoN.stringify（）和JSON.parse（）都可以接收第二个可选参数，通过传入需要序列化或还原的属性列表来定制自定义的序列化或还原操作。

10. 对象方法

10.1 `toString()`方法

`toString()`方法没有参数，它将返回一个表示调用这个方法的对象值的字符串。
	
在需要将对象转换为字符串的时候， JavaScript都会调用这个方法。比如，当使用“+”运算符连接一个字符串和一个对象时或者在希望使用字符串的方法中使用了对象时都会调用toString（）。
	
10.2 `toLocalString()`方法

除了基本的`toString()`方法之外，对象都包含`toLocalString()`方法，这个方法返回一个表示这个对象的本地化字符串

Object中默认的`toLocalString()`方法并不做任何本地化自身的操作，它仅调用`toString()`方法并返回对应值。

Date和Number类对`toLocalString()`方法做了定制，可以用它对数字、日期和时间做本地化的转换。

Array类的`toLocalString()`方法和`toString()`方法很像，唯一的不同是每个数组元素会调用`toLocalString()`方法转换为字符串，而不是调用各自的`toString()`方法。

10.3  `toJSON()`方法

Object.prototype实际上没有定义`toJSON()`方法，但对于需要执行序列化的对象来说， `JSON.stringify()`方法会调用`toJSON()`方法。如果在待序列化的对象中存在这个方法，则调用它，返回值即是序列化的结果，而不是原始的对象。
	
10.4 `valueOf`方法

`valueOf`方法和`toString()`方法非常类似，但往往当JavaScript需要将对象转换为某种原始值而非字符串的时候才会调用它，尤其是转换为数字的时候。
	
如果在需要使用原始值的上下文中使用了对象， JavaScript就会自动调用这个方法。
	

##### 数组

数组是值的有序集合。每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为索引

JavaScript数组是无类型的：数组元素可以是任意类型，并且同一个数组中的不同元素也可能有不同的类型。

数组的元素甚至也可能是对象或其他数组，这允许创建复杂的数据结构，如对象的数组和数组的数组。

JavaScript数组的索引是基于零的32位数值：

  第一个元素的索引为0，最大可能的索引为4 294 967 294 （232-2），数组最大能容纳4 294 967 295个元素。

JavaScript数组是动态的：

  根据需要它们会增长或缩减，并且在创建数组时无须声明一个固定的大小或者在数组大小变化时无须重新分配空间。

JavaScript数组可能是稀疏的：

  数组元素的索引不一定要连续的，它们之间可以有空缺。

每个JavaScript数组都有一个1ength属性。

- 针对非稀疏数组，该属性就是数组元素的个数。

- 针对稀疏数组， length比所有元素的索引要大。


JavaScript数组是JavaScript对象的特殊形式，数组索引实际上和碰巧是整数的属性名差不多。通常，数组的实现是经过优化的，用数字索引来访问数组元素一般来说比访问常规的对象属性要快很多。

	
1. 创建数组

使用数组直接量是创建数组最简单的方法，在方括号中将数组元素用逗号隔开即可。

数组直接量中的值不一定要是常量；它们可以是任意的表达式：

```
  var base = 1024;
  var table = [base, base+1, base+2, base+3];
```

它可以包含对象直接量或其他数组直接量：
```
  var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];
```

如果省略数组直接量中的某个值，省略的元素将被赋予undefined值：
```
  var count = [1,,3]; //数组有3个元素，中间的那个元素值为undefined
  var undefs =[,,]; //数组有2个元素，都是undefined
```
数组直接量的语法允许有可选的结尾的逗号，故`[,,]`只有两个元素而非三个。


调用构造函数`Array()`是创建数组的另一种方法。可以用三种方式调用构造函数。

- 调用时没有参数：
```
  var a = new Array();
```
该方法创建一个没有任何元素的空数组，等同于数组直接量`[]`。

- 调用时有一个数值参数，它指定长度：
```
  var a = new Array(10);
```
当预先知道所需元素个数时，这种形式的`Array()`构造函数可以用来预分配一个数组空间。注意，数组中没有存储值，甚至数组的索引属性，“0”、“1”等还未定义。

- 显式指定两个或多个数组元素或者数组的一个非数值元素：
```
  var a= new Array (5, 4, 3, 2, 1, "testing, testing");
```
以这种形式，构造函数的参数将会成为新数组的元素。使用数组字面量比这样使用`new Array()`构造函数要简单多了。


2. 数组元素的读与写			

使用`[]`操作符来访问数组中的一个元素。
	
数组的特别之处在于，当使用小于2的32次方的非负整数作为属性名时数组会自动维护其length属性值。如上，创建仅有一个元素的数组。然后在索引1、2和3处分别进行赋值。当我们这么做时数组的length属性值变为4。
			
3. 稀疏数组

稀疏数组就是包含从0开始的不连续索引的数组。通常，数组的length属性值代表数组中元素的个数。如果数组是稀疏的，length属性值大于元素的个数。
	
足够稀疏的数组通常在实现上比稠密的数组更慢、内存利用率更高，在这样的数组中查找元素的时间与常规对象属性的查找时间一样长。
	
注意，当在数组直接量中省略值时不会创建稀疏数组。省略的元素在数组中是存在的，其值为 undefined。这和数组元素根本不存在是有一些微妙的区别的。
```
  var al = [,]; 			// 数组是 [undefined, undefined, undefined]
  var a2 = new Array(3);  // 该数组根本没有元素
  0 in a1 				// => true: a1在元素索引0处有一个元素
  0 in a2 				// => false: a2在元素索引0处没有元素
```
		
需要注意的是，当省略数组直接量中的值时（使用连续的逗号，比如`[1,,3]` ，这时所得到的数组也是稀疏数组，省略掉的值是不存在的：
```
  var a1 = [,]; 			// 此数组没有元素，长度是1
  var a2 = [undefined];	// 此数组包含一个值为undefined的元素
  0 in a1					// => false: a1 在元素索引0处没有元素
  0 in a2					// => true: a2 在元素索引0处有一个值为undefined的元素
```
4. 数组长度

每个数组有一个length属性，就是这个属性使其区别于常规的JavaScript对象。
	
5. 数组元素的添加和删除

可以像删除对象属性一样使用delete运算符来删除数组元素;
	
删除数组元素与为其赋undefined值是类似的（但有一些微妙的区别）。注意，对一个数组元素使用delete不会修改数组的length属性，也不会将元素从高索引处移下来填充已删除属性留下的空白。如果从数组中删除一个元素，它就变成稀疏数组。
	
可以简单地设置1ength属性为一个新的期望长度来删除数组尾部的元素
	
`pop()`从尾部删除一个元素

`shift()`从数组头部删除一个元素

`splice()`在数组某个索引处删除、替换和插入元素 
	
6. 数组遍历
	
使用for循环是遍历数组元素最常见的方法：
```
  for(var i=0; i<a.length; i++){
    if (a[i] == undefined) continue; // 跳过 undefined 和不存在的元素
  }
```

```
  for(var i=0; i<a.length; i++){
    if (!(i in a)) continue; // 跳过不存在的元素
  }
```
	
使用for/in循环处理稀疏数组（最好不使用for/in遍历数组）。循环每次将一个可枚举的属性名（包括数组索引）赋值给循环变量。不存在的索引将不会遍历到：
```
  for(var index in sparseArray){
    if( !sparseArray.hasOwnPreperty(index)) continue; // 跳过继承属性

  }
```
	
7. 多维数组
	
JavaScript不支持真正的多维数组，但可以用数组的数组来近似。
	
8. 数组的方法

8.1 ECMAScript 3 中的数组方法

`join()`方法将数组中所有元素都转化为字符串并连接在一起，返回最后生成的的字符串。可指定一个可选的字符串在生成的字符串中来分割数组的各个元素，不指定默认为逗号。

`reverse()`方法将数组中的元素颠倒顺序，返回逆序的数组。（不创建新的数组，而是在原先的数组中重新排列它们）

`sort()`方法将数组中的元素排序并返回排序后的数组。

- 不传参时，数组以字母表顺序排序

- 如果数组包含undefined元素，它们会被排到数组的尾部

- 为了按照其他方式而非字母表顺序进行数组排序，必须给`sort()`方法传递一个比较函数。假设第一个参数应该在前，比较函数应该返回一个小于0的值；第一个参数应该在后，比较函数应该返回一个大于0的值；假设两个值相等（它们的顺序无关紧要），函数应该返回0.

```
  var arr = [33,4,1111,222];
  arr.sort(); // 字母表顺序： 1111,222,33,4
  a.sort(function(a,b){retrun a-b; }); // 数值顺序：4,33,222,1111
```

`concat()`方法创建并返回一个新数组，它的元素包括调用`concat()`的原始数组的元素和每个参数。
```
  var a = [1,2,3];
  a.concat(4, 5);             // 返回[1,2,3,4,5]
  a.concat([4,5]);			// 返回[1,2,3,4,5]
  a.concat([4,5],[6,7]);		// 返回[1,2,3,4,5,6,7]
  a.concat(4, [5,[6,7]]);		// 返回[1,2,3,4,5,[6,7]]
```

`slice()`方法返回指定数组的一个片段或子数组。   
```
  var a = [1,2,3,4,5];
  a.slice(0,3);    // 返回 [1,2,3]
  a.slice(3);      // 返回 [4,5]
  a.slice(1,-1);   // 返回 [2,3,4] 如参数中出现负数，它表示相对于数组中最后一个元素的位置
  a.slice(-3,-2);  // 返回 [3]
```

`splice()`方法是在数组中插入或删除的通用方法。返回一个由删除元素组成的数组，或者如果没有删除元素就返回一个空数组。第一个参数指定了插入和（或）删除的起始位置。第二个参数指定了应该从数组中删除的元素的个数（如果省略，从起始点开始到数组结尾的所有元素都将被删除）。其后的任意个数的参数指定了需要插入到数组中的元素，从第一个参数指定的位置开始插入。
```
  var a = [1,2,3,4,5];
  a.splice(2,0,'a','b'); // 返回[]; a是[1,2,'a','b',3,4,5]
  a.splice(2,2,[1,2],3); // 返回['a','b']; a是[1,2,[1,2],3,3,4,5]

```

`push()`和`pop()` 方法允许将数组当作栈来使用。（两个方法都修改并替换原始数组，并非生成一个新数组）

- `push()`方法在数组的尾部添加一个或多个元素，并返回数组新的长度。

- `pop()`方法删除数组最后一个元素，减小数组长度并返回它删除的值

`unshift()`和`shift()`方法的行为非常类似于`push()`和`pop()`。

- `unshift()`方法在数组头部添加一个或多个元素，并将已经存在的元素移动到更高索引的位置来获得足够的空间，最后返回数组新的长度。（）

- `shift()`方法删除数组的第一个元素并将其返回，然后把所有随后的元素下移一个位置来填补数组头部的空缺

注意，当使用多个参数调用`unshift()`时它的行为令人惊讶。参数是一次性插入的（就像`splice()`方法）而非一次一个地插入。这意味着最终的数组中插入的元素的顺序和它们在参数列表中的顺序一致。而假如元素是一次一个地插人，它们的顺序应该是反过来的。

`toString()`和`toLocalString()`	
		
- 数组和其他JavaScript对象一样拥有`toString()`方法。针对数组，该方法将其每个元素转化为字符串（如有必要将调用元素的`toString()`方法）并且输出用逗号分隔的字符串列表。
注意，输出不包括方括号或其他任何形式的包裹数组值的分隔符。例如：
```
  [1,2,3]. tostring();			// 生成 ‘1，2，3’
  ["a", "b", "c"]. toString();	// 生成 ‘a, b, c’
  [1, [2,'c']]. toString();       // 生成 ‘1，2，c’
```
注意，这里与不使用任何参数调用`join()`方法返回的字符串是一样的。

- `toLocaleString()`是`tostring()`方法的本地化版本。它调用元素的`tolocaleString()`方法将每个数组元素转化为字符串，并且使用本地化（和自定义实现的）分隔符将这些字符串连接起来生成最终的字符串。


8.2 ECMAScript 5 中的数组方法

ECMAScript 5定义了9个新的数组方法来遍历、映射、过滤、检测、简化和搜索数组。

	
`forEach()`方法从头至尾遍历数组，为每个元素调用指定的函数。注意， `forEach()`无法在所有元素都传递给调用的函数之前终止遍历。

- 如果要提前终止，必须把`forEach()`方法放在一个try块中，并能抛出一个异常。如果`forEach()`调用的函数抛出 foreach.break 异常，循环会提前终止：

```
  function foreach(a,f,t) {
    try { a.forEach(f,t); }
    catch(e) {
      if (e === foreach.break) return;
      else throw e;
    }
  }
  foreach.break = new Error("StopIteration");
```

`map()`方法将调用的数组的每个元素传递给指定的函数，并返回一个新数组，它包含该函数的返回值。

`filter()`方法返回的数组元素是调用的数组的一个子集。传递的函数是用来逻辑判断的：该函数返回true或false。如果返回值为true（或能转化为true值），那么传递给判定函数的元素就是这个子集的成员，它将被添加到一个作为返回值的数组中。
注意， `filter()`会跳过稀疏数组中缺少的元素，它的返回数组总是稠密的。

- 压缩稀疏数组的空缺：
  ```
    var dense = sparse.filter(function() { return true; });
  ```
- 压缩空缺并删除undefined和null元素:
  ```
    a= a.filter(function(x) { return x !== undefined && x != null; });
  ```

`every()`和`some()`方法是数组的逻辑判定：它们对数组元素应用指定的函数进行判定，返回true或false。（注意，一旦`every()`和`some()`确认该返回什么值它们就会停止遍历数组元素）

- `every()`方法当且仅当针对数组中的所有元素调用判定函数都返回true，它才返回true；一旦有一个判定函数返回false，它立即返回false。

- `some()`方法当数组中至少有一个元素调用判定函数返回true，他就返回true；并且当且仅当数值中的所有元素调用判断函数都返回false，它才返回false。

注意，根据数学上的惯例，在空数组上调用时， `every()`返回true， `some()`返回false。

`reduce()`和`reduceRight()`方法使用指定的函数将数组元素进行组合，生成单个值。这在函数式编程中是常见的操作，也可称为‘注入’和折叠。

- `reduce()`需要两个参数。第一个是执行化简操作的函数（化简函数的任务就是用某种方法把两个值组合或化简为一个值，并返回化简后的值）。第二个参数（可选）是一个传递给函数的初始值（不传时，将使用数组第一个元素作为初始值）。

  在空数组上，不带初始值参数调用`reduce()`将导致类型错误异常。

  如果调用它的时候只有一个值（数组只有一个元素并且没有指定初始值，或者有一个空数组并且指定一个初始值）`reduce()`只是简单地返回那个值而不会调用化简函数。

- `reduceRight()`的工作原理和`reduce()`一样，不同的是它按照数组索引从高到低（从右到左）处理数组，而不是从低到高。

`indexOf()`和`lastIndexOf()`搜索整个数组中具有给定值的元素，并返回找到的第一个元素的索引（没找到就返回-1）。第一个参数是需要搜索的值，第二个参数是可选的：它指定数组中的一个索引，从哪里开始搜索。



在ECMAScript 5 中可以用`Array.isArray()`函数判断一个未知对象是否为数组。

```
  var isArray = Function.isArray || function(o) {
    return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
  };
```

	
arguments类数组对象和DOM方法返回的类数组对象：

  ```
    function isArrayLike(o) {
      if (o &&                                    // o非null， undefined等
        typeof o === "object" &&				// o是对象	
        isFinite(o.length) &&					// o.length是有限数值
        o.length >= 0 &&						// o.length 为非负数
        o.length === Math.floor(o.length) &&	// o.length 是整数
        o.length < 4294967296 )					// o.length < 2^32
        return true;							// o是类数组对象
      else
        return false;							// o不是类数组对象
      }
  ```
		
多个数组操作

```
  var myArry = {};

  ///集合取交集 
  myArry.intersect = function() {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        var str = arguments[i][j];
        if (!obj[str]) {
          obj[str] = 1;
        } else {
          obj[str]++;
          if (obj[str] == arguments.length) {
            result.push(str);
          }
        } //end else
      } //end for j
    } //end for i
    return result;
  };

  //集合去掉重复  
  myArry.uniquelize = function() {
    var tmp = {},
      ret = [];
    for (var i = 0, j = this.length; i < j; i++) {
      if (!tmp[this[i]]) {
        tmp[this[i]] = 1;
        ret.push(this[i]);
      }
    }

    return ret;
  };
  // 多个数组的并集 
  myArry.union = function() {
    var arr = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        var str = arguments[i][j];
        if (!obj[str]) {
          obj[str] = 1;
          arr.push(str);
        }
      } //end for j
    } //end for i
    return arr;
  };

  //2个集合的差集 在arr不存在 
  myArry.minus = function(arr, arr2) {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = 1;
    }
    for (var j = 0; j < arr2.length; j++) {
      if (!obj[arr2[j]]) {
        obj[arr2[j]] = 1;
        result.push(arr2[j]);
      }
    }
    return result;
  };
```
		
##### 函数
	
函数声明语句并非真正的语句 ECMAScript规范只是允许它们作为顶级语句。它们可以出现在全局代码里，或者内嵌在其他函数中，但它们不能出现在循环、条件判断，或者try/cache/finally以及with语句中。

注意，此限制仅适用于以语句声明形式定义的函数。函数定义表达式可以出现在JavaScript代码的任何地方。

1. 函数属性

函数的length属性是只读属性，它代表函数实参的数量。
	
prototype属性，这个属性是指向一个对象的引用，这个对象成为‘原型对象’。
	
`call()`和`apply()`可以看做事某个对象的方法，通过调用方法的形式来间接调用函数。第一个实参是要调用函数的母对象，它是调用上下文，在函数体内通过this来获得对它的引用。

```
  // 要想以对象o的方法来调用函数f()
  f.call(o, 1, 2);
  f.apply(o, [1,2]);
```

`bind()`方法主要作用就是将函数绑定至某个对象。

```
  function f(y) { return this.x + y; }
  var o={x:1};
  var g = f.bind(o);
  g(2) //=> 3
```

`toString()`方法

`Function()`构造函数定义函数
		
```
  var f = new Function("x", "y", "return x*y;");
```
关于`Function()`构造函数有几点需要特别注意：

- `Function()`构造函数允许JavaScript在运行时动态地创建并编译函数。

- 每次调用`Function()`构造函数都会解析函数体，并创建新的函数对象。

- 最后一点，也是关于`Function()`构造函数非常重要的一点，就是它所创建的函数并不是使用词法作用域，相反，函数体代码的编译总是会在顶层函执行：

```
  var scope = "global";
  function constructFunction() {
    var scope = "local";
    return new Function("return scope"); // 无法捕获局部作用域
  }
  constructFunction()(); // => "global"
```

###### 函数式编程

1. 使用函数处理数组

假设有一个数组，数组元素都是数字，我们想要计算这些元素的平均值和标准差。

直接用for循环 or 函数`map()`和`reduce()`

	
2. 高阶函数

所谓高阶函数（higher-order function）就是操作函数的函数，它接收一个或多个函数作为参数，并返回一个新函数。

3. 不完全函数

4. 记忆

基于闭包

	
##### 类和模块

1. 类和原型

在JavaScript中，类的所有实例对象都从同一个原型对象上继承属性。因此，原型对象是类的核心。
	
2. 类和构造函数

2.1 类的标识
	
使用instanceof运算符来检测对象是否属于某个类
```
  r instanceof Range  // 如果r继承自Range.prototype,则返回true

```
实际上instanceof运算符并不会检查r是否是由`Range()`构造函数初始化而来，而会检查r是否继承自Range.prototype

2.2 constructor
	
每个JavaScript函数（bind方法返回的函数除外）都自动拥有一个prototype属性。这个属性是一个对象，这个对象包含唯一一个不可枚举属性constructor。
constructor属性的值是一个函数对象：
```
  var F = function(){};   // 这是一个函数对象
  var p = F.prototype;	// 这是F相关联的原型对象
  var c = p.constructor;	// 这是与原型相关联的函数
  c === F 				// => true：对任意函数F.prototype.constructor == F
```
注意，如果重写预定义的prototype对象，需要补充constructor属性
		
3. JavaScript中Java式的类继承

在JavaScript中定义类的步骤可以缩减为一个分三步的算法。

第一步，先定义一个构造函数，并设置初始化新对象的实例属性。

第二步，给构造函数的prototype对象定义实例的方法。

第三步，给构造函数定义类字段和类属性。

4. 类的扩充
	
JavaScript中基于原型的继承机制是动态的：对象从其原型继承属性，如果创建对象之后原型的属性发生改变，也会影响到继承这个原型的所有实例对象。这意味着我们可以通过给原型对象添加新方法来扩充JavaScript类。
	
5. 类和属性

5.1 instanceof 运算符
	
左操作数是待检测其类的对象，右操作数是定义类的构造函数。

如果 o 继承自c.prototype，则表达式`o instanceof c`值为true。

这里的继承可以不是直接继承，如果。所继承的对象继承自另一个对象，后一个对象继承自c.prototype，这个表达式的运算结果也是true。

5.2 constructor属性

另一种识别对象是否属于某个类的方法是使用constructor属性。因为构造函数是类的公共标识，所以最直接的方法就是使用constructor属性。
	
5.3 构造函数的名称

5.4 鸭式辩型
	
上文所描述的检测对象的类的各种技术多少都会有些问题，至少在客户端JavaScript中是如此。
	
解决办法就是规避掉这些问题：不要关注“对象的类是什么”，而是关注“对象能做什么”。这种思考问题的方式在Python和Ruby中非常普遍，称为“鸭式辩型”（这个表述是由作家James Whitcomb Riley提出的）。
	
像鸭子一样走路、游泳并且嘎嘎叫的鸟就是鸭子。

对于JavaScript程序员来说，这句话可以理解为“如果一个对象可以像鸭子一样走路、游泳并且嘎嘎叫，就认为这个对象是鸭子，哪怕它并不是从鸭子类的原型对象继承而来的”。

	
6. JavaScript中的面向对象技术

6.1 集合类
	
集合（set）是一种数据结构，用以表示非重复值的无序集合。集合的基础方法包括添加值、检测值是否在集合中，这种集合需要一种通用的实现，以保证操作效率。

JavaScript的对象是属性名以及与之对应的值的基本集合。.因此将对象只用做字符串的集合是大材小用。

例子9-6用JavaScript实现了一个更加通用的Set类，它实现了从JavaScript值到唯一字符串的映射，然后将字符串用做属性名。对象和函数都不具备如此简明可靠的唯一字符串表示。因此集合类必须给集合中的每一个对象或函数定义一个唯一的属性标识。

	
例9-6：Set.js：值的任意集合
```
  function Set() {                        // 这是一个构造函数
    this.value = {};					// 集合数据保存在对象属性里
    this.n = o;							// 集合中值的个数
    this.add.apply(this, arguments);	// 把所有参数都添加进这个集合
  }

  // 将每个参数都添加至集合中
  Set.prototype.add = function () {
    for (var i = 0; i< arguments.length; i++){  // 遍历每个参数
      var val = arguments[i];					// 待添加到集合的值
      var str = Set._v2s(val);				// 把它转成字符串
      if(!this.values.hasOwnPreperty(str)){	// 如果不在集合中
        this.values[str] = val;				// 将字符串和值对应起来
        this.n++;							// 集合中值的计数加一
      }
    }
    retrun this									// 支持链式调用
  }

  // 从集合删除元素，这些元素有参数指定
  Set.prototype.remove = function () {
    for (var i = 0; i<arguments.length; i++) {		// 遍历每个参数
      var str = Set._v2s(arguments[i]);			// 将字符串和值对应起来
      if(this.values.hasOwnPreperty(str)){		// 如果它在参数中
        delete this.values[str];				// 删除它
        this.n--;								// 集合中值的计数减一
      }
    }
    return this										// 支持链式调用
  }

  // 如果集合包含这个值，则返回true；否则，返回false
  Set.prototype.contains = function(value){
    retrun this.values.hasOwnPreperty(Set._v2s(value));
  }

  // 返回集合的大小
  Set.prototype.size = function(){
    return this.n;
  }

  // 遍历集合中所有元素，在指定的上下文中调用f
  Set.prototype.foreach = function(f, context){
    for(var s in this.values){					// 遍历集合中的所以字符串
      if(this.values.hasOwnPreperty(s)){		// 忽略继承的属性
        f.call(context, this.values[s]);	// 调用f，传入value
      }
    }
  }

  // 这是一个内部函数，用以将任意JavaScript值和唯一的字符串对应起来
  Set._v2s = function(val){
    switch(val){
      case undefined:  return 'u';  						// 特殊的原始值
      case null:       return 'n';						// 值只有一个字母
      case true:       return 't';						// 代码
      case fasle:      return 'f';
      default: switch(typeof val){
        case 'number': return '#' + val;				// 数字都带有 # 前缀
        case 'string': return '"' + val;				// 字符串都带有 “ 前缀
        default:       return '@' + objectId(val);		// Objects and functions get @
      }
    }

    // 对任意对象来说，都会返回一个字符串
    // 针对不同的对象，这个函数会返回不同的字符串
    // 对于同一个对象的多次调用，总是返回相同的字符串
    // 为了做到这一点，它给o创建了一个属性，在es5中，这个属性是不可枚举并且是只读的
    function objectId(o){
      var prop = "|**objectid**|";		// 私有属性，用以存放id
      if (!o.hasOwnPreperty(prop)){		// 如果对象没有id
        o[prop] = Set._v2s.next++;		// 将下一个值赋给它
      }
      return o[prop]; 					// 返回这个id
    }
  }

  // 设置初始id的值
  Set._v2s.next = 100; 
```
	
6.2 一个例子：枚举类型

枚举类型是一种类型，它是值的有限集合，如果值定义为这个类型则该值是可列出（或可枚举）的。

6.3 标准转换方法

`toString()`

`toLocalString()`

`valueOf()`

`toJSON()`
	
6.4 比较方法

JavaScript的相等运算符比较对象时，比较的是引用而不是值。

6.5 方法借用

6.6 私有状态

我们可以通过将变量（或参数）闭包在一个构造函数内来模拟实现私有实例字段，调用构造函数会创建一个实例。
	
6.7 构造函数的重载和工厂方法


7. 子类 

8. ECMAScript 5 中的类

9. 模块

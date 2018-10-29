
### 浏览器运行js脚本

以 chrome 浏览器为例，打开一个新的标签页，然后点击 *五角星* 为此页添加书签，填写好书签名称，单击完成添加。

找到刚刚添加的书签，右键修改，在填写网址出填写以下代码：

```

javascript:(
	function(){
		function parseURL(url) {
			var a =  document.createElement('a');
			a.href = url;
			return {
				source: url,
				protocol: a.protocol.replace(':',''),
				host: a.hostname,
				port: a.port,
				query: a.search,
				params: (function(){
					var ret = {},
						seg = a.search.replace(/^\?/,'').split('&'),
						len = seg.length, i = 0, s;
					for (;i<len;i++) {
						if (!seg[i]) { continue; }
						s = seg[i].split('=');
						ret[s[0]] = s[1];
					}
					return ret;
				})(),
				file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
				hash: a.hash.replace('#',''),
				path: a.pathname.replace(/^([^\/])/,'/$1'),
				relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
				segments: a.pathname.replace(/^\//,'').split('/')
			};
		}

		alert(JSON.stringify(parseURL(window.window.location.href)));
	}
	
)()
	
```

填写完成后，点击保存。

单击此书签即可看到代码已经运行~

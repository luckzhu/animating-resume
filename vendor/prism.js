/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+markdown */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){function t(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}var a=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof t?new t(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function l(e,t){var a,n,i=r.util.type(e);switch(t=t||{},i){case"Object":if(n=r.util.objId(e),t[n])return t[n];a={},t[n]=a;for(var o in e)e.hasOwnProperty(o)&&(a[o]=l(e[o],t));return a;case"Array":return n=r.util.objId(e),t[n]?t[n]:(a=[],t[n]=a,e.forEach(function(e,n){a[n]=l(e,t)}),a);default:return e}}},languages:{extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){n=n||r.languages;var i=n[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);a.hasOwnProperty(o)||(l[o]=i[o])}var u=n[e];return n[e]=l,r.languages.DFS(r.languages,function(t,a){a===u&&t!=e&&(this[t]=l)}),l},DFS:function o(e,t,a,n){n=n||{};var i=r.util.objId;for(var l in e)if(e.hasOwnProperty(l)){t.call(e,l,e[l],a||l);var s=e[l],u=r.util.type(s);"Object"!==u||n[i(s)]?"Array"!==u||n[i(s)]||(n[i(s)]=!0,o(s,t,l,n)):(n[i(s)]=!0,o(s,t,null,n))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var i,l=n.elements||e.querySelectorAll(n.selector),o=0;i=l[o++];)r.highlightElement(i,t===!0,n.callback)},highlightElement:function(t,n,i){for(var l,o,s=t;s&&!a.test(s.className);)s=s.parentNode;s&&(l=(s.className.match(a)||[,""])[1].toLowerCase(),o=r.languages[l]),t.className=t.className.replace(a,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(a,"").replace(/\s+/g," ")+" language-"+l));var u=t.textContent,g={element:t,language:l,grammar:o,code:u},c=function(e){g.highlightedCode=e,r.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r.hooks.run("after-highlight",g),r.hooks.run("complete",g),i&&i.call(g.element)};if(r.hooks.run("before-sanity-check",g),!g.code)return r.hooks.run("complete",g),void 0;if(r.hooks.run("before-highlight",g),!g.grammar)return c(r.util.encode(g.code)),void 0;if(n&&e.Worker){var h=new Worker(r.filename);h.onmessage=function(e){c(e.data)},h.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else c(r.highlight(g.code,g.grammar,g.language))},highlight:function(e,a,n){var i={code:e,grammar:a,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),t.stringify(r.util.encode(i.tokens),i.language)},matchGrammar:function(e,a,n,i,l,o,s){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==s)return;var g=n[u];g="Array"===r.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],d=h.inside,f=!!h.lookbehind,p=!!h.greedy,m=0,y=h.alias;if(p&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var k=i,b=l;k<a.length;b+=a[k].length,++k){var w=a[k];if(a.length>e.length)return;if(!(w instanceof t)){if(p&&k!=a.length-1){h.lastIndex=b;var A=h.exec(e);if(!A)break;for(var P=A.index+(f?A[1].length:0),O=A.index+A[0].length,x=k,N=b,j=a.length;j>x&&(O>N||!a[x].type&&!a[x-1].greedy);++x)N+=a[x].length,P>=N&&(++k,b=N);if(a[k]instanceof t)continue;S=x-k,w=e.slice(b,N),A.index-=b}else{h.lastIndex=0;var A=h.exec(w),S=1}if(A){f&&(m=A[1]?A[1].length:0);var P=A.index+m,A=A[0].slice(m),O=P+A.length,E=w.slice(0,P),_=w.slice(O),C=[k,S];E&&(++k,b+=E.length,C.push(E));var M=new t(u,d?r.tokenize(A,d):A,y,A,p);if(C.push(M),_&&C.push(_),Array.prototype.splice.apply(a,C),1!=S&&r.matchGrammar(e,a,n,k,b,!0,u),o)break}else if(o)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}return r.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,i=0;n=a[i++];)n(t)}},Token:t};if(e.Prism=r,t.stringify=function(e,a,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return t.stringify(n,a,e)}).join("");var i={type:e.type,content:t.stringify(e.content,a,n),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:n};if(e.alias){var l="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}r.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,i=a.code,l=a.immediateClose;e.postMessage(r.highlight(i,r.languages[n],n)),l&&e.close()},!1),r):r;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(r.filename=i.src,r.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var t={};t[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:{content:{pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s},cdata:/^<!\[CDATA\[|\]\]>$/i}},rest:s}},Prism.languages.insertBefore("markup","cdata",t)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("style","css"),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"function":/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^[*_]|[*_]$/}},strike:{pattern:/(^|[^\\])(~~?)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,greedy:!0,inside:{punctuation:/^~~?|~~?$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.languages.markdown.url,Prism.languages.markdown.italic.inside.url=Prism.languages.markdown.url,Prism.languages.markdown.strike.inside.url=Prism.languages.markdown.url,Prism.languages.markdown.bold.inside.italic=Prism.languages.markdown.italic,Prism.languages.markdown.bold.inside.strike=Prism.languages.markdown.strike,Prism.languages.markdown.italic.inside.bold=Prism.languages.markdown.bold,Prism.languages.markdown.italic.inside.strike=Prism.languages.markdown.strike,Prism.languages.markdown.strike.inside.bold=Prism.languages.markdown.bold,Prism.languages.markdown.strike.inside.italic=Prism.languages.markdown.italic,Prism.hooks.add("after-tokenize",function(a){function n(a){if(a&&"string"!=typeof a)for(var e=0,i=a.length;i>e;e++){var r=a[e];if("code"===r.type){var t=r.content[1],s=r.content[3];if(t&&s&&"code-language"===t.type&&"code-block"===s.type&&"string"==typeof t.content){var o="language-"+t.content.trim().split(/\s+/)[0].toLowerCase();s.alias?"string"==typeof s.alias?s.alias=[s.alias,o]:s.alias.push(o):s.alias=[o]}}else n(r.content)}}"markdown"===a.language&&n(a.tokens)}),Prism.hooks.add("wrap",function(a){if("code-block"===a.type){for(var n="",e=0,i=a.classes.length;i>e;e++){var r=a.classes[e],t=/language-(\w+)/.exec(r);if(t){n=t[1];break}}var s=Prism.languages[n];if(s){var o=a.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&");a.content=Prism.highlight(o,s,n)}}}),Prism.languages.md=Prism.languages.markdown;
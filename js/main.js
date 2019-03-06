let firstContent = `
/* 
* 面试官你好，我是XXX
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
 
*{
    transition: all 1s;
}
html{
    background: #eee;
}
#code{
    border: 1px solid #aaa;
    padding: 16px;
}

/*现在我需要一点代码高亮*/
.token.selector {
    color: #690;
}

.token.property {
    color: #905;
}

/*加一个小阴影，有点层次*/
#code{
    box-shadow: 6px 4px 15px -2px #000000;
}

/*好了，该干正事了，我需要一张白纸*/
#code{
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
}

#paper{
    background-color: white;
    height: 100%;
    position: absolute;
    right: 0;
    width: 50%;
    border: 1px solid #aaa;
}

/*好了，可以正式介绍我自己了*/

`
writeCode.call(undefined, firstContent)







function writeCode(content) {
    let domCode = document.querySelector('#code')
    let myStyle = document.querySelector('#myStyle')
    let n = 0
    let timer = setInterval(function () {
        n = n + 1
        domCode.innerHTML = content.substring(0, n)
        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
        myStyle.innerHTML = content.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= firstContent.length) {
            window.clearInterval(timer)
        }
    }, 10)
}
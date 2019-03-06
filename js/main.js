let firstContent = `
/* 
* 大家好好，我是luckzhu
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


let secondContent = `
# 自我介绍
我叫 朱承章
1992 年 8 月出生
天津工业大学 毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS

# 项目介绍
1. 无缝轮播
2. 会动的简历
3. canvas画板

# 联系方式
QQ 290245195
Email luckzhu1992@gmail.com   
手机 181123456789
`

let thirdContent = `
/*现在我要把Markdown变成HTML了
 *这里用的是方方老师推荐的库Marked.js
 */
`


writeCode('', firstContent, () => {
    writeMarkdown(secondContent, () => {
        writeCode(firstContent, thirdContent, () => {
            markedHTML(secondContent,()=>{
                console.log('hi')
            })
        })
    })
})

function markedHTML(content,fn){
    let myPaper = document.querySelector('#paper')
    let markedContent = marked(content)
    myPaper.innerHTML = markedContent
}


function writeMarkdown(content, fn) {
    let myPaper = document.querySelector('#paper')
    let n = 0
    let timer = setInterval(function () {
        n = n + 1
        myPaper.innerHTML = content.substring(0, n)

        myPaper.scrollTop = myPaper.scrollHeight
        if (n >= content.length) {
            window.clearInterval(timer)
            fn()
        }
    }, 10)

}



function writeCode(precontent, content, fn) {
    let domCode = document.querySelector('#code')
    let myStyle = document.querySelector('#myStyle')
    let n = 0
    let timer = setInterval(function () {
        n = n + 1
        domCode.innerHTML = precontent + content.substring(0, n)
        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
        myStyle.innerHTML = precontent + content.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= content.length) {
            window.clearInterval(timer)
            fn()
        }
    }, 10)
}
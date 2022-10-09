const itheima = require('./itheima-tools')


const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">This is h1 tag<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = itheima.htmlUnEscape(str)
console.log(str2)

// Doc about url:
// https://nodejs.org/api/url.html

const url = require('url');
const address = 'https://www.site.com.br/catalog?product=chair'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('product'))

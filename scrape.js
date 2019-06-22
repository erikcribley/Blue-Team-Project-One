const request = require('request')
const cheerio = require('cheerio')

request('https://www.walmart.com/ip/Intex-8-75-Classic-Downy-Inflatable-Airbed-Mattress/20449352?athcpid=20449352&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=dadf88e3-a1f-16b7fc27a79ec4&athena=true', function (error, response, body) {
    console.log('error:', error)
    console.log('statusCode:', response.statusCode)
    console.log(body)
})


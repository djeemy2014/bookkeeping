import csv from 'csvtojson';
import csvWriter from 'csv-writer';
import fs from 'fs';
import fetch from 'node-fetch';

//let input_csv = "C:\\Users\\ddemidyuk\\Downloads\\Чернушинский го.csv"
//let output_csv = "C:\\Users\\ddemidyuk\\Downloads\\Чернушинский го_2.csv"
const date = new Date()
//console.log('x-t',`${date.getDate()}/Fab/${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()+date.getMilliseconds()/1000}S`)



let i=0;

let outputData = []
async function fetching (list){
//let url =`https://pkk.rosreestr.ru/api/features/10/${list}}`
let url = `https://dom.gosuslugi.ru/homemanagement/api/rest/services/houses/public/1/a232925d-c502-4e98-a2d9-b56b04d2fe20`
//let url =`https://jsonplaceholder.typicode.com/posts/${list}`
let encoded = encodeURI(url);
console.log(url)



await fetch(url,
    {
        "method": "GET",
        "transformRequest": [
          null
        ],
        "transformResponse": [
          null
        ],
        "jsonpCallbackParam": "callback",
        "url": encoded,
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json, text/plain, */*",
           // "access-control-allow-origin": "*"
        },
        "data": "",
        "timeout": {}
    }

    )
    .then((resp) => {
        console.log(resp.status)
        resp.json().then(json => {
            console.log(json.address.house.guid)
            outputData[i]=[]
            outputData[i][0]=json
            outputData[i][1]=json.address.house.guid
            i++
        //console.log(JSON.stringify(json))
    })
})
    .catch((err)=>{
        //console.log("ОЙ, Error", err)
/*         console.log (i++)
        if (i<=10){
            fetching()
            console.log (i)
        } */
    })
}

//import fetch from 'node-fetch';

//const response = await fetch('https://httpbin.org/status/301', { redirect: 'manual' });
//console.log(response.status)
/* listing.forEach((list) =>{
    fetching(list)
}) */
setTimeout(() => console.log (outputData), 5000)
//await fetching(list)
fetching (1)






//https://dom.gosuslugi.ru/homemanagement/api/rest/services/houses/public/1/7475c118-6ed0-43ac-a2c9-44fd6db4764c
//https://dom.gosuslugi.ru/search/api/rest/services/map/findByGuid?houseGuid=edaf5429-3296-44c5-adc7-ef446e010e96


/* {
    "access-control-allow-headers": "Content-Type",
    "access-control-allow-methods": "POST, GET, PUT, OPTIONS, DELETE",
    "access-control-allow-origin": "*",
    "access-control-max-age": "3600",
    "cache-date": "06.03.2023 12:19:59",
    "connection": "keep-alive",
    "content-security-policy": "upgrade-insecure-requests; frame-ancestors 'self' http://webvisor.com https://webvisor.com",
    "content-type": "application/json;charset=utf-8",
    "date": "Mon, 06 Mar 2023 09:20:51 GMT",
    "server": "\"\"",
    "strict-transport-security": "max-age=16070400",
    "transfer-encoding": "chunked",
    "x-content-type-options": "nosniff",
    "x-frame-options": "SAMEORIGIN",
    "x-ua-compatible": "IE=Edge",
    "x-xss-protection": "1; mode=block"
  } */

function  button_in(){
	// let button_time = document.querySelector('button.solid.medium.noselect');
	// button_time.click()
	document.querySelector('button.solid.medium.noselect').click();
};
//document.addEventListener('keydown',
//
//function(event) {
//    if (event.code == 'KeyZ'&& (event.ctrlKey || event.metaKey)){
function button_out(i=0){
    let slote_list = document.querySelector('.card.modal-card.embedded.has-footer')
    let slote_time = document.querySelector('.timeslots__date-group')
    if (slote_list==null){
        console.log('окно не открыто')
        document.querySelector('button.solid.medium.noselect').click();
        setTimeout (button_out,(1500));
    } else {
        //console.log(slote_list)
    
	let not_slote = document.querySelector('span.empty-placeholder__header-text')
	if (slote_time==null &&
        not_slote!=null &&
        not_slote.textContent == ' Нет свободных таймслотов '
    ){
        //if (i<5){
        //    i++
        //    button_out(i);
        //    console.log(i)
        //}else{
            console.log(i,not_slote.textContent)
            setTimeout (button_out,(1500));
        //}
		
		//document.querySelector('.card.modal-card.embedded.has-footer')
	document.querySelector('button.secondary.noselect').click()
	//i++
	//if (i>5){clearInterval()}
	//}else{
	//	//clearInterval(interval_1)
	}else if (slote_time!=null){
        console.log('Таймслоты!!!')
        console.log(document.querySelector('.card.modal-card.embedded.has-footer'))
    }
    }
}
button_out()
//}}
//)
function reader(){
button_in();

setTimeout (button_out,(1000));
}
let i=0
interval_1=setInterval(reader, 1000)



class TimeSlot {

    async ifer(){};
    async selectorTimeSlote(){}
}

/*
//запрос
Request URL: https://api.business.kazanexpress.ru/api/seller/shop/46639/v2/invoice/time-slot/get
Request Method: POST
Status Code: 200 
Remote Address: 51.250.7.187:443
Referrer Policy: strict-origin-when-cross-origin

access-control-allow-credentials: true
access-control-allow-headers: Access-Control-Allow-Origin, sentry-trace, apollo-query-plan-experimental, Access-Control-Allow-Methods, X-XSRF-TOKEN, User-Agent, Access-Control-Allow-Headers, authorization, Authorization, responseType, credential, x-apollo-tracing, Access-Content-Allow-Origin, Access-Control-Allow-Credentials, Jwt-Token, x-requested-with, content-type, Build-Info, x-iid, Content-Type
access-control-allow-methods: POST, GET, OPTIONS, PUT, DELETE
access-control-allow-origin: https://business.kazanexpress.ru
access-control-max-age: 3600
build-info: Build-Number: 15410; Commit: 10b5f0f
cache-control: no-cache, no-store, max-age=0, must-revalidate
content-encoding: gzip
content-type: application/json;charset=UTF-8
date: Wed, 01 Mar 2023 07:47:42 GMT
expires: 0
pragma: no-cache
strict-transport-security: max-age=15724800; includeSubDomains
vary: Accept-Encoding
x-content-type-options: nosniff
x-frame-options: DENY
x-request-id: 8883596cbc8abd705155445a14fe4f3e
x-xss-protection: 1; mode=block

:authority: api.business.kazanexpress.ru
:method: POST
:path: /api/seller/shop/46639/v2/invoice/time-slot/get
:scheme: https
accept: application/json
accept-encoding: gzip, deflate, br
accept-language: ru,en-US;q=0.9,en;q=0.8
authorization: Bearer IJnQ3Aek5B6tzfrdYAbNGLlKukQ
content-length: 73
content-type: application/json
cookie: route=1667977253.99.10282.399442; _ym_uid=1667977220787075055; _ym_d=1667977220; _tt_enable_cookie=1; _ttp=3e9ab2e6-124b-4acd-bffe-5656ab5cd17c; mindboxDeviceUUID=575cd4a9-6610-46e2-b207-16a47f4768ae; directCrm-session=%7B%22deviceGuid%22%3A%22575cd4a9-6610-46e2-b207-16a47f4768ae%22%7D; _gpVisits={"isFirstVisitDomain":true,"todayD":"Mon%20Jan%2023%202023","idContainer":"1000255F"}; tmr_lvid=8082418620541daf322c724ff032bb8c; tmr_lvidTS=1667977219904; _ga=GA1.2.1416217031.1667977220; _ga_BMF2JXTDDP=GS1.1.1674468751.2.1.1674469968.58.0.0; _gid=GA1.2.552727621.1677571247; _ym_isad=1; _ym_visorc=b
origin: https://business.kazanexpress.ru
referer: https://business.kazanexpress.ru/
sec-ch-ua: "Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36

{
    "invoiceIds": [
        3247079,
        3247071,
        3247046,
        3173030
    ],
    "timeFrom": 1677743263274
}
//ответ на запрос тймслотов
{
    "payload": {
        "timeSlots": []
    },
    "timestamp": [
        2023,
        3,
        1,
        10,
        47,
        42,
        887254000
    ]
}
*/
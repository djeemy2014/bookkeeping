import csv from 'csvtojson'
import csvWriter from 'csv-writer' 
import fs from 'fs'

let input_csv = "C:\\Users\\ddemidyuk\\Downloads\\Чернушинский го.csv"
let output_csv = "C:\\Users\\ddemidyuk\\Downloads\\Чернушинский го_2.csv"
const mask=[
    {id:'Столбец1', title: 'Num'},
    {id:'Столбец2', title: 'Type'},
    {id:'Столбец3', title: 'Zone'},
    {id:'Столбец4', title: 'Full_Zone'},
    {id:'Столбец5', title: 'NP'},
    {id:'Столбец6', title: 'KodZone'},
]

csv({
    delimiter: ';',
})
.fromFile(input_csv)
.then((jsonObj) => {
    //json_object.dataList = jsonObj;
    //fs.writeFileSync(output_json, JSON.stringify(json_object),'utf-8');
    jsonObj.forEach((text)=>{
        //console.log(text)
        //console.log(1, text.Столбец4)
        if (text.Столбец2=='Территориальная зона'){
            text.Столбец5=text.Столбец4.split(/(, )/)[2]
            text.Столбец6=text.Столбец4.substr(text.Столбец4.search(/- \(+/)+3,text.Столбец4.search(/(\))+$/)-text.Столбец4.search(/- \(+/)-3)
            //console.log(2, text.Столбец6, text.Столбец4.search(/- \(+/), text.Столбец4.search(/(\))+$/))
            let reg= /, /g;
            console.log(2, text.Столбец4.match(reg))
            //console.log(reg.exec(text.Столбец4))
        } else{
        }
    })

    //console.log( JSON.stringify(jsonObj))
    
   // let save_file = csvWriter.createObjectCsvWriter({  
   //     path: output_csv, 
   //     header: mask,
   //     fieldDelimiter: ";" 
   //     })
   // //console.log(save_file.fieldDelimiter)
   // 
   // save_file
   //     .writeRecords(jsonObj) 
   //     .then(()=> console.log('The CSV file was written successfully')); 
    
}) 


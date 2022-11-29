import csv from 'csvtojson'
import fs from 'fs'
import cp1251 from './decodingToUTF8.js'

let input_csv = 'scripts\\test_files\\123.csv'
let output_csv = 'scripts\\test_files\\testing_1.csv'
let output_json = 'scripts\\test_files\\testing_1.json'
    /* const buf = isValidUTF8(input_csv)
    console.log(buf) */
    //console.log(csv())
const classic = new cp1251(input_csv,output_csv);
let data_download = new Date();
let json_object = {"date": data_download, dataList: []}
classic.decoding();
input_csv=output_csv;

csv({
        delimiter: ';',
    })
    .fromFile(input_csv)
    .then((jsonObj) => {
        json_object.dataList = jsonObj
        
    }) 

setTimeout(()=>{fs.writeFileSync(output_json, JSON.stringify(json_object),'utf-8');console.log('OK')},2000)
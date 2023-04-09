import fs from 'fs'
import path from 'path';
import XLSX from 'xlsx';


import cp1251 from './decodingToUTF8.js'
import she256 from './she256String.js'

const input_file = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Wed Mar 29 19_13_41 MSK 2023.xls"
//входной файл
//const input_file = "./scripts/test_files/test_02.txt";
const inputFileType = path.extname(input_file)


//const output_file = "C:\\Users\\Администратор\\Downloads\\ALL20230313.xlsx";
//const output_csv="C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023_UTF8.csv";
//const regexpUTF8=/[А-я]|Ё|ё/g
//флаг перекодировки
const flaguncoding = true
let file_utf=''
let file =''

//function decodingFile(input_file){
    //файл для декодирования
const options = {type:''}
const file_utf_class= new cp1251(input_file)
//console.log(file_utf_class.input)

//функция обработки табличных данных
function readFile(file){
    //требуеться на вход файл в формате UTF8
    
    let listSheets = file.SheetNames[0]
    /* file.forEach(element => {
        console.log(element)
    }); */
    /* listSheets.forEach((ev, index)=>{
        console.log(index, ev)
    }) */
    const list = file.Sheets[listSheets]
    //console.log(list, listSheets)

    const listing = XLSX.utils.sheet_to_json(
        file.Sheets[listSheets]);


    //console.log(file.Sheets[listSheets])
    //console.log(listing)
    //функция возвращает масив json объектов, по строкам
    return (listing)
}


//проверка на тип файла
switch(inputFileType){
    case '.txt':
    case '.csv':
        // проверка на необходимость перекодировки
        //чтение в бинарном виде
        const readInput = fs.readFileSync(input_file, 'binary')
        switch(flaguncoding){
            case true: 
                console.log('БЛииииин Нужна перекодировка')
                file_utf=file_utf_class.decoding(readInput)
                break;
            case false: 
                console.log('ОК')
                file_utf=readInput
                break;
        }
        file = XLSX.read(file_utf,{type: "string"})
        break;
    case '.xls':
    case '.xlsx':
        file = XLSX.readFile(input_file)
        //console.log(file)
        break;
    default:
        throw new Error('Ошибка расширения файла')
}


//возвращает перекодироный файл

let readFileArr = readFile(file)
//console.log(readFileArr)
readFileArr.forEach(ev=>{
    
    JSON.stringify(ev)

    ev['she256']=she256(JSON.stringify(ev))
    //console.log(ev)
})
const readFileArr2=readFileArr
readFileArr2.forEach(ev=>{
    //console.log(ev.she256)
    let result = readFileArr.filter(she => she.she256 == ev.she256);
    if (result.length>1){
        console.log(result)
    }
    //console.log(result)
})
//console.log(readFileArr)
//console.time()
//нужно проверять на кодировку и проверять на разделитель чисел.
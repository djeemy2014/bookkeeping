import fs from 'fs'
import path from 'path';
import XLSX from 'xlsx';
import cp1251 from './decodingToUTF8.js'

//const url = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023.csv"
//входной файл
const input_file = "./scripts/test_files/test_02.txt";
const inputFileType = path.extname(input_file)
//чтение в бинарном виде
const readInput = fs.readFileSync(input_file, 'binary')
//const output_file = "C:\\Users\\Администратор\\Downloads\\ALL20230313.xlsx";
//const output_csv="C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023_UTF8.csv";
//const regexpUTF8=/[А-я]|Ё|ё/g
//флаг перекодировки
const flaguncoding = false
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
    case '.xlsx':
        file = XLSX.readFile(input_file)
        //console.log(file)
        break;
    default:
        throw new Error('Ошибка расширения файла')
}


//возвращает перекодироный файл
console.log(readFile(file))
//нужно проверять на кодировку и проверять на разделитель чисел.
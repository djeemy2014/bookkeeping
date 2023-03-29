import fs from 'fs'
import XLSX from 'xlsx';
import cp1251 from './decodingToUTF8.js'

//const url = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023.csv"

const input_file = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023.csv";
const output_file = "C:\\Users\\Администратор\\Downloads\\ALL20230313.xlsx";
const output_csv="C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023_UTF8.csv";
const regexpUTF8=/[А-я]|Ё|ё/g


//function decodingFile(input_file){
    //файл для декодирования
const options = {type:''}
const file_utf_class= new cp1251(input_file)
//console.log(file_utf_class.input)

if (regexpUTF8.test(file_utf_class.input)){
    //console.log(res)
    console.log('ОК')
    const file_utf=file_utf_class.input
}else{
    console.log('БЛииииин Нужна перекодировка')
    const file_utf=file_utf_class.decoding()
};

const file_utf=file_utf_class.decoding()
//console.log(file_utf)
//возвращает перекодироный файл
//return file_utf
//}

function readFile(file_utf){
    //требуеться на вход файл в формате UTF8
//const file = XLSX.readFile(input_file)
const file = XLSX.read(file_utf,{type: "string"})


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

console.log(readFile(file_utf))
//нужно проверять на кодировку и проверять на разделитель чисел.
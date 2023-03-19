import XLSX from 'xlsx';
import cp1251 from './decodingToUTF8.js'

//const url = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023.csv"

const input_file = "C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023.csv";
const output_file = "C:\\Users\\Администратор\\Downloads\\ALL20230313.xlsx";
const output_csv="C:\\Users\\Администратор\\Downloads\\operations Wed Mar 01 09_16_50 MSK 2023-Mon Mar 06 19_46_21 MSK 2023_UTF8.csv";

const options = {type:''}

const file_utf_class= new cp1251(input_file,output_csv)
const file_utf=file_utf_class.decoding()
//console.log(file_utf)

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
console.log(listing)

//нужно проверять на кодировку и проверять на разделитель чисел.
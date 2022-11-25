import fs from 'fs'

//const input_csv = new FileReader('scripts\\test_files\\operations Tue Nov 01 09_25_33 MSK 2022-Wed Nov 16 17_54_29 MSK 2022.csv')
const input_csv = fs.readFileSync('scripts\\test_files\\123.csv', 'binary')

/* function cp1251Toutf8 (input, output){
    readAsArrayBuffer(input)
    return output
} */

console.log(input_csv)
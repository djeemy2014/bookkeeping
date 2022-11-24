import csv from 'csvtojson'

const input_csv = 'scripts\\test_files\\operations Tue Nov 01 09_25_33 MSK 2022-Wed Nov 16 17_54_29 MSK 2022.csv'
    /* const buf = isValidUTF8(input_csv)
    console.log(buf) */
    //console.log(csv())
csv({
        delimiter: ';',
    })
    .fromFile(input_csv)
    .then((jsonObj) => {
        console.log(jsonObj[0])
    })
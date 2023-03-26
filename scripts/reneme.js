import fs from 'fs'
import XLSX from 'xlsx';

const input_path = 'C:\\Users\\Администратор\\OneDrive\\Документы\\marcet\\ALL_40X30\\С ТОНОМ';
const regexXlsx= /(.xlsx)$/
const regexJPG= /(.jpg)$/


fs.readdir(input_path, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(files)
    files.forEach((file)=>{
        if (regexXlsx.test(file)){
            const fileXLSX = XLSX.readFile(input_path+'\\'+file);
            const list = XLSX.utils.sheet_to_json(
                fileXLSX.Sheets[fileXLSX.SheetNames[0]]);
            list.forEach((ev)=>{
                //console.log(ev['баркод'])
                //console.log(ev['Изображение'])
                //console.log(input_path+'\\'+ev['баркод']+'.jpg')

                fs.rename(ev['Изображение'],input_path+'\\'+ev['баркод']+'.jpg',(err)=>{
                    console.log(ev['Изображение'])
                })
            })
            
        }
        if (regexJPG.test(file)){
            console.error(file)
        }
    })

})
import fs from 'fs'

let endListSplit='';

for (let i=0; i<256;i++){
    endListSplit+=String.fromCharCode(i)
}
fs.writeFileSync('testFile.txt',endListSplit,'binary')
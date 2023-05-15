import { createHash } from 'crypto';
import fs from 'fs'




export default function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}
const file = fs.readFile('C:\\Users\\Администратор\\OneDrive\\Документы\\script\\gastrovstrecha\\srcr\\src\\reciprs\\egg.json',(err, data)=>{
  let dataplas=JSON.stringify(JSON.parse(data))
  console.log(data)
  console.log(dataplas)
  console.log(JSON.stringify(JSON.parse(dataplas)))
  console.dir(hash(data))
  console.dir(hash(dataplas))
  console.dir(hash(JSON.stringify(JSON.parse(dataplas))))
})
//console.dir(hash('hohoho')==hash('hohoho'))
//console.dir(hash('hohoho'))
//
//console.dir(hash('hohoho')==hash('hohoh2'))
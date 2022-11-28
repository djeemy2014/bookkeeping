import fs from 'fs'

//const input_csv = new FileReader('scripts\\test_files\\operations Tue Nov 01 09_25_33 MSK 2022-Wed Nov 16 17_54_29 MSK 2022.csv')
const input_csv = fs.readFileSync('scripts\\test_files\\222.csv', 'binary')

/* function cp1251Toutf8 (input, output){
    readAsArrayBuffer(input)
    return output
} */
const csv_arrey=input_csv.split('');
let endListSplit='';
for (let index in input_csv){
    console.log(input_csv[index], input_csv[index].charCodeAt(0))
    if (input_csv[index].charCodeAt(0)<128){
        endListSplit+=String.fromCharCode(input_csv[index].charCodeAt(0));
    }else if ((input_csv[index].charCodeAt(0)>=192)&&(input_csv[index].charCodeAt(0)<256)){
        endListSplit+=String.fromCharCode(input_csv[index].charCodeAt(0)+848);
    }else if ((input_csv[index].charCodeAt(0)>=256)){
        throw 'не 8-ми битная кодировка'
    }else{
        switch(input_csv[index].charCodeAt(0)){
            case 128:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 129:
                endListSplit+=String.fromCharCode(1027)
                break;
            case 130:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 131:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 132:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 133:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 134:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 135:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 136:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 137:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 138:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 139:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 140:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 141:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 142:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 143:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 144:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 145:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 146:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 147:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 148:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 149:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 150:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 151:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 152:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 153:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 154:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 155:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 156:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 157:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 158:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 159:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 160:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 161:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 162:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 163:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 164:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 165:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 166:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 167:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 168:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 169:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 170:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 171:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 172:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 173:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 174:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 175:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 176:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 177:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 178:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 179:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 180:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 181:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 182:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 183:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 184:
                endListSplit+=String.fromCharCode(1105)
                break;
            case 185:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 186:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 187:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 188:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 189:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 190:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 191:
                endListSplit+=String.fromCharCode(8470)
                break;
            default:
                endListSplit+=String.fromCharCode(1026)
        }
    }

}

console.log(endListSplit)
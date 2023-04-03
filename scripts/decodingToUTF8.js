import fs from 'fs'

//const input_csv = new FileReader('scripts\\test_files\\operations Tue Nov 01 09_25_33 MSK 2022-Wed Nov 16 17_54_29 MSK 2022.csv')
//const input_path='scripts\\test_files\\222.csv'
//const input_csv = fs.readFileSync(input_path, 'binary')

/* function cp1251Toutf8 (input, output){
    readAsArrayBuffer(input)
    return output
} */

export default class Cp1251ToUtf8 {
    constructor(input_path,output_path=''){
        this.input_path=input_path;
        this.output_path=output_path;
        this.input = fs.readFileSync(this.input_path, 'binary');
        this.output='';
    }


    // нужна проверка на 8-ми битную кодировку
    // восможно стоит поменять на json файл соотвествия кодов в кодировках
    decoding(buf=this.input){
        
        //const csv_arrey=this.input.split('');
        let endListSplit='';
        for (let index in buf){
            if (buf[index].charCodeAt(0)<128){
                endListSplit+=String.fromCharCode(buf[index].charCodeAt(0));
            }else if ((buf[index].charCodeAt(0)>=192)&&(buf[index].charCodeAt(0)<256)){
                //console.log(еncodingСheck(buf[index].charCodeAt(0)))
                endListSplit+=String.fromCharCode(buf[index].charCodeAt(0)+848);
            }else if ((buf[index].charCodeAt(0)>=256)){
                throw 'не 8-ми битная кодировка'
            }else{
                switch(buf[index].charCodeAt(0)){
            case 128:
                endListSplit+=String.fromCharCode(1026)
                break;
            case 129:
                endListSplit+=String.fromCharCode(1027)
                break;
            case 130:
                endListSplit+=String.fromCharCode(8218)
                break;
            case 131:
                endListSplit+=String.fromCharCode(1107)
                break;
            case 132:
                endListSplit+=String.fromCharCode(8222)
                break;
            case 133:
                endListSplit+=String.fromCharCode(8230)
                break;
            case 134:
                endListSplit+=String.fromCharCode(8224)
                break;
            case 135:
                endListSplit+=String.fromCharCode(8225)
                break;
            case 136:
                endListSplit+=String.fromCharCode(8364)
                break;
            case 137:
                endListSplit+=String.fromCharCode(8240)
                break;
            case 138:
                endListSplit+=String.fromCharCode(1033)
                break;
            case 139:
                endListSplit+=String.fromCharCode(8249)
                break;
            case 140:
                endListSplit+=String.fromCharCode(1034)
                break;
            case 141:
                endListSplit+=String.fromCharCode(1036)
                break;
            case 142:
                endListSplit+=String.fromCharCode(1035)
                break;
            case 143:
                endListSplit+=String.fromCharCode(1039)
                break;
            case 144:
                endListSplit+=String.fromCharCode(1106)
                break;
            case 145:
                endListSplit+=String.fromCharCode(8216)
                break;
            case 146:
                endListSplit+=String.fromCharCode(8217)
                break;
            case 147:
                endListSplit+=String.fromCharCode(8220)
                break;
            case 148:
                endListSplit+=String.fromCharCode(8221)
                break;
            case 149:
                endListSplit+=String.fromCharCode(8226)
                break;
            case 150:
                endListSplit+=String.fromCharCode(8211)
                break;
            case 151:
                endListSplit+=String.fromCharCode(8212)
                break;
            case 152:
                endListSplit+=String.fromCharCode(152)
                break;
            case 153:
                endListSplit+=String.fromCharCode(8482)
                break;
            case 154:
                endListSplit+=String.fromCharCode(1113)
                break;
            case 155:
                endListSplit+=String.fromCharCode(8250)
                break;
            case 156:
                endListSplit+=String.fromCharCode(1114)
                break;
            case 157:
                endListSplit+=String.fromCharCode(1116)
                break;
            case 158:
                endListSplit+=String.fromCharCode(1115)
                break;
            case 159:
                endListSplit+=String.fromCharCode(1119)
                break;
            case 160:
                endListSplit+=String.fromCharCode(160)
                break;
            case 161:
                endListSplit+=String.fromCharCode(1038)
                break;
            case 162:
                endListSplit+=String.fromCharCode(1118)
                break;
            case 163:
                endListSplit+=String.fromCharCode(1035)
                break;
            case 164:
                endListSplit+=String.fromCharCode(164)
                break;
            case 165:
                endListSplit+=String.fromCharCode(1168)
                break;
            case 166:
                endListSplit+=String.fromCharCode(166)
                break;
            case 167:
                endListSplit+=String.fromCharCode(167)
                break;
            case 168:
                endListSplit+=String.fromCharCode(1025)
                break;
            case 169:
                endListSplit+=String.fromCharCode(169)
                break;
            case 170:
                endListSplit+=String.fromCharCode(1028)
                break;
            case 171:
                endListSplit+=String.fromCharCode(171)
                break;
            case 172:
                endListSplit+=String.fromCharCode(172)
                break;
            case 173:
                endListSplit+=String.fromCharCode(173)
                break;
            case 174:
                endListSplit+=String.fromCharCode(174)
                break;
            case 175:
                endListSplit+=String.fromCharCode(1031)
                break;
            case 176:
                endListSplit+=String.fromCharCode(176)
                break;
            case 177:
                endListSplit+=String.fromCharCode(177)
                break;
            case 178:
                endListSplit+=String.fromCharCode(1030)
                break;
            case 179:
                endListSplit+=String.fromCharCode(1110)
                break;
            case 180:
                endListSplit+=String.fromCharCode(1169)
                break;
            case 181:
                endListSplit+=String.fromCharCode(181)
                break;
            case 182:
                endListSplit+=String.fromCharCode(182)
                break;
            case 183:
                endListSplit+=String.fromCharCode(183)
                break;
            case 184:
                endListSplit+=String.fromCharCode(1105)
                break;
            case 185:
                endListSplit+=String.fromCharCode(8470)
                break;
            case 186:
                endListSplit+=String.fromCharCode(1108)
                break;
            case 187:
                endListSplit+=String.fromCharCode(187)
                break;
            case 188:
                endListSplit+=String.fromCharCode(1112)
                break;
            case 189:
                endListSplit+=String.fromCharCode(1029)
                break;
            case 190:
                endListSplit+=String.fromCharCode(1109)
                break;
            case 191:
                endListSplit+=String.fromCharCode(1111)
                break;
            default:
                endListSplit+=String.fromCharCode(63)
                }
            }

        }
        
        return (endListSplit)
    };
    writeJSON(text=decoding()){
        this.output=fs.writeFileSync(this.output_path,endListSplit,'utf8')//нужно записывать имя исходного файла
        return (console.log('good write'))
    }
}


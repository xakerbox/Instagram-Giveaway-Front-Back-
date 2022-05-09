// SubTask 2.1
const fs = require('fs')

function getFiles(path = 'C:\\Users\\Slava\\Desktop\\files2\\'){     // receives the path to the dir / folder with files
    let files = fs.readdirSync(path)
    return files
}

function uniqueValues(path = 'C:\\Users\\Slava\\Desktop\\files2\\'){     // receives the path to dir with files
    let s = new Set(...array)
    s.size();
   
    [['d', 'b', 't'], ['n', 'a', 'e']]
    Spread-оператор
    ...['']
    
    
    const dir = path;
    let allFiles = getFiles(path);
    for(let j in allFiles) {
        let file = allFiles[j]
        let absolutePath = path+file
        let text = fs.readFileSync(absolutePath).toString('utf-8')
        let textByLine = text.split('\n')
        for (let i in textByLine) {
            s.add(textByLine[i])
        }
    }
    return 'Уникальных словосочетаний: '+ s.size
}

// SubTask 2.2
function existInAtLeastTen(path = 'C:\\Users\\Slava\\Desktop\\files2\\') {     // receives the path to dir with files
    let dict = new Object();
    const dir = path;
    let allFiles = getFiles(path);
    for (let j in allFiles) {
        let s = new Set()
        let file = allFiles[j]
        let absolutePath = path + file
        let text = fs.readFileSync(absolutePath).toString('utf-8')
        let textByLine = text.split('\n')
        for(let i in textByLine) {
            s.add(textByLine[i])
        }
        for(let el of s){
            dict[el] = (dict[el] || 0) + 1
        }
    }
    let amountOfThePhrases = 0               //  probably it should be done through filter
    // let filteredDict = Object.values(dict).filter(dict => dict >= 9)  // it must be reworked it's gonna be a better version
    for(let k in dict) {
        if (dict[k] >= 10) {
            amountOfThePhrases += 1
        }
    }
    return 'Словосочетаний, которые есть, как минимум, в десяти файлах: ' + amountOfThePhrases;
    `Словосочетаний, которые есть, как минимум, в десяти файлах: ${amountOfThePhrases}`
    
    for (let i = 0; i < 20; i++) {
    const txt = fs.readFileSync(`./out${i}.txt`, 'utf-8');
    
    }
}

// SubTask 2.3
const path = __dirname;

const existInAllFiles = () => {
    
}

function existInAllFiles(path) {     // receives the path to dir with files
    let dict = new Object()         
    const path = require('path');
   const dir = path
    let allFiles = getFiles(path)
    for (let j in allFiles) {
        let s = new Set()
        let file = allFiles[j]
        let absolutePath = path + file
        let text = fs.readFileSync(absolutePath).toString('utf-8')
        let textByLine = text.split('\n')
        for(let i in textByLine) {
            s.add(textByLine[i])
        }
        for(let el of s){
            dict[el] = (dict[el] || 0) + 1
        }
    }
    let amountOfThePhrases = 0               //  probably it should be done through filter
    // let filteredDict = Object.values(dict).filter(dict => dict >= 9)  // it must be reworked it's gonna be a better version
    for(let k in dict) {
        if (dict[k] === 20) {
            amountOfThePhrases += 1
        }
    }
    return 'Словосочетаний, которые есть во всех 20 файлах: ' + amountOfThePhrases
}


console.log(uniqueValues())
console.log(existInAllFiles())
console.log(existInAtLeastTen())

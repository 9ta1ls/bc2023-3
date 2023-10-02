const fs = require("fs");
fs.readFile("data.json", (err,data)=>{
    if(err===null){
        const jsonArr = JSON.parse(data);
        let index = 0;
        let jsonArrMin = jsonArr.reduce((min, obj)=>(obj.value < min.value ? obj: min),jsonArr[0]);

        let jsonStr = jsonArrMin.txt+ ":" + jsonArrMin.value;
       fs.writeFile("output.txt",jsonStr, (err)=>{
        if(err===null){
        }
        else{
            console.error('Помилка під час запису у файл:', err);
        }
       });
    }
    else{
        console.log(err);
    }

})
const fs = require("fs");
fs.readFile("data.json", (err,data)=>{
    if(err===null){
        const jsonArr = JSON.parse(data);
        let index = 0;
        let min = jsonArr[0].value;
        for (let i = 1; i < jsonArr.length;i++){
            if(jsonArr[i].value < min){
                min = jsonArr[i].value;
                index = i;
            }
        }
        console.log(jsonArr[index].txt+":" + min);
    }
    else{
        console.log(err);
    }

})
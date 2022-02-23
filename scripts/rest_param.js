function sum(...nums){
    let result = 0;
    for (let num of nums){
        if(typeof num != 'number'){
            throw new Error('引数が数値ではありません:'+ num);
        }
        result += num;
    }
    return result;
}

try{
    console.log(sum(1,3,5,7,9));
}catch{
    window.alert(e.message);
}
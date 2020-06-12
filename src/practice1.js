const parseData=function(datas){

    const { data } = datas
    let propName=datas.column
    let result=[]

    for (let temp of data){
       let tempResult={}
       for (let tempProp of propName){
           tempResult[tempProp.name]=temp.shift()
       }
       result.push(tempResult);
    }
    return result
}

export { parseData };

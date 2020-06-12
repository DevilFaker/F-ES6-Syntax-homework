const inject = function (data,instruction) {
    let result=data;
    let initial=data.length;

    for (let temp of instruction){
        let content=temp.content
        let index=temp.index
        if(index>=initial){
            result.splice(index+1,0,content)
        }else{
            result.splice(index,0,content)
        }
        initial=index;
    }

    return result
}
export { inject };


const first = (count, lowBound, highBound, values) =>{
    const block = Math.floor((highBound - lowBound)/ count);
    const map = {};
    let c = lowBound, k = 0;
    while(c<=highBound-block){
        for(let i=c;i<c+block;i++){
            map[i] = values[k];
        }
        k++;
        c+=block;
    }
    return map;
}

export default first 
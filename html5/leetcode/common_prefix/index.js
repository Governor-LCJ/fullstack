function isCommonPrefix(strs, middle){
    const prefix = strs[0].substring(0,middle);
    for (let i = 1;i<strs.length;i++){
        if (!strs[i].startsWith(prefix))
        return false;
    }
    return true;
}
/**
 * @author lcj
 * @func 返回最长公共子串
 * @param {字符串数组} strs
 * @return 字符中
 */
const longestCommonPrefix = (strs) =>{
    // 最长公共子串，不可能比最短的一个字符串长
    if(strs === 0) return ' ';
    if(strs === 1) return strs[0];
    
    let minLen = Number.MAX_VALUE;
    for(let i = 0;i<strs.length;i++)
        minLen = Math.min(minLen,strs[i].length);
        // if (strs[i].length < minLen){
        //     minLen = strs[i].length;
        // }
    
    let low = 0,
        high= minLen;

    while(low<=high){
        const middle = (low + high)>>1;
        // 移位运算符：>>除2，<<乘2
        if(isCommonPrefix(strs,middle)){
            low = middle + 1;
        }else{
            high = middle - 1;
        }
    }

    return strs[0].substring(0,(low + high) >> 1);
}

const strs = ['flower','flow','flight'];

console.log(longestCommonPrefix(strs))

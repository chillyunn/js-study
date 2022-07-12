//ES2015 style func.js
import {odd, even} from './var';

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

export default checkOddOrEven;
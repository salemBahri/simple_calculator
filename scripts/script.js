
const operationFunction=()=>{


var fn=parseInt(document.getElementById('firstNumber').value);
var sn=parseInt(document.getElementById('secondNumber').value);
let res;


let op=document.getElementById('operators').value;


    switch (op) {
        case '+':
            res=fn+sn;
            
            break;
        case '-':
            res=fn-sn;
            break;
        case '*':
            res=fn*sn;
            break;
        case '/':
            (sn!=0)?(res=fn/sn):alert('impossible to devise with zero!!');
            break;
    
        default:
            break;
    }
    document.getElementById('result').value=res;


}
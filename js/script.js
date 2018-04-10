
function checkNumberIfPrime(){
    var inputNumber = document.getElementById('nr').value;
    var result = document.getElementById('result');
    if(isNumeric(inputNumber) == true){
        if(isPrime(inputNumber) == true){
            result.innerHTML = "Number is prime";
        }else{
            result.innerHTML = "Number is not prime";
        }
    }else{
        clearInput();
        alert('Not valid input string!');
    }
    
} 
function isNumeric(num){
    return !isNaN(num);
}
function clearInput(){
    var inputNumber = document.getElementById('nr');
    inputNumber.value = "";
    var result = document.getElementById('result');
    result.innerHTML = "";
}
function isPrime(n){
    var ok=1;
    var d=2;
    while (d<=n/2)
        {
            if (n%d==0){
                ok=0;
            }
            d=d+1;
        }
    if(ok==1) {
        return true
    }else{
        return false;
    }  


}
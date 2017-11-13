function isPrime(n) {
    var value = true;
    if(n == 2) {
     return value;
    }
    else {
     for(var i = 2; i < Math.sqrt(n) + 1; i = i + 1){
   	 if (n % i == 0) {
   	     value = false;
   	 }
     }
     return value;
    }
}

for(var i = 0; i < 1000; i = i + 1){
    if(isPrime(i)){
     console.log(i);
    }
}

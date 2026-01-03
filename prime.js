function isPrie (num){
    if ( num < 1 ) return "Not Prime Number"
    for (let i = 2; i < num; i++ ){
        if (num % i== 0){
            return "NOt Prime Number"
        }
        
    }
    return "Prime NUmber"

}

console.log(isPrie(13))
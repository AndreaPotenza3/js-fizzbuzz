//stampiamo numeri da 1 a 100
//multipli di 5 = Fizz
//multipli di 3 = Buzz
//multipli di 3 e 5  FizzBuzz

for (let i = 0; i < 100; i++) {
    
    let num = i + 1
    let resto5 = num % 5
    let resto3 = num % 3
    let restoFinale5 = resto5 === 0
    let restoFinale3 = resto3 === 0
    
    if (restoFinale5 && restoFinale3) {
        console.log("FizzBuzz")
    }
    else if (resto5 === 0) {
        console.log("Fizz")
    }
    else if (resto3 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(num)
    }       
}       
let a = Math.floor(Math.random() * 1000)

function minhaPrimeiraFuncao(){
    let b = Math.floor(Math.random() * 1000)//arredonda os números
    //math.random() sorteia números de 0 até 1; 
    return `${a} + ${b} = ${a + b}`
}

console.log(minhaPrimeiraFuncao())
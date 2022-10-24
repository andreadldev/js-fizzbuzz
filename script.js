const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 ===0) 
        console.log("Fizzbuzz"),
        container.append("Fizzbuzz");

    else if (i % 3 === 0) 
        console.log("Fizz"),
        container.append("Fizz");

    else if (i % 5 === 0) 
        console.log("Buzz"),
        container.append("Buzz");
    else 
        console.log(i)
        container.append(i);
}

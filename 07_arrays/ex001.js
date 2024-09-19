var num = [5, 8, 2, 9, 3];

num.push(9);
console.log(`Nosso vetor é o ${num}`);

console.log(`Nosso vetor tem ${num.length} posições`);

num.sort();
console.log(`Nosso vetor é o ${num}`);

console.log(`O primeiro valor do vetor é ${num[0]}`);

for (var i = 0; i <= num.length; i++) {
    console.log(`Indice ${i-1} = ${num[i-1]}`);  
}
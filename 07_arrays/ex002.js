var valores = [8, 1, 7, 4, 2, 9];

// Percorrendo um Vetor da maneira tradicional
for (var i = 0; i < valores.length; i++) {
    console.log(`Indice ${i}: ${valores[i]}`);
}

console.log('----------------------------------------------');

// Percorrendo um Vetor de uma maneira simplificada
for (var i in valores) {
    console.log(`Indice ${i}: ${valores[i]}`);
}

console.log('----------------------------------------------');

console.log(`O valor 2 esta na posição ${valores.indexOf(3 )}`);
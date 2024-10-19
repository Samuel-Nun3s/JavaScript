var text = "Caminho do Codigo";

// length: Conta quantos caracteres tem na string(espaços tambem são considerados caracteres)
console.log("String: " + text.length);

// charAt: Percorre a string e coleta o caracter correspondente ao index informado
console.log("String: " + text.charAt(3)); 
console.log("String: " + text.charAt(text.length - 1));

// subtring: Coleta um trecho da string especificado pelos index informados
console.log("String: " + text.substring(1, 5));

// slice: Corta um trecho da string especificado pelos index informados
console.log("String: " + text.slice(1, 4));
console.log("String: " + text.slice(-3));

// indexOf: Procura o index da letra informada(coleta somente a primeira a ser encontrada)
console.log("String: " + text.indexOf('m'));

// indexOf (com parametro): Procura o index da letra informada, começando no index informado, ou depois dele
console.log("String: " + text.indexOf('o', 6)); 

// lastIndexOf: Procura o index da letra informada(coleta somente a ultima a ser encontrada)
console.log("String: " + text.lastIndexOf('o'));

// split: Divide a string em duas strings
console.log("String: " + text.split(", "));

// replace: Troca o caracter da string, por outro especificado
console.log("String: " + text.replace('m', 'o'));

// toUpperCase: Deixa todas as letras em Maiusculo
console.log("String: " + text.toUpperCase());

// toLowerCase: Deixa todas as letra em minusculo
console.log("String: " + text.toLowerCase());

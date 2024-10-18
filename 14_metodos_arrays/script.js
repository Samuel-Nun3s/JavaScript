const data = [
    {name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0},
    {name: "José", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0},
    {name: "Ana Caroline", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0},
    {name: "Bauer", age: 28, salary: 3500, active: true, team: "Frontend", bonus: 0},
    {name: "Matheus", age: 22, salary: 2500, active: false, team: "Mobile", bonus: 0},
]

// find: Percorre o array até achar o primeiro item com base na condição especificada
// const user = data.find((user) => user.age >= 25);

// console.log(user);


// filter: Percorre o array e retorna todos os items com base na condição especificada
// const users = data.filter((user) => user.salary >= 4000);

// console.log(users);


// findIndex: Percorre o array e retorna a posição do item com base na condição especificada
// const indexUser = data.findIndex((user) => user.name === "Bauer");

// console.log(indexUser);
// console.log(data[indexUser].active = false);
// console.log(data);


// Map: Percorre o array e retorna outro array com as modificações especificadas
// const users = data.map((user) => {
//     if (user.salary <= 2500) {
//         user.salary += 900;
//         user.bonus += 1; 
//     }

//     return {
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })

// console.log(users);


// reverse: Inverte a ordem do Array
// console.log(data.reverse());


// some: Retorna True se pelo menos um item tem as condições especificadas
// const userInactive = data.some((user => user.active === false));

// console.log(userInactive);


// Every: Retorna True se todos os items tiverem as condições especificadas 
// const userActive = data.every((user) => user.active === true);

// console.log(userActive);


// reduce: Reduz o array e devolve a redução desse array
// const totalSalarios = data.reduce((total, user) => total += user.salary, 0);

// console.log(totalSalarios);
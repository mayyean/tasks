// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.

// function day() {
//     let number = +prompt('Enter number from 1 to 7');

//     switch (number) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return "Thursday";
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
//         default:
//             return 'wrong number';
//     };
// };

// let week = day();
// alert(week);

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя id того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным

// let list = [
//     { id: 1, todo: 'Принять душ', done: false },
//     { id: 2, todo: 'Завтрак', done: false },
//     { id: 3, todo: 'Пойти на работу', done: false },
//     { id: 4, todo: 'Приготовить ужин', done: false },
//     { id: 5, todo: 'Лечь спать', done: false }
// ];

// function doneTask(id) {
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].id === id) {
//             list[i].done = true;
//             break;
//         };
//     };
// };

// function addTask(todo) {
//     let newId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
//     let newTask = { id: newId, todo: todo, done: false };
//     list.push(newTask);
// };

// let usInput = prompt('Enter the id of the task you have finished (1-5):');
// let taskId = parseInt(usInput);

// if (typeof taskId !== 'number' || taskId < 1 || taskId > 5 || taskId % 1 !== 0) {
//     alert('Invalid task ID. PLease enter a number between 1 and 5')
// } else {
//     doneTask(taskId);
//     alert('Task marked as done')
// };

// usInput = prompt('Enter a new task');
// if (usInput !== null && usInput !== '') {
//     addTask(usInput);
//     alert('New task added');
// };

// console.log(list);

// 3. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе.

// let list = [
//   { title: "Samsung",price: 1000, count: 3, color: ["black", "white", "blue"] },
//   { title: "Xiaomi", price: 600, count: 0, color: [] },
//   { title: "LG", price: 450, count: 5, color: ["black", "white"] },
//   { title: "Sony", price: 700, count: 4, color: ["white", "yellow", "gray"] },
// ];

// console.log(list);

// function getProduct(name) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].title === name) {
//       return list[i];
//     }
//   }
//   return null;
// }

// function productCount(product) {
//   product.count--;
// }

// function productInfo(product) {
//   console.log("Product price: " + product.price);
// }

// function confirmation() {
//   let answer = prompt("Do you want to get this product? (Enter 'yes' or 'no')");
//   return answer;
// }

// let enterProduct = prompt("Enter product name you want to get:");
// let product = getProduct(enterProduct);

// if (product) {
//   let productColor = prompt("Enter product color: " + product.color.join(", "));

//      if (product.color.includes(productColor)) {
//         productInfo(product);

//         if (product.count > 0) {
//             if (confirmation()) {
//                 productCount(product);
//                 alert('Thank you for the purchase!');
//             } else {
//                 alert('You canseled the purchase :(')
//             };
//         } else {
//             alert('Unfortunately, at the moment, this product is out of the stock');
//         };
//     } else {
//         alert('The selected color is not available for the product');
//     };
// } else {
//     alert('The selected product is not available at the stock');
// };



// 4. Сортировка по цене. Дан массив:
// [
//   {title: 'Samsung S20', price: 1000},
//   {title: 'Samsung A31', price: 200},
//   {title: 'Samsung S10', price: 600},
//   {title: 'Xiaomi Mi 10', price: 400},
//   {title: 'Xiaomi Redmi 8', price: 300},
//   {title: 'iPhone 13', price: 1100},
//   {title: 'iPhone 11', price: 800}
// ],
// задача: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос) затем найти подходящие товары и вывести пользователю в формате: Название товара - цена

// let phones = [
//     { title: 'Samsung S20', price: 1000 },
//     { title: 'Samsung A31', price: 200 },
//     { title: 'Samsung S10', price: 600 },
//     { title: 'Xiaomi Mi 10', price: 400 },
//     { title: 'Xiaomi Redmi 8', price: 300 },
//     { title: 'iPhone 13', price: 1100 },
//     { title: 'iPhone 11', price: 800 }
// ];
// console.log(phones);

// let range = prompt("Enter the price range (from and to), separated by a space:");

// let [minPrice, maxPrice] = range.split(' ');

// minPrice = parseInt(minPrice);
// maxPrice = parseInt(maxPrice);

// let changedPhones = [];
// for (let i = 0; i < phones.length; i++) {
//     let phone = phones[i];
//     if (phone.price >= minPrice && phone.price <= maxPrice) {
//         let changedPhone = `${phone.title} - ${phone.price}`;
//         changedPhones.push(changedPhone);
//     };
// };

// if (changedPhones.length > 0) {
//     alert(changedPhones.join('\n'));
// } else {
//     alert('Products in the specified price range were not found.');
// };


// 5. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет

// let hero1 = {};

// hero1.name = prompt("Enter the name of the first hero:");
// hero1.power = +prompt("Enter the power of the first hero (from 1 to 100)");
// hero1.agility = +prompt("Enter the agility of the first hero (from 1 to 100)");
// hero1.element = prompt(
//   "Enter the element of the first hero (fire, earth, water, air)"
// );

// let hero2 = {};

// hero2.name = prompt("Enter the name of the second hero:");
// hero2.power = +prompt("Enter the power of the second hero (from 1 to 100)");
// hero2.agility = +prompt("Enter the agility of the second hero (from 1 to 100)");
// hero2.element = prompt(
//   "Enter the element of the second hero (fire, earth, water, air)"
// );

// hero1.name = hero1.name || "Hero 1";
// hero2.name = hero2.name || "Hero 2";

// let elementBonus = {
//   fire: 20,
//   air: 15,
//   water: 10,
//   earth: 5,
// };

// if (elementBonus[hero1.element] !== undefined) {
//   hero1.power += elementBonus[hero1.element];
// }

// if (elementBonus[hero2.element] !== undefined) {
//   hero2.power += elementBonus[hero2.element];
// }

// let winner = "";

// if (hero1.power > hero2.power) {
//   winner = hero1.name;
// } else if (hero2.power > hero1.power) {
//   winner = hero2.name;
// } else if (hero1.agility > hero2.agility) {
//   winner = hero1.name;
// } else if (hero2.agility > hero1.agility) {
//   winner = hero2.name;
// }

// if (winner) {
//   alert("The winner is: " + winner);
// } else {
//   alert("No winner");
// }

// console.log(hero1);
// console.log(hero2);
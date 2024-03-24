/*
const projectName = "Сайт магазина";
const price = 2000;
const author = "Василий пупкин";

const template = author + " заказал " + projectName + " по цене " + price + "$"
console.log (template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`
console.log (template2)

let money = 10;

if (money > 50) {
    console.log ("Может купить наш продукт");
} else  if (money > 5) {
    console.log ("Может купить mini продукт");
} else {
    console.log ("Не хватает баланса");
}

let deposite = 12000;
let rate = 0.07 ;
let time = 24;
let houseCost = 13500;

let summProcent = deposite * (1 + rate/12) ** time;
console.log (summProcent);

if (summProcent > houseCost) {
    console.log ("Он сможет купить дом");
    let recent = summProcent - houseCost;
    console.log (`${recent}$ остаток после покупки`);
} else {
    console.log ("Он не сможет купить дом");
    let recent = houseCost - summProcent;
    console.log (`${recent}$ осталось накопить`);
}

const role = "manager"

switch (role) {
    case "manager":
        console.log ("Менеджер");
        break;
    case "admin":
        console.log ("Админ");
        break;
    case "ceo":
        console.log ("CEO");
        break;
    default:
        console.log ('Мы тебя не знаем')
}
*/
/*
let value = prompt ('Сколько будет 7 + или - 15?')

switch (value) {
    case '-8':
    case '22':
    case 'Я не робот':
        console.log ("Успех!")
        break;
    default:
        console.log ("Вы робот!")
}
*/

let balance = 1000
let bonusBalance = 900
let isBanned = false
let isExist = false
let isSelling = true

if ((balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling) {
    console.log ("Вы можете купить игру")
} else {
    console.log ("Вы не можете купить игру")
}

switch (true) {
    case !(balance > 1000 || bonusBalance > 100):
        console.log ("У вас недостаточно средств")
        break;
    case isBanned:
        console.log ("Вы забаненны")
        break;
    case isExist:
        console.log ("Игра уже куплена")
        break;
    case !isSelling:
        console.log ("Игра в данный момент не продается")
        break;
    default:
        console.log ("Вы можете купить игру")
}

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned 
    && !isExist 
    && isSelling
console.log (`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`)
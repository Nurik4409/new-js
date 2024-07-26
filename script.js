"use strict"




// alert("Hello World");
// // console.log("Hello console.log")
// [1,2].forEach(alert);

// let a = "Hello World"
// var b = "My school"
// const c = "Private"
// alert(a)
// console.log(b)
// document.write(c)

// let a = 10,
//     b = "John",
//     c = 3.5;

//             document.write(a)
//             alert(b)

// const TEXT_WRITE = "new head";

// let text = TEXT_WRITE
// document.write(text)

// const GENDER_MALE = "Male"
// const GENDER_FEMALE = "Female"

// document.write(GENDER_FEMALE,GENDER_MALE)

// const ADMIN = 10;
// const   NAME = "John";
// let text = NAME
// alert(text)

// bigin
// let a = prompt("Typing number")
// document.write(typeof(a))

// null
// let a = null
// document.write(typeof(a))

// undefinded
// let a 
// document.write(a)

// let a = +prompt("Skolko let Amiru?")
// document.write('Emu -> ${a}')
// document.write(typeof(a))

// let a = confirm("cho.ose 1 or two")
// document.write(a)

// let a = 10,
//     b = 20,
//     c = 30

// document.write(a + b - c)

// let a = 1;
// a++
// document.write(a)

// let a = 10;
// a--
// document.write(a)

// and -> &
// or |
// xor -> ^
// left shfit -> <<
// right shift -> >>
// zero fill right shift

// let a = prompt("dayte chislo")
// alert(a)

// let a = prompt("1 chislo"),
//     b = prompt("2 chislo");
// document.write(a * b)    

// let a = prompt("guess our number or year")

// if (a == 2024) {
//     alert("thats true")
// }
// else if (a == 2023){
//     alert("thats 2023")
// }
// else{
//     alert("Thats false")
// }

// let b = b > 1 ? alert("true") : alert("false");

// let age = prompt("Your age?")
// let msg = (age < 13) ? 'Hello baby' :
//     (age < 24) ? "Hello teenager":
//     (age < 50) ? "Hello granny" : 'You are higher man';
// alert(msg)



// let a = prompt("Number one")
// let b = prompt("Number two")
// let sravnenie = (a > b) ?  alert(a):
//     (a < b) ?  alert(b) : 'null' ;
// alert(sravnenie)

// let a = prompt("Number")
// if (a % 2 ==0) {
//     alert("chotno")
// }
// else if (a % 2 == 1){
//     alert("nechotno")
// }
// else{
//     alert("null")
// }

// let hour = prompt("Time?")
// let day = (hour < 13) ? alert('Utro') :
//     (hour < 18) ? alert('Obed'):
//     (hour < 24) ? alert('Noch'):
//     (hour > 24) ? alert('Nepravilnoe vrema'): alert('null');
// alert(day)

// let a = prompt("Number")
// if (a % 3 || 5 == 0) {
//     alert("chislo delitsa na 3 i 5")
// }
// else if (a % 3 || 5 == 1){
//     alert("chislo ne delitsa na 3 i 5")
// }
// else{
//     alert("null")
// }

// let a = prompt("Number one")
// let b = prompt("Number two")
// let sravnenie = (a > b) ?  alert(a):
//     (a < b) ?  alert(b) : 'null' ;
// alert(sravnenie)

// let b = +prompt("Chislo?")
// let chislo = (0 < b && b > 50) ? 'diapazon 0-50':
//     (50 < b > 100) ? 'diapazon 50-100':
//     (100 < b > 150) ? 'diapazon 100-150': 'nothing';
// document.write(chislo)

// let b = prompt("chislo?")
// if (b == 12||1||2){
//     alert("it's winter")
// }
// else if (b == 3||4||5){
//     alert("it's spring")
// }
// else if (b == 6||7||8){ 
//     alert("it's summer")
// }
// else if (b == 9||10||11){
//     alert("it's autumn")
// }
// else{
//     alert("not found")
// }



// let a = prompt("Number")
// if (a % 2 ==0) {
//     alert("chotno")
// }
// else if (a % 2 == 1){
//     alert("nechotno")
// }
// else{
//     alert("null")
// }

// let b = prompt("skolko vam let?")
// let proverka = (b < 18) ? "вы несовершеннолетний":
//     (b > 18) ? "вы совершеннолетний" : "null";
// document.write(proverka)

// let a = prompt("1 storona")
// let b = prompt("2 storona")
// let c = prompt("3 storona")
// let treugolnik = (a > b + c) ? "триугольник существует" :
//     (a < b + c) ? "триугольник не существует" : "null";
// document.write(treugolnik)

// let a = +prompt("1 number")
// let b = +prompt("2 number")
// document.write(typeof(a&&b))
// let chislo = (a||b > 10) ? alert(a + b):
//     (a||b < 10) ? alert(a*b): "null";
// document.write(chislo)
    
// let a = prompt("dayte god")
// let year = (a % 4 == 1) ? "год не высокосный":
//     (a % 4 == 0) ? "год  высокосный" : "null";
// document.write(year)

// let a = +prompt("summa kredita")
// let c = +prompt("srok")
// let b = ((a % 100 * 5) * c + a)
// document.write("сумма кредита:")
// document.write(a) 
// document.write("срок:")
// document.write(c)
// document.write("годовая ставка:")
// document.write("5%")
// document.write("итог:")
// document.write(b)

// let a = 50;
// let b;
// document.write(a ?? b)

// let a = prompt("do you think i'm scary? 1=>Yes, 0=>No")
// let opros = (a == 1) ? document.write(" 😭😢 I hate you") :
//     (a == 0) ? document.write("Thank's") : document.write("Null")
// document.write(opros)

// let i = 8;
// while(i){
//     alert(i);
//     i--;
// }

// let i = 0;
// do {
//     alert(i);
//     i++;
// }while(i < 3);

// let result = ""
// let i = 0
// do{
//     i+= 1;
//     result += `${i}`;
// }while(i > 0 && i < 5);
// document.write(result)

// for (let index = 0; index < 5; index++) {
//     document.write(index)
    
// }
// for(nachalo, usloviye, shag){
//     telo skiled body
// }

// document.addEventListener("DOMContentLoaded" , () => {
//     let result = ""
//     let i = 0
//     const maxIterm = 5
//     const ul = document.getElementById("myList")

//     for (let i = 0; i < 5; i++) {
//         document.write(i)
//         result += `<li> <img src = "https://avatars.mds.yandex.net/i?id=a8ffc42530d11d373e07ff512a9e4a963657dc04f5036805-3593759-images-thumbs&n=13" alt = "Image" ${i}"">
//                 </li>`
//     }
// ul.innerHTML = result
// });


// let a = 0 
// while(true){
//     let v = +prompt("give me number...")
//     if(!v) break;
//     a += v;
// }
// document.write("your number is :" + a)

// let i = 0
// while(i < 10){
//     if(i == 5){
//         break;
//     }
//     document.write(i)
//     i++;
// }

// let  one = +prompt("1 number")
// let two = +prompt("2 number")
// let three = prompt("znak")
// switch (three){
//     case '+':
//         document.write(one + two)
//         break;
//     case '-':
//         document.write(one - two)
//         break;
//     case '*':
//         document.write(one * two)
//         break;
//     case '/':
//         document.write(one / two)
//     default:
//         document.write("null")
// }

// let  one = prompt("write an one weekday")
// switch (one){
//     case 'monday':
//         document.write("its first day")
//         break;
//     case 'tuesday':
//         document.write("its second day")
//         break;
//     case 'wednesday':
//         document.write("its third day")
//         break;
//     case 'thursday':
//         document.write("its fourth day")
//     case 'friday':
//         document.write("its fiveth day")
//     case 'saturday':
//         document.write("its sixth day")
//     case 'sunday':
//         document.write("its seventh day")
//     default:
//         document.write("there isnt a day of the week, write again")
// }

// document.addEventListener("DOMContentLoaded" , () => {
//     const form = document.getElementById("dayform")
//     const result = document.getElementById("result")

//     form.addEventListener('submit', function(event){
//         event.preventDefault();
//         const day = document.getElementById("day").arrialValueMax.trim().toLocalLowerCase();
//         let message;

//         switch (day){
//             case "monday":
//                 message = "Its monday"
//                 break;
//             case "tuesday":
//                 message = "its tuesday"
//                 break;
//             case "wednesday":
//                 message = "its wednesday"
//                 break;
//             case "thursday":
//                 message = "its thursday"
//                 break;
//             default:
//                 message = "please give me a true weekday"
//                 break;
//         }
//         result.innerHTML = message; 
//     }); 
// });


// document.write("Let's open pasport for you !")
// let a = prompt("Your name")
// let b = prompt("Ypur surname")
// let c = prompt("Your birthday")
// let d = prompt("Your phone number")
// let e = prompt("Where are you from")
// document.write("The results")
// document.write("Your name is" + a)
// document.write("Your surname is" + b)
// document.write("Your birthday is in" + c)
// document.write("Your phone number is " + d)
// document.write("You are from" + e)

// function summa(a, b){
//     return a + b
// }

// let overall = summa(5, 10)
// document.write(overall)


// function siklop(num){
//     for (let i = 0; i < num; i ++) {
//         document.write(i);
//     }
// }
// let a = +prompt("Give me a number")
// siklop(a)

// let a = +prompt("your age")
// function proverka(a){
//     if (a < 18){
//         document.write("confirm")
//     }
//     else{
//         document.write("welcome")
//     }
// }
// proverka(a)

// a = prompt("give me a word")
// function pollindrom(a){
//     if (a = reverse(a)){
//         document.write("true")
//     }
//     else {document.write("false")}
// }
// pollindrom(a)

// let a = +prompt("1 number")
// let b = +prompt("2 number")
// let c = prompt("choose what do you need to do")
// function calc(a, b, c){
//     if(c == '+') {
//         document.write(a + b)
//     }
//     else if(c == '-') {
//         document.write(a - b)
//     }
//     else if(c == '*') {
//         document.write(a * b)
//     }
//     else if(c == '/') {
//         document.write(a / b)
//     }
//     else{
//         document.write("false")
//     }
// }
// calc(a, b, c)

// let a = +prompt("give me a number")
// function kub(a){
//     document.write(a*a*a)
// }
// kub(a)

// let a = +prompt("starter number")
// let b = +prompt("ending number")
// function result(a, b){
//     document.write("your diapozon is" + " " + (a + b))
// }
// result(a, b)

// let a = "Abdusattor"
// let b = "Nurmuhammad"
// let c = +prompt("dayte chislo")
// if (c == 0) document.write(a)
//     else if (c == 1) document.write(b)
//         else document.write("Nothing")



// const funct = (params) => {
//     body function
// };

// function Person(){
//     this.age = 0
//     setInterval(() => {
//         this.age++;
//         document.write(this.age)
//     })
// }
// const result = new Person();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const chotniy_numbers = numbers.filter(num => num % 2 == 0)
// document.write(chotniy_numbers)

// function timer(){
//     this.time = 0

//     setInterval(() => {
//         this.time++;
//         document.write(this.time);
//     }, 1000)
// }
// const a = new timer()

// let age = +prompt("your age")
// let k = (age < 18) ?
//     () => document.write("welcome"):
//     () => document.write("goodendag")
// k()

// let mir = (a, b) => {
//     let overall = a + b
//     return overall;
// }
// document.write(mir(5,7))

// let a = +prompt("1 number")
// let b = +prompt("2 number")
// let c = prompt("viberite znak")
// let calc = (a, b, c) => {
//     if (c == "+") document.write(a + b)
//     else if (c == "-") document.write(a - b)
//     else if (c == "*") document.write(a * b)
//     else if (c == "/") document.write(a / b)
//     else document.write("nothing")
// }
// calc(a, b, c)

// let time = new Date("2024-06-18")
// document.write(time)

// let time = Date.now()
// for (let i = 0; i < 100000; i++){
//     let = i * i * i;
// }
// let end = Date.now();
// document.write(`time ${end - time} second`)



// let a = {
//     name:"abror",
//     age:35,

//     toString(){
//         return `name: "${this.name}" , age:"${this.age}"`
//     }
// }
// document.write(a)

// let person = {
//     name:"abror",
//     age:18,
//     student:true,
//     languages:['python','php','javascript'],
//     state:"uzb"
// };
// let json = JSON.stringify(person)
// document.write(typeof json)
// document.write("<br>")
// document.write(json)

// function arif(x,n){
//     let result = 1
//     for(let i = 0; i<n;i++){
//         result = result * x
//     }
//     return result
// }
// document.write(arif(2,10))

// function arif(x,n){
//     if (n == 1){
//         return x
//     }else{
//         return x * arif(x , n- 1);
//     }
// }
// document.write(arif(2,3))

// function pow(x,n){
//     return(n == 1 ? x: (x* pow(x, n -1)));
// }
// document.write(pow(2,3))

// let x = +prompt("1 number")
// let n = +prompt("2 number")
// function arif(x,n){
//     let result = 1
//     for(let i = 0; i<n;i++){
//         result = result * x
//     }
//     return result
// }
// document.write(arif(x,n))

// class person{
//     constructor(name){
//         this.name = name
//     }
//     word(){
//         document.write(this .name)
//     }
// }
// let a = new person("abror")
// a.word();

// class Bexruz{
//     constructor(name){
//         this.name = name
//     }
//     python (){
//         document.write(`${this.name} знает питон`)
//     }
// }
// super(name); {
//     this.surname = surname
// class Shamsiddin extends Bexruz{
//     html(){
//         document.write(`${this.name} знает html`)
//     }
//     surname(surname){
//         document.write(` Его фамилия ${this.surname} `)
//     }
// }}
// let a = new Shamsiddin("shamsiddin")
// let b = new Shamsiddin(surname("tojiboyev"))
// a.python()
// document.write("<br>")
// a.html()
// b.surname()

// try{
//     document.write("Hello this is try")
// }catch{
//     document.write("Hello this is catch")
// }

// class Car {
//     constructor(marka, model){
//         this.marka = marka
//         this.model = model
//     }
//     formula(){
//         document.write(`${this.marka} BMW`)
//     }
//     formula2(){
//         document.write(`${this.model} CS Level`)
//     }
// }
// class anything extends Car{
//     constructor(marka, model, color){
//         super(marka, model)
//         this.color = color
//     }
//     marka_s(){
//         document.write(` марка:${this.marka} `)
//     }
//     model_a(){
//         document.write(` модель:${this.model} `)
//     }
// }
// let a = new anything("BMW", "CS", "black")
// a.marka_s()
// document.write("<br>")
// a.model_a()
// document.write("<br>")

// class Temperature{
//     constructor(gradus, Fahrengeyd){
//         function getCelsius(a){
//             if (getCelsius === String){
//                 document.write("сейчас" + a)
//             }else{"nothing"}
//         }
//         function getFahrenheit(b){
//             if (getFahrenheit === String){
//                 document.write("сейчас" + b)
//             }else("nothing")
//         }

//     }
// }

// let a = new Temperature("+38'C", "+95'F")
// a.getCelsius(a)
// a.getFahrenheit(b)





// let CPB = document.getElementById("CPB")
// let p = document.querySelector('#container p')

// CPB.addEventListener("click", function(){
//     p.textContent = "tixo sidi behruz"
// })

// let list = document.getElementById("list")
// let tim = document.getElementById("tim")

// tim.addEventListener('click', function(){
//     let item = document.createElement('li')
//     item.textContent = "ading text";
//     list.appendChild(item)
// })

let register = document.getElementById("register")
let button = document.getElementById("button")
button.addEventListener('click', function(){
    let item = document.createElement('input')
    item.textContent = register
    register.appendChild(item)
})


















































































































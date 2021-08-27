alert("Merhaba");

//Konsola yazdırma
console.log("Merhaba");
console.log(123);
console.log(true);
console.log([1,2,3]);
console.error("Bir Hata Mesajı Oluştu");
console.warn("Bir Uyarı Mesajı Oluştu");
console.clear();


//************************************************************************


//Değişkenler

var ad;
console.log(ad);

ad='Ali';
console.log(ad);

//Değişken tanımlama kuralları
//Değişkenler sayı ile başlayamaz örn: var 1yas;
//komut isimleri değişken olarak kullanılamaz örn: var for;
//Birden fazla kelime kullanılamaz  örn: var ad soyad;
//Büyük küçük harf duyarlılığı vardır

var yas1;
var _yas2;
var $yas3;
var adSoyad;
var AdSoyad;

//Değişken türleri  var, let, const

var sayi1=1;
console.log(sayi1);

let sayi2=2;  //var ile tanımlanabilen tüm değişken tipleri let ile de tanımlanabilir
console.log(sayi2);

const sayi3=3;  //const ile tanımlanan değişkenler static tir aldığı değer değiştirilmez
console.log(sayi3);

//************************************************************************
//Değişken Türleri

//primitive
 let isim='Can';                    //string
 console.log(typeof isim);
 let sayi=5.2;                      //number
 console.log(typeof sayi);
 let active=true;                   //boolean
 console.log(typeof active);
 let job=null;                      //object
 console.log(typeof job);
 let car;                           //undefined
 console.log(typeof car);

 //reference

let isimler=['Ali','Ahmet','Sena'];  // Array
console.log(typeof isimler);
let address={
    city:'Mersin',
    country:'Türkiye'
}
console.log(typeof address);        //object
var calculateAge=function(){        //function
       return 0;
};
console.log(typeof calculateAge);


//************************************************************************
//Tür Dönüşümleri

//string to number
let num1='10';
let num2='2';
console.log(num1+num2);

num1=Number('10');
num2=Number('2');
console.log(num1+num2);

//number to string
let num3=5;
let num4=String(num3);
console.log(typeof num4);

let num5=(8).toString; //iki kullanımda doğrudur


//boolean to string
let bool=true;
bool=String(true);
console.log(typeof bool);

var tarih=new Date();
console.log(tarih);


let num7=parseInt('10.5');
console.log(num7);
let num8=parseFloat('13.1');
console.log(num8);

//************************************************************************
//Date işlemleri

let d=new Date();
let birthday=new Date(2000,11,21);
console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()-birthday.getMonth());
console.log(d.getDate()-birthday.getDate());
d.setFullYear(2023);
console.log(d.getFullYear());


//************************************************************************
// Sayı işlemleri

var sayimi= isNaN('a15');
console.log(sayimi);

var a=5.31234795641;
var b;

b=a.toPrecision(6); //sayının kaç basamaklı olmasını istiyorsak o basamak sayısını parametre olarak alır
b=a.toFixed(2);     //virgülden sonraki basamak sayısını belirler

b=Math.PI;
b=Math.round(2.7);                      //en yakın tamsayıya yuvarlar
b=Math.ceil(5.3);                       //en yakın büyük tamsayıya yuvarlar
b=Math.floor(4.9);                      //en yakın küçük tamsayıya yuvarlar
b=Math.max(1,4,7,96,2,52);              //sayılar arasında en büyük olanı bulur
b=Math.min(88,45,62,79,10,24);          //sayılar arasında en küçük olanı bulur
b=Math.pow(2,4);                        //üs alma işlemlerinde kullanılır
b=Math.random()*10;                     //0 ile 10 arasında random sayı değeri verir
b=Math.sqrt(81);                        //karekök alma işlemlerinde kullanılır
b=Math.abs(-853);                       //Negatif sayıları pozitif yapar 


console.log(b);


//************************************************************************
// String işlemleri
 
var firstName='İlkay';
var lastName="Düzgün";
var value;

value=firstName+' '+lastName;

value=firstName;
value +=' Düzgün';



value=value.toUpperCase(); //tüm harfleri büyük yapar
value=value.toLowerCase(); //tüm harfleri küçük yapar

value=value.substring(0,6);  //belli index aralığını verir   
value=value.slice(3);  //parametre olarak verilen indexten sonrasını gösterir
value=value.indexOf('a'); //verilen harfin string içinde kaçıncı indexte olduğunu gösterir
value=value.length; //stringteki karakter uzunluğunu verir
value=firstName.concat(' '+lastName);
value=value.replace('İlkay','    Can')+' ';  //kelimeleri değiştirir
value=value.trim();  //string başındaki ve sonundaki boşlukları yok eder

let hobbies='yüzme,gitar,yürüyüş';
value=hobbies.split(','); //string içindeki kelimeleri , ile objelere böler
value=value.includes('yüzme');

console.log(value);

//************************************************************************
// Template Literals

var yearOfBirth=2000;
firstName='İlkay';
lastName='Düzgün';
city='Çorum';

value='My name is '+firstName+' I\'am '+ (2020-yearOfBirth) +' years old and I live in '+city;
value=`My name is ${firstName}. I'am ${(2020-yearOfBirth)} years old and I live in ${city}`; //template literals

console.log(value);

//************************************************************************
// Arrays

var names=['selin','cem','ali','melis'];
var year=[1979,2012,2008,1996];
var mix=['Ankara',1881,null,undefined,['Deniz','Nehir']];

//get method
console.log(names[2]);

//set method
names[2]='emel';

//add
year.push(1972); //dizi sonuna eleman ekler
year.unshift(2021); //dizi başına eleman ekler

//remove
year.pop(); //dizi sonundan eleman siler
year.shift() //dizi başından eleman siler

let index= names.indexOf('cem');
console.log('index: '+index);  //dizide bulunmayan bir elemanın index değeri sorgulanırsa -1 değeri döner

//sort
console.log(year.sort());

names.reverse(); //dizi elemanlarını ters çevirir

//concat
console.log(year.concat(names));

names.splice(0,2,'Aylin');  // 0. indexten itibaren 2 eleman sildi ve isim ekledi herzaman bir isim eklenmek zorunda değildir sadece silme işlemi içinde kullanılabilir

function over20(years){
    let age=2021-years
    return age>=20;
}

value=year.find(over20); //şartı sağlayan ilk dizi elemanını verir
value=year.filter(over20); //dizideki şartı sağlayan tüm elemanları verir

console.log(value);
console.log(names);
console.log(year);
console.log(mix);

//************************************************************************
// Object Literals

var val;
let person={
    name:'İlkay',
    surname:'Düzgün',
    age:21,
    hobbies:['müzik','spor','kitaplar'],
    address:{
        city:'Mersin',
        country:'Türkiye'
    }
};

let people=[
    {firstName:'Cem',lastName:'Eren'},
    {firstName:'Onur',lastName:'Demir'},
    {firstName:'Meltem',lastName:'Çelik'}
];
val=person.age;
val=person.hobbies[1];
val=people[1].firstName;
console.log(person);
console.log(val);
console.log(people);

//************************************************************************
// Functions
const sum=function(a,b){
    let c=a+b;
    return c;
}

console.log(sum(15,20));


function sumAll(){
    let total=0;
    for(let i=0;i<arguments.length;i++){     //arguments gönderilecek parametre sayısı belli olmadığında kullanılır
        total+=arguments[i];
    }
    return total;
}

console.log(sumAll(16,45,4));
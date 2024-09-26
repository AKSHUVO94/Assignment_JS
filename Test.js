
// const toCamelCase = require('./Function');

// console.log(toCamelCase("ONE DRIVE PLEASE")); // Output: OneDrivePlease


// var paragraph = 'আজ শনিবার রাজধানীর মিন্টো রোডে ঢাকা মহানগর পুলিশের (ডিএমপি) গণমাধ্যম ও জনসংযোগ বিভাগের কার্যালয়ে গ্রেপ্তারের তথ্য জানান ওয়ারী বিভাগের উপকমিশনার (ডিসি) মো. ছালেহ উদ্দিন। গ্রেপ্তার তিনজন হলেন মো. আকবর হোসেন, তাঁর ছেলে মো. আসিফ সুলতান ও মো. আজাহারুল ইসলাম খান।'
// console.log(paragraph)

// -------------------//

// var Case = "Rakib"
// console.log(Case.toLocaleUpperCase());

// -------------------//
// var FriendsName = "Rakib, Tutul, Noman, Rezaul";
// console.log(FriendsName.split("Rakib"))
// console.log (FriendsName.indexOf("o"));

// -------Word Position: indexOf()-----//
// var NameList = 'আজ শনিবার রাজধানীর মিন্টো রোডে ঢাকা মহানগর';
// console.log (NameList.indexOf("রোডে"))

// -------String to Number -------//
// var Number1 = "15.50"
// var number2 = 35.50
// // var Total = Number1+number2;
// Number1 = parseFloat(Number1) 
// console.log( Number1+number2)


// ------Interger to String-----//
// var String1 = 15
// var String2 = 35

// String2 = " " + String2

// console.log( String1+String2)

// -------Divided------//
// var Num1 = 50;
// var Num2 = 350;

// var total = Num2/Num1;
// console.log(total)

// ------Modules/Reminders-----//

// var Num1 = 50;
// var Num2 = 350;

// var total = Num1 % Num2;
// console.log(total)


// ------Absulate (ABS): Math.abs -----//

// var Num1 = -50;
// var sum = Math.abs(Num1);
// console.log(sum)


// ------Math.round-----//

// var Member = 20;
// var voter = 15.56944;

// var sum = Member+Math.round(voter);
// console.log(sum)


// // ------Math.ceil : value in Up-----//

// var Member = 20;
// var voter = 15.15999;

// var sum = Member+Math.ceil(voter);
// console.log(sum)



// ------Math.floor : value in Down-----//

// var Member = 20;
// var voter = 15.999999;

// var sum = Member+Math.floor(voter);
// console.log(sum)



// ------Math.random----- Default value less then 1 and gater then 0//   

var sum = Math.random()*100;
console.log(sum)
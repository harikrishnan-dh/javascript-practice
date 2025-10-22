
// //javascript basic concepts


// // // // // // console.log("Welcome to the page");
// // // // // // alert("Welcome to the site");
// // // // // // console.log("This is a test message");
// // // // // // console.log([1, 2, 3, 4, 5]);
// // // // // // console.table({nam: "John", age: 30, city: "New York"});
// // // // // // // console.clear();
// // // // // // console.log({hari: "John", age: 30, city: "New York"});
// // // // // // console.warn( "warning");
// // // // // // for(i=1;i<11;i++)
// // // // // // {
// // // // // // console.log( i)
// // // // // // }
// // // // // // var l=80;
// // // // // // var  o=70;
// // // // // // console.log(l+o);

// // // // // // let a=50;
// // // // // // let g=40;
// // // // // // console.log(a+g);

// // // // // // const z=90;
// // // // // // const t=80;
// // // // // // console.log(z+t);
// // // // // // {
// // // // // //     var e=60;
// // // // // //     var b=70;
// // // // // //     console.log(e+b);

// // // // // //     let x=100;
// // // // // //     let y=200;
// // // // // //     console.log(x+y);
// // // // // //     const p=300;
// // // // // //     const q=400;
// // // // // //     console.log(p+q);

// // // // // // }
// // // // // // console.log(e+b);

// // // // // // // 2.varaible redeclartion

// // // // // // var m=10;
// // // // // // console.log(m);
// // // // // // var m=20;
// // // // // // console.log(m);
// // // // // // let n=30;
// // // // // // console.log(n);
// // // // // // let s=40; 
// // // // // // console.log(s);
// // // // // // const r=50;
// // // // // // console.log(r);
// // // // // // const u=60; 
// // // // // // console.log(u);

// // // // // // // 3.value assignment

// // // // // // var d=1000;
// // // // // // console.log(d);
// // // // // // d=600;
// // // // // // console.log(d);
// // // // // // let f={"hari":1,"ram":2};
// // // // // // console.log(f); 
// // // // // // f={"hari":3,"ram":2};
// // // // // // console.log(f);
// // // // // // const h=900;
// // // // // // console.log(h); 
// // // // // // v=100;
// // // // // // console.log(v);
// // // // // // let age=25;
// // // // // // console.log(age);
// // // // // // age=30; 
// // // // // // console.log(age);
// // // // // // // console.error("This is an error message");

// // // // // // // 4. Data Types in JavaScript

// // // // // // var o=10; 
// // // // // // console.log(typeof o);
// // // // // // var ename="John";
// // // // // // console.log(typeof ename);
// // // // // // var  school=false;
// // // // // // console.log(typeof school);
// // // // // // var hd=(90.5 + 80.5-70.5-60.5*67*90);
// // // // // // console.log( hd);
// // // // // // var w= ("hari");
// // // // // // console.log(typeof w);
// // // // // // console.log(w);
// // // // // // let yd=100;
// // // // // // console.log(yd);
// // // // // // console.log(typeof yd);
// // // // // // const pi= ({"hari":3.14});
// // // // // // console.log(pi);
// // // // // // console.log(typeof pi);
// // // // // // let c=("kumar");
// // // // // // console.log(c);
// // // // // // console.log(typeof c);
// // // // // // c=(1234);
// // // // // // console.log(c);
// // // // // // console.log(typeof c);
// // // // // // const table=({ "hari":1,"ram":2,"sita":3});
// // // // // // console.table(table);
// // // // // // console.log(typeof table);
// // // // // // var rname="John";
// // // // // // console.log(rname);
// // // // // // const o=(["2" ,"hari",100,true]);
// // // // // // const b=2
// // // // // // const j=o+b
// // // // // // console.log(j);
// // // // // // let mame=null;
// // // // // // console.log(mame);
// // // // // // let l;
// // // // // // console.log(l);
// // // // // // var d=new Date();
// // // // // // console.log(d);
// // // // // // const sym1=Symbol( "JK");
// // // // // // console.log(sym1);
// // // // // // console.log(typeof sym1);

// // // // // // 4. type converstion

// // // // // // let m
// // // // // //   m=100;
// // // // // // console.log(m,typeof m);
// // // // // // const v=String(m);
// // // // // // console.log(v,typeof v);
// // // // // // let w=Number("1234");
// // // // // // console.log(w,typeof w);
// // // // // // let x=new Date();
// // // // // // console.log(x,typeof x);
// // // // // // q=[1,2,3,4,5];
// // // // // // console.log(q,typeof q);
// // // // // // let y="1234";
// // // // // // console.log(y,typeof y);
// // // // // // y=Number(y);
// // // // // // console.log(y,typeof y);
// // // // // // var h=[1,2,3,4,5,8,6,9,5,2,18,8,4,4,4];
// // // // // // console.log(h);
// // // // // // h[4]=1066;
// // // // // // console.log(h);
// // // // // // console.log(h[4]);
// // // // // // console.log(h[10]);
// // // // // // na=("36");
// // // // // // console.log(na,typeof na);
// // // // // // na=Number(na);
// // // // // // console.log(na,typeof na);
// // // // // // na=("46.50");
// // // // // // // na=Number(na);
// // // // // // console.log(na,typeof na);
// // // // // // na=parseFloat(na);
// // // // // // console.log(na,typeof na);

// // // // // // //5.type coercion

// // // // // // let a="100";
// // // // // // let b=50;
// // // // // // k=a+b;
// // // // // // console.log(k);
// // // // // // console.log(a-b);
// // // // // // console.log(a*b);
// // // // // // console.log(a/b);

// // // // // // // 6.arthmetic operators

// // // // // // y=10;
// // // // // // x=5;
// // // // // // i=y+x;
// // // // // // i=5**5;
// // // // // // console.log(i);
// // // // // // c=30+49;
// // // // // // console.log(c);
// // // // // // w=90
// // // // // // e=80
// // // // // // c=++w + --e;
// // // // // // console.log(c);
// // // // // // p=10/30;
// // // // // // console.log(p);

// // // // // //  7. math functionsc;

// // // // // let c;
// // // // // c=Math.PI;
// // // // // c=Math.round(4.6);
// // // // // console.log(c);
// // // // // c=Math.E;
// // // // // c=Math.sqrt(64);
// // // // // console.log(c);
// // // // // c=Math.min(2,3,4,5,6,7,8,9,0,-1);
// // // // // console.log(c);
// // // // // c=Math.max(2,3,4,5,6,7,8,9,0,-1);
// // // // // console.log(c);
// // // // // c=Math.floor(4.9);
// // // // // console.log(c);
// // // // // c=Math.ceil(4.1);
// // // // // console.log(c);
// // // // // c=Math.abs(-4.6);
// // // // // console.log(c);
// // // // // c=Math.random();
// // // // // console.log(c);
// // // // // c=Math.pow(8,2);
// // // // // console.log(c);
// // // // // c=Math.trunc(4.8);
// // // // // console.log(c); 
// // // // // c= Math.sign(19);
// // // // // console.log(c);

// // // // // // // // 8.compersion operators
// // // // // // // const a=50;
// // // // // // // const b=50;
// // // // // // // console.log(a==b);
// // // // // // // console.log(a===b);
// // // // // // // console.log(a!=b);
// // // // // // // console.log(a!==b);

// // // // // // // 9. relational operators in java script
// // // // // // const m=60
// // // // // // const n=70
// // // // // // console.log(m>n);
// // // // // // console.log(m<n);
// // // // // // console.log(m>=n);
// // // // // // console.log(m<=n);

// // // // // // // 10.logical operators in javascript
// // // // // // logical and
// // // // // logical or
// // // // // logical not
// // // // // let g=100;
// // // // // let h=80;
// // // // // console.log(g>=200);
// // // // // console.log(h>=100);

// // // // // logical and
// // // // // const j=30;
// // // // // console.log(j>=35 && j<=100);

// // // // // // logical not
// // // // // w=40;
// // // // // m=50;
// // // // // console.log(!w,!m);

// // // // //logical or
// // // // // e=10;
// // // // // console.log(e>=40 || e<=60);

// // // // // //11.strict equality and idertity operstors
// // // // // let a=50;
// // // // // b="50";
// // // // // console.log(a==b);
// // // // // console.log(a===b);
// // // // // console.log(a!=b);

// // // // // // 12. conditional operators and trenary operators(?!)
// // // // // const age=25;
// // // // // const result=age>=18?"you are eligible to vote":"you are not eligible to vote";
// // // // // console.log(result);

// // // // // const member=16;
// // // // // const reslut=member>=18?"you are eligible to vote":"you are not eligible to vote";
// // // // // console.log(reslut);

// // // // // const e=17; 
// // // // // const r=e>=18?"you are eligible to vote":"you are not eligible to vote";
// // // // // console.log(r);

// // // // // let age=22;
// // // // // let message=age>=18?"you can vote":"you cannot vote";
// // // // // console.log(message);

// // // // // 13 bitwise opertors in  javascript
// // // // // bitwise operators(&)


// // // // // 14 nullish coalescing operator(??)
// // // // let a="hello"?? 55;
// // // // let b= '' ?? 45;

// // // // console.log(a); 
// // // // console.log(typeof(b));
// // // // const r={name:"hari",age:25};
// // // // r.city="banglore"; 
// // // // console.log(r.name);
// // // // console.log(r.age);
// // // // console.log(r.city);
// // // // // 15 increment (++) and decrement opertors (--)
// // // // // postfix increment a++
// // // // // prefix increment ++a
// // // // // postfix decrement a--
// // // // // prefix decrement --a
// // // // let e=5;
// // // // ++e;
// // // // console.log(e);

// // // // let f=10;
// // // // f--;
// // // // console.log(f);
// // // // // prefix increment
// // // // let g=15;
// // // // const h=++g;
// // // // console.log(h);
// // // // // postfix increment
// // // // let i=15;
// // // // const j=i++;
// // // // console.log(j);
// // // // // console.log(i);

// // // // // 16 if statment
// // // // // if (condition){
// // // // // statmenta}

// // // // let age =18;
// // // // if(age>=18){
// // // //     console.log("you are eligible to vote");
// // // // }
// // // // // 17 if else statment
// // // // // if else statment

// // // // let human =25;
// // // // if(human>=18){   /* this a condition
// // // //     */
// // // //     console.log("you are eligible to vote");
// // // // }
// // // // else{
// // // //     console.log("you are not eligible to vote");
// // // // }

// // // // let l= 200;
// // // // if( l>=100)
// // // // {
// // // //     console.log("this number possitve");

// // // // }
// // // // else
// // // // {
// // // //     console.log("this number not posstive ");
// // // // }

// // // // let o=prompt("enter the number:");
// // // // if( o!=null && r>=18);
// // // // {
// // // //     console.log("you are eligible to vote");
// // // // }



// // // // // else if lader

// // // // let u =500;

// // // // if (u < 280) {
// // // //     console.log("greater than value 0f 90");

// // // // }else if(u<180)
// // // // {
// // // //     console.log("greater than value of 80");
// // // // }else if(u<140)
// // // // {
// // // //     console.log("greater than value of 140");
// // // // }

// // // //  else {
// // // //     console.log("less than value");
// // // // }
// // // // //19 
// // // // nesed if
// // // //  let i=90;
// // // //  if(i>=90) {
// // // //     console.log("a grade ");
// // // //  } 
// // // //       else if(i>=80) {
// // // //         console.log("b garde");
// // // //     }
// // // //      else if(i>=50) {
// // // //         console.log("c garde");
// // // //     }
// // // //     else if(i>=35) {
// // // //         console.log("d garde");
// // // //     }
// // // //  else {
// // // //     console.log("fail");
// // // // }



// // // // // /20switch statment///

// // let days=5;
// // switch(days){
// //     case 1:
// //         console.log("today is monday");
// //         break;
// //     case 2:
        
// //         console.log("today is tuesday");
// //         break;
// //     case 3:
// //         console.log("today is wendesday");
// //         break;
// //     case 4:
// //         console.log("today is thursday");
// //         break;
// // default:
// //         console.log("today is friday");
// //         break;
    
// ///     let a=9;

// //     switch (a)
// //     {
// //         case 1:
// //             console.log("january");
// //             break;
// //         case 2:
// //             console.log("february");    
// //             break;
// //         case 3:
// //             console.log("march");   
// //             break;
// //         case 4:
// //             console.log("april");
// //               break;  
// //         case 5:
// //             console.log("may");
// //             break;
// //         default:
// //                 console.log("invalid month");
// //                 break;
// //             }
// // //             // 21.combining case statments in switch
// // // //             let hari='e';
// // // //             switch(hari) {
// // // //             case 'a':
// // // //             case 'e':
// // // //             case 'i':
// // // //             case 'o':
// // // //             console.log("vowel");
// // // //             break;
// // // //             default:
// // // //             console.log("this not  a vowel");
// // // //             break; 
        
// // // //             }

// // // //             //  22 .looping stament

// // //             //  while loop
// //               j=80;
// //              while (j>=1){
// //                 console.log(j);        /* this a sub statment*/
// //                 j--;
// //              }
// // //              u=1;
// // //                 while(u<=100){
// // //                     console.log(u);           /*this  aadd statment*/
// // //                     u++;
// // //                 }

// // //             //  do while loop

// // // let y=table=3;limite=10;i=1;
// // // do{
// // //     console.log( i+"x"+table +"=",+ table*i);
// // //     i++;
// // // }
// // // while(i<=limite);
// // // j=1;table=7;
// // // do{
// // //     console.log(j+"x"+table+"="+table*j);
// // //     j++;

// // // }
// // // while (j<=20);



// // // 

// // // // // for loop
// // // for(t=1;t<=60;t++){
// // //     console.log(t);
// // // }

// // for (y=6;y<=50; y++)
// // {console.log(y);}

// // for in loop
// // let names=
// // {
// //     namek:"hari",
// //     age:5,
// //     city:"banglore",
// //    contact:1234567890,
// // }
// // for(let porp in names){
// //     console.log( porp+":",+
// //         names[porp]);
// // }
// // // for of loop



// //  let o = ["hari", "ram", "sita", "gita",];

// // for (let i = 0; i < o.length; i++) {
// //     console.log(i);     // index
// //     console.log(o[i]);  // value at index
// // }

// // let namep=
// // {
// //     namek:"hari",
// //     age:5,
// //     city:"banglore",
// //    contact:1234567890,
// // }
// // for(let porp in namep){
// //     console.log( porp+":",+
// //         namep[porp]);
// // }
// // // break statment
// // for(o=0;o<=10;o++){
// //     console.log(o);
// //     if(o==4){
// //         break;
// //         }
// // }

// // for(t=9;t<=20;t++){
// //     if(t===15){
// //         break;
// //     }
// //     console.log(t);
// // }


// // // continue statment

// // for(u=0;u<=34;u++){
// //     if(u==30){
// //         continue;
// //     }
// //     console.log(u);
// // }


// // // lable  block



// // javascript string methods


// // concatination
// let frtname="hello this is javascript";
// let lastname="welcome to the page";
// c= frtname +"" +lastname;
// console.log(c);


// // /concate
// c=frtname.concat(+" ",+lastname);
// console.log(c);

// // indexof
// let tname="hello this is javascript";
// let stname="welcome to the page";

// c=tname.lastIndexOf("l");
// console.log("index  l:"+c);

// // chartAt
// c=tname.charAt(4);
// console.log("charat 4:"+c);

// // chartcodeat
// c=tname.charCodeAt(3);
// console.log("CharcodeAt3:"+c);



// // substring
// c=tname.substring(4,14);
// console.log("substring:"+c);

// slice
a="krishan"
b="hari"
c=a+b;
c=a.slice(4) ;
console.log("slice:"+c);  

// split js
w="hello this is javascript";
c=w.split(" ");
console.log("split:"+c);
console.table(c);  

// replace
c=w.replace("javascript","python");
console.log("replace:"+c);

// include
t=["hari","krishan","gita","sita"];
c=t.includes("harta");
c=t.includes("krish");
console.log(c);

// trim
a="  harikrishnan  "
console.log(a.length);
a=a.trim();
console.log(a.length);

// padstart
a="8";
a=a.padStart(5,0);
a=a.padStart(5,1);
console.log(a);
console.log(a);


// padend
a="8";
a=a.padEnd(2,"$");
// a=a.padEnd(5,1);
console.log(a);
console.log(a);


// long literal string

let longstring="hello this is javascript"+
"welcome to the page"+"this is a test message"+"we are learning javascript";
console.log(longstring);

// fromchartcode
console.log(String.fromCharCode(65 ,56,85,87,78,23));
// this a code word type formchatcode

// template of the string

// array methods
let names=["hari","krishan","gita","sita"];
 let hari=[m1=50,m2=60,m3=70];
console.log(names);
console.log(names.length);
console.log(names[4]);
console.table(names);
console.table(hari);
 
// foreach
//  they are three type of have 1.value 2, index 3,array
const y=[1,2,3,4,5,6,7,8,9,10];
console.log(y);
y.forEach(( value,index)=>{console.log("value:"+value+ " index;"+index)});

// map methodes

let z=[1,2,3,4,5,6,7,8,9,10];
let newarray=z.map((value,index)=>{return value*4;});
console.log(newarray);

    // slice method
    let fruits=["apple","banana","grapes","mango","orange"];
    console.log(fruits);
    console.log("slice :" +fruits .slice(1,5));

    // splice methdes
    let har=["10" ,"20","30","40","60"];  /* this a remove the elements in splices method*/
    console.log(har);
    let removed_elements =har.splice(30,40);
    console.log("splice:"+ removed_elements,har);
    const kar=[1,2,3,4,5,6,7,8,9];
    console.log(kar);
    // tis a add the elemnts in splices method
    kar.splice(8,0,4);
    console.log(kar);

    //  concat method
    let a1=[1,2,3];
    let a2=[4,5,6];
    let a3=a1.concat(a2,90,80,70,["hari","krishan","gita"]);
    console.table(a3);

//     // sort()
//    const g=("banana","apple","mango","grapes","orange");
//    console.log(g); 
//     g.Sort();
//    console.log(g);
    

// fill method ( value ,start ,end)
let u=[1,2,3,4,5,6,7,8,9];
console.log("before :"+u);
u.fill("l" );
u.fill("k" ,4,7);

console.log("after  :"+u);

// inlcdes method( value , start ,index)
const q={name:"hari",age:25,city:"banglore"};
let result=q.includes["hari"];
console.log(result);
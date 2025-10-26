
// //javascript basic concepts


// // // // console.log("hello world");
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
// // //     namek:"hari",
// // //     age:5,
// // //     city:"banglore",
// // //    contact:1234567890,
// // // }
// // // for(let porp in names){
// // //     console.log( porp+":",+
// // //         names[porp]);
// // // }
// // // // for of loop



// // //  let o = ["hari", "ram", "sita", "gita",];

// // // for (let i = 0; i < o.length; i++) {
// // //     console.log(i);     // index
// // //     console.log(o[i]);  // value at index
// // // }

// // // let namep=
// // // {
// // //     namek:"hari",
// // //     age:5,
// // //     city:"banglore",
// // //    contact:1234567890,
// // // }
// // // for(let porp in namep){
// // //     console.log( porp+":",+
// // //         namep[porp]);
// // // }
// // // // break statment
// // // for(o=0;o<=10;o++){
// // //     console.log(o);
// // //     if(o==4){
// // //         break;
// // //         }
// // // }

// // // for(t=9;t<=20;t++){
// // //     if(t===15){
// // //         break;
// // //     }
// // //     console.log(t);
// // // }


// // // // continue statment

// // // for(u=0;u<=34;u++){
// // //     if(u==30){
// // //         continue;
// // //     }
// // //     console.log(u);
// // // }


// // // // lable  block



// // // javascript string methods


// // // concatination
// // let frtname="hello this is javascript";
// // let lastname="welcome to the page";
// // c= frtname +"" +lastname;
// // console.log(c);


// // // /concate
// // c=frtname.concat(+" ",+lastname);
// // console.log(c);

// // // indexof
// // let tname="hello this is javascript";
// // let stname="welcome to the page";

// // c=tname.lastIndexOf("l");
// // console.log("index  l:"+c);

// // // chartAt
// // c=tname.charAt(4);
// // console.log("charat 4:"+c);

// // // chartcodeat
// // c=tname.charCodeAt(3);
// // console.log("CharcodeAt3:"+c);



// console.log(a);
// console.log(a);


// // long literal string

// let longstring="hello this is javascript"+
// "welcome to the page"+"this is a test message"+"we are learning javascript";
// console.log(longstring);

// // fromchartcode
// console.log(String.fromCharCode(65 ,56,85,87,78,23));
// // this a code word type formchatcode

// // template of the string

// // array methods
// let names=["hari","krishan","gita","sita"];
//  let hari=[m1=50,m2=60,m3=70];
// console.log(names);
// console.log(names.length);
// console.log(names[4]);
// console.table(names);
// console.table(hari);
 
// // foreach
// //  they are three type of have 1.value 2, index 3,array
// const y=[1,2,3,4,5,6,7,8,9,10];
// console.log(y);
// y.forEach(( value,index)=>{console.log("value:"+value+ " index;"+index)});

// // map methodes

// let z=[1,2,3,4,5,6,7,8,9,10];
// let newarray=z.map((value,index)=>{return value*4;});
// console.log(newarray);

//     // slice method
//     let fruits=["apple","banana","grapes","mango","orange"];
//     console.log(fruits);
//     console.log("slice :" +fruits .slice(1,5));

//     // splice methdes
//     let har=["10" ,"20","30","40","60"];  /* this a remove the elements in splices method*/
//     console.log(har);
//     let removed_elements =har.splice(30,40);
//     console.log("splice:"+ removed_elements,har);
//     const kar=[1,2,3,4,5,6,7,8,9];
//     console.log(kar);
//     // this a add the elemnts in splices method
//     kar.splice(8,0,4);
//     console.log(kar);

//     //  concat method
//     let a1=[1,2,3];
//     let a2=[4,5,6];
//     let a3=a1.concat(a2,90,80,70,["hari","krishan","gita"]);
//     console.table(a3);

// //     // sort()
// //    const g=("banana","apple","mango","grapes","orange");
// //    console.log(g); 
// //     // g.Sort();
// //    console.log(g);
    

// // fill method ( value ,start ,end)
// let u=[1,2,3,4,5,6,7,8,9];
// console.log("before :"+u);
// u.fill("l" );
// u.fill("k" ,4);

// console.log("after  :"+u);
// console.table(u);

// // // inlcdes method( value , start ,index)
let Q=["hari","banglore","india","kumar"];
let result=Q.includes ("krishna");
// join method this methd is a type f arry
  const colors=["red" ,"green","blue" ,"yellow","orange"];
console.log (colors) ;
console.log(colors.join( '|' ));
// // reverse in javascript
let arr=[1,2,3,4,5];
console.log("before reverse:",arr);
arr.reverse();
console.log("after reverse:",arr);
const t=["hari","names:krishan","gita","sita"];
console.log("before reverse:",t);
t.reverse();
console.log("after reverse:",t);

// push yjavascript
let r=[1,2,3,4,5];
console.log("before push:",r);
r.push(7,8,10,12,15,16,15,14,181,90);
console.log("after push:",r);
r.reverse();
console.log("after reverse:",r);

// pop method in javascript 
let d=["dharshana","krishan","gita","sita"];
console.log("before pop:",d);
d.pop();
console.log("after pop:",d);
d.pop();
console.log("after pop:",d);

// shift method in javascript
let f=["hari","krishan","gita","sita"];
console.log("before shift:",f);
f.shift();
console.log("after shift:",f);
f.shift();
console.log("after shift:",f);

// unshift method in javascript
let u=["hari","krishan","gita","sita"];
console.log("before unshift:",u);
 let v=u.unshift("ram","mohan","shyam","ravi","ankit");
console.log("after unshift:",u);
console .log(u);

let p=["hari","krishan","gita","sita"];
console.log("before unshift:",p);
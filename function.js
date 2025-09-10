
//javascript basic concepts

const { jsx } = require("react/jsx-runtime");

// // console.log("Welcome to the page");
// // alert("Welcome to the site");
// // console.log("This is a test message");
// // console.log([1, 2, 3, 4, 5]);
// // console.table({nam: "John", age: 30, city: "New York"});
// // // console.clear();
// // console.log({hari: "John", age: 30, city: "New York"});
// // console.warn( "warning");
// // for(i=1;i<11;i++)
// // {
// // console.log( i)
// // }
// // var l=80;
// // var  o=70;
// // console.log(l+o);

// // let a=50;
// // let g=40;
// // console.log(a+g);

// // const z=90;
// // const t=80;
// // console.log(z+t);
// // {
// //     var e=60;
// //     var b=70;
// //     console.log(e+b);

// //     let x=100;
// //     let y=200;
// //     console.log(x+y);
// //     const p=300;
// //     const q=400;
// //     console.log(p+q);

// // }
// // console.log(e+b);

// // // 2.varaible redeclartion

// // var m=10;
// // console.log(m);
// // var m=20;
// // console.log(m);
// // let n=30;
// // console.log(n);
// // let s=40; 
// // console.log(s);
// // const r=50;
// // console.log(r);
// // const u=60; 
// // console.log(u);

// // // 3.value assignment

// // var d=1000;
// // console.log(d);
// // d=600;
// // console.log(d);
// // let f={"hari":1,"ram":2};
// // console.log(f); 
// // f={"hari":3,"ram":2};
// // console.log(f);
// // const h=900;
// // console.log(h); 
// // v=100;
// // console.log(v);
// // let age=25;
// // console.log(age);
// // age=30; 
// // console.log(age);
// // // console.error("This is an error message");

// // // 4. Data Types in JavaScript

// // var o=10; 
// // console.log(typeof o);
// // var ename="John";
// // console.log(typeof ename);
// // var  school=false;
// // console.log(typeof school);
// // var hd=(90.5 + 80.5-70.5-60.5*67*90);
// // console.log( hd);
// // var w= ("hari");
// // console.log(typeof w);
// // console.log(w);
// // let yd=100;
// // console.log(yd);
// // console.log(typeof yd);
// // const pi= ({"hari":3.14});
// // console.log(pi);
// // console.log(typeof pi);
// // let c=("kumar");
// // console.log(c);
// // console.log(typeof c);
// // c=(1234);
// // console.log(c);
// // console.log(typeof c);
// // const table=({ "hari":1,"ram":2,"sita":3});
// // console.table(table);
// // console.log(typeof table);
// // var rname="John";
// // console.log(rname);
// // const o=(["2" ,"hari",100,true]);
// // const b=2
// // const j=o+b
// // console.log(j);
// // let mame=null;
// // console.log(mame);
// // let l;
// // console.log(l);
// // var d=new Date();
// // console.log(d);
// // const sym1=Symbol( "JK");
// // console.log(sym1);
// // console.log(typeof sym1);

// // 4. type converstion

// // let m
// //   m=100;
// // console.log(m,typeof m);
// // const v=String(m);
// // console.log(v,typeof v);
// // let w=Number("1234");
// // console.log(w,typeof w);
// // let x=new Date();
// // console.log(x,typeof x);
// // q=[1,2,3,4,5];
// // console.log(q,typeof q);
// // let y="1234";
// // console.log(y,typeof y);
// // y=Number(y);
// // console.log(y,typeof y);
// // var h=[1,2,3,4,5,8,6,9,5,2,18,8,4,4,4];
// // console.log(h);
// // h[4]=1066;
// // console.log(h);
// // console.log(h[4]);
// // console.log(h[10]);
// // na=("36");
// // console.log(na,typeof na);
// // na=Number(na);
// // console.log(na,typeof na);
// // na=("46.50");
// // // na=Number(na);
// // console.log(na,typeof na);
// // na=parseFloat(na);
// // console.log(na,typeof na);

// // //5.type coercion

// // let a="100";
// // let b=50;
// // k=a+b;
// // console.log(k);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a/b);

// // // 6.arthmetic operators

// // y=10;
// // x=5;
// // i=y+x;
// // i=5**5;
// // console.log(i);
// // c=30+49;
// // console.log(c);
// // w=90
// // e=80
// // c=++w + --e;
// // console.log(c);
// // p=10/30;
// // console.log(p);

// //  7. math functionsc;

// let c;
// c=Math.PI;
// c=Math.round(4.6);
// console.log(c);
// c=Math.E;
// c=Math.sqrt(64);
// console.log(c);
// c=Math.min(2,3,4,5,6,7,8,9,0,-1);
// console.log(c);
// c=Math.max(2,3,4,5,6,7,8,9,0,-1);
// console.log(c);
// c=Math.floor(4.9);
// console.log(c);
// c=Math.ceil(4.1);
// console.log(c);
// c=Math.abs(-4.6);
// console.log(c);
// c=Math.random();
// console.log(c);
// c=Math.pow(8,2);
// console.log(c);
// c=Math.trunc(4.8);
// console.log(c); 
// c= Math.sign(19);
// console.log(c);

// // // // 8.compersion operators
// // // const a=50;
// // // const b=50;
// // // console.log(a==b);
// // // console.log(a===b);
// // // console.log(a!=b);
// // // console.log(a!==b);

// // // 9. relational operators in java script
// // const m=60
// // const n=70
// // console.log(m>n);
// // console.log(m<n);
// // console.log(m>=n);
// // console.log(m<=n);

// // // 10.logical operators in javascript
// // logical and
// logical or
// logical not
// let g=100;
// let h=80;
// console.log(g>=200);
// console.log(h>=100);

// logical and
// const j=30;
// console.log(j>=35 && j<=100);

// // logical not
// w=40;
// m=50;
// console.log(!w,!m);

//logical or
// e=10;
// console.log(e>=40 || e<=60);

// //11.strict equality and idertity operstors
// let a=50;
// b="50";
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);

// // 12. conditional operators and trenary operators(?!)
// const age=25;
// const result=age>=18?"you are eligible to vote":"you are not eligible to vote";
// console.log(result);

// const member=16;
// const reslut=member>=18?"you are eligible to vote":"you are not eligible to vote";
// console.log(reslut);

// const e=17; 
// const r=e>=18?"you are eligible to vote":"you are not eligible to vote";
// console.log(r);

// let age=22;
// let message=age>=18?"you can vote":"you cannot vote";
// console.log(message);

// 13 bitwise opertors in  javascript
// bitwise operators(&)

h,jsx.key="value"
let a=5;
let b=3;
let c=a&b;
console.log(c);







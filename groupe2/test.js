let x=3;
let t=[1,2,3];
let o ={n:'a',p: 'b'};
let {n}=o;
// let {n}=o;
console.log('nn',n);
for (const i of t) {
    console.log('i',i);
}
for (const key in t) {
    console.log('k',key,t[key])
}
for (const i of t) {
    console.log('o',i);
    
}
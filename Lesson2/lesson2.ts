let a = 1;                              // no type defined
let b: number;                          // b is of type number with no initial value (undefined).
let c: string  = "hello";               // c is of type string and has the initial value "hello"
let d: number[] = [1, 2, 3];            // d is of type number[] and has the initial value [1 ,2, 3]
let e: Array<number> = [1, 2, 3];       // another way to define an array using type generics
let f: [boolean, number] = [true, 5];   // f is a tuple containing a boolean that is true and a number that is 5
let g: any;                             // g can be assigned a value of any type.

b = a*2;
console.log(b);
// b = "hello"; // does not compile, as b has been identified as a number.
c = c + " world";
console.log(c);
d.push(6);
console.log(d);
g = 5;
console.log(g);
g = "world";
console.log(g);
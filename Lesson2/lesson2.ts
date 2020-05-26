let a = 1;                              // no type defined
let b: number;                          // b is of type number with no initial value
let c: string  = "hello";               // c is of type string and has the initial value "hello"
let d: number[] = [1, 2, 3];            // d is of type number[] and has the initial value [1 ,2, 3]
let e: Array<number> = [1, 2, 3];       // another way to define an array
let f: [boolean, number] = [true, 5];   // f is a tuple containing a boolean that is true and a number that is 5
let g: any;                             // g can be assigned a value of any type.

console.log(a);
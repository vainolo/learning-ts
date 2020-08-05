# Lesson 2: Types and Variables

## Types

TypeScript uses [gradual typing](https://en.wikipedia.org/wiki/Gradual_typing), which means that
you can use types if you want to get the added security that strong types provide you, but if you
don't want that you can work completely without types just like JavaScript.

The language has a number of basic built-in types such as `boolean`, `number`, `string`, and more
complex built-in types like `array`, `tuple`, and `enum`.

TypeScript uses and OOP class-based approach to define new types, unlike the prototype-based approach
which is used by JavaScript. We will deal with classes in a later lesson.

## Variable declaration

A variable is declared using the `let` keyword, the name of the variable, an optional type, and an
optional initial value:

```typescript
let a = 1;                              // no type defined
let b: number;                          // b is of type number with no initial value
let c: string  = "hello";               // c is of type string and has the initial value "hello"
let d: number[] = [1, 2, 3];            // d is of type number[] and has the initial value [1 ,2, 3]
let e: Array<number> = [1, 2, 3];       // another way to define an array
let f: [boolean, number] = [true, 5];   // f is a tuple containing a boolean that is true and a number that is 5
let g: any;                             // g can be assigned a value of any type
```

When a variable is declared without a type (as `a`), the type is assigned the moment the variable is assigned a value. In
this case it when it is initialized, when  it is assigned the `number` type. Another item of interest is variable `g`,
where we are telling the compiler "hey, I know what I'm doing here and don't need your help making sure my types make
sense". I prefer to use types because it protects me from stupid mistakes, and allows the IDE and other environments to
give you more help (like autocomplete) that sometimes can't be done without types. There's no verdict on the
`typed` vs. `untyped` discussion, but since we are in TypeScript, we will be using types :-).


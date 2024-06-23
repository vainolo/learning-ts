# Lesson 3: Functions

Functions in TypeScript are defined using the `function` keyword. Functions are standalone,
defined outside the scope of an object, and cannot be overriden (more on Objects in a later lesson).

Let's star with a simple function that adds two numbers:

```typescript
function add(a, b) {
    return a+b;
}

console.log(add(1, 2)); // 3
```

Running this code outputs the number '3', as it is expected. But this code is not typesafe, and
because of this we can write the following code, which will compile and execute but will give a
very different result:

```typescript
console.log(add('1', '2')); // 12, not good
console.log(add(1, '2')); // 12, also not good
```

In javascript (as in many other languages), the `+` operator can be used to concatenate strings,
and since we didn't specify the types of the function parameters, we can pass anything, so the result
of the first expression is the concatenation of `1` and `2` which is `12`. The second expression is even
worse, as there is more magic being done - the `+` operator detects a string and a number, converts the
number to a string and then concatenates the two string. These examples are straighforward and harmless,
but there are cases where the result is not what you expect... and that is why declaring the types
of the parameters creates safer code:

```typescript
function safer_add(a: number, b: number): number {
    return a + b;
}

console.log(safer_add(1, 2)); // 3
//console.log(safer_add('1', '2')); // 12, not good
```

We have added here parameter type annotations to make our code safer. If we remove the comment in the last
line and compile the code, the compiler will return an error statement:

```
error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

Which prevents us from creating stupid bugs ;-). The return type of the function also be declared as part
of the function (as shown above), but if we declare the types of all the parameters and the variables inside
the function the return type can be infered. 
# Lesson 1: Getting Started

1. Prerequisites:

    * Install [NodeJS](https://nodejs.org/). It includes a JavaScript runtime and [npm](https://www.npmjs.com/) to manage
      package installations (and also install TypeScript).

1. Install TypeScript (you must have ):

```Powershell
> npm install -g typescript
```

1. Write some code (see [lesson1.ts](lesson1.ts)).

1. Compile:

```Powershell
> tsc lesson1.ts
```

This will create a `lesson1.js` file that is the result of "compiling" the TypeScript file to JavaScript.
The exact term in this case is _transpile_ since the code is being translated from one language to another
language at the same level of abstraction (the difference is explained
[here](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) very well).

1. Execute:

```Powershell
> node lesson1.js
```

And the text `Something` should appear in the console :-)

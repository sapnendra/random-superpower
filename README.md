# random-superpower
<<<<<<< HEAD
Get a random (and sometimes ridiculous) superpower every time you call it. 🎲
=======

Get a random (and sometimes ridiculous) superpower every time you call it. 🎲

## Installation

```bash
npm install random-superpower

```

## Usage
```bash
const { randomSuperpower } = require('random-superpower');

// One random power
console.log(randomSuperpower());

// One weird power
console.log(randomSuperpower({ type: "weird" }));

// Three random powers
console.log(randomSuperpower({ count: 3 }));
```

## API

- randomSuperpower(options)

- options.type: "physical" | "mental" | "weird" (optional)

- options.count: number of powers to return (default 1)

- Returns either:

- A single { name, type } object, OR

- An array of such objects if count > 1.


## License

MIT © Sapnendra

```text

Copyright (c) 2025 Sapnendra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
>>>>>>> 0c50ca2 (Initial commit: random-superpower package)

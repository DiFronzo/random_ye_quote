# Random Ye Quote

<center><img src='https://github.com/DiFronzo/random_ye_quote/assets/30557582/a9402322-8209-4781-969e-f8cfcbab0659'></center>

Generate a Ye aka. Kanye West quote using a cryptographically secure random
number generator.

## Usage

```ts
import { randomYeQuote } from "jsr:@difronzo/random-ye-quote@1";

console.log(randomYeQuote()); // "All you have to be is yourself"
```

## WTF is JSR!?

**JSR is TypeScript first**. You can publish a TypeScript package to JSR and
import it without compilation or .d.ts files. Deno has always been able to run
native TypeScript.

First join the waiting list on https://jsr.io. It takes about 3 minutes to be
accepted.

JSR is backwards compatible with Node. You add the registry to `.npmrc`:

```bash
@jsr:registry=https://npm.jsr.io
```

And then use any Node package manager to install from JSR:

```console
foo@bar:~$ npm install @jsr/difronzo__random-ye-quote
```

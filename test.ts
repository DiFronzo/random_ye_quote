import { assert } from "https://deno.land/std@0.217.0/assert/assert.ts";
import { randomYeQuote, Quote, YE_QUOTES } from "./mod.ts";

Deno.test("randomYeQuote() returns a valid Ye quote", () => {
  const quote: Quote = randomYeQuote();
  assert(YE_QUOTES.includes(quote));
});

Deno.test("randomYeQuote() returns different Ye quotes for multiple calls", () => {
  const results = new Set<Quote>();
  for (let i = 0; i < 100; i++) {
    results.add(randomYeQuote());
  }
  // This test might occasionally fail if the random function returns the same result 100 times.
  // However, the chances of that happening are astronomically low.
  assert(results.size > 1);
});
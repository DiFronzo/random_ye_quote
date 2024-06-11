/**
 * Importing the necessary modules and dependencies.
 */
import { assert } from "https://deno.land/std@0.217.0/assert/assert.ts";
import { Quote, randomYeQuote, YE_QUOTES } from "./mod.ts";
import { expect } from "https://deno.land/x/expect/mod.ts";

/**
 * Test case to verify that randomYeQuote() returns a valid Ye quote.
 */
Deno.test("randomYeQuote() returns a valid Ye quote", () => {
  const quote: Quote = randomYeQuote();
  assert(YE_QUOTES.includes(quote));
});

/**
 * Test case to verify that randomYeQuote() returns different Ye quotes for multiple calls.
 */
Deno.test("randomYeQuote() returns different Ye quotes for multiple calls", () => {
  const results = new Set<Quote>();
  for (let i = 0; i < 100; i++) {
    results.add(randomYeQuote());
  }
  // This test might occasionally fail if the random function returns the same result 100 times.
  // However, the chances of that happening are astronomically low.
  assert(results.size > 1);
});

/**
 * Test case to verify that YE_QUOTES is an array of quotes.
 */
Deno.test("YE_QUOTES should contain an array of quotes", () => {
  expect(Array.isArray(YE_QUOTES)).toBe(true);
});

/**
 * Test case to verify that YE_QUOTES contains at least one quote.
 */
Deno.test("should contain at least one quote", () => {
  expect(YE_QUOTES.length).toBeGreaterThan(0);
});

/**
 * Test case to verify that YE_QUOTES contains only string values.
 */
Deno.test("should contain only string values", () => {
  YE_QUOTES.forEach((quote) => {
    expect(typeof quote).toBe("string");
  });
});

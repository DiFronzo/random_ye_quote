/** Different types of Kanye West quotes. */
export const YE_QUOTES = [
    "All you have to be is yourself",
    "Believe in your flyness...conquer your shyness.",
    "Burn that excel spread sheet",
    "Decentralize",
    "Distraction is the enemy of vision",
    "Everything you do in life stems from either fear or love",
    "For me giving up is way harder than trying.",
    "For me, money is not my definition of success. Inspiring people is a definition of success",
    "Fur pillows are hard to actually sleep on",
    "George Bush doesn't care about black people",
    "Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes?",
    "I care. I care about everything. Sometimes not giving a f#%k is caring the most.",
    "I feel calm but energized",
    "I feel like I'm too busy writing history to read it.",
    "I feel like me and Taylor might still have sex",
    "I give up drinking every week",
    "I leave my emojis bart Simpson color",
    "I love sleep; it's my favorite.",
    "I make awesome decisions in bike stores!!!",
    "I really love my Tesla. I'm in the future. Thank you Elon.",
    "I still think I am the greatest.",
    "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka...and welcome to my chocolate factory.",
    "I want the world to be better! All I want is positive! All I want is dopeness!",
    "I wish I had a friend like me",
    "I'd like to meet with Tim Cook. I got some ideas",
    "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
    "I'm a creative genius",
    "I'm nice at ping pong",
    "I'm the best",
    "If I don't scream, if I don't say something then no one's going to say anything.",
    "If I got any cooler I would freeze to death",
    "If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don't appreciate the moment until it's passed.",
    "Just stop lying about shit. Just stop lying.",
    "Keep squares out yo circle",
    "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
    "Let's be like water",
    "Man... whatever happened to my antique fish tank?",
    "My dad got me a drone for Christmas"
  ] as const;
  
  /** Return type for {@linkcode randomYeQuote}. */
  export type Quote = typeof YE_QUOTES[number];
  
  /**
   * Generate a type of quote using a cryptographically secure random number
   * generator.
   *
   * @example
   * ```ts
   * import { randomYeQuote } from "jsr:@difronzo/random_ye_quote@1";
   *
   * randomYeQuote(); // "All you have to be is yourself"
   * ```
   */
  export function randomYeQuote(): Quote {
    // Create a new Uint32 array of length 1
    const buffer = new Uint32Array(1);
  
    // Populate the array with a cryptographically secure random number
    crypto.getRandomValues(buffer);
  
    // Calculate a random index. The modulo operation ensures it's within the range of the array indices.
    const randomIndex = buffer[0] % YE_QUOTES.length;
  
    // Return the randomly selected item
    return YE_QUOTES[randomIndex];
  }
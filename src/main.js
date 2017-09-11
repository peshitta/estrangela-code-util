/** @module estrangela */
/**
 * Estrangela consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  '0',

  'b',
  'B',

  'g',
  'G',

  'd',
  'h',
  'w',
  'z',

  'x',
  'X',

  '=',
  '+',

  'y',
  'Y',

  'k',
  'K',
  '<',

  'l',
  'L',

  'm',
  'M',

  'n',
  'N',
  'J',

  's',
  'S',

  '9',
  '(',

  'p',
  'P',

  'c',

  'q',
  'Q',

  'r',

  '4',
  '$',

  't',

  'f',
  'F'
]);

/**
 * Estrangela vowels
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze([
  'e',
  'E',
  'a',
  'A',
  'o',
  'O',
  ';',
  'i',
  'I',
  'u'
]);

/**
 * Estrangela diacretics
 * @constant
 * @type { string[] }
*/
export const diacretics = Object.freeze([
  '2', // sedra/cal ' - Qushaya

  '3', // sedra/cal , - Rukkakha
  '#',

  '5', // sedra/cal _ - Line under
  '%',

  '6', // sedra/cal * - Seyame
  '^',

  '`',

  '1',

  '8'
]);

/**
 * Estrangela punctuation
 * @constant
 * @type { string[] }
*/
export const punctuation = Object.freeze(['-', '_', '.', '?']);

/**
 * Is character c an Estrangela consonant
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela consonant
 */
export const isConsonant = c => consonants.indexOf(c) > -1;

/**
 * Is character c an Estrangela vowel
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c an Estrangela diacretic
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela diacretic
 */
export const isDiacretic = c => diacretics.indexOf(c) > -1;

/**
 * Is character c an Estrangela punctuation
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

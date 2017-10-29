/** @module estrangelaCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * Estrangela consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alaph: { value: '0', enumerable: true },
    beth: { value: 'b', enumerable: true },
    gamal: { value: 'g', enumerable: true },
    dalath: { value: 'd', enumerable: true },

    he: { value: 'h', enumerable: true },
    waw: { value: 'w', enumerable: true },
    zayn: { value: 'z', enumerable: true },

    heth: { value: 'x', enumerable: true },
    teth: { value: '=', enumerable: true },
    yod: { value: 'y', enumerable: true },

    kaph: { value: 'k', enumerable: true },
    lamadh: { value: 'l', enumerable: true },
    mim: { value: 'm', enumerable: true },
    nun: { value: 'n', enumerable: true },

    semkath: { value: 's', enumerable: true },
    e: { value: '9', enumerable: true },
    pe: { value: 'p', enumerable: true },
    sadhe: { value: 'c', enumerable: true },

    qoph: { value: 'q', enumerable: true },
    resh: { value: 'r', enumerable: true },
    shin: { value: '4', enumerable: true },
    taw: { value: 't', enumerable: true }
  })
);

const l = consonantsByName;
/**
 * Estrangela base consonants - the 22 aramaic consonants
 * @constant
 * @type { string[] }
*/
export const baseConsonants = Object.freeze([
  // abgad
  l.alaph,
  l.beth,
  l.gamal,
  l.dalath,

  // hawaz
  l.he,
  l.waw,
  l.zayn,

  // ḥaṭy
  l.heth,
  l.teth,
  l.yod,

  // kalman
  l.kaph,
  l.lamadh,
  l.mim,
  l.nun,

  // saʿpac
  l.semkath,
  l.e,
  l.pe,
  l.sadhe,

  // qarshat
  l.qoph,
  l.resh,
  l.shin,
  l.taw
]);

/**
 * Estrangela final connected modified consonants
 * @constant
 * @type { string[] }
*/
export const finalConnected = Object.freeze([
  'B',
  'G',

  'X',
  '+',
  'Y',

  'K',
  'L',
  'M',
  'N',

  'S',
  '(',
  'P',

  'Q',
  '$'
]);

/**
 * Estrangela final non-connected modified consonants
 * @constant
 * @type { string[] }
*/
export const finalNonConnected = Object.freeze(['<', 'J']);

/**
 * Estrangela 2 ligatures
 * @constant
 * @type { string[] }
*/
export const ligatures = Object.freeze(['f', 'F']);

/**
 * All Estrangela font consonants
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(
  baseConsonants
    .concat(finalConnected)
    .concat(finalNonConnected)
    .concat(ligatures)
);

/**
 * Estrangela consonants unconnected on the left
 * @constant
 * @type { string[] }
 */
export const unconnected = Object.freeze([
  '0',
  'd',
  'h',
  'w',
  'z',
  'c',
  'r',
  't'
]);

/**
 * Estrangela vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    pthaha: { value: 'e', enumerable: true },
    zqapha: { value: 'a', enumerable: true },
    rbasa: { value: 'o', enumerable: true },
    hbasaEsasa: { value: ';', enumerable: true },

    zlama: { value: 'i', enumerable: true },
    rwaha: { value: 'u', enumerable: true }
  })
);

const v = vowelsByName;
/**
 * Estrangela common vowels - common to both eastern and western
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  v.pthaha, // a
  v.zqapha, // o
  v.rbasa, // e
  v.hbasaEsasa // i u
]);

/**
 * Estrangela eastern only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([
  v.zlama, // E
  v.rwaha // O
]);

/**
 * Estrangela shifted vowels (SHIFT key on)
 * @constant
 * @type { string[] }
*/
export const shiftedVowels = Object.freeze([
  'E', // a
  'A', // o
  'O', // e
  'I' // E
]);

/**
 * Estrangela vowels (both common and eastern) - excluding shifted
 * @constant
 * @type { string[] }
*/
export const baseVowels = Object.freeze(commonVowels.concat(easternVowels));

/**
 * All Estrangela vowels (including shifted)
 * @constant
 * @type { string[] }
 */
export const allVowels = Object.freeze(baseVowels.concat(shiftedVowels));

/**
 * Sedra/CAL diacritic name map
 * 1. qushaya: __2__ - dot above
 * 2. rukkakha: __3__ - dot below
 * 3. lineaOccultans: **5** - linea occultans
 * 4. seyame: __*__ - seyame, rebwe
 * @constant
 * @type { Object.<string, string> }
*/
export const diacriticsByName = Object.freeze(
  Object.create(null, {
    qushaya: { value: '2', enumerable: true },
    rukkakha: { value: '3', enumerable: true },
    lineaOccultans: { value: '5', enumerable: true },
    seyame: { value: '6', enumerable: true }
  })
);

const d = diacriticsByName;
/**
 * Estrangela base/common diacritics (both western and eastern)
 * @constant
 * @type { string[] }
*/
export const commonDiacritics = Object.freeze([
  d.qushaya, // sedra/cal ' - Qushaya
  d.rukkakha, // sedra/cal , - Rukkakha
  d.lineaOccultans, // sedra/cal _ - Line under
  d.seyame // sedra/cal * - Seyame
]);

/**
 * Estrangela eastern specific diacritics
 * @constant
 * @type { string[] }
*/
export const easternDiacritics = Object.freeze(['`', '1', '8']);

/**
 * Estrangela diacritics - excluding shifted
 * @constant
 * @type { string[] }
*/
export const baseDiacritics = Object.freeze(
  commonDiacritics.concat(easternDiacritics)
);

/**
 * Estrangela shifted diacritics
 * @constant
 * @type { string[] }
*/
export const shiftedDiacritics = Object.freeze([
  '#', // sedra/cal , - Rukkakha
  '%', // sedra/cal _ - Line under
  '^' // sedra/cal * - Seyame
]);

/**
 * All Estrangela diacritics (including shifted)
 * @constant
 * @type { string[] }
 */
export const allDiacritics = Object.freeze(
  baseDiacritics.concat(shiftedDiacritics)
);

/**
 * Estrangela punctuation
 * @constant
 * @type { string[] }
*/
export const punctuation = Object.freeze(['.', '?']);

/**
 * Estrangela joiners
 * @constant
 * @type { string[] }
*/
export const joiners = Object.freeze(['-', '_']);

/**
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(allVowels.concat(allDiacritics));

/**
 * Is character c an Estrangela consonant
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c an Estrangela vowel
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela vowel
 */
export const isVowel = c => allVowels.indexOf(c) > -1;

/**
 * Is character c an Estrangela diacritic
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela diacritic
 */
export const isDiacritic = c => allDiacritics.indexOf(c) > -1;

/**
 * Is character c an Estrangela punctuation
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

/**
 * Is character c an Estrangela joiner
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela joiner
 */
export const isJoiner = c => joiners.indexOf(c) > -1;

/**
 * Is character c an Estrangela Eastern Diacritic
 * @param { string } c input character
 * @returns { boolean } true if c is Estrangela Eastern Diacritic
 */
export const isEasternDiacritic = c => easternDiacritics.indexOf(c) > -1;

/**
 * Is character c an unconnected on the left Estrangela consonant
 * @param { string } c input character
 * @returns { boolean } true if c is unconnected on the left consonant
 */
export const isUnconnected = c => unconnected.indexOf(c) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Map between regular and final ligature
 * @private
 */
const ligatureMap = Object.freeze(
  Object.create(null, {
    l: { value: 'f' },
    t: { value: 'F' }
  })
);

/**
 * Map between regular and final connected
 * @private
 */
const connectedMap = Object.freeze(
  Object.create(null, {
    b: { value: 'B' },
    g: { value: 'G' },

    x: { value: 'X' },
    '=': { value: '+' },
    y: { value: 'Y' },

    k: { value: 'K' },
    l: { value: 'L' },
    m: { value: 'M' },
    n: { value: 'N' },

    s: { value: 'S' },
    9: { value: '(' },
    p: { value: 'P' },

    q: { value: 'Q' },
    4: { value: '$' }
  })
);

/**
 * Map between final connected and final non connected
 * @private
 */
const nonConnectedMap = Object.freeze(
  Object.create(null, {
    K: { value: '<' },
    N: { value: 'J' }
  })
);

/**
 * Prototype for object managing final consonant setting
 * @private
 */
const finalProto = Object.create(null, {
  isAleph: { value: c => c === '0' },
  ligature: { value: c => ligatureMap[c] },
  connected: { value: c => connectedMap[c] },
  nonConnected: { value: c => nonConnectedMap[c] }
});

/**
 * Fix end consonant for a word in base Estrangela font
 * @param { string } word input word
 * @returns { string } word with end consonant corrected
 */
export const endify = word => {
  if (!word) {
    return word;
  }

  const stack = [];
  let si = -1; // final consonant index in the stack
  let wi = -1; // index in the word of the final consonant
  let alephState = false;
  let nonConnectedState = false;
  const final = Object.create(finalProto);
  let i = word.length;
  while (--i >= 0) {
    const c = word.charAt(i);
    if (isConsonant(c)) {
      if (nonConnectedState) {
        const nc = final.nonConnected(stack[si]);
        if (nc) {
          stack[si] = nc;
        }
        break;
      } else if (alephState) {
        const lc = final.ligature(c);
        if (lc) {
          wi = i;
          stack.push(lc);
        }
        break;
      } else {
        const fc = final.connected(c);
        if (fc) {
          wi = i;
          if (i === 0) {
            stack.push(final.nonConnected(fc) || fc); // standalone
            break;
          } else {
            si = stack.length;
            stack.push(fc);
            nonConnectedState = !!final.nonConnected(fc);
            if (!nonConnectedState) {
              break;
            }
          }
        } else {
          alephState = final.isAleph(c);
          if (!alephState || i === 0) {
            break; // not a final customized consonant, no change, get out
          }
        }
      }
    } else if (!nonConnectedState) {
      stack.push(c);
    }
  }
  if (wi >= 0) {
    let changedWord = wi > 0 ? word.substring(0, wi) : '';
    for (let j = stack.length - 1; j >= 0; --j) {
      changedWord += stack[j];
    }
    return changedWord;
  }
  return word;
};

/**
 * Return true if input word has vowels or diacritics
 * @param { string } word input word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = hasDotting(isDotting);

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = clearDotting(isDotting);

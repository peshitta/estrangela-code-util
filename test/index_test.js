const test = require('assert');
const sut = require('../build/estrangela-code-util');

describe('Estrangela', () => {
  describe('Endify', () => {
    it('Standalone non-vocalized non-final', () => {
      test.strictEqual(sut.endify('0'), '0', '0 endify');
      test.strictEqual(sut.endify('w'), 'w', 'w endify');
    });
    it('Standalone non-vocalized final connected', () => {
      test.strictEqual(sut.endify('b'), 'B', 'b endify');
      test.strictEqual(sut.endify('g'), 'G', 'g endify');
      test.strictEqual(sut.endify('='), '+', '= endify');
    });
    it('Standalone non-vocalized final non-connected', () => {
      test.strictEqual(sut.endify('n'), 'J', 'n endify');
      test.strictEqual(sut.endify('k'), '<', 'n endify');
    });
    it('Standalone non-vocalized ligature', () => {
      test.strictEqual(sut.endify('t0'), 'F', 'n endify');
      test.strictEqual(sut.endify('l0'), 'f', 'n endify');
    });

    it('Standalone vocalized non-final', () => {
      test.strictEqual(sut.endify('0e'), '0e', '0 endify');
      test.strictEqual(sut.endify('wa'), 'wa', 'w endify');
    });
    it('Standalone vocalized final connected', () => {
      test.strictEqual(sut.endify('bo'), 'Bo', 'b endify');
      test.strictEqual(sut.endify('g;'), 'G;', 'g endify');
      test.strictEqual(sut.endify('=i'), '+i', '= endify');
    });
    it('Standalone vocalized final non-connected', () => {
      test.strictEqual(sut.endify('nu'), 'Ju', 'n endify');
      test.strictEqual(sut.endify('kA'), '<A', 'n endify');
    });
    it('Standalone vocalized ligature', () => {
      test.strictEqual(sut.endify('t0o'), 'Fo', 'n endify');
      test.strictEqual(sut.endify('l0u'), 'fu', 'n endify');
    });

    it('Standalone diacritic vocalized non-final', () => {
      test.strictEqual(sut.endify('02e'), '02e', '0 endify');
      test.strictEqual(sut.endify('w3a'), 'w3a', 'w endify');
    });
    it('Standalone diacritic vocalized final connected', () => {
      test.strictEqual(sut.endify('b5o'), 'B5o', 'b endify');
      test.strictEqual(sut.endify('g6;'), 'G6;', 'g endify');
      test.strictEqual(sut.endify('=`i'), '+`i', '= endify');
    });
    it('Standalone diacritic vocalized final non-connected', () => {
      test.strictEqual(sut.endify('n1u'), 'J1u', 'n endify');
      test.strictEqual(sut.endify('k8A'), '<8A', 'n endify');
    });
    it('Standalone diacritic vocalized ligature', () => {
      test.strictEqual(sut.endify('t20o'), 'F2o', 'n endify');
      test.strictEqual(sut.endify('l30u'), 'f3u', 'n endify');
    });

    // ------------------------------------------------------

    it('Non-standalone non-vocalized non-final', () => {
      test.strictEqual(sut.endify('0b0'), '0b0', '0 endify');
      test.strictEqual(sut.endify('zwh'), 'zwh', 'w endify');
    });
    it('Non-standalone non-vocalized final connected', () => {
      test.strictEqual(sut.endify('klb'), 'klB', 'b endify');
      test.strictEqual(sut.endify('s9g'), 's9G', 'g endify');
      test.strictEqual(sut.endify('yx='), 'yx+', '= endify');
    });
    it('Non-standalone non-vocalized final connected with unknown symbols', () => {
      test.strictEqual(sut.endify('Wklb'), 'WklB', 'b endify');
      test.strictEqual(sut.endify('s9)g'), 's9)G', 'g endify');
      test.strictEqual(sut.endify('yx=,'), 'yx+,', '= endify');
    });
    it('Non-standalone non-vocalized final non-connected', () => {
      test.strictEqual(sut.endify('0n0n'), '0n0J', 'n endify');
      test.strictEqual(sut.endify('d0wdk'), 'd0wd<', 'n endify');
    });
    it('Non-standalone non-vocalized ligature', () => {
      test.strictEqual(sut.endify('0t0'), '0F', 'n endify');
      test.strictEqual(sut.endify('dl0'), 'df', 'n endify');
    });
    // ------------------------------------------------------
    it('Non-standalone vocalized non-final', () => {
      test.strictEqual(sut.endify('ba0e'), 'ba0e', '0 endify');
      test.strictEqual(sut.endify('kowa'), 'kowa', 'w endify');
    });
    it('Non-standalone vocalized final connected', () => {
      test.strictEqual(sut.endify('badobo'), 'badoBo', 'b endify');
      test.strictEqual(sut.endify('ktebag;'), 'ktebaG;', 'g endify');
      test.strictEqual(sut.endify('deleda=i'), 'deleda+i', '= endify');
    });
    it('Non-standalone vocalized final non-connected', () => {
      test.strictEqual(sut.endify('gagonu'), 'gagoJu', 'n endify');
      test.strictEqual(sut.endify('bekA'), 'be<A', 'n endify');
    });
    it('Non-standalone vocalized ligature', () => {
      test.strictEqual(sut.endify('legat0o'), 'legaFo', 'n endify');
      test.strictEqual(sut.endify('todarel0u'), 'todarefu', 'n endify');
    });
    // ------------------------------------------------------
    it('Non-standalone diacritic vocalized non-final', () => {
      test.strictEqual(sut.endify('mone02e'), 'mone02e', '0 endify');
      test.strictEqual(sut.endify('nw;now3a'), 'nw;now3a', 'w endify');
    });
    it('Non-standalone diacritic vocalized final connected', () => {
      test.strictEqual(sut.endify('d2ub5o'), 'd2uB5o', 'b endify');
      test.strictEqual(sut.endify('g1eg6;'), 'g1eG6;', 'g endify');
      test.strictEqual(sut.endify('mi4a=`i'), 'mi4a+`i', '= endify');
    });
    it('Non-standalone diacritic vocalized final non-connected', () => {
      test.strictEqual(sut.endify('dob1un1u'), 'dob1uJ1u', 'n endify');
      test.strictEqual(sut.endify('0eb3k8A'), '0eb3<8A', 'n endify');
    });
    it('Non-standalone diacritic vocalized ligature', () => {
      test.strictEqual(sut.endify('h,t20o'), 'h,F2o', 'n endify');
      test.strictEqual(sut.endify('r*el30u'), 'r*ef3u', 'n endify');
    });
    it('Blank word returns blank', () => {
      const word = sut.endify('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'toCal_blank');
    });
    it('Null word returns null', () => {
      const word = sut.endify(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'toCal_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.endify(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'toCal_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.endify(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'toCal_zero');
    });
  });
  describe('Util', () => {
    it('Is Consonant', () => {
      test.ok(sut.isConsonant('0'), '0 isConsonant');
      test.ok(sut.isConsonant('9'), '9 isConsonant');
      test.ok(sut.isConsonant('b'), 'b isConsonant');
      test.ok(sut.isConsonant('$'), '$ isConsonant');
      test.ok(sut.isConsonant('('), '( isConsonant');
      test.ok(sut.isConsonant('g'), 'g isConsonant');
      test.ok(sut.isConsonant('B'), 'B isConsonant');
      test.ok(sut.isConsonant('G'), 'G isConsonant');
      test.ok(!sut.isConsonant(')'), '! ) isConsonant');
      test.ok(!sut.isConsonant('u'), '! u isConsonant');
    });
    it('Is Vowel', () => {
      test.ok(sut.isVowel('a'), 'a isVowel');
      test.ok(sut.isVowel('A'), 'A isVowel');
      test.ok(sut.isVowel('o'), 'o isVowel');
      test.ok(sut.isVowel('O'), 'O isVowel');
      test.ok(sut.isVowel('e'), 'e isVowel');
      test.ok(sut.isVowel('E'), 'E isVowel');
      test.ok(sut.isVowel('i'), 'i isVowel');
      test.ok(sut.isVowel('I'), 'I isVowel');
      test.ok(sut.isVowel('u'), 'u isVowel');
      test.ok(sut.isVowel(';'), '; isVowel');
      test.ok(!sut.isVowel('U'), 'U isVowel');
      test.ok(!sut.isVowel(':'), ': isVowel');
      test.ok(!sut.isVowel(''), "! '' isVowel");
    });
    it('Is Diacritic', () => {
      test.ok(sut.isDiacritic('`'), '` isDiacritic');
      test.ok(sut.isDiacritic('1'), '1 isDiacritic');
      test.ok(sut.isDiacritic('2'), '2 isDiacritic');
      test.ok(sut.isDiacritic('3'), '3 isDiacritic');
      test.ok(sut.isDiacritic('#'), '# isDiacritic');
      test.ok(sut.isDiacritic('5'), '5 isDiacritic');
      test.ok(sut.isDiacritic('%'), '% isDiacritic');
      test.ok(sut.isDiacritic('6'), '6 isDiacritic');
      test.ok(sut.isDiacritic('^'), '^ isDiacritic');
      test.ok(sut.isDiacritic('8'), '8 isDiacritic');

      test.ok(!sut.isDiacritic("'"), "! ' isDiacritic");
      test.ok(!sut.isDiacritic(','), '! , isDiacritic');
      test.ok(!sut.isDiacritic('*'), '! * isDiacritic');
      test.ok(!sut.isDiacritic('_'), '! _ isDiacritic');
      test.ok(!sut.isDiacritic(''), "! '' isDiacritic");
      test.ok(!sut.isDiacritic(' '), "! ' ' isDiacritic");
    });
    it('Is Punctuation', () => {
      test.ok(sut.isPunctuation('.'), '. isPunctuation');
      test.ok(sut.isPunctuation('?'), '? isPunctuation');
      test.ok(!sut.isPunctuation('-'), '- isPunctuation');
      test.ok(!sut.isPunctuation('_'), '_ isPunctuation');
      test.ok(!sut.isPunctuation(''), "! '' isPunctuation");
      test.ok(!sut.isPunctuation(' '), "! ' ' isPunctuation");
      test.ok(!sut.isPunctuation('&'), '! & isPunctuation');
      test.ok(!sut.isPunctuation('!'), '! ! isPunctuation');
      test.ok(!sut.isPunctuation('`'), '! ` isPunctuation');
      test.ok(!sut.isPunctuation('~'), '! ~ isPunctuation');
      test.ok(!sut.isPunctuation(','), '! , isPunctuation');
    });
    it('Is Joiner', () => {
      test.ok(sut.isJoiner('-'), '- isJoiner');
      test.ok(sut.isJoiner('_'), '_ isJoiner');
      test.ok(!sut.isJoiner('.'), '. isJoiner');
      test.ok(!sut.isJoiner('?'), '? isJoiner');
      test.ok(!sut.isJoiner(''), "! '' isJoiner");
      test.ok(!sut.isJoiner(' '), "! ' ' isJoiner");
      test.ok(!sut.isJoiner('&'), '! & isJoiner');
      test.ok(!sut.isJoiner('!'), '! ! isJoiner');
      test.ok(!sut.isJoiner('`'), '! ` isJoiner');
      test.ok(!sut.isJoiner('~'), '! ~ isJoiner');
      test.ok(!sut.isJoiner(','), '! , isJoiner');
    });
    it('Is Eastern Diacritic', () => {
      test.ok(sut.isEasternDiacritic('`'), '` isEasternDiacritic');
      test.ok(sut.isEasternDiacritic('1'), '1 isEasternDiacritic');
      test.ok(sut.isEasternDiacritic('8'), '8 isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic('?'), '? isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic(''), "! '' isEasternDiacritic");
      test.ok(!sut.isEasternDiacritic(' '), "! ' ' isEasternDiacritic");
      test.ok(!sut.isEasternDiacritic('&'), '! & isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic('!'), '! ! isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic('2'), '! ` isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic('~'), '! ~ isEasternDiacritic');
      test.ok(!sut.isEasternDiacritic(','), '! , isEasternDiacritic');
    });
    it('Is Left Unconnected Consonant', () => {
      test.ok(sut.isUnconnected('r'), 'r isUnconnected');
      test.ok(sut.isUnconnected('z'), 'z isUnconnected');
      test.ok(sut.isUnconnected('c'), 'c isUnconnected');
      test.ok(sut.isUnconnected('t'), 't isUnconnected');
      test.ok(sut.isUnconnected('h'), 'h isUnconnected');
      test.ok(sut.isUnconnected('0'), '0 isUnconnected');
      test.ok(sut.isUnconnected('d'), 'd isUnconnected');
      test.ok(sut.isUnconnected('w'), 'w isUnconnected');

      test.ok(!sut.isUnconnected('='), '! = isUnconnected');
      test.ok(!sut.isUnconnected('9'), '! 9 isUnconnected');
      test.ok(!sut.isUnconnected('x'), '! x isUnconnected');
      test.ok(!sut.isUnconnected('4'), '! 4 isUnconnected');
      test.ok(!sut.isUnconnected('`'), '! ` isUnconnected');
      test.ok(!sut.isUnconnected('~'), '! ~ isUnconnected');
      test.ok(!sut.isUnconnected(','), '! , isUnconnected');
    });
  });
});
describe('isDotted', () => {
  const { isDotted } = sut;
  it('Consonantal and vocalised isDotted', () => {
    const empty = isDotted('');
    const consonant = isDotted('dqsry0-dpylypws');
    const vocalised = isDotted('dqesariya0-d2p#yilyipwOs');
    test.strictEqual(empty, false, 'isDotted empty');
    test.strictEqual(consonant, false, 'isDotted consonant only');
    test.strictEqual(vocalised, true, 'isDotted vocalised');
  });
});
describe('removeDotting', () => {
  const { removeDotting } = sut;
  it('Check consonantal and vocalised', () => {
    const word = '0bhwhY';
    const expected = removeDotting(word);
    const vocalised = removeDotting('0eb3ahewh5Y');
    test.strictEqual(word, expected, 'removeDotting consonant only');
    test.strictEqual(vocalised, expected, 'removeDotting vocalised');
  });
  it('Word with (wu) => (uO) mapping', () => {
    const word = removeDotting('lb9ldbbykwJ');
    const wordExpected = 'lb9ldbbykwJ';
    const vocalised = removeDotting('leb39old2b3ab3eyk2w;J');
    const vocalisedExpected = wordExpected;
    test.strictEqual(word, wordExpected, 'removeDotting_wu consonant');
    test.strictEqual(
      vocalised,
      vocalisedExpected,
      'removeDotting_wu vocalised'
    );
  });
  it('Check consonantal and vocalised', () => {
    const word = '0bhwhY';
    const expected = removeDotting(word);
    const vocalised = removeDotting('0eb3ahewh5Y`');
    test.strictEqual(word, expected, 'removeDotting consonant only');
    test.strictEqual(vocalised, expected, 'removeDotting vocalised');
  });
  it('Word with (wu) => (uO) mapping', () => {
    const word = removeDotting('lb9ldbbykwJ');
    const wordExpected = 'lb9ldbbykwJ';
    const vocalised = removeDotting('l1eb39old2b3ab3eyk2w;J8');
    const vocalisedExpected = wordExpected;
    test.strictEqual(word, wordExpected, 'removeDotting_wu consonant');
    test.strictEqual(
      vocalised,
      vocalisedExpected,
      'removeDotting_wu vocalised'
    );
  });
  it('Blank word returns blank', () => {
    const word = removeDotting('');
    const wordExpected = '';
    test.strictEqual(word, wordExpected, 'removeDotting_blank');
  });
});

import * as test from 'assert';
import * as sut from '../build/estrangela-code-util';

describe('Estrangela', () => {
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
    it('Is Diacretic', () => {
      test.ok(sut.isDiacretic('`'), '` isDiacretic');
      test.ok(sut.isDiacretic('1'), '1 isDiacretic');
      test.ok(sut.isDiacretic('2'), '2 isDiacretic');
      test.ok(sut.isDiacretic('3'), '3 isDiacretic');
      test.ok(sut.isDiacretic('#'), '# isDiacretic');
      test.ok(sut.isDiacretic('5'), '5 isDiacretic');
      test.ok(sut.isDiacretic('%'), '% isDiacretic');
      test.ok(sut.isDiacretic('6'), '6 isDiacretic');
      test.ok(sut.isDiacretic('^'), '^ isDiacretic');
      test.ok(sut.isDiacretic('8'), '8 isDiacretic');

      test.ok(!sut.isDiacretic("'"), "! ' isDiacretic");
      test.ok(!sut.isDiacretic(','), '! , isDiacretic');
      test.ok(!sut.isDiacretic('*'), '! * isDiacretic');
      test.ok(!sut.isDiacretic('_'), '! _ isDiacretic');
      test.ok(!sut.isDiacretic(''), "! '' isDiacretic");
      test.ok(!sut.isDiacretic(' '), "! ' ' isDiacretic");
    });
    it('Is Punctuation', () => {
      test.ok(sut.isPunctuation('.'), '. isPunctuation');
      test.ok(sut.isPunctuation('?'), '? isPunctuation');
      test.ok(sut.isPunctuation('-'), '- isPunctuation');
      test.ok(sut.isPunctuation('_'), '_ isPunctuation');
      test.ok(!sut.isPunctuation(''), "! '' isPunctuation");
      test.ok(!sut.isPunctuation(' '), "! ' ' isPunctuation");
      test.ok(!sut.isPunctuation('&'), '! & isPunctuation');
      test.ok(!sut.isPunctuation('!'), '! ! isPunctuation');
      test.ok(!sut.isPunctuation('`'), '! ` isPunctuation');
      test.ok(!sut.isPunctuation('~'), '! ~ isPunctuation');
      test.ok(!sut.isPunctuation(','), '! , isPunctuation');
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

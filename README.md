# estrangela-code-util

[![npm version](https://badge.fury.io/js/estrangela-code-util.svg)](https://badge.fury.io/js/estrangela-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/estrangela-code-util.svg)](https://www.npmjs.org/package/estrangela-code-util)
[![Build Status](https://travis-ci.org/peshitta/estrangela-code-util.svg?branch=master)](https://travis-ci.org/peshitta/estrangela-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/estrangela-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/estrangela-code-util.svg)](https://david-dm.org/peshitta/estrangela-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/estrangela-code-util/dev-status.svg)](https://david-dm.org/peshitta/estrangela-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/estrangela-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/estrangela-code-util?branch=master)

Utility library for Estrangela ASCII code font

## Installation
In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install estrangela-code-util --save
```

Following bundles are available:
* `estrangela-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `estrangela-code-util.min.js` - minified version of `estrangela-code-util.js`
* `estrangela-code-util.esm.js` - ES6 module version, suitable for bundling with
other libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/estrangela-code-util/-/estrangela-code-util-1.0.3.tgz](https://registry.npmjs.org/estrangela-code-util/-/estrangela-code-util-1.0.3.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Estrangela Font Encoding Chart](http://www.peshitta.org/initial/standard.html)

[Estrangela ASCII font](http://www.peshitta.org/initial/software.html)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/estrangela-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/estrangela-code-util/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [estrangela](#module_estrangela)
    * [.baseConsonants](#module_estrangela.baseConsonants) : <code>Array.&lt;string&gt;</code>
    * [.finalConnected](#module_estrangela.finalConnected) : <code>Array.&lt;string&gt;</code>
    * [.finalNonConnected](#module_estrangela.finalNonConnected) : <code>Array.&lt;string&gt;</code>
    * [.ligatures](#module_estrangela.ligatures) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_estrangela.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.unconnected](#module_estrangela.unconnected) : <code>Array.&lt;string&gt;</code>
    * [.commonVowels](#module_estrangela.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_estrangela.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.shiftedVowels](#module_estrangela.shiftedVowels) : <code>Array.&lt;string&gt;</code>
    * [.baseVowels](#module_estrangela.baseVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_estrangela.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.commonDiacritics](#module_estrangela.commonDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.easternDiacritics](#module_estrangela.easternDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.baseDiacritics](#module_estrangela.baseDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.shiftedDiacritics](#module_estrangela.shiftedDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.allDiacritics](#module_estrangela.allDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_estrangela.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_estrangela.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_estrangela.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_estrangela.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_estrangela.isPunctuation) ⇒ <code>boolean</code>
    * [.isUnconnected](#module_estrangela.isUnconnected) ⇒ <code>boolean</code>
    * [.endify](#module_estrangela.endify) ⇒ <code>string</code>

<a name="module_estrangela.baseConsonants"></a>

### estrangela.baseConsonants : <code>Array.&lt;string&gt;</code>
Estrangela base consonants - the 22 aramaic consonants

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.finalConnected"></a>

### estrangela.finalConnected : <code>Array.&lt;string&gt;</code>
Estrangela final connected modified consonants

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.finalNonConnected"></a>

### estrangela.finalNonConnected : <code>Array.&lt;string&gt;</code>
Estrangela final non-connected modified consonants

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.ligatures"></a>

### estrangela.ligatures : <code>Array.&lt;string&gt;</code>
Estrangela 2 ligatures

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.allConsonants"></a>

### estrangela.allConsonants : <code>Array.&lt;string&gt;</code>
All Estrangela font consonants

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.unconnected"></a>

### estrangela.unconnected : <code>Array.&lt;string&gt;</code>
Estrangela consonants unconnected on the left

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.commonVowels"></a>

### estrangela.commonVowels : <code>Array.&lt;string&gt;</code>
Estrangela common vowels - common to both eastern and western

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.easternVowels"></a>

### estrangela.easternVowels : <code>Array.&lt;string&gt;</code>
Estrangela eastern only vowels

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.shiftedVowels"></a>

### estrangela.shiftedVowels : <code>Array.&lt;string&gt;</code>
Estrangela shifted vowels (SHIFT key on)

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.baseVowels"></a>

### estrangela.baseVowels : <code>Array.&lt;string&gt;</code>
Estrangela vowels (both common and eastern) - excluding shifted

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.allVowels"></a>

### estrangela.allVowels : <code>Array.&lt;string&gt;</code>
All Estrangela vowels (including shifted)

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.commonDiacritics"></a>

### estrangela.commonDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela base/common diacritics (both western and eastern)

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.easternDiacritics"></a>

### estrangela.easternDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela eastern specific diacritics

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.baseDiacritics"></a>

### estrangela.baseDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela diacritics - excluding shifted

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.shiftedDiacritics"></a>

### estrangela.shiftedDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela shifted diacritics

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.allDiacritics"></a>

### estrangela.allDiacritics : <code>Array.&lt;string&gt;</code>
All Estrangela diacritics (including shifted)

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.punctuation"></a>

### estrangela.punctuation : <code>Array.&lt;string&gt;</code>
Estrangela punctuation

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.isConsonant"></a>

### estrangela.isConsonant ⇒ <code>boolean</code>
Is character c an Estrangela consonant

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is Estrangela consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangela.isVowel"></a>

### estrangela.isVowel ⇒ <code>boolean</code>
Is character c an Estrangela vowel

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is Estrangela vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangela.isDiacritic"></a>

### estrangela.isDiacritic ⇒ <code>boolean</code>
Is character c an Estrangela diacritic

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is Estrangela diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangela.isPunctuation"></a>

### estrangela.isPunctuation ⇒ <code>boolean</code>
Is character c an Estrangela punctuation

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is Estrangela punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangela.isUnconnected"></a>

### estrangela.isUnconnected ⇒ <code>boolean</code>
Is character c an unconnected on the left Estrangela consonant

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is unconnected on the left consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangela.endify"></a>

### estrangela.endify ⇒ <code>string</code>
Fix end consonant for a word in base Estrangela font

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>string</code> - word with end consonant corrected  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |


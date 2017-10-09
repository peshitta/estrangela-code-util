# estrangela-code-util

[![npm version](https://badge.fury.io/js/estrangela-code-util.svg)](https://badge.fury.io/js/estrangela-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/estrangela-code-util.svg)](https://www.npmjs.org/package/estrangela-code-util)
[![Build Status](https://travis-ci.org/peshitta/estrangela-code-util.svg?branch=master)](https://travis-ci.org/peshitta/estrangela-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/estrangela-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/estrangela-code-util.svg)](https://david-dm.org/peshitta/estrangela-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/estrangela-code-util/dev-status.svg)](https://david-dm.org/peshitta/estrangela-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/estrangela-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/estrangela-code-util?branch=master)

Estrangela ASCII code font utilities

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install estrangela-code-util --save
```

Following bundles are available:
* `estrangela-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `estrangela-code-util.min.js` - minified version of `estrangela-code-util.js`
* `estrangela-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/estrangela-code-util/-/estrangela-code-util-1.0.7.tgz](https://registry.npmjs.org/estrangela-code-util/-/estrangela-code-util-1.0.7.tgz)

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
You are welcomed to improve this implementation or provide feedback. Please
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

* [estrangelaCodeUtil](#module_estrangelaCodeUtil)
    * [.baseConsonants](#module_estrangelaCodeUtil.baseConsonants) : <code>Array.&lt;string&gt;</code>
    * [.finalConnected](#module_estrangelaCodeUtil.finalConnected) : <code>Array.&lt;string&gt;</code>
    * [.finalNonConnected](#module_estrangelaCodeUtil.finalNonConnected) : <code>Array.&lt;string&gt;</code>
    * [.ligatures](#module_estrangelaCodeUtil.ligatures) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_estrangelaCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.unconnected](#module_estrangelaCodeUtil.unconnected) : <code>Array.&lt;string&gt;</code>
    * [.commonVowels](#module_estrangelaCodeUtil.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_estrangelaCodeUtil.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.shiftedVowels](#module_estrangelaCodeUtil.shiftedVowels) : <code>Array.&lt;string&gt;</code>
    * [.baseVowels](#module_estrangelaCodeUtil.baseVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_estrangelaCodeUtil.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.commonDiacritics](#module_estrangelaCodeUtil.commonDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.easternDiacritics](#module_estrangelaCodeUtil.easternDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.baseDiacritics](#module_estrangelaCodeUtil.baseDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.shiftedDiacritics](#module_estrangelaCodeUtil.shiftedDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.allDiacritics](#module_estrangelaCodeUtil.allDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_estrangelaCodeUtil.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.joiners](#module_estrangelaCodeUtil.joiners) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_estrangelaCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_estrangelaCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_estrangelaCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_estrangelaCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_estrangelaCodeUtil.isPunctuation) ⇒ <code>boolean</code>
    * [.isJoiner](#module_estrangelaCodeUtil.isJoiner) ⇒ <code>boolean</code>
    * [.isEasternDiacritic](#module_estrangelaCodeUtil.isEasternDiacritic) ⇒ <code>boolean</code>
    * [.isUnconnected](#module_estrangelaCodeUtil.isUnconnected) ⇒ <code>boolean</code>
    * [.isDotting](#module_estrangelaCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.endify](#module_estrangelaCodeUtil.endify) ⇒ <code>string</code>
    * [.removeDotting](#module_estrangelaCodeUtil.removeDotting) ⇒ <code>string</code>

<a name="module_estrangelaCodeUtil.baseConsonants"></a>

### estrangelaCodeUtil.baseConsonants : <code>Array.&lt;string&gt;</code>
Estrangela base consonants - the 22 aramaic consonants

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.finalConnected"></a>

### estrangelaCodeUtil.finalConnected : <code>Array.&lt;string&gt;</code>
Estrangela final connected modified consonants

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.finalNonConnected"></a>

### estrangelaCodeUtil.finalNonConnected : <code>Array.&lt;string&gt;</code>
Estrangela final non-connected modified consonants

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.ligatures"></a>

### estrangelaCodeUtil.ligatures : <code>Array.&lt;string&gt;</code>
Estrangela 2 ligatures

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.allConsonants"></a>

### estrangelaCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
All Estrangela font consonants

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.unconnected"></a>

### estrangelaCodeUtil.unconnected : <code>Array.&lt;string&gt;</code>
Estrangela consonants unconnected on the left

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.commonVowels"></a>

### estrangelaCodeUtil.commonVowels : <code>Array.&lt;string&gt;</code>
Estrangela common vowels - common to both eastern and western

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.easternVowels"></a>

### estrangelaCodeUtil.easternVowels : <code>Array.&lt;string&gt;</code>
Estrangela eastern only vowels

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.shiftedVowels"></a>

### estrangelaCodeUtil.shiftedVowels : <code>Array.&lt;string&gt;</code>
Estrangela shifted vowels (SHIFT key on)

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.baseVowels"></a>

### estrangelaCodeUtil.baseVowels : <code>Array.&lt;string&gt;</code>
Estrangela vowels (both common and eastern) - excluding shifted

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.allVowels"></a>

### estrangelaCodeUtil.allVowels : <code>Array.&lt;string&gt;</code>
All Estrangela vowels (including shifted)

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.commonDiacritics"></a>

### estrangelaCodeUtil.commonDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela base/common diacritics (both western and eastern)

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.easternDiacritics"></a>

### estrangelaCodeUtil.easternDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela eastern specific diacritics

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.baseDiacritics"></a>

### estrangelaCodeUtil.baseDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela diacritics - excluding shifted

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.shiftedDiacritics"></a>

### estrangelaCodeUtil.shiftedDiacritics : <code>Array.&lt;string&gt;</code>
Estrangela shifted diacritics

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.allDiacritics"></a>

### estrangelaCodeUtil.allDiacritics : <code>Array.&lt;string&gt;</code>
All Estrangela diacritics (including shifted)

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.punctuation"></a>

### estrangelaCodeUtil.punctuation : <code>Array.&lt;string&gt;</code>
Estrangela punctuation

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.joiners"></a>

### estrangelaCodeUtil.joiners : <code>Array.&lt;string&gt;</code>
Estrangela joiners

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.dotting"></a>

### estrangelaCodeUtil.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
<a name="module_estrangelaCodeUtil.isConsonant"></a>

### estrangelaCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c an Estrangela consonant

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isVowel"></a>

### estrangelaCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c an Estrangela vowel

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isDiacritic"></a>

### estrangelaCodeUtil.isDiacritic ⇒ <code>boolean</code>
Is character c an Estrangela diacritic

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isPunctuation"></a>

### estrangelaCodeUtil.isPunctuation ⇒ <code>boolean</code>
Is character c an Estrangela punctuation

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isJoiner"></a>

### estrangelaCodeUtil.isJoiner ⇒ <code>boolean</code>
Is character c an Estrangela joiner

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela joiner  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isEasternDiacritic"></a>

### estrangelaCodeUtil.isEasternDiacritic ⇒ <code>boolean</code>
Is character c an Estrangela Eastern Diacritic

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Estrangela Eastern Diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isUnconnected"></a>

### estrangelaCodeUtil.isUnconnected ⇒ <code>boolean</code>
Is character c an unconnected on the left Estrangela consonant

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is unconnected on the left consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.isDotting"></a>

### estrangelaCodeUtil.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_estrangelaCodeUtil.endify"></a>

### estrangelaCodeUtil.endify ⇒ <code>string</code>
Fix end consonant for a word in base Estrangela font

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>string</code> - word with end consonant corrected  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |

<a name="module_estrangelaCodeUtil.removeDotting"></a>

### estrangelaCodeUtil.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>estrangelaCodeUtil</code>](#module_estrangelaCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |


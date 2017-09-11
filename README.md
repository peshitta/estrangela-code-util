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

```
npm install estrangela-code-util --save
```

Following packages are available:
* `estrangela-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `estrangela-code-util.min.js` - minified version of `estrangela-code-util.js`
* `estrangela-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

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
You are welcomed to to improve this implementation or provide feeback. Please
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
    * [.consonants](#module_estrangela.consonants) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#module_estrangela.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacretics](#module_estrangela.diacretics) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_estrangela.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_estrangela.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_estrangela.isVowel) ⇒ <code>boolean</code>
    * [.isDiacretic](#module_estrangela.isDiacretic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_estrangela.isPunctuation) ⇒ <code>boolean</code>

<a name="module_estrangela.consonants"></a>

### estrangela.consonants : <code>Array.&lt;string&gt;</code>
Estrangela consonants

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.vowels"></a>

### estrangela.vowels : <code>Array.&lt;string&gt;</code>
Estrangela vowels

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
<a name="module_estrangela.diacretics"></a>

### estrangela.diacretics : <code>Array.&lt;string&gt;</code>
Estrangela diacretics

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

<a name="module_estrangela.isDiacretic"></a>

### estrangela.isDiacretic ⇒ <code>boolean</code>
Is character c an Estrangela diacretic

**Kind**: static constant of [<code>estrangela</code>](#module_estrangela)  
**Returns**: <code>boolean</code> - true if c is Estrangela diacretic  

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


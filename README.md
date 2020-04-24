# 🥛 Leche NIDO Widget 🥛 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Widget made with Vanilla JavaScript to be imported into Leche NIDO website.

## 📖 How-to

Widget main object in DOM (`leche-nido-widget`) will show selected product by the user to show the correct slide in `data-` attribute.

`

<div id="leche-nido-widget" data-current-selected="product-selected-goes-here">
  ...
</div>
`

### Required files:

Files used by backend:

- HTML `src/index.html`
- JavaScript `src/js/index.js`
- CSS `src/css/style.css`

### Content Manager

Widget texts should be added by using the 'content' object at the begining of `src/js/index.js` file.

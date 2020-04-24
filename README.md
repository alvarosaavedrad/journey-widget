# 🥛 Leche NIDO Widget 🥛 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Widget made with Vanilla JavaScript to be imported into Leche NIDO website.

## 📖 How-to

Widget main object in DOM (`leche-nido-widget`) will show selected product by the user in `data-` attribute in order to set the correct choice in other component. In addition, `lecheNido` object has been added to browser global `window` object with the same purpose.

### Required files:

Files used by backend:

- HTML `src/index.html`
- JavaScript `src/js/index.js`
- CSS `src/css/style.css`

### Content Manager

Widget texts should be added by using the 'content' object at the begining of `src/js/index.js` file.

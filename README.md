# 🚀 Journey Widget 🚀 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

### ✅ Version 2.0

## 🔖 Description

Widget made with jQuery to be imported in websites from Elementor.

## 📖 How-to

Once the widget is added other components may subscribe to a `window` event called `journeyWidget`. Every time this event is dispatched it shares an object which has info about the current state of the used widget. This object can be found in `e.detail.data`.

This is how you should subscribe to it:

```
window.addEventListener(function (e) {
  console.log(e.detail.data);
  [...]
});
```

You could use jQuery instead.

For more information about custom events in JavaScript, please check [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events).

### Required files

Use `npm run bundle:stylesheets` command in root directory to generate the stylesheet in case you modify something in `style.css` or `list-items.sass`.

Files used by backend:

- HTML `src/index.html`
- JavaScript `src/js/index.js`
- CSS `src/css/bundle.css`

## 🗺️ Roadmap

- Not creating custom event inside the loop.

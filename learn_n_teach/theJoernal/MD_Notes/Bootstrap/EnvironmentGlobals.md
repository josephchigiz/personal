- **IMPORTANT!** - Bootstrap requires HTML5 doctype; otherwise there'l be funky incomplete styling

---

- Bootstrap uses the **mobile-first** approach and scales up components using <u><em>media queries</em></u>

- For proper rendering, ensure the **viewport meta** is in your `<head>`

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

---

- The global `box-sizing` value is switched from `content-box` to `border-box`

- This change ensures that the padding doesn't affect the final computed width of an element

- To override this default, you can use the following:
  
  ```css
  .selector-for-given-element {
      box-sixing: content-box;
  }
  ```

- When the above snippet is used, the nested elements including generated content via `::before` and `::after` inherit the `box-sizing` set for the element.

---

> 

![](rollerskate.png)

Yet another accordion library.

```html
<ul data-accordion>
  <li data-accordion-item> <!-- index 0 -->
    <div data-accordion-item-body></div>
  <li>
  <li data-accordion-item> <!-- index 1 and so on! -->
    <div data-accordion-item-body></div>
  <li>
</ul>
```

```js
const Rollerskate = require('rollerskate');
const rollerskate = new Rollerskate(window);

rollerskate.expandAll();
rollerskate.collapseAll();
rollerskate.item(0).expand();
rollerskate.item(0).collapse();
```

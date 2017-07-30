import tap from 'tap';
import {jsdom} from 'jsdom';
import AccordionItem from './accordion-item';

tap.test('AccordionItem exists', (t) => {
  t.ok(AccordionItem);
  t.end();
});

tap.test('#collapse method', (t) => {
  const markup = `
    <div data-accordion-item>
      <div data-accordion-item-body></div>
    </div>
    <div data-accordion-item data-accordion-open></div>
  `;
  const window = jsdom(markup).defaultView;
  const itemBody = window.document.querySelector('[data-accordion-item-body]');
  let items = window.document.querySelectorAll('[data-accordion-item]');

  items = [].map.call(items, item => new AccordionItem(item));

  t.ok(items[0].collapse, 'is defined');

  t.ok(items[0].closed === false, 'accordion item is open');
  t.ok(items[1].closed === false, 'bodyless accordion item is open');
  t.equal(itemBody.style.display, "", 'item body is visible');

  items[0].collapse();
  items[1].collapse();

  t.ok(items[0].closed === true, 'accordion item is closed');
  t.ok(items[1].closed === true, 'bodyless accordion item is closed');
  t.equal(itemBody.style.display, 'none', 'item body is not visible');
  t.end();
});

tap.test('#expand method', (t) => {
  const markup = `
    <div data-accordion-item>
      <div data-accordion-item-body style="display: none;"></div>
    </div>
    <div data-accordion-item data-accordion-closed></div>
  `;
  const window = jsdom(markup).defaultView;
  const itemBody = window.document.querySelector('[data-accordion-item-body]');
  let items = window.document.querySelectorAll('[data-accordion-item]');

  items = [].map.call(items, item => new AccordionItem(item));

  t.ok(items[0].expand, 'is defined');

  t.ok(items[0].open === false, 'accordion item is closed');
  t.ok(items[1].open === false, 'bodyless accordion item is closed');
  t.equal(itemBody.style.display, 'none', 'item body is visible');

  items[0].expand();
  items[1].expand();

  t.ok(items[0].open === true, 'accordion item is open');
  t.ok(items[1].open === true, 'bodyless accordion item is open');
  t.equal(itemBody.style.display, '', 'item body is not visible');
  t.end();
});

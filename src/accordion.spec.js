import tap from 'tap';
import {jsdom} from 'jsdom';
import Accordion from './accordion';

tap.test('Accordion exists', (t) => {
  t.ok(Accordion);
  t.end();
});

tap.test('An accordion module instance', (t) => {
  const markup = `<div data-accordion></div>`;
  const window = jsdom(markup).defaultView;
  const accordion = new Accordion(window);
  t.equal(accordion.items.length, 0, 'container property is defined');
  t.end();
});

tap.test('#item method', t => {
  const markup = `
    <div data-accordion>
      <div data-accordion-item></div>
      <div data-accordion-item></div>
      <div data-accordion-item></div>
      <div data-accordion-item></div>
      <div data-accordion-item></div>
    </div>
  `;
  const window = jsdom(markup).defaultView;
  const accordion = new Accordion(window);
  t.ok(accordion.item(0).element);
  t.end();
});

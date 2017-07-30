import AccordionItem from './lib/accordion-item.js';

export default class Accordion {
  constructor (window) {
    const element = window.document.querySelector('[data-accordion]');
    if (element) {
      this.items = [].map.call(element.children, child => new AccordionItem(child));
    } else {
      throw new Error('Can\'t find data-accordion element.');
    }
  }

  item(index) {
    return this.items[index];
  }

  collapseAll() {
    [].forEach.call(this.items, item => item.collapse());
  }

  expandAll() {
    [].forEach.call(this.items, item => item.expand());
  }
}

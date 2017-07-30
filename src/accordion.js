export default class Accordion {
  constructor (window) {
    const container = window.document.querySelector('[data-accordion]');
    if (container) {
      this.container = container;
    } else {
      throw new Error('Can\'t find data-accordion element.');
    }
    this.initialize();
  }

  children() {
    return this.container.children;
  }

  initialize() {
    [].forEach.call(this.container.children, (child) => {
      if (!child.hasAttribute('data-accordion-closed') && !child.hasAttribute('data-accordion-open')) {
        this.collapse(child);
      }
    });
  }

  collapse(item) {
    const itemBody = item.querySelector('*[data-accordion-item-body]');
    if (!item.hasAttribute('data-accordion-closed')) {
      item.setAttribute('data-accordion-closed', true);
      if (item.hasAttribute('data-accordion-open')) {
        item.removeAttribute('data-accordion-open');
      }
      if (itemBody) {
        itemBody.style.display = 'none';
      }
    }
  }

  expand(item) {
    const itemBody = item.querySelector('*[data-accordion-item-body]');
    if (!item.hasAttribute('data-accordion-open')) {
      item.setAttribute('data-accordion-open', true);
      if (item.hasAttribute('data-accordion-closed')) {
        item.removeAttribute('data-accordion-closed');
      }
      if (itemBody) {
        itemBody.style.display = null;
      }
    }
  }
}

export default class AccordionItem {
  constructor(element) {
    this.element = element;
    this.closed = this.element.hasAttribute('data-accordion-closed');
    this.open = this.element.hasAttribute('data-accordion-open');

    if (this.closed) {
      this.collapse();
    }

    if (this.open) {
      this.expand();
    }
  }

  collapse() {
    const itemBody = this.element.querySelector('[data-accordion-item-body]');

    if (!this.element.hasAttribute('data-accordion-closed')) {
      this.element.setAttribute('data-accordion-closed', true);

      if (this.element.hasAttribute('data-accordion-open')) {
        this.element.removeAttribute('data-accordion-open');
      }

      if (itemBody) {
        itemBody.style.display = 'none';
      }

      this.open = false;
      this.closed = true;
    }
  }

  expand() {
    const itemBody = this.element.querySelector('[data-accordion-item-body]');

    if (!this.element.hasAttribute('data-accordion-open')) {
      this.element.setAttribute('data-accordion-open', true);

      if (this.element.hasAttribute('data-accordion-closed')) {
        this.element.removeAttribute('data-accordion-closed');
      }

      if (itemBody) {
        itemBody.style.display = '';
      }

      this.open = true;
      this.closed = false;
    }
  }
}

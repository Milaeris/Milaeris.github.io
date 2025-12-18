class Navigation extends HTMLElement {
	constructor() {
    super();

    this.heading = "";
    this.subheading = "";
  }

  connectedCallback() {
    this.heading = this.getAttribute("heading");
    this.subheading = this.getAttribute("subheading");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        
      </div>
      `;
  }
}

customElements.define('site-navigation', Navigation); 
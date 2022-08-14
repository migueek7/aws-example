import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Bienvenido, SPA</h1>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
            </p>
            <p>
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde
            </p>
        `;
    }
}
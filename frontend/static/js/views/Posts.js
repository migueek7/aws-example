import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde
            </p>
        `;
    }
}
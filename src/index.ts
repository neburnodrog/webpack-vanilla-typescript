import "./style.css";
import Header from "./components/header";

console.log("Hello World!");
const appNode = document.getElementById("App");

export interface App {
    node: HTMLElement;
    render: () => HTMLElement;
    appendChild: (node: HTMLElement) => void;
}

export class App {
    constructor(node: HTMLElement) {
        this.node = node;
    }

    render = (): HTMLElement => {
        return this.node;
    };

    appendChild = (node: HTMLElement): void => {
        this.node.appendChild(node);
    };
}

window.addEventListener("load", () => {
    const app = new App(appNode);
    app.appendChild(Header());
    document.body.appendChild(app.node);
});

// appNode.innerHTML = `
// <h1 class="hello">Hello Webpack!</h1>
// <div>
//     <p>this project is hosted at <a href="https://github.com/neburnodrog/webpack-vanilla-typescript">GitHub</a></p>
// </div>
// `;

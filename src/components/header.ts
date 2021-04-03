export default function Header(): HTMLElement {
    const header = document.createElement("h1");
    header.innerText = "Hello Webpack and Hello Typescript";
    return header;
}

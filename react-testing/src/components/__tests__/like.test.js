import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(()=> {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
            <Like />,
            container
        )
    })
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

describe("Verificando Like", () => {
    it("Verificación valor por defecto", ()=> {
        const likes = container.querySelector("p");
        expect(likes.textContent).toBe("Likes: 0");
    });

    it("Verificar boton aumento", () => {
        const likes = container.querySelector("p");
        document.getElementById("increment").click()
        expect(likes.textContent).toBe("Likes: 1");
    })

    it("Verificar boton aumento", () => {
        const likes = container.querySelector("p");
        document.getElementById("increment").click()
        document.getElementById("increment").click()
        document.getElementById("decrement").click()
        expect(likes.textContent).toBe("Likes: 1");
    })
})
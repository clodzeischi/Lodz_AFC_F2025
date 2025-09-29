/*
 @jest-environment jsdom
 */



const {setUpForm} = require("./form");

beforeEach( () => {
    document.body.innerHTML = `
        <form id="my-form" action="/submit" method="post">
        <label>Name:<input id="input-name" type="text"></label>
        <input id="submit" type="submit">
        </form>
        <p id="output">Output</p>
    `
});

test("Does form exist?", () => {
    const MY_FORM = document.getElementById("my-form");
    expect(MY_FORM).not.toBeNull();
    expect(MY_FORM.getAttribute("method")).toBe("post");
    expect(MY_FORM.getAttribute("action")).toBe("/submit");
});

test("Does it show error on blank input?", () => {
    setUpForm(document);
    const form = document.getElementById("my-form");
    form.dispatchEvent(new Event("submit"));
    const output = document.getElementById("output");
    expect(output.textContent).toBe("Name is required.");
});
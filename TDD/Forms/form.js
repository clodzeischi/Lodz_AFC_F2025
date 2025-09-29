function setUpForm(document) {
    const MY_FORM = document.getElementById("my-form");
    const INPUT_NAME = document.getElementById("input-name");
    const OUTPUT = document.getElementById("output");

    MY_FORM.addEventListener("submit", (e) => {
        e.preventDefault();

        OUTPUT.textContent = (INPUT_NAME.value ? INPUT_NAME.value : "Name is required.");
    });
}

module.exports = {
    setUpForm
}
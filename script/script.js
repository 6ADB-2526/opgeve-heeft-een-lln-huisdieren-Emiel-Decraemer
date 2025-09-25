// lijst met namen

const users = [
  { id: 1, naam: "Kleintjes", voornaam: "Karel" },
  { id: 2, naam: "Dotjes", voornaam: "Els" },
  { id: 3, naam: "Kleintjes", voornaam: "Steven" },
];

// elementen ophalen
const select = document.querySelector("#mySelect");
const checkbox = document.querySelector("#heeftHuisdieren");
const huisdierWrap = document.querySelector("#naamHuisdierWrap");
const eersteHuisdierInput = document.querySelector("#naamHuisdier");
const form = document.querySelector("#myForm");

// h1 tevoorschijn laten komen
const container = document.querySelector(".container");
const welkom = document.createElement("h1");
welkom.id = "welkom";
container.insertBefore(welkom, container.firstChild);

// --- Naam tonen bij selectie
select.addEventListener("change", () => {
  const selectedUser = users.find((user) => user.id == select.value);
  welkom.textContent = selectedUser
    ? `Welkom ${selectedUser.naam} ${selectedUser.voornaam}`
    : "";
});

// --- Checkbox toggle
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    huisdierWrap.classList.remove("visually-hidden");
    // Reset en start altijd met 1 veld
    huisdierWrap.innerHTML = `
      <label class="form-label">Naam van het huisdier</label>
      <input type="text" class="form-control" placeholder="Vul de naam van het huisdier in" />
    `;
    setupDynamicInputs();
  } else {
    huisdierWrap.classList.add("visually-hidden");
    huisdierWrap.innerHTML = "";
  }
});

// --- Dynamische huisdier velden
function setupDynamicInputs() {
  const inputs = huisdierWrap.querySelectorAll("input");
  const lastInput = inputs[inputs.length - 1];

  lastInput.addEventListener("input", () => {
    if (lastInput.value.trim() !== "") {
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.className = "form-control mt-2";
      newInput.placeholder = "Nog een huisdier?";
      huisdierWrap.appendChild(newInput);
      setupDynamicInputs();
    }
  });
}

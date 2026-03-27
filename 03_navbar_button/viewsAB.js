export class ViewA {
  constructor(parent) {
    this.container = document.createElement("div");
    this.container.className = "container";

    this.container.innerText = "div class a";

    parent.appendChild(this.container);

    this.container
      .querySelector("#alertBtn")
      .addEventListener("click", () => 
      {
        alert("Class A esemény!");
      });
  }
}
export class ViewB {
  constructor(parent) {
    this.container = document.createElement("div");
    this.container.className = "container";

    this.container.innerText = "div class b";

    parent.appendChild(this.container);

    this.container
      .querySelector("#changeTextBtn")
      .addEventListener("click", () => 
      {
        this.container.querySelector("#text").textContent =
          "Megváltozott!";
      });
  }
}
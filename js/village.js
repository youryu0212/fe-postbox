export class Village {
  constructor(name, { x, y }, size, postboxSize = null) {
    this.name = name;
    [this.x, this.y] = [x, y];
    this.size = size;
    this.postboxSize = postboxSize;
    this.hasPostbox = !!postboxSize;
    this.innerVillage = [];
  }
  createTemplate() {
    return `
    <div class="village${this.hasPostbox ? " has-red-postbox" : ""}">
      <div class="village-name">${this.name}</div>
      <div class="village-area">
        ${this.hasPostbox ? `<div class="red-postbox" data-size="${this.postboxSize}">📮</div>` : ""}
        ${this.innerVillage.map((village) => village.createTemplate()).join("")}
      </div>
    </div>
    `;
  }
}

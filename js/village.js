export class Village {
  constructor({ x, y }, size, color) {
    [this.x, this.y] = [x, y];
    this.size = size;
    this.color = color;
  }
}

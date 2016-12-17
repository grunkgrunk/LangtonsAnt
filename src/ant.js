const Ant = function(x, y) {
  this.pos = new Vector(x, y)
  // look in the up direction to begin with
  this.dir = new Vector(0, -1)
}

Ant.prototype.move = function(isVisited) {
  // turn depending on what the ant is isVisited
  this.dir = isVisited ? this.turn("left") : this.turn("right")
  // move forwards
  this.pos = this.pos.add(this.dir)
}

Ant.prototype.turn = function(to) {
  return to === "right" ? this.dir.hat() : this.dir.hat().mult(-1)
}

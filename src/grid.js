const Grid = function(onX, onY, initVal) {
  // instead of row and cols
  this.onX = onX
  this.onY = onY

  // the values in the grid, in fact it is 1D, but we will implement getters and setter
  // that act like its 2D
  this.data = []

  for (let y = 0; y < onY; y++) {
    for (let x = 0; x < onX; x++) {
      // if there is no initVal push an object to the array. The init val should be an object
      this.data.push(initVal)
    }
  }
}

Grid.prototype.get = function(x, y) {
  return this.data[x + y * this.onY]
}

Grid.prototype.set = function(x, y, bool) {
  // Assigns the given object to the already exsisting object in the grid
  this.data[x + y * this.onY] = bool
}

Grid.prototype.render = function(func) {
  for (let y = 0; y < this.onY; y++) {
    for (let x = 0; x < this.onX; x++) {
      func(x, y)
    }
  }
}

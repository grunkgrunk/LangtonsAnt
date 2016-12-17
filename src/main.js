const canvas = document.getElementById("canvas")
canvas.width = 800
canvas.height = 800
const ctx = canvas.getContext("2d")
const width = canvas.width
const height = canvas.height

const ant = new Ant(width/10/2, height/10/2)
const grid = new Grid(width/10, height/10, false)

//grid.set(ant.pos.x, ant.pos.y, ant)

let update = function() {
  // get the value of the grid at the ant's position
  let antPos = ant.pos
  let gridVal = grid.get(antPos.x, antPos.y)
  
  // move the ant
  ant.move(gridVal)
  //set the grid value to what is wasnt
  grid.set(antPos.x, antPos.y, !gridVal)

  //rendering
  //render background
  ctx.clearRect(0,0,width, height)

  ctx.save()
  //ctx.translate(width/2, height/2)
  ctx.scale(10, 10)

  //render grid
  grid.render((x, y) => {
    ctx.fillStyle = grid.get(x,y) ? "black" : "grey"
    ctx.fillRect(x,y,1,1)
  })
  //render ant
  ctx.fillStyle = "green"
  ctx.fillRect(ant.pos.x, ant.pos.y, 1, 1)
  ctx.restore()



  requestAnimationFrame(update)
}
update()

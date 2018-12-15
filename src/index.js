import * as d3 from 'd3'
import './css/index.scss'

d3.select('#f_e_editor_viewport').append('svg').attr('height', '100%')
  .attr('width', '100%').attr('id', 'f_e_editor_content')

// const MINI_SIZE = 5
const NORMAL_SIZE = 15
// const LARGE_SIZE = 25

let canvas = document.getElementById('f_e_editor_grid')
console.log(canvas.getBoundingClientRect())
canvas.width = 600
canvas.height = 600
if (canvas.getContext) {
  let ctx = canvas.getContext('2d')
  /*   let gradient = ctx.createLinearGradient(0, 0, 0, 300)
    gradient.addColorStop(0, '#e0e0e0')
    gradient.addColorStop(0, '#ffffff')
    ctx.fillStyle = gradient
    ctx.fillRect = (0, 0, canvas.clientWidth, canvas.height) */

  let cellHeight = NORMAL_SIZE
  let cellWidth = NORMAL_SIZE
  let gridCols = canvas.width / cellWidth
  let gridRows = canvas.height / cellHeight

  ctx.lineWidth = 1
  ctx.strokeStyle = '#a0a0a0'

  ctx.beginPath()
  // 画竖线
  for (let col = 0; col <= gridCols; col++) {
    let x = col * cellWidth
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
  }
  // 画横线
  for (let row = 0; row <= gridRows; row++) {
    let y = row * cellHeight
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
  }
  ctx.stroke()
} else {
  window.alert('请升级浏览器')
}
/* class FlowEditor {
  constructor (selector) {
    this.editor = null
    this.selector = selector
    this._create(selector)
  }
  _create (selector) {
    let dom = document.getElementById(selector)
    d3.select(dom).append('svg').attr('height', 500)
      .attr('width', 500).style('background', '#99ffff')
  }
} */

// window.flowEditor = FlowEditor

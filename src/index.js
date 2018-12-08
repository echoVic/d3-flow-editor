import './css/red.scss'
import './css/red.css'
class FlowEditor {
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
}

window.flowEditor = FlowEditor

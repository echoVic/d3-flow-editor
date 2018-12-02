import SVG from 'svg.js'

class FlowEditor {
  constructor (selector) {
    this.editor = null
    this.selector = selector
    this._create(selector)
  }
  _create (selector) {
    this.editor = SVG(selector).size('100%', '100%')
    this.editor.rect(150, 100).attr({ fill: '#f06' })
    let text = this.editor.text('Hello flowEditor!')
    text.move(10, 45).font({ fill: '#000', family: 'Inconsolata' })
  }
}

window.flowEditor = FlowEditor

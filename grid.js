const React = require("react")
const ReactDOM = require("react-dom")
const classNames = require("classnames")
const {desktopCapturer} = require("electron")

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.resetState()
    this.withinGrid = this.withinGrid.bind(this)
  }

  resetState() {
    return {
      mouseX: 0,
      mouseY: 0,
      startX: null,
      startY: null,
      dragging: false,
    }
  }

  render() {
    return React.DOM.div({className: "container", onMouseUp: this.handleMouseUp()},
      this.renderGrid("bg-grid"),
      this.renderGrid("grid")
    )
  }

  renderGrid(className, enableCallbacks = true) {
    return React.DOM.div({className: "grid-container"},
      React.DOM.div({className}, this.renderRows(enableCallbacks))
    )
  }

  renderRows(enableCallbacks) {
    let rows = []
    for (let y = 0; y < this.props.height; y++) {
      rows.push(React.DOM.div({key: y, className: "gridRow"}, this.renderColumns(y, enableCallbacks)))
    }
    return rows
  }

  renderColumns(y, enableCallbacks) {
    let cols = []
    for (let x = 0; x < this.props.width; x++) {
      const props = {
        key: x,
        className: classNames("gridSquare", {active: this.gridSquareActive(x, y)}),
      }
      if (enableCallbacks) {
        Object.assign(props, {
          onMouseOver: this.handleMouseOver(x, y),
          onMouseDown: this.handleMouseDown(x, y),
          onDragStart: (e) => e.preventDefault(),
        })
      }
      cols.push(React.DOM.div(props))
    }
    return cols
  }

  handleMouseOver(x, y) {
    return () => {
      this.setState({mouseX: x, mouseY: y})
    }
  }

  handleMouseDown(x, y) {
    return (e) => {
      e.preventDefault()
      this.setState({dragging: true, startX: x, startY: y})
    }
  }

  handleMouseUp() {
    return () => {
      desktopCapturer.getSources({types: ["window"]}, (err, sources) => {
        console.log(sources)
      })
      const {mouseX: x1, mouseY: y1, startX: x2, startY: y2} = this.state
      let x = Math.min(x1, x2)
      let y = Math.min(y1, y2)
      let w = Math.max(x1, x2) - x + 1
      let h = Math.max(y1, y2) - y + 1
      this.setState(this.resetState(), () => {
        this.props.onResize(this.props.width, this.props.height, x, y, w, h)
      })
    }
  }

  withinGrid(x, y) {
    return x <= Math.max(this.state.mouseX, this.state.startX) &&
           x >= Math.min(this.state.mouseX, this.state.startX) &&
           y <= Math.max(this.state.mouseY, this.state.startY) &&
           y >= Math.min(this.state.mouseY, this.state.startY)
  }

  gridSquareActive(x, y) {
    return (this.state.dragging && this.withinGrid(x, y)) || (x == this.state.mouseX && y == this.state.mouseY)
  }
}

module.exports = Grid

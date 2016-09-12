// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Grid = require("./grid.js")
const React = require("react")
const ReactDOM = require("react-dom")
const onResize = require("electron").remote.require("./resizer.js")
const appWindow = require("electron").remote.getCurrentWindow()
const Mousetrap = require("mousetrap")

let width = 5
let height = 4

function render() {
  window.grid = ReactDOM.render(React.createElement(Grid, {width, height, onResize}), document.querySelector("body"))
}

function increaseWidth(e) {
  e.preventDefault()
  if (width < 8) {
    width++
    render()
  }
}

function decreaseWidth(e) {
  e.preventDefault()
  if (width > 3) {
    width--
    render()
  }
}

function increaseHeight(e) {
  e.preventDefault()
  if (height < 6) {
    height++
    render()
  }
}

function decreaseHeight(e) {
  e.preventDefault()
  if (height > 3) {
    height--
    render()
  }
}

render()

Mousetrap.bind("command+=", increaseWidth)
Mousetrap.bind("command+-", decreaseWidth)
Mousetrap.bind("command+shift+=", increaseHeight)
Mousetrap.bind("command+shift+-", decreaseHeight)

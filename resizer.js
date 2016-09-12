const {BrowserWindow} = require("electron")
const {exec} = require("child_process")

function handleResize(gridW, gridH, x, y, w, h) {
  console.log(`Resizing to: ({${x}, ${y}}, {${w}, ${h}})`)
  exec(`hs -c "resizeFocusedWindow(${gridW}, ${gridH}, ${x}, ${y}, ${w}, ${h})"`)
  BrowserWindow.getFocusedWindow().hide()
}

module.exports = handleResize

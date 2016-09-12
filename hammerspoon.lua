require("hs.ipc") -- allows you to call HS functions from the CLI

local focusedWindow

-- Saves the currently focused window, if there is one
function saveFocusedWindow()
  local newWindow = hs.window.focusedWindow()
  if (newWindow) then
    focusedWindow = newWindow
  end
end

-- Resizes the window saved in `focusedWindow`
-- arguments:
--  gridW: the width of the resizing grid
--  gridH: the height of the resizing grid
--  x:     the X coordinate for the top left corner of the window on the resizing grid
--  y:     the Y coordinate for the top left corner of the window on the resizing grid
--  w:     the width of the window in resizing grid units
--  h:     the height of the window in resizing grid units
function resizeFocusedWindow(gridW, gridH, x, y, w, h)
  local f = focusedWindow:frame()
  local screen = focusedWindow:screen()
  local max = screen:frame()
  f.x = (max.w / gridW) * x
  f.y = (max.h / gridH) * y
  f.w = (max.w / gridW) * w
  f.h = (max.h / gridH) * h
  focusedWindow:setFrame(f, 0)
end

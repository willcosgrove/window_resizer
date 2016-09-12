# Window Resizer

![Windows Resizing](/demo.gif?raw=true)

Welcome.

You probably ended up here because of the very exciting name of this project.  I don't blame you.

This isn't really meant to be something for the public at large to use and enjoy, but if you'd like to take it for a spin, who am I to say no?  Well I'm the owner of this repo, so I could say no.  But I don't.  I say yes. ❤

First you'll need to install [Hammerspoon](http://www.hammerspoon.org/), which is a nifty little tool for automating all sorts of macOS-y things with Lua.  Oh did I mention before that this only works for macOS at the moment?  And by "at the moment" I mean likely for the rest of time.  I'm sorry.  If you're not on macOS, you may enjoy the app that this is a total rip off of: [Divvy](http://mizage.com/divvy/), which is available for Windows or Mac.

Then go ahead and clone this repo.  I'll wait.

Ok, next, you'll need to copy the contents of `hammerspoon.lua` into your hammerspoon init file.

Then you'll need to run `npm install` from inside the project folder.

Then finally `npm start`!

Ok so now find a window that is the wrong size, and hit `cmd-shift-r`.  You should see a little box pop up.  Click in a square within that grid, and drag to another part of the grid and release.  Voilà!

You can also (while the grid is up) use `cmd-=` and `cmd-minus` to change the number of columns, and `cmd-shift-=` and `cmd-shift-minus` to change the number of rows.

And that's all folks!

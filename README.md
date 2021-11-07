# search-in-browser README
A Simple Extension for VSCode to search easily using Google、bing or Baidu, There are three ways to use this extension:    

1. **context menu**

![点击右键菜单](./images/rightmenu.gif)

2. **click search-icon**  ⭐️⭐️⭐️⭐️  

![点击搜索图标](./images/click-searchicon.gif)

3. **shortcut key**(`cmd + g g`)  ⭐️⭐️⭐️⭐️⭐️

![快捷键](./shortcutkey.gif)


## Features

- support custom QueryTemplate in settings
- open default browser to search text that selection or user input


## Todo: 

- [] search selection that inner terminal  
- [] input box associate when user input
- [] open browser inner vscode


## Extension Settings

This extension contributes the following settings:

* `search.QueryTemplate`: default QueryTemplate is `https://www.google.com/search?q=%SELECTION%`, you can alse set `https://www.baidu.com/s?wd=%SELECTION%` or `https://cn.bing.com/search?q=%SELECTION%`.


## Keyboard Shortcuts

- Press `Ctrl+g g` (Windows, Linux) or `Cmd+g g` (macOS) to active search

**Enjoy!**

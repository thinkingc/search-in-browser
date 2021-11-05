const vscode = require('vscode')

// Constant strings
const CONFIG_SECTION = "search"
const CONFIG_QUERY = "QueryTemplate"
const CMD_ID = "easy.search"

function activate(context) {
  let disposable = vscode.commands.registerTextEditorCommand(CMD_ID, searchInBrowser)

  context.subscriptions.push(disposable)
}

function deactivate() {
}


// open default browser to search
async function searchInBrowser() {
  let searchText = getSelectedText()

  // 有选中的内容时直接打开默认浏览器搜索选中内容。没有选中内容时弹出输入框，用户输入搜索的内容。
  if (searchText === '') {
    searchText = await vscode.window.showInputBox(
      {
        placeHolder: '请输入搜索内容...', // 在输入框内的提示信息
      })

    // fix: 没有输入的情况下，失焦会打开浏览器搜索 'undefined'
    if(searchText === undefined) return
  }
  searchTextInBrowser(searchText)
}

// search text in browser
function searchTextInBrowser(text) {
  const uriText = encodeURI(text)
  const searchConfig = vscode.workspace.getConfiguration(CONFIG_SECTION)
  const queryTemplate = searchConfig.get(CONFIG_QUERY)
  const query = queryTemplate.replace("%SELECTION%", uriText)

  vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(query))
}

// get user selection text
function getSelectedText() {
  // get all text of active editor 
  const documentText = vscode.window.activeTextEditor.document.getText()
  if (!documentText) return ''

  const activeSelection = vscode.window.activeTextEditor.selection
  if (activeSelection.isEmpty) return ''

  const selStartOffset = vscode.window.activeTextEditor.document.offsetAt(activeSelection.start)
  const selEndOffset = vscode.window.activeTextEditor.document.offsetAt(activeSelection.end)

  let selectedText = documentText.slice(selStartOffset, selEndOffset).trim()
  selectedText = selectedText.replace(/\s\s+/g, ' ')
  return selectedText
}

module.exports = {
  activate,
  deactivate
}

/**
 * onOpen functionは Google Docsを開いた際に自動的に実行される。
 * 詳細は以下
 * 
 * Extending Google Docs developer guide:
 *     https://developers.google.com/apps-script/guides/docs
 *
 * Document service reference documentation:
 *     https://developers.google.com/apps-script/reference/document/
 */
function onOpen() {
  // 「ユーティリティ」メニューを追加する。サブメニューには「Insert Date」
  DocumentApp.getUi().createMenu('ユーティリティ')
      .addItem('Insert Date', 'insertAtCursor')
      .addToUi();
}

/**
 * 現在のカーソルに日付を挿入する
 */
function insertAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {
    // カーソル位置へのテキストの挿入。挿入が null を返した場合は
    // カーソルのある要素がテキストの挿入を許可していないことになる
    var date = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
    var element = cursor.insertText(date);
    if (element) {
      element.setBold(true);
    } else {
      DocumentApp.getUi().alert('このカーソル位置にテキストを挿入できません。');
    }
  } else {
    DocumentApp.getUi().alert('ドキュメント内のカーソルが見つかりません。');
  }
}

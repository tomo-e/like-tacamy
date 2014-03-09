chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {});
  });
});
// Execute the content script when the extension is loaded
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
    });
  });
  
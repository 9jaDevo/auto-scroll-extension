// Get the start and stop buttons
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// Add event listeners to the buttons
startBtn.addEventListener('click', startAutomation);
stopBtn.addEventListener('click', stopAutomation);

let intervalId;

// Function to start automation
function startAutomation() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
  });
}

// Function to stop automation
function stopAutomation() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { code: 'clearInterval(' + intervalId + ');' });
  });
}

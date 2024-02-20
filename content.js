// Define the scrolling function with optional manual control
function autoScrollWithManualControl() {
    // Set the scroll speed (adjust as needed)
    const scrollSpeed = 2; // pixels per frame
  
    // Function to scroll down
    function scroll() {
      window.scrollBy(0, scrollSpeed);
      if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
        intervalId = requestAnimationFrame(scroll);
      }
    }
  
    // Start scrolling
    intervalId = requestAnimationFrame(scroll);
  }
  
  // Check if manual mode is enabled
  chrome.storage.sync.get('manualMode', function(data) {
    if (data.manualMode) {
      // Listen for messages from the extension popup
      chrome.runtime.onMessage.addListener(function(message) {
        if (message.action === 'start') {
          autoScrollWithManualControl();
        } else if (message.action === 'stop') {
          cancelAnimationFrame(intervalId);
        }
      });
    } else {
      // Start scrolling automatically
      autoScrollWithManualControl();
    }
  });
  
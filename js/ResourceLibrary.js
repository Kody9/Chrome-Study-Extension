document.addEventListener('DOMContentLoaded', function() {

document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = '../html/interface.html'; 
});
});

document.querySelectorAll('.bookmark').forEach(item => {
    item.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      this.classList.toggle('bookmarked'); // toggle bookmark state on and off
  
      chrome.storage.local.get({bookmarks: []}, function(result) {
        let bookmarks = result.bookmarks;
        if (bookmarks.includes(url)) {
          // Remove a bookmark
          bookmarks = bookmarks.filter(bookmark => bookmark !== url);
        } else {
          // Add a bookmark
          bookmarks.push(url);
        }
        // Save bookmarks to local
        chrome.storage.local.set({bookmarks: bookmarks});
      });
    });
  });
  
  // Restore bookmarks on load
  document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get({bookmarks: []}, function(result) {
      result.bookmarks.forEach(bookmarkUrl => {
        const bookmarkElement = document.querySelector(`.bookmark[data-url="${bookmarkUrl}"]`);
        if (bookmarkElement) {
          bookmarkElement.classList.add('bookmarked');
        }
      });
    });
  });
  
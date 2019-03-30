var intersectionObserver;

function intersectionCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.click();
    }
  });
};

var intersectionOptions = {
  threshold: 1.0
}

chrome.storage.sync.get(null, function(items) {
  var redirectLink = document.querySelector(".thread-question__open-in-community-console-button");
  if (items.redirect && redirectLink !== null) {
    window.location = redirectLink.href;
  } else {
    var button = document.querySelector(".thread-all-replies__load-more-button");
    if (items.thread && button !== null) {
      intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions);
      intersectionObserver.observe(button);
    }
  }
});

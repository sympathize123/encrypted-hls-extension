chrome.action.onClicked.addListener(function (tab) {
  console.log("trying to attach debugger to tabId: " + tab.id)
  chrome.debugger.attach(
    { tabId: tab.id },
    version,
    onAttach.bind(null, tab.id)
  );
});

var version = "1.0";

function onAttach(tabId) {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message);
    return;
  }
  chrome.windows.create({
    url: "headers.html?" + tabId ,
    type: "popup",
    width: 800,
    height: 600,
  });
}

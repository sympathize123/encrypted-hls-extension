console.log("starting m3u8 downloader");

var tabId = parseInt(window.location.search.substring(1))

function UnicodeDecodeB64(str) {
  let byteCharacters = atob(str);
  console.log(byteCharacters.length);
  let byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  let byteArray = new Uint8Array(byteNumbers)
  return byteArray;
}

function findM3u8Url(jsonObject) {
  jsonObject
}

function onEvent(debuggeeId, message, params) {
  if (tabId != debuggeeId.tabId) {
    console.log(`tabId different tabId:${tabId} debuggeeId:${debuggeeId.tabId}`);
    return;
  }
  if (message == "Network.dataReceived") console.log("Network.dataReceived: " + JSON.stringify(params));
  else if (message == "Network.responseReceived") console.log("Network.responseReceived: " + JSON.stringify(params));
  else if (message == "Network.requestWillBeSent") console.log("Network.requestWillBeSent: " + JSON.stringify(params));
}

function getNetworkData() {
  chrome.debugger.sendCommand({ tabId: tabId }, "Network.enable");
  chrome.debugger.onEvent.addListener(onEvent);
}

window.addEventListener("load", getNetworkData);



/* 


왜 인지는 몰라도 debug html 코드인  headers.html tab id 반환 하는 것처럼 보임


async function getCurrentTabId() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.id;
}


window.addEventListener("load", async function () {
  let tabId = await getCurrentTabId()
  console.log("trying to see if window location is correct: ",window.location.search.substring(1), " ",tabId);
  console.log("window loaded")
  chrome.debugger.sendCommand({ tabId: tabId }, "Network.enable");
  chrome.debugger.onEvent.addListener(onEvent);
}); */






/*

Before using chrome.debugger



chrome.devtools.network.onRequestFinished.addListener(function (request) {
  url = request.request.url;

  if (url.includes(".key")) {
    var index = url.indexOf("main");
    var key_name = url.slice(index);
    request.getContent((body) => {
      console.log(body);
      var type1 = "text/key";
      var blob = new Blob([UnicodeDecodeB64(body)], { type: type1 });
      var url = URL.createObjectURL(blob);
      chrome.downloads.download({
        url: url,
        filename: "keys/video_with_keys/" + key_name,
      });
    });
  }
  if (request.request.url.includes(".ts.enc")) {
    index = request.request.url.indexOf("main");
    key_name = request.request.url.slice(index);
    request.getContent((body) => {
      var type2 = "text/enc";
      var blob = new Blob([UnicodeDecodeB64(body)], { type: type2 });
      var url = URL.createObjectURL(blob);
      chrome.downloads.download({
        url: url, // The object URL can be used as download URL
        filename: "keys/video_with_keys/" + key_name,
        // saveAs: false,
        //...
      });
    });
  }
});*/

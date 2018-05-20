chrome.browserAction.onClicked.addListener(function (tab) {
    var action_url = "https://blockchain.info"
    chrome.tabs.create({url: action_url });
});
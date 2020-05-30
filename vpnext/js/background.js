let selectedServer = {proxyType:"direct"};
browser.storage.local.get(data => {
  if (data.selectedServer) {
    let selectedServer = data.selectedServer;
  }
});

browser.storage.onChanged.addListener(changeData => {
  if (changeData.selectedServer) {
    selectedServer = changeData.selectedServer.newValue;
  }
  //selectedServer = changeData.selectedServer.newValue;
});

    browser.privacy.network.webRTCIPHandlingPolicy.set(
    { value : 'disable_non_proxied_udp' });
    browser.privacy.network.peerConnectionEnabled.set({
  value: false
});

    function handleProxyRequest(requestInfo) {
// Read the web address of the page to be visited 
  
// Determine whether the domain in the web address is on the blocked hosts list
  if (selectedServer.proxyType !== "direct") {
    var ProxyType = selectedServer.proxyType;
    if(ProxyType == 'HTTP')
    {
      ProxyType = 'http';
    }
    if(ProxyType == 'HTTP,HTTPS')
    {
      ProxyType = 'http';
    }
    if(ProxyType == 'SOCKS5')
    {
      ProxyType = 'socks';
    }
    var Proxyip = selectedServer.ip;
    var ProxyPort = selectedServer.port;
// Write details of the proxied host to the console and return the proxy address
    return {type: ProxyType, host: Proxyip, port: ProxyPort};
  }
// Return instructions to open the requested webpage
  return {type: "direct"};
}



browser.proxy.onError.addListener(error => {

  console.log("proxy error:", error.message)});

    browser.proxy.onRequest.addListener(handleProxyRequest,
    {urls: ["<all_urls>"]}
);

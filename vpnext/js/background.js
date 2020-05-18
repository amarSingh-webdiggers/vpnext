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
/*var proxyScriptURL = '';
//const CONNECTING_HTTP_REQUEST = "http://google.com";
const CONNECTION_TIMEOUT = 2000;
function onGot(item) {
  proxyScriptURL = item.selectedServer;
  
}

function onError(error) {
  console.log('error')
}

browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]});

let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

function handleProxyRequest(requestInfo) {
// Read the web address of the page to be visited 
  const url = new URL(requestInfo.url);
// Determine whether the domain in the web address is on the blocked hosts list
  
// Write details of the proxied host to the console and return the proxy address
    console.log(`Proxying: ${url.hostname}`);
  /*  let selectedServer = {
  proxyType: "manual",
  http: ""+proxyScriptURL.type+"://"+proxyScriptURL.host+":"+proxyScriptURL.port+"",
  socksVersion: 4,
};

browser.proxy.settings.set({value: selectedServer});*

    console.log({type: proxyScriptURL.type, host: proxyScriptURL.host, port: proxyScriptURL.port})
    //return {type: proxyScriptURL.type, host: proxyScriptURL.host, port: proxyScriptURL.port};
  
// Return instructions to open the requested webpage
  return {type: "direct"};
}


browser.proxy.onError.addListener(error => {
  console.error('Proxy error:'+error.message+'');
});


/*let messageToProxy = {
  enabled: true,
  foo: "A string",
  bar: 1234
};
browser.runtime.sendMessage(messageToProxy, {toProxyScript: true});*/
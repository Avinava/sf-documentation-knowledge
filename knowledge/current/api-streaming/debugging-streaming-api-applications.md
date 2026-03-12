---
title: "Debugging Streaming API Applications"
domain: api-streaming
topic: debugging-streaming-api-applications
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.164Z
estimatedTokens: 242
keywords: [Debugging, Streaming, API, Applications, able, requests, responses, debug, Because, stateful, proxy, tool, application, report, contents]
---

# Debugging Streaming API Applications

> You must be able to see all of the requests and responses to debug Streaming API
      applications. Because Streaming API applications are stateful, you need to use a proxy tool to
      debug your application. Use a tool that can report the contents of all requests and results,
      such as Burp 

# Debugging Streaming API Applications

You must be able to see all of the requests and responses to debug Streaming API applications. Because Streaming API applications are stateful, you need to use a proxy tool to debug your application. Use a tool that can report the contents of all requests and results, such as [Burp Proxy](http://portswigger.net/burp/proxy.html "HTML (New Window)"), [Fiddler](http://www.fiddler2.com/fiddler2/ "HTML (New Window)"), or [Firebug](http://getfirebug.com/ "HTML (New Window)").

The most common errors include:

-   Browser and JavaScript issues
-   Sending requests out of sequence
-   Malformed requests that don't follow the Bayeux protocol
-   Authorization issues
-   Network or firewall issues with long-lived connections

Using these tools, you can look at the requests, headers, body of the post, as well as the results. If you must contact us for help, be sure to copy and save these elements to assist in troubleshooting.

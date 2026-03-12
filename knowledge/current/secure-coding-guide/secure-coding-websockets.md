---
title: "Secure Coding WebSockets"
domain: secure-coding-guide
topic: secure-coding-websockets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.550Z
estimatedTokens: 694
keywords: [Secure, Coding, WebSockets, WebSocket, full, duplex, communication, protocol, introduced, HTML5, allowing, real-time, data, exchange, web]
---

# Secure Coding WebSockets

> WebSocket is a full duplex communication protocol introduced in HTML5, allowing
                real-time data exchange between the web browsers (or other clients) and the server.
                A WebSocket connection is established after a WebSocket handshake between client and
                the

# Secure Coding WebSockets

## Secure WebSockets

WebSocket is a full duplex communication protocol introduced in HTML5, allowing real-time data exchange between the web browsers (or other clients) and the server. A WebSocket connection is established after a WebSocket handshake between client and the server. The handshake happens over the HTTP protocol.

As with all new technologies, WebSocket presents some interesting security challenges for which we have discussed the countermeasures below.

**Implement Strong Countermeasures against Cross-Site WebSocket Hijacking (CSWSH) Attacks** Per design, WebSocket connections are not restricted by Same Origin Policy. This allows WebSocket connections to establish and exchange data between different origins. The specification does not offer any advice on the authentication mechanism.

Let us assume that your web application uses ambient client credentials like cookies, client SSL certificates or HTTP authentication, to protect its WebSocket communication. In this case, when a cross origin WebSocket connection is established, the browsers automatically sends these credentials along with the request. The server then authenticates the client and returns the requested data, allowing cross domain data retrieval and SOP bypass.

*Specifically* Enforce that the Origin header matches only one of the domains on the allowlist. All modern browsers add the Origin request header to cross origin requests, so this should be easy to implement. Consider implementing custom authentication mechanisms like OAuth, SAML etc… to authenticate WebSockets. Send the values of these headers in custom HTTP request headers for your application. This prevents the browser from automatically appending client credentials to the WebSocket requests. Implementing this countermeasure protects in the scenarios when Origin header validation is difficult to support for any number of reasons.

**Always use WSS** WebSocket defines two new URI schemes, ws and wss. wss:// is secure and ws:// is inherently insecure. The ws:// sends all data over unencrypted channel and must not be used. Web applications must always use wss:// for WebSockets which is a secure protocol and relies on Transport Layer Security to provide security to the communication channel. In addition to that, the code that performs WebSocket connections must be delivered over HTTPS to prevent sslstrip like MiTM attacks.

Example code to create a secure WebSocket:

```

```

**References**

-   [WebSocket](https://en.wikipedia.org/wiki/WebSocket)
-   [Heroku - Websocket Security](https://devcenter.heroku.com/articles/websocket-security)
-   [Cross Site Web Socket Hijacking - Christian Schneider](http://www.christian-schneider.net/CrossSiteWebSocketHijacking.html)

## Code Examples

```
var webSocket = new WebSocket("wss://www.salesforce.com/OAuthProtectedResource")
```

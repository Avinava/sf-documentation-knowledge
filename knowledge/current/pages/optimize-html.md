---
title: "Optimize HTML"
domain: pages
topic: optimize-html
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.881Z
estimatedTokens: 268
keywords: [Optimize, HTML, server, side, Visualforce, validates, optimized, improves, processing, efficiency, client, responsive, user’s, browser]
---

# Optimize HTML

> On the server
    side where Visualforce validates HTML,
    optimized
    HTML improves processing
    efficiency.
    On the client side, optimized HTML makes a Visualforce page more responsive in the user’s
    browser.

# Optimize HTML

On the server side where Visualforce validates HTML, optimized HTML improves processing efficiency. On the client side, optimized HTML makes a Visualforce page more responsive in the user’s browser.

To optimize the HTML in a Visualforce page:

-   Review the HTML that Visualforce components generate. Visualforce pages correct invalid HTML during compilation, which can cause the HTML to render in unintended ways. For example, if you have a <head\> or <body\> tag inside of your <apex:page> tag, the Visualforce page removes it at run time.
-   Review Ajax code. During an Ajax request, to ensure that the response properly fits back into the DOM, the server validates and corrects inbound HTML. Processing time decreases if your Visualforce page contains valid markup and if corrections are unnecessary.
-   Reduce HTML bloat. Although the browser caches HTML and compiled Visualforce tags, retrieving them from the cache impacts performance. Unnecessary HTML also increases the size of the component tree and the processing time for Ajax requests.

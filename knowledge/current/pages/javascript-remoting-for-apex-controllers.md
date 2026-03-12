---
title: "JavaScript Remoting for Apex
            Controllers"
domain: pages
topic: javascript-remoting-for-apex-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.734Z
estimatedTokens: 222
keywords: [JavaScript, Remoting, Apex, Controllers, Visualforce, call, pages, complex, dynamic, behavior, isn’t, possible, standard, AJAX, components]
---

# JavaScript Remoting for Apex
            Controllers

> Use JavaScript remoting in Visualforce to call methods in
            Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t
            possible with the standard Visualforce AJAX
        components.

# JavaScript Remoting for Apex Controllers

Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.

Features implemented using JavaScript remoting require three elements:

-   The remote method invocation you add to the Visualforce page, written in JavaScript.
-   The remote method definition in your Apex controller class. This method definition is written in Apex, but there are some important differences from normal action methods.
-   The response handler callback function you add to or include in your Visualforce page, written in JavaScript.

![JavaScript remoting allows you to make remote requests to Visualforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_js_remoting_graphic.gif&folder=pages)

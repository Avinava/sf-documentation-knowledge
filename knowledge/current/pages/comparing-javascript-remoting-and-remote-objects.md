---
title: "Comparing JavaScript Remoting and Remote Objects"
domain: pages
topic: comparing-javascript-remoting-and-remote-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.743Z
estimatedTokens: 291
keywords: [Comparing, JavaScript, Remoting, Remote, Objects, offer, similar, features, useful, tools, creating, dynamic, responsive, pages, They]
---

# Comparing JavaScript Remoting and Remote Objects

> JavaScript Remoting and Remote Objects offer similar features, and both are useful
    tools for creating dynamic, responsive pages. They have some important differences that you
    should consider before choosing which to use.

# Comparing JavaScript Remoting and Remote Objects

JavaScript Remoting and Remote Objects offer similar features, and both are useful tools for creating dynamic, responsive pages. They have some important differences that you should consider before choosing which to use.

In general, Remote Objects is well-suited to pages that need to perform only simple Create-Read-Update-Delete, or “CRUD”, object access. JavaScript Remoting is better suited to pages that access higher-level server actions. Remote Objects lets you get up and running quickly without a lot of ceremony, while JavaScript Remoting is suited for more complex applications that require some up front API-style design work.

Visualforce Remote Objects:

-   Makes basic “CRUD” object access easy
-   Doesn’t require any Apex code
-   Supports minimal server-side application logic
-   Doesn’t provide automatic relationship traversals; you must look up related objects yourself

JavaScript Remoting:

-   Requires both JavaScript and Apex code
-   Supports complex server-side application logic
-   Handles complex object relationships better
-   Uses network connections (even) more efficiently

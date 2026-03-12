---
title: "Visualforce  Remote Objects"
domain: pages
topic: visualforce-remote-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.060Z
estimatedTokens: 393
keywords: [Visualforce, Remote, Objects, JavaScript, remoting, popular, powerful, efficient, building, Web, apps, especially, creating, pages, Salesforce]
---

# Visualforce  Remote Objects

> JavaScript remoting is a popular, powerful, and efficient method for building Web apps
    with Visualforce, especially for creating pages for use in the Salesforce mobile app or working
    with JavaScript libraries such as jQuery or AngularJS. Visualforce Remote Objects are proxy
    objects that enable basic DML operations on sObjects directly from JavaScript. Remote Objects
    remove some of the complexity from JavaScript remoting by reducing the need for @RemoteAction methods in an Apex controller or extension.

# Visualforce Remote Objects

JavaScript remoting is a popular, powerful, and efficient method for building Web apps with Visualforce, especially for creating pages for use in the Salesforce mobile app or working with JavaScript libraries such as jQuery or AngularJS. Visualforce Remote Objects are proxy objects that enable basic DML operations on sObjects directly from JavaScript. Remote Objects remove some of the complexity from JavaScript remoting by reducing the need for @RemoteAction methods in an Apex controller or extension.

Behind the scenes, the Remote Objects controller handles sharing rules, field level security, and other data accessibility concerns. Pages that use Remote Objects are subject to all the standard Visualforce limits, but like JavaScript remoting, Remote Objects calls don’t count toward API request limits.

Using Visualforce Remote Objects consists of implementing two separate pieces of functionality on the same page.

1.  Access definitions, written in Visualforce with the Remote Objects components. These components generate a set of JavaScript proxy objects that you can use in step 2.
2.  Data access functions, written in JavaScript. These functions use the proxy objects that are made available by the access definitions to perform create, retrieve, update, and delete operations on your data.

Your page then uses the data access functions to respond to user interaction, such as form submissions or controls changes, or to perform periodic actions in response to timers, or most anything that you can write in JavaScript.

---
title: "Which Hybrid Version of  Should I Use? Should I
    Use?"
domain: mobile-sdk
topic: which-hybrid-version-of-should-i-use-should-i-use
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.118Z
estimatedTokens: 531
keywords: [Hybrid, Version, file, mobilesync.js—the, JavaScript, Mobile, Sync—and, native, Sync—available, apps, Cordova, plug-in—share, they, offer, different]
---

# Which Hybrid Version of  Should I Use? Should I
    Use?

> The file mobilesync.js—the JavaScript version of Mobile Sync—and native
        Mobile Sync—available to hybrid apps through a Cordova plug-in—share a name, but they
      offer different advantages.

# Which Hybrid Version of Should I Use? Should I Use?

The file mobilesync.js—the JavaScript version of Mobile Sync—and native Mobile Sync—available to hybrid apps through a Cordova plug-in—share a name, but they offer different advantages.

mobilesync.js is built on backbone.js and gives you easy-to-use model objects to represent single records or collections of records. It also provides convenient fetch, save, and delete methods. However, it doesn't give you true sync down and sync up functionality. Fetching records with an SObjectCollection is similar to the plug-in’s syncDown method, but it deposits all the retrieved objects in memory. For that reason, it's not the best choice for moving large data sets. Furthermore, you’re required to implement the sync up functionality yourself. The AccountEditor sample app demonstrates a typical JavaScript syncUp() implementation.

Native Mobile Sync doesn't return model objects, but it provides robust syncUp and syncDown methods for moving large data sets to and from the server.

You can also use the two libraries together. For example, you can set up a Force.StoreCache with mobilesync.js, sync data into it using the Mobile Sync plug-in, and then call fetch or save using mobilesync.js. You can then sync up from the same cache using the Mobile Sync plug-in, and it all works.

Both libraries provide the means to define your own custom endpoints, so which do you choose? The following guidelines can help you decide:

-   Use custom endpoints from mobilesync.js if you want to talk to the server directly for saving or fetching data with JavaScript.
-   If you talk only to SmartStore and get data into SmartStore using the Mobile Sync plug-in and then you don't need the custom endpoints in mobilesync.js. However, you must define native custom targets.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

mobilesync.js uses promises internally.

Mobile SDK promised-based APIs include:

-   force+promise.js
-   The smartstoreclient Cordova plugin (com.salesforce.plugin.smartstore.client)
-   mobilesync.js

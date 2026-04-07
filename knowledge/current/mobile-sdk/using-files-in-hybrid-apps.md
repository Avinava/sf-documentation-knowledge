---
title: "Using Files in Hybrid Apps"
domain: mobile-sdk
topic: using-files-in-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.546Z
estimatedTokens: 239
keywords: [Files, Hybrid, Apps, file, wrappers, reside, force+files.js, JavaScript, library, functions, pass, callback, function, receives, handles]
---

# Using Files in Hybrid Apps

> Hybrid file request wrappers reside in the force+files.js JavaScript library. When using the hybrid
         functions, you pass in a callback function that receives and handles the server response.
         You also pass in a function to handle errors.

# Using Files in Hybrid Apps

Hybrid file request wrappers reside in the [force+files.js](https://github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/libs/force%2Bfiles.js "HTML (New Window)") JavaScript library. When using the hybrid functions, you pass in a callback function that receives and handles the server response. You also pass in a function to handle errors.

To simplify the code, you can use the mobilesync.js and force.js libraries to build your HTML app. The [FileExplorer](https://github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/fileexplorer "HTML (New Window)") sample app in the [github.com/forcedotcom/SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repo demonstrates this setup.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Mobile SDK does not support file uploads in hybrid apps.

---
title: "Configure via WSProxy"
domain: mc-programmatic-content
topic: configure-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.820Z
estimatedTokens: 163
keywords: [Configure, via, WSProxy, item, several, items, call, configureItem, configureBatch, functions]
---

> To configure a single item or several items of the same type in a single call, use the configureItem and configureBatch functions.

# Configure via WSProxy

To configure a single item or several items of the same type in a single call, use the configureItem and configureBatch functions.

-   For the first parameter, both functions take the object type to configure. For example, EmailContentCheck.
-   The second parameter represents the properties to set on the APIObject being acted upon. For batch operations, the second parameter is passed in as an array of objects instead of a single item.
-   The third parameter is the verb to use when executing the action.
-   The fourth parameter is optional and includes any properties to be set using the SOAP ConfigureOptions object.

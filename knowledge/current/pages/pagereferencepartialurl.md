---
title: "PageReference(partialURL)"
domain: pages
topic: pagereferencepartialurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.662Z
estimatedTokens: 150
keywords: [PageReference, partialURL, Creates, new, instance, URL]
---

# PageReference(partialURL)

> Creates a new instance of the PageReference class using the specified URL.

# PageReference(partialURL)

Creates a new instance of the PageReference class using the specified URL.

## Signature

public PageReference(String partialURL)

## Parameters

partialURL

Type: String

The partial URL of a page hosted on the Lightning Platform or a full external URL. The following are some examples of the partialURL parameter values:

-   /apex/HelloWorld: refers to the Visualforce page located at http://MyDomainName\-PackageName.vf.force.com/apex/HelloWorld.
-   /recordID: refers to the detail page of a specified record.
-   http://www.google.com: refers to an external URL.

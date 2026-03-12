---
title: "Warning Header"
domain: api-asynch
topic: warning-header
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.046Z
estimatedTokens: 113
keywords: [there, warnings, deprecated, version, API]
---

# Warning Header

> This header is returned if there are warnings, such as the use of a deprecated version
  of the API.

# Warning Header

This header is returned if there are warnings, such as the use of a deprecated version of the API.

## Header Field Name and Values

Field name

Warning

Field values

-   warningCode
-   warningMessage

For warnings about deprecated API versions, the warningCode is 299.

Example

Warning: 299 - "This API is deprecated and will be removed by Summer '22. Please see https://help.salesforce.com/articleView?id=000351312 for details."

---
title: "Warning Header"
domain: rest-api
topic: warning-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:35.036Z
estimatedTokens: 78
keywords: [there, warnings, deprecated, version, API]
---

# Warning Header

> This header is returned if there are warnings, such as the use of a deprecated version of the API.

# Warning Header

This header is returned if there are warnings, such as the use of a deprecated version of the API.

## Header Field Name and Values

Field name

Warning

Field Values

*warningCode* *warningMessage*

For warnings about deprecated API versions, the *warningCode* is 299.

## Example

```

```

## Code Examples

```
Warning: 299 - "This API is deprecated and will be removed by Summer '22. Please see https://help.salesforce.com/articleView?id=000351312 for details."
```

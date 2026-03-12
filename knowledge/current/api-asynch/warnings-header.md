---
title: "Warnings Header"
domain: api-asynch
topic: warnings-header
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.352Z
estimatedTokens: 167
keywords: [Warnings, deprecated, version, API]
---

# Warnings Header

> Use the Warning header to return warnings, such as
  the use of a deprecated version of the API.

# Warnings Header

Use the Warning header to return warnings, such as the use of a deprecated version of the API.

## Header Field Name and Values

Field name

Warning

Field values

-   warningCode
-   warningMessage

For warnings about deprecated API versions, the warningCode is 299.

Example

Warning: 299 - "This API is deprecated and will be removed by Summer '22. Please see https://help.salesforce.com/articleView?id=000351312 for details."

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

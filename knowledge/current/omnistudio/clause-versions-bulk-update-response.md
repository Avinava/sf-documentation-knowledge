---
title: "Clause Versions Bulk Update Response"
domain: omnistudio
topic: clause-versions-bulk-update-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.489Z
estimatedTokens: 145
keywords: [Clause, Versions, Bulk, Output, representation, asynchronously, status, version, records]
---

# Clause Versions Bulk Update Response

> Output representation of the details to asynchronously bulk update the status of the
    clause version records.

# Clause Versions Bulk Update Response

Output representation of the details to asynchronously bulk update the status of the clause version records.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Error message when a bulk update operation fails. | Big, 65.0 | 65.0 |
| status | String | Status of the async bulk update operation. Valid values are:Error—Indicates that the request failed.Processing—Indicates that the async job is submitted. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "message": "The bulk update is submitted and queued for processing.",
 "status": "Processing"
}
```

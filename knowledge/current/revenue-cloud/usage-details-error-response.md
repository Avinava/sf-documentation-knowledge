---
title: "Usage Details Error Response"
domain: revenue-cloud
topic: usage-details-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.609Z
estimatedTokens: 136
keywords: [Usage, Details, Error, Response, Output, representation, details, error, related, usage, details.]
---

# Usage Details Error Response

> Output representation of the details of an error related to usage details.

# Usage Details Error Response

Output representation of the details of an error related to usage details.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code associated with the error. | Small, 63.0 | 63.0 |
| message | String | Message associated with the error. | Small, 63.0 | 63.0 |
| referenceId | String | Unique ID that’s associated with the specific error for tracking and reference purposes. | Small, 63.0 | 63.0 |

## Code Examples

```
{
   "errors": [
        {
            "referenceId": "MyOrderItem",
            "errorCode": "INVALID_API_INPUT",
            "message": "Something has failed"
        }
   ]
}
```

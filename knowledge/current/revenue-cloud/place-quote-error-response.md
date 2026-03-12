---
title: "Place Quote Error Response"
domain: revenue-cloud
topic: place-quote-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.549Z
estimatedTokens: 154
keywords: [Place, Quote, Error, Output, representation, responses]
---

# Place Quote Error Response

> Output representation of the error responses of a place quote request.

# Place Quote Error Response

Output representation of the error responses of a place quote request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​Code | String | Error code representing the type of error encountered in the create place quote request. | Small, 60.0 | 60.0 |
| message | String | Message stating the reason for the error, if any. | Small, 60.0 | 60.0 |
| reference​Id | String | Reference ID associated with the specific error instance for tracking and reference purposes. | Small, 60.0 | 60.0 |

## Code Examples

```
{
 "errorCode": "INVALID_API_INPUT",
 "message": "Include record type and method in the request and try again.",
 "referenceId": "refQuoteItem2"
 }
```

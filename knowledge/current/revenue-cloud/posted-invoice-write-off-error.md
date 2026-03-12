---
title: "Posted Invoice Write-Off Error"
domain: revenue-cloud
topic: posted-invoice-write-off-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.659Z
estimatedTokens: 112
keywords: [Posted, Invoice, Write-Off, Error, Output, representation, error, response, that's, associated, request, write, off, posted, invoice.]
---

# Posted Invoice Write-Off Error

> Output representation of the error response that's associated with a request to write off
    a posted invoice.

# Posted Invoice Write-Off Error

Output representation of the error response that's associated with a request to write off a posted invoice.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code that represents the error. | Small, 64.0 | 64.0 |
| error​Message | String | Message that describes the error. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "errors": {
    "errorcode": "INVALID_API_INPUT",
    "errorMessage": "Reason is missing"
  }
}
```

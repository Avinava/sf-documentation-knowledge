---
title: "Send Email Error"
domain: revenue-cloud
topic: send-email-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.935Z
estimatedTokens: 119
keywords: [Send, Email, Error, Output, representation, API, emails, posted, invoices]
---

# Send Email Error

> Output representation of the error response of the API request to send emails for
    posted invoices.

# Send Email Error

Output representation of the error response of the API request to send emails for posted invoices.

JSON example

This example shows a sample response with an error scenario.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Unique code for the error. | Big, 65.0 | 65.0 |
| errorMessage | String | Descriptive message for the error. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "INVALID_API_INPUT",
      "errorMessage": "Specify a valid invoiceBatchRunId."
    }
  ],
  "requestIdentifier": "5IRxx0000004CKKGA2",
  "success": false
}
```

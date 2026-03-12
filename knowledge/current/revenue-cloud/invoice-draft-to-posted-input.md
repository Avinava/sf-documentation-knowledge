---
title: "Invoice Draft To Posted Input"
domain: revenue-cloud
topic: invoice-draft-to-posted-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.954Z
estimatedTokens: 173
keywords: [Invoice, Draft, Posted, Input, representation, that’s]
---

# Invoice Draft To Posted Input

> Input representation of the details of the draft invoice that’s posted.

# Invoice Draft To Posted Input

Input representation of the details of the draft invoice that’s posted.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 62.0 |
| invoiceIds | String[] | IDs of the invoice records in Draft status to be posted. You can post one draft invoice per API request. | Required | 62.0 |

## Code Examples

```
{
  "invoiceIds": ["3ttxx0000004CIjAAM"]
}
```

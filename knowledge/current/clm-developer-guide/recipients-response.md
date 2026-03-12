---
title: "Recipients Response"
domain: clm-developer-guide
topic: recipients-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.548Z
estimatedTokens: 185
keywords: [Recipients, Output, representation, recipient’s, personal, status, contract, document’s, signing, process]
---

# Recipients Response

> Output representation of a recipient’s personal and status information in a contract
    document’s signing process.

# Recipients Response

Output representation of a recipient’s personal and status information in a contract document’s signing process.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| declined​Reason | String | Declined reason for the signature. | Small, 61.0 | 61.0 |
| email | String | Email address of the recipient. | Small, 61.0 | 61.0 |
| final​StatusDate​Time | String | Final date and time of the current status. | Small, 61.0 | 61.0 |
| name | String | Name of the recipient. | Small, 61.0 | 61.0 |
| status | String | Status of the recipient. | Small, 61.0 | 61.0 |
| type | String | Type of the recipient. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "Name": "Rishyv Misrep",
  "email": "rishyv@salesforce.com",
  "status": "Signed",
  "finalStatusDateTime": ""
}
```

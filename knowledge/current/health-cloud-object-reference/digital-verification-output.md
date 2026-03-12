---
title: "Digital Verification Output"
domain: health-cloud-object-reference
topic: digital-verification-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.550Z
estimatedTokens: 142
keywords: [Digital, Verification, Output, Representation, API]
---

# Digital Verification Output

> Output Representation for the digital verification API request.

# Digital Verification Output

Output Representation for the digital verification API request.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Response code of the Digital Verification API. | Small, 60.0 | 60.0 |
| isSuccess | Boolean | Indicates whether the digital verification process was successful (true) or not (false). | Small, 60.0 | 60.0 |
| message | String | Feedback message from the digital verification API request. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "isSuccess": true,
  "message": "Performed all Steps of Digital Verification Successfully",
  "code": 200
}
```

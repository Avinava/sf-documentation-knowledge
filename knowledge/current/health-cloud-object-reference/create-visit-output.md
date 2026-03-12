---
title: "Create Visit Output"
domain: health-cloud-object-reference
topic: create-visit-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.540Z
estimatedTokens: 163
keywords: [Visit, Output, representation]
---

# Create Visit Output

> Output representation of the create visit request.

# Create Visit Output

Output representation of the create visit request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code returned by the create visit request. | Small, 55.0 | 55.0 |
| errorCode | String | Error code with information about the error. | Small, 55.0 | 55.0 |
| errorMessage | String | Message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| status | String | Status of the create visit request. | Small, 55.0 | 55.0 |
| visitId | String | ID of the visit record that is created. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "code": "201",
  "errorCode": "",
  "errorMessage": "",
  "status": "Success",
  "visitId": "<visitId>"
}
```

---
title: "Care Plan Generic
    Output"
domain: psc-api
topic: care-plan-generic-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.043Z
estimatedTokens: 158
keywords: [Care, Plan, Generic, Output, representation, created, record, template]
---

# Care Plan Generic
    Output

> Output representation of the created care plan record or care plan
      template record.

# Care Plan Generic Output

Output representation of the created care plan record or care plan template record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code of the create request. | Small, 55.0 | 55.0 |
| id | String | ID of the record created after the request was successful. | Small, 55.0 | 55.0 |
| isSuccess | Boolean | Indicates whether the create request was successful (true) or not (false). | Small, 55.0 | 55.0 |
| message | String | Message of the request in case of failure. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "code": "200",
  "id": "1stRN000000000aYAA",
  "isSuccess": true
}
```

---
title: "Tax Jurisdiction"
domain: revenue-cloud
topic: tax-jurisdiction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.581Z
estimatedTokens: 181
keywords: [Tax, Jurisdiction, Output, representation, details, tax, jurisdiction, line.]
---

# Tax Jurisdiction

> Output representation of the details of the tax jurisdiction for the tax
    line.

# Tax Jurisdiction

Output representation of the details of the tax jurisdiction for the tax line.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| country | String | Country of the tax jurisdiction. | Big, 62.0 | 62.0 |
| id | String | ID of the tax jurisdiction. | Big, 62.0 | 62.0 |
| level | String | Level of the tax jurisdiction, for example, State and Federal. | Big, 62.0 | 62.0 |
| name | String | Name of the tax jurisdiction authority. | Big, 62.0 | 62.0 |
| region | String | Parent region of the tax jurisdiction. | Big, 62.0 | 62.0 |
| stateAssigned​No | String | Number of the assigned state. | Big, 62.0 | 62.0 |

## Code Examples

```
{
    "country": "US",
    "id": "63000",
    "level": "CIT",
    "name": "SEATTLE",
    "region": "WA",
    "stateAssignedNo": "1726"
}
```

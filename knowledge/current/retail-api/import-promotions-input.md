---
title: "Import Promotions Input"
domain: retail-api
topic: import-promotions-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.914Z
estimatedTokens: 152
keywords: [Import, Promotions, Input, representation, promotion]
---

# Import Promotions Input

> Input representation of the promotion import
        object.

# Import Promotions Input

Input representation of the promotion import object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importId | Integer | Import ID of the process. If not passed, a new import transaction will be created. | Optional | 55 |
| workflow | Integer | Name of the promotion business object API workflow to be executed. | Required | 55 |
| salesOrg | SalesOrgName | Name of the sales organization. | Optional | 55 |
| promotions | List<Object> | List of promotion payloads. | Required | 55 |

## Code Examples

```
POST promotions/ingest
 
{
    "workflow" : "Create",
    "importId" : "12345678-1234-1234-1234-123456789012",
    "salesOrg" : "0001",
    "promotions" : [{
        // Promotion Input JSON
    }]
}
```

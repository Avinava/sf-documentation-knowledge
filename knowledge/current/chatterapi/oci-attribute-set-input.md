---
title: "OCI Attribute Set Input"
domain: chatterapi
topic: oci-attribute-set-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.218Z
estimatedTokens: 92
keywords: [OCI, Attribute, Input, eligibility]
---

# OCI Attribute Set Input

> An eligibility attribute set.

# OCI Attribute Set Input

An eligibility attribute set.

Root XML tag

<attributeSet>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupEligibility​Exclusions | String[] | List of group IDs that are excluded from aggregating the location and SKU. | Optional | 62.0 |

## Code Examples

```
{
  "records": [
    {
      "externalRefId": "7282822-9823-aaa",
      "futureStock": [
        {
          "expectedDate": "2019-08-24T21:13:00Z",
          "quantity": 10.25
        }
      ],
      "attributeSet": {
        "groupEligibilityExclusion": [
          "GroupA",
          "GroupB"
        ]
      },
      "locationIdentifier": "warehouse5",
      "onHand": 1200.35,
      "safetyStockCount": 12.45,
      "stockKeepingUnit": "sku123",
      "actionRequestId": "82251928-8863-488e-840b-2aebd10b57ba",
      "effectiveDate": "2019-07-24T21:13:00Z"
    }
  ]
}
```

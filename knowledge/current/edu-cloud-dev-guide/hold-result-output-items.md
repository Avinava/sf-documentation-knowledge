---
title: "Hold Result Output Items"
domain: edu-cloud-dev-guide
topic: hold-result-output-items
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.059Z
estimatedTokens: 207
keywords: [Hold, Result, Output, Items, representation, individual]
---

# Hold Result Output Items

> Output representation of the information related to individual hold result
    items.

# Hold Result Output Items

Output representation of the information related to individual hold result items.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associated​Rules | Associated Rule[] | List of rules linked to the hold decision. | Big, 64.0 | 64.0 |
| description | String | Description or title of the hold item. | Big, 64.0 | 64.0 |
| isExecuted | Boolean | Indicates whether the hold result has been executed (true) or not (false). | Big, 64.0 | 64.0 |
| isRule​Based | Boolean | Indicates whether the hold result is driven by rules (true) or not (false). | Big, 64.0 | 64.0 |
| itemId | String | Unique ID of the hold item. | Big, 64.0 | 64.0 |
| name | String | Name or title of the hold item. | Big, 64.0 | 64.0 |

## Code Examples

```
[
  {
    "name": "Enrollment",
    "id": "0x7fsss66",
    "isRuleDriven": true,
    "isExecuted": true
  },
  {
    "name": "FeePayment",
    "id": "0x7fsss67",
    "isRuleDriven": false,
    "isExecuted": false
  }
]
```

## Related Topics

- Associated Rule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_associated_rul.htm)

---
title: "Asset Action Input"
domain: chatterapi
topic: asset-action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.130Z
estimatedTokens: 296
keywords: [Asset, Action, Input, consumed, Customer, Lifecycle, Management, change, made, lifecycle-managed, specifically, difference, quantity, amount, monthly]
---

# Asset Action Input

> Asset action input consumed by Customer Asset Lifecycle Management. The asset action
    object represents a change made to a lifecycle-managed asset during its lifecycle, specifically,
    the difference in quantity, amount, and monthly recurring revenue.

# Asset Action Input

Asset action input consumed by Customer Asset Lifecycle Management. The asset action object represents a change made to a lifecycle-managed asset during its lifecycle, specifically, the difference in quantity, amount, and monthly recurring revenue.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionDate | String | Date when the change occurred. This value can be different from the start date of the asset state period related to this asset action. For example, suppose that on 01/01 a user cancels a subscription as of 06/01. Create an asset action with an action date of 01/01, and set the start date of the related asset state period to 06/01. | Required | 50.0 |
| amount | Double | The change in amount resulting from the asset action. | Required | 50.0 |
| category | String | Asset action category for reporting. | Required | 50.0 |
| mrrChange | Double | The change in monthly recurring revenue resulting from the asset action. | Required | 50.0 |
| quantityChange | Double | The change in quantity resulting from the asset action. | Required | 50.0 |

## Code Examples

```
"assetAction": {
    "category": "Initial Sale",
    "actionDate": "2019-09-05T16:00:00+08:00",
    "quantityChange": 20,
    "mrrChange": 200,
    "amount": 1800
  }
```

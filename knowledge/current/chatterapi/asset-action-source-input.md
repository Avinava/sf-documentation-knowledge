---
title: "Asset Action Source Input"
domain: chatterapi
topic: asset-action-source-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.136Z
estimatedTokens: 353
keywords: [Asset, Action, Source, Input, consumed, Customer, Lifecycle, Management, child, tracking, Salesforce, order, product, work, line]
---

# Asset Action Source Input

> Asset action source input consumed by Customer Asset Lifecycle Management. The asset
    action source is an optional asset action child object for tracking a Salesforce order product,
    a work order line item, or an external reference to a change. You can provide multiple asset
    action sources for a single asset action.

# Asset Action Source Input

Asset action source input consumed by Customer Asset Lifecycle Management. The asset action source is an optional asset action child object for tracking a Salesforce order product, a work order line item, or an external reference to a change. You can provide multiple asset action sources for a single asset action.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actualTax | Double | Actual tax. | Optional | 50.0 |
| adjustmentAmount | Double | Adjustment amount. | Optional | 50.0 |
| endDate | String | End date. | Optional | 50.0 |
| estimatedTax | Double | Estimated tax. | Optional | 50.0 |
| externalReference | String | ID of an external object that caused the asset action. | Optional | 50.0 |
| externalReference​DataSource | String | Data source for an external object that caused the asset action. | Optional | 50.0 |
| productAmount | Double | Product amount. | Optional | 50.0 |
| quantity | Double | Quantity. | Optional | 50.0 |
| referenceEntity​Item | String | ID of the Salesforce object that caused the asset action. Supported Salesforce objects: Order Product and Work Order Line Item. | Optional | 50.0 |
| startDate | String | Start date. | Optional | 50.0 |
| transactionDate | String | Date of the transaction related to the asset action. | Optional | 50.0 |

## Code Examples

```
"assetActionSource": {
      "transactionDate": "2020-10-01T14:00:00+08:00",
      "startDate": "2020-10-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": 5,
      "productAmount": 150,
      "referenceEntityItem": "1WLB00000003geJOAQ"
    }
```

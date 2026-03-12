---
title: "OCI Batch Update Single Input"
domain: chatterapi
topic: oci-batch-update-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.226Z
estimatedTokens: 311
keywords: [OCI, Batch, Input, inventory, record]
---

# OCI Batch Update Single Input

> Details of one inventory record to update in a batch update.

# OCI Batch Update Single Input

Details of one inventory record to update in a batch update.

Root XML tag

<ociBatchUpdateSingleInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeSet | OCI Attribute Set Input | Inventory record attribute set. | Optional | 62.0 |
| effectiveDate | String | Effective date of the update. | Optional | 62.0 |
| externalRefId | String | Unique code, reference, or identifier for the record used by external systems. | Optional | 62.0 |
| futureStock | OCI Future Stock Single Input[] | Inventory that is expected soon. Included in Available To Order. | Optional | 62.0 |
| actionRequestId | String | Idempotent ID that identifies this request. | Required | 62.0 |
| locationIdentifier | String | Identifier of the location where the inventory is reserved. | Required | 62.0 |
| onHand | Double | Physical inventory available, not including Future Quantity. | Optional | 62.0 |
| safetyStockCount | Double | Inventory held in reserve that isn’t included in Available To Order and Available To Fulfill. | Optional | 62.0 |
| stockKeepingUnit | String | SKU of the product to update. | Required | 62.0 |

## Code Examples

```
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
```

## Related Topics

- OCI Attribute Set Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_attribute_set_input.htm)
- OCI Future Stock Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_future_stock_single_input.htm)

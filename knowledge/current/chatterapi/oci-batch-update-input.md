---
title: "OCI Batch Update Input"
domain: chatterapi
topic: oci-batch-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.241Z
estimatedTokens: 96
keywords: [OCI, Batch, inventory, records]
---

> Details of one or more inventory records to update in a batch.

# OCI Batch Update Input

Details of one or more inventory records to update in a batch.

Root XML tag

<ociBatchUpdateInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| records | OCI Batch Update Single Input[] | Data for one inventory record in a list to update. | Required | 62.0 |

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

## Related Topics

- OCI Batch Update Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_batch_update_single_input.htm)

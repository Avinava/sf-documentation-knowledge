---
title: "Availability Records, Batch Update"
domain: chatterapi
topic: availability-records-batch-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.009Z
estimatedTokens: 278
keywords: [Availability, Records, Batch, inventory, Omnichannel, Add, new, record, hand, future, quantity, date, safety, stock, count]
---

# Availability Records, Batch Update

> Update a batch of inventory records to Omnichannel Inventory. Add
      a new inventory record or update on hand, future quantity, future date, safety stock count,
      and shipping eligibility to an existing inventory record.

# Availability Records, Batch Update

Update a batch of inventory records to Omnichannel Inventory. Add a new inventory record or update on hand, future quantity, future date, safety stock count, and shipping eligibility to an existing inventory record.

Supports partial success. For example, when 10 items are sent and two fail, the failed items show in the error section.

Resource

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

[OCI Batch Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_batch_update_input.htm "Details of one or more inventory records to update in a batch.")

Root XML tag

<ociBatchUpdateInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| records | OCI Batch Update Single Input[] | Data for one inventory record in a list to update. | Required | 62.0 |

Response body for POST

[OCI Batch Update](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_batch_update_output.htm "Details of the updated inventory records.")

## Code Examples

```
/commerce/oci/availability-records/actions/batch-update
```

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

- OCI Batch Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_batch_update_input.htm)
- OCI Batch Update Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_batch_update_single_input.htm)
- OCI Batch Update (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_batch_update_output.htm)

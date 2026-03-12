---
title: "Object with Reference Input"
domain: revenue-cloud
topic: object-with-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.204Z
estimatedTokens: 207
keywords: [Reference, Input, representation, list, records, inserted, updated., update, record, specify, ID.]
---

# Object with Reference Input

> Input representation of a list of records to be inserted or updated. To update a
    record, specify the record ID.

# Object with Reference Input

Input representation of a list of records to be inserted or updated. To update a record, specify the record ID.

This is a sample request to create a sales transaction for an order line item.

JSON example

```

```

This is a sample request to update an order line item.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceId | String | Reference ID that maps to the response and can be used as a reference in later subrecords. This property value starts with a letter or number only and can contain letters, numbers, and underscores. It's also case-sensitive when used for referencing. | Required | 60.0 |
| records | Object Input Map | Details of a record to be ingested. | Required | 60.0 |

## Code Examples

```
{
  "referenceId": "refOrderItem0",
  "record": {
    "attributes": {
      "type": "OrderItem",
      "method": "POST"
    },
    "OrderId": "@{refOrder.id}",
    "OrderActionId": "@{refOrderAction.id}",
    "PricebookEntryId": "01uRM000000igZG",
    "Quantity": 2
  }
}
```

```
{
  "referenceId": "refOrderItem0",
  "record": {
    "attributes": {
      "type": "OrderItem",
      "method": "PATCH",
      "id": "402xx000003KY5vJGH"
    },
    "OrderId": "@{refOrder.id}",
    "OrderActionId": "@{refOrderAction.id}",
    "PricebookEntryId": "01uRM000000igZG",
    "Quantity": 2,
    "UnitPrice": 800
  }
}
```

## Related Topics

- Object
                        Input Map (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_object_input_representation_map.htm)

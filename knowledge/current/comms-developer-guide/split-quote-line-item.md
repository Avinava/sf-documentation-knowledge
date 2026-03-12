---
title: "Split Quote Line Item"
domain: comms-developer-guide
topic: split-quote-line-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.098Z
estimatedTokens: 210
keywords: [Split, Quote, Line, Item, Enable, splitting, associated, recipient, group, multiple, items—one]
---

# Split Quote Line Item

> Enable the splitting of a quote line item associated with a
      recipient group into multiple quote line items—one for each recipient within the
    group.

# Split Quote Line Item

Enable the splitting of a quote line item associated with a recipient group into multiple quote line items—one for each recipient within the group.

Resource

```

```

Example URI

```

```

Available version

64.0

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalParameters | Map<String, String> | Field to accept any additional parameters | Optional | 64.0 |

Response body for PATCH

[Splitting Group Output](atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_responses_splitting_group_output.htm "Output representation of synchronous operation that’s executed to add or remove recipients to a recipient group.")

## Code Examples

```
/connect/comms-sales/quote-line-item/{quoteLineItemId}
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/media/applications
```

```
{
  "additionalParameters": {
       "key1": "value1"
  }
}
```

## Related Topics

- Splitting Group Output (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_responses_splitting_group_output.htm)

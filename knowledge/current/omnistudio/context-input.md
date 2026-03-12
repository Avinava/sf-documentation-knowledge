---
title: "Context Input"
domain: omnistudio
topic: context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.169Z
estimatedTokens: 96
keywords: [Context, Input, representation, defining, context.]
---

# Context Input

> Input representation for defining a context.

# Context Input

Input representation for defining a context.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data | String | Payload containing context-specific information. | Required | 59.0 |
| metadata | Context MetaData Input | Metadata information about context. | Required | 59.0 |

## Code Examples

```
{
  "metadata": {
    "contextDefinitionId": "11Oxx0000006VjNEAU",
    "mappingId": "11jxx0000004Q83AAE"
  },
  "data": "{"Order":[{"id":"TestOrder123","businessObjectType":"Order","Name":"Test Order","Status":"SHIPPED","AccountName":"Kroger","OrderItems":[{"id":"TestOrderItem1","businessObjectType":"OrderItem","ProductName":"Coke"},{"id":"TestOrderItem2","businessObjectType":"OrderItem","ProductName":"Pepsi"}]}]}"
}
```

## Related Topics

- Context
                        MetaData Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_meta_data_input.htm)

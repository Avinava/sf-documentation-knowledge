---
title: "Object Graph Input"
domain: revenue-cloud
topic: object-graph-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.079Z
estimatedTokens: 95
keywords: [Graph, Input, representation, sObject]
---

# Object Graph Input

> Input representation of an sObject  with a graph ID.

# Object Graph Input

Input representation of an sObject with a graph ID.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| graphId | String | The ID of the graph. | Required | 60.0 |
| records | Object with Reference Input[] | List of the records to be ingested. | Required | 60.0 |

## Code Examples

```
{
  "graph": {
    "graphId": "1",
    "records": [
      {
        "referenceId": "refOrder",
        "record": {
          "attributes": {
            "type": "Order",
            "method": "POST"
          }
        }
      }
    ]
  }
}
```

## Related Topics

- Object with
                        Reference Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_object_with_reference_input.htm)

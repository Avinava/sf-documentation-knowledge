---
title: "Object Graph Input"
domain: comms-developer-guide
topic: object-graph-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:39.108Z
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
| graphId | String | The ID of the graph. | Required | 66.0 |
| records | Object with Reference Input[] | List of the records to be ingested. | Required | 66.0 |

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
                        Reference Input (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_requests_object_with_reference_input.htm)

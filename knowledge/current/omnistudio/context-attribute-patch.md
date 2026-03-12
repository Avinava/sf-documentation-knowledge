---
title: "Context Attribute (PATCH)"
domain: omnistudio
topic: context-attribute-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.336Z
estimatedTokens: 263
keywords: [Context, Attribute, PATCH, attributes, record]
---

# Context Attribute (PATCH)

> Update attributes of a context record.

# Context Attribute (PATCH)

Update attributes of a context record.

Resource

```

```

Example for PATCH

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updateContextAttributesInput | Object | Input object for updating context attributes. | Required | 59.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

When a context definition is mapped to Account and a field is mapped to Account.RecordType.Name, updating the RecordType's ID does not update the mapped field. This is because updating the RecordType ID does not cause updates to other fields of the RecordType record.

Response body for PATCH

[Context Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm "Output Representation of attributes associated with defined context.")

## Code Examples

```
/connect/contexts/attributes
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/attributes
```

```
{
    "contextId": "3729ed60-d16d-41b8-8951-9ad4f6407ad2",
    "nodePathAndAttributes": [
        {
            "nodePath": {
                "dataPath": [
                    "TestOrder123"
                ]
            },
            "attributes": [
                {
                    "attributeName": "Status",
                    "attributeValue": "DISPATCHED"
                }
            ]
        }
    ]
}
```

## Related Topics

- Context
            Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm)

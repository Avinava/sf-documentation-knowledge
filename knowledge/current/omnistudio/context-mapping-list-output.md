---
title: "Context Mapping List Output"
domain: omnistudio
topic: context-mapping-list-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.613Z
estimatedTokens: 135
keywords: [Context, Mapping, Output, representation, mappings]
---

# Context Mapping List Output

> Output representation
    of
    a
    list of context mappings.

# Context Mapping List Output

Output representation of a list of context mappings.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextMappingListId | String | Unique ID of the context mapping list. | Small, 59.0 | 59.0 |
| contextMappings | Context Mapping Output[] | List of context mappings. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "contextMappingListId": "915c3ffc-65e6-47fd-b9c1-3fdfa92421c1",
  "contextMappings": [
    {
      "contextDefinitionVersionId": "11pxx0000004UcCAAU",
      "contextMappingId": "11jxx0000004LYBAA2",
      "contextNodeMappings": [],
      "description": "mappingDescription",
      "intents": [
        "ASSOCIATION",
        "HYDRATION",
        "PERSISTENCE",
        "TRANSLATION"
      ],
      "isDefault": false,
      "isInputMapped": false,
      "name": "mappingName"
    }
  ],
  "isSuccess": true
}
```

## Related Topics

- Context Mapping
                  Output[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_mapping.htm)

---
title: "Context Definition Interface Attribute Tag"
domain: omnistudio
topic: context-definition-interface-attribute-tag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.800Z
estimatedTokens: 282
keywords: [Context, Definition, Attribute, Tag, Output, representation, attribute, tags, associated, context, definition, interface.]
---

# Context Definition Interface Attribute Tag

> Output representation of the attribute tags associated with the context definition
    interface.

# Context Definition Interface Attribute Tag

Output representation of the attribute tags associated with the context definition interface.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | Data type of the attribute associated with the context definition interface. | Small, 62.0 | 62.0 |
| domainName | String | Domain name of the attribute associated with the context definition interface. | Small, 62.0 | 62.0 |
| isMappingRequired | Boolean | Indicates whether the attribute tag must be mapped in the context definition (true) or not (false). | Small, 62.0 | 62.0 |
| isNodeTag | Boolean | Indicates whether the attribute tag is a node tag (true) or not (false). | Small, 62.0 | 62.0 |
| isOptional | Boolean | Indicates whether validation must be done for the attribute tag (true) or not (false). | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 62.0 | 62.0 |
| tagName | String | Name of the attribute tag. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "attributeTags": [
    {
      "dataType": "REFERENCE",
      "isMappingRequired": false,
      "isNodeTag": false,
      "domainName": "Account",
      "tagName": "AccountRef_attr_tag"
    }
  ]
}
```

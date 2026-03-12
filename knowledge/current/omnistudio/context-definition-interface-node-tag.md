---
title: "Context Definition Interface Node Tag"
domain: omnistudio
topic: context-definition-interface-node-tag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.586Z
estimatedTokens: 265
keywords: [Context, Definition, Node, Tag, Output, representation, tags, associated]
---

# Context Definition Interface Node Tag

> Output representation of the tags associated with the context definition
    interface.

# Context Definition Interface Node Tag

Output representation of the tags associated with the context definition interface.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeTags | Context Definition Interface Attribute Tag[] | List of attribute tags associated with the context definition interface. | Small, 62.0 | 62.0 |
| childNodeTags | Context Definition Interface Node Tag[] | List of child node tags associated with the context definition interface. | Small, 62.0 | 62.0 |
| isMappingRequired | Boolean | Indicates whether the context tags must be mapped in the context definition (true) or not (false). | Small, 62.0 | 62.0 |
| isNodeTag | Boolean | Indicates whether the context tag is a node tag (true) or not (false). | Small, 62.0 | 62.0 |
| isOptional | Boolean | Indicates whether validation must be done for the context tag (true) or not (false). | Small, 62.0 | 62.0 |
| tagName | String | Name of the context tag. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "contextDefinitionInterfaceNodeTagList": [
    {
      "attributeTags": [
        {
          "dataType": "STRING",
          "isMappingRequired": true,
          "isNodeTag": false,
          "tagName": "id_attr_tag"
        }
      ],
      "childNodeTags": [
        {
          "attributeTags": [
            {
              "dataType": "STRING",
              "isMappingRequired": false,
              "isNodeTag": false,
              "tagName": "contactId_attr_tag"
            },
            {
              "dataType": "STRING",
              "isMappingRequired": true,
              "isNodeTag": false,
              "tagName": "contactName_attr_tag"
            }
          ],
          "childNodeTags": [],
          "isMappingRequired": false,
          "isNodeTag": true,
          "tagName": "Contact_node_tag"
        }
      ],
      "isMappingRequired": true,
      "isNodeTag": true,
      "tagName": "Account_node_tag"
    }
  ]
}
```

## Related Topics

- Context Definition Interface Attribute Tag (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_interface_attribute_tag.htm)

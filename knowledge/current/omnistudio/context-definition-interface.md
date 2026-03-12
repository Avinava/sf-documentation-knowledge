---
title: "Context Definition Interface"
domain: omnistudio
topic: context-definition-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.570Z
estimatedTokens: 177
keywords: [Context, Definition, Output, representation]
---

# Context Definition Interface

> Output representation of the details of the context definition interface.

# Context Definition Interface

Output representation of the details of the context definition interface.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinition​InterfaceMetadata | Context Definition Interface Metadata | Metadata details associated with the context definition interface. | Small, 62.0 | 62.0 |
| contextDefinition​Interface​NodeTagList | Context Definition Interface Node Tag[] | List of tags associated with the context definition interface. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "contextDefinitionInterfaceMetadata": {
    "createdBy": "Automated Process",
    "createdDate": "2024-05-15T00:00:00.000Z",
    "description": "Test Interface",
    "developerName": "TestBaseInterface",
    "interfaceName": "TestBaseInterface",
    "lastModifiedBy": "Automated Process",
    "parentInterfaces": [
      "TestBaseInterface1"
    ],
    "version": "62.1"
  },
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
  ],
  "isSuccess": true
}
```

## Related Topics

- Context Definition Interface Metadata (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_interface_metadata.htm)
- Context Definition Interface Node Tag (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_interface_node_tag.htm)

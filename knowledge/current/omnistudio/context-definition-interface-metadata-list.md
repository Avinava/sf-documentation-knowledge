---
title: "Context Definition Interface Metadata List"
domain: omnistudio
topic: context-definition-interface-metadata-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.582Z
estimatedTokens: 195
keywords: [Context, Definition, Metadata, Output, representation, associated, interfaces]
---

# Context Definition Interface Metadata List

> Output representation of the metadata list associated with the context definition
    interfaces.

# Context Definition Interface Metadata List

Output representation of the metadata list associated with the context definition interfaces.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinition​Interface​MetadataList | Context Definition Interface Metadata[] | List of metadata associated with the context definition interfaces. | Small, 62.0 | 62.0 |
| contextDefinition​Interface​MetadataListId | String | Unique ID of the metadata list associated with the context definition interfaces. Required for Lightning Data Service (LDS). | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "contextDefinitionInterfaceMetadataList": [
    {
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
    }
  ],
  "contextDefinitionInterfaceMetadataListId": "43db7f18-9dd7-40a2-9a34-a2b3a1cff9e5",
  "isSuccess": true
}
```

## Related Topics

- Context Definition Interface Metadata (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_interface_metadata.htm)

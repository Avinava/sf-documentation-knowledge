---
title: "Context Definition Version"
domain: omnistudio
topic: context-definition-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.838Z
estimatedTokens: 294
keywords: [Context, Definition, Version, Output, representation, context, definition, version.]
---

# Context Definition Version

> Output representation of context definition version.

# Context Definition Version

Output representation of context definition version.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionId | String | ID of context definition. | Small, 59.0 | 59.0 |
| contextDefinitionVersionId | String | ID of context definition version. | Small, 59.0 | 59.0 |
| contextMappings | Context Mapping[] | List of context mappings. | Small, 59.0 | 59.0 |
| contextNodes | Context Node[] | List of context nodes. | Small, 59.0 | 59.0 |
| endDate | String | End date till context definition version is valid. | Small, 59.0 | 59.0 |
| isActive | Boolean | Specifies if the context definition version is active (true) or not (false). | Small, 59.0 | 59.0 |
| isEditable | Boolean | Specifies if the context definition version is editable (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Specifies if the operation is success (true) or not (false). | Small, 59.0 | 59.0 |
| startDate | String | Start date from when context definition version is valid. | Small, 59.0 | 59.0 |
| versionNumber | Integer | Version number. | Small, 59.0 | 59.0 |

## Related Topics

- Context Mapping[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_mapping.htm)
- Context Node[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node.htm)

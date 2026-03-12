---
title: "Context Definition Output"
domain: omnistudio
topic: context-definition-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.548Z
estimatedTokens: 448
keywords: [Context, Definition, Output, representation, definitions, expression]
---

# Context Definition Output

> Output representation of context definition.

# Context Definition Output

Output representation of context definition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activeVersionId | String | ID of the active context definition version. | Small, 59.0 | 59.0 |
| canBeReferenceDefinition | Boolean | Specifies if the context definition can be used as a reference definition to other context definitions (true) or not (false). | Small, 63.0 | 63.0 |
| contextDefinitionId | String | ID of the context definition. | Small, 59.0 | 59.0 |
| contextDefinitionVersionList | Context Definition Version[] | List of context definition versions. | Small, 59.0 | 59.0 |
| contextTtl | Integer | TTL of the context. | Small, 59.0 | 59.0 |
| definition | String | Definition. | Small, 59.0 | 59.0 |
| definitionType | String | Type of definition. Possible values are:standard_executablestandard_nonexecutablecustom_nonexecutable | Small, 60.0 | 60.0 |
| developerName | String | Developer name. | Small, 59.0 | 59.0 |
| hasSystemTags | String | Specifies if the context definition has system node and tags attached (true) or not (false). | Small, 63.0 | 63.0 |
| interfaces | String | List of implemented Context Definition Interfaces for this context definition. | Small, 62.0 | 62.0 |
| isActive | Boolean | Specifies if the context definition is active (true) or not (false). | Small, 59.0 | 59.0 |
| isEditable | Boolean | Specifies if the context definition is editable (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Specifies if the operation is success (true) or not (false). | Small, 59.0 | 59.0 |
| referenceContextDefinitions | ContextDefinitionReference[] | List of reference defintions this definition is referencing . | Small, 63.0 | 63.0 |

## Related Topics

- Context
                  Definition Version (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_version.htm)
- ContextDefinitionReference[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_reference.htm)

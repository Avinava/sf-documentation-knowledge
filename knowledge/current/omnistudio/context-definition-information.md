---
title: "Context Definition Information"
domain: omnistudio
topic: context-definition-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.567Z
estimatedTokens: 393
keywords: [Context, Definition, Output, representation]
---

# Context Definition Information

> Output representation of context definition information.

# Context Definition Information

Output representation of context definition information.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activeVersionId | String | Active context definition version ID. | Small, 59.0 | 59.0 |
| contextDefinitionId | String | ID of the context definition. | Small, 59.0 | 59.0 |
| contextTtl | Integer | TTL of the context. | Small, 59.0 | 59.0 |
| createdBy | String | User who created the context definition. | Small, 59.0 | 59.0 |
| createdDate | String | Date on which the context definition was created. | Small, 59.0 | 59.0 |
| definition | String | Name of the context definition. | Small, 59.0 | 59.0 |
| description | String | Short description of context definition. | Small, 59.0 | 59.0 |
| developerName | String | Developer name associated with the definition. | Small, 59.0 | 59.0 |
| isActive | Boolean | Specifies if the context definition list is active (true) or not (false). | Small, 59.0 | 59.0 |
| isEditable | Boolean | Specifies if the context definition list is editable (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Specifies if the operation is success (true) or not (false). | Small, 59.0 | 59.0 |
| lastModifiedBy | String | User who last modified the definition. | Small, 59.0 | 59.0 |
| lastModifiedDate | String | Date on which the definition was modified last. | Small, 59.0 | 59.0 |
| startDate | String | Start date from when context definition is valid. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "activeVersionId": "11pxx0000004cLEAAY",
  "contextDefinitionId": "11Oxx0000006XWfEAM",
  "contextTtl": 30,
  "createdBy": "Admin User",
  "createdDate": "2024-10-17T14:34:26.000Z",
  "definition": "ExampleDefinition",
  "description": "Example Description",
  "developerName": "ExampleDevelopername",
  "isActive": false,
  "isEditable": true,
  "isSuccess": true,
  "lastModifiedBy": "Admin User",
  "lastModifiedDate": "2024-10-17T14:34:26.000Z",
  "startDate": "2024-10-17T14:34:26.000Z"
}
```

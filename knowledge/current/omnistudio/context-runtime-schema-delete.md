---
title: "Context Runtime Schema (DELETE)"
domain: omnistudio
topic: context-runtime-schema-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.921Z
estimatedTokens: 195
keywords: [Context, Runtime, Schema, Clear, cache, definitions, their, associated, mappings]
---

# Context Runtime Schema (DELETE)

> Clear runtime schema cache for context definitions and their associated mappings.

# Context Runtime Schema (DELETE)

Clear runtime schema cache for context definitions and their associated mappings.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

DELETE

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionDevlName | String | Developer name of the context definition whose runtime schema is to be cleared. | Required | 65.0 |
| contextMappingNames | String[] | Comma-separated list of mapping names to clear. If not provided, the default mapping for the definition is cleared. | Optional | 65.0 |

Response body for DELETE

This resource uses query parameters only and returns HTTP 204 No Content on success.

## Code Examples

```
/connect/context-runtime-schema/clear
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/context-runtime-schema/clear?contextDefinitionDevlName=CustomerProfile&contextMappingNames=StandardMapping,CustomMapping
```

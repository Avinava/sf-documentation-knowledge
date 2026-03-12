---
title: "Context Definition Id (GET, PATCH, DELETE)"
domain: omnistudio
topic: context-definition-id-get-patch-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.979Z
estimatedTokens: 191
keywords: [Context, Definition, GET, PATCH, DELETE, Query, update, delete, context, definition, ID.]
---

# Context Definition Id (GET, PATCH, DELETE)

> Query, update, and delete a context definition using an ID.

# Context Definition Id (GET, PATCH, DELETE)

Query, update, and delete a context definition using an ID.

Resource

```

```

Example for GET

```

```

Example for PATCH

```

```

Example for DELETE

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

GET, PATCH, DELETE

Response body for GET

[Context Definition Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition.htm "Output representation of context definition.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Definition Information](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_info.htm "Output representation of context definition information.")

## Code Examples

```
/connect/context-definitions/${contextDefinitionId}
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-definitions/${contextDefinitionId}
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-definitions/${contextDefinitionId}
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-definitions/${contextDefinitionId}
```

```
{
"definition": "Example Defintion patch",
"description": "Example Description patch"
}
```

## Related Topics

- Context Definition Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition.htm)
- Context Definition Information (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_info.htm)

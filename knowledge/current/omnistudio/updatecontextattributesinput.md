---
title: "updateContextAttributes(input)"
domain: omnistudio
topic: updatecontextattributesinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.652Z
keywords: [updateContextAttributes, input, Updates, attributes, context., Signature, Usage, Example, Parameters, Return, Value]
---

# updateContextAttributes(input)

> Updates the attributes of a context.

### updateContextAttributes(input)

Updates the attributes of a context.

#### Signature

public Map<String,Object> updateContextAttributes(Map<String,Object> input)

```

```

#### Usage

Use this method to update the attributes of a context.

-   This method works only with the names of the canonical structure, and not with tags.
-   The dataType of the values must match the dataType in the canonical structure. Also, it must match the dataType of the field if persistence is expected later.
-   The method supports attribute updates at different level. Pass an attributeMap corresponding to the given dataPath.
-   The API works at the per-record level.

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Details containing the context ID and node path. The node path contains the path of the context record and list of attributes to be updated with their values.

#### Return Value

Type: Map<String,Object>

Details containing the updated attribute list.
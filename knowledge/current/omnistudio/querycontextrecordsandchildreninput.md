---
title: "queryContextRecordsAndChildren(input)"
domain: omnistudio
topic: querycontextrecordsandchildreninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.652Z
keywords: [queryContextRecordsAndChildren, input, Queries, Context, records, children, based, dataPath, instead, tags., Signature, Example, Parameters, Return, Value]
---

# queryContextRecordsAndChildren(input)

> Queries Context records and children based on the dataPath instead of
        tags.

### queryContextRecordsAndChildren(input)

Queries Context records and children based on the dataPath instead of tags.

#### Signature

Map<String, Object> industriesContexts.queryContextRecordsAndChildren(input: Map<String, Object>);

#### Example

```

```

#### Parameters

input

contextId: String

ID of the context to be queried.

queryPaths: Map<String,Object>

List of dataPath to be queried.

#### Return Value

queryResults: Map<String,Object>

Result containing the record data.
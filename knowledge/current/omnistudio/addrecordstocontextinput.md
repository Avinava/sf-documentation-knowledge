---
title: "addRecordsToContext(input)"
domain: omnistudio
topic: addrecordstocontextinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.652Z
keywords: [addRecordsToContext, input, Adds, records, user-defined, level, hierarchy, context., Signature, Example, Parameters, Return, Value]
---

# addRecordsToContext(input)

> Adds one or more records at a user-defined level in the hierarchy of the
        context.

### addRecordsToContext(input)

Adds one or more records at a user-defined level in the hierarchy of the context.

#### Signature

public Map<String,Object> addRecordsToContext(Map<String,Object> input)

```

```

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

contextId

Type: String

ID of the Context to which record described in inputData is added.

overWriteExistingRecords

Type: Boolean

Indicates if an already existing record with same ID as being added through inputData must be overriden.

inputData

Type: String

Record data to be added to the context, hierarchical data in stringified format.

isTaggedData

Type: Boolean

Describes if the inputData structure is using the taggedData Format.

#### Return Value

Type: Map<String,Object>
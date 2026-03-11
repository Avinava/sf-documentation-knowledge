---
title: "filteringContext(input)"
domain: omnistudio
topic: filteringcontextinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.652Z
keywords: [filteringContext, input, Builds, queries, context, based, filter, criteria., Signature, Example, Parameters, Return, Value]
---

# filteringContext(input)

> Builds or queries a context based on a filter criteria.

### filteringContext(input)

Builds or queries a context based on a filter criteria.

#### Signature

public Map<String, Object> industriesContexts.filteringContext(buildWithFilter);

#### Example

Type: BUILD

```

```

Type: QUERYRECORDANDCHILDREN or QUERYRECORDS

```

```

#### Parameters

input

Type: Enum

Object defining the type of operation. Operation Metadata along with filter criteria to be applied on the operation. Valid values are: BUILD,QUERYRECORDANDCHILDREN and QUERYRECORDS

filter: String

Metadata about the filter object.

build: Map<String,Object>

Metadata to build the context. Only for type with value BUILD.

query: Map<String,Object>

Metadata to query records in the context. Only for type with value QUERYRECORDANDCHILDREN and QUERYRECORDS.

#### Return Value

Type: Map<String,Object>

Mapping of the contextId or queryResults with the requested operation type.
---
title: "QueryNode Class"
domain: apex-reference
topic: querynode-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.146Z
keywords: [QueryNode, Class, Execute, query, return, rows, JSON., execute, streamName, Signature, Parameters, Return, Value]
---

# QueryNode Class

> Execute the query and return rows as JSON.

### execute(streamName)

Execute the query and return rows as JSON.

#### Signature

global ConnectApi.LiteralJson execute(String streamName)

#### Parameters

streamName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The query stream to execute. For example:

```

```

#### Return Value

Type: ConnectApi.LiteralJson
---
title: "DescribeFieldResult Class"
domain: apex-reference
topic: describefieldresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.347Z
keywords: [DescribeFieldResult, Class, Returns, true, writing, detail, object, requires, read, sharing, instead, write, parent., isWriteRequiresMasterRead, Signature, Return, Value]
---

# DescribeFieldResult Class

> Returns true if
writing to the detail object requires read sharing instead of read/write
sharing of the parent.

### isWriteRequiresMasterRead()

Returns true if writing to the detail object requires read sharing instead of read/write sharing of the parent.

#### Signature

public Boolean isWriteRequiresMasterRead()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
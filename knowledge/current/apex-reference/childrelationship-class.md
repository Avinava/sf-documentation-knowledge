---
title: "ChildRelationship Class"
domain: apex-reference
topic: childrelationship-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.207Z
keywords: [ChildRelationship, Class, Returns, true, parent, object, can't, deleted, because, referenced, child, false, otherwise., isRestrictedDelete, Signature, Return, Value]
---

# ChildRelationship Class

> Returns true if
the parent object can't be deleted because it is referenced by a child
object, false otherwise.

### isRestrictedDelete()

Returns true if the parent object can't be deleted because it is referenced by a child object, false otherwise.

#### Signature

public Boolean isRestrictedDelete()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
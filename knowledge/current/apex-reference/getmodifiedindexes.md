---
title: "getModifiedIndexes()"
domain: apex-reference
topic: getmodifiedindexes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.521Z
keywords: [getModifiedIndexes, Returns, indexes, sObjects, modified, stripInaccessible, method., Signature, Return, Value, Example]
---

# getModifiedIndexes()

> Returns the indexes of sObjects that are modified by the stripInaccessible method.

### getModifiedIndexes()

Returns the indexes of sObjects that are modified by the [stripInaccessible](atlas.en-us.apexref.meta/apexref/apex_class_System_Security.htm#apex_System_Security_stripInaccessible "Creates a list of sObjects from the source records, which are stripped of fields that fail the field-level security checks for the current user. The method also provides an option to enforce an object-level access check.") method.

#### Signature

public Set<Integer\> getModifiedIndexes()

#### Return Value

Type: [Set<Integer>](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")

A set of unsigned integers that represent the row indexes of the modified sObjects.

#### Example

In this example, the user doesn’t have permission to update the AnnualRevenue field of an Account.

```

```
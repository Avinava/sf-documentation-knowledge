---
title: "removeEntry(name)"
domain: apex-reference
topic: removeentryname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [removeEntry, name, Removes, entry, specified, zip, file., Signature, Parameters, Return, Value]
---

# removeEntry(name)

> Removes the entry with the specified name from the zip file.

### removeEntry(name)

Removes the entry with the specified name from the zip file.

#### Signature

public Void removeEntry(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the zip entry to be removed. If an entry with this name isn’t found, the method throws a ZipException exception.

#### Return Value

Type: Void
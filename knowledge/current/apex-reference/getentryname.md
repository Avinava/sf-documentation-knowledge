---
title: "getEntry(name)"
domain: apex-reference
topic: getentryname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [getEntry, name, Gets, entry, specified, zip, file., Signature, Parameters, Return, Value]
---

# getEntry(name)

> Gets the entry with the specified name from the zip file.

### getEntry(name)

Gets the entry with the specified name from the zip file.

#### Signature

public compression.ZipEntry getEntry(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the zip entry to be retrieved.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")
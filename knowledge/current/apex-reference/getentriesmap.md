---
title: "getEntriesMap()"
domain: apex-reference
topic: getentriesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.393Z
keywords: [getEntriesMap, Gets, map, names, corresponding, zip, entries, file., Signature, Return, Value]
---

# getEntriesMap()

> Gets a map of names and the corresponding zip entries from the zip file.

### getEntriesMap()

Gets a map of names and the corresponding zip entries from the zip file.

#### Signature

public Map<String,Compression.ZipEntry> getEntriesMap()

#### Return Value

Type: Map<[string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>
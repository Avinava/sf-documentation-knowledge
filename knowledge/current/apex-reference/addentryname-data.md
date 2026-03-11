---
title: "addEntry(name, data)"
domain: apex-reference
topic: addentryname-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [addEntry, name, data, Adds, entry, zip, file, specified, content., Signature, Parameters, Return, Value]
---

# addEntry(name, data)

> Adds an entry to the zip file with the specified name and content.

### addEntry(name, data)

Adds an entry to the zip file with the specified name and content.

#### Signature

public Compression.ZipEntry addEntry(string name, blob data)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the zip entry.

data

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Zip entry added to the zip file.
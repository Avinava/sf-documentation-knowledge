---
title: "addEntry(prototype)"
domain: apex-reference
topic: addentryprototype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [addEntry, prototype, Adds, copy, specified, entry, zip, file, includes, details, such, name, comment, last, modification, time, content., Signature, Parameters, Return]
---

# addEntry(prototype)

> Adds a copy of the specified prototype entry to the zip file and includes details such as
    the zip entry name, comment, last modification time, and content.

### addEntry(prototype)

Adds a copy of the specified prototype entry to the zip file and includes details such as the zip entry name, comment, last modification time, and content.

#### Signature

public Compression.ZipEntry addEntry(compression.ZipEntry prototype)

#### Parameters

prototype

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Details of the entry to be added to the zip file.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")
---
title: "addEntry(name, comment, modTime, method, data)"
domain: apex-reference
topic: addentryname-comment-modtime-method-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [addEntry, name, comment, modTime, method, data, Adds, entry, zip, file, specified, last, modification, time, compression, content., Signature, Parameters, Return, Value]
---

# addEntry(name, comment, modTime, method, data)

> Adds an entry to the zip file with the specified name, comment, last modification time,
    compression method, and content.

### addEntry(name, comment, modTime, method, data)

Adds an entry to the zip file with the specified name, comment, last modification time, compression method, and content.

#### Signature

public Compression.ZipEntry addEntry(String name, String comment, Datetime modTime, Compression.Method method, Blob data)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the zip entry.

comment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The comment about the zip entry.

modTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The last modification timestamp of the zip entry.

method

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

The compression method of the zip entry, which is either DEFLATED or STORED.

data

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Zip entry added to the zip file.
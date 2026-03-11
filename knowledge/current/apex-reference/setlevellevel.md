---
title: "setLevel(level)"
domain: apex-reference
topic: setlevellevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [setLevel, level, Sets, compression, zip, file., Signature, Parameters, Return, Value]
---

# setLevel(level)

> Sets the compression level of the zip file.

### setLevel(level)

Sets the compression level of the zip file.

#### Signature

public Compression.ZipWriter setLevel(compression.Level value)

#### Parameters

value

Type: [Compression.Level](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Level.htm "Specifies the compression level for creating a zip file.")

Uses the Level enum to set the compression level.

#### Return Value

Type: [Compression.ZipWriter](#apex_class_compression_zipwriter "Contains methods to add zip entries, generate a zipped archive, and return the result as an Apex blob.")

Returns the zip file set with the specified compression level.
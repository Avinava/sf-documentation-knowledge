---
title: "setMethod(method)"
domain: apex-reference
topic: setmethodmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [setMethod, method, Sets, compression, zip, file., Signature, Parameters, Return, Value]
---

# setMethod(method)

> Sets the compression method for the zip file.

### setMethod(method)

Sets the compression method for the zip file.

#### Signature

public Compression.ZipWriter setMethod(compression.Method value)

#### Parameters

value

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses the Method enum to set the compression method.

#### Return Value

Type: [Compression.ZipWriter](#apex_class_compression_zipwriter "Contains methods to add zip entries, generate a zipped archive, and return the result as an Apex blob.")

Returns the zip file set with the specified compression method.
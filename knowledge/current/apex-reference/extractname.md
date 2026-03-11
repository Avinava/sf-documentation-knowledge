---
title: "extract(name)"
domain: apex-reference
topic: extractname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.393Z
keywords: [extract, name, Extracts, bytes, specified, zip, entry, decompresses, content., Signature, Parameters, Return, Value]
---

# extract(name)

> Extracts the bytes for the specified zip entry name and decompresses the
    content.

### extract(name)

Extracts the bytes for the specified zip entry name and decompresses the content.

#### Signature

public blob extract(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Species the zip entry name to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.
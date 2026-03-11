---
title: "extract(entry)"
domain: apex-reference
topic: extractentry
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.393Z
keywords: [extract, entry, Extracts, bytes, specified, zip, decompresses, content., Signature, Parameters, Return, Value]
---

# extract(entry)

> Extracts the bytes for the specified zip entry and decompresses the content.

### extract(entry)

Extracts the bytes for the specified zip entry and decompresses the content.

#### Signature

public blob extract(Compression.ZipEntry entry)

#### Parameters

entry

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Species the zip entry to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.
---
title: "setContent(blob)"
domain: apex-reference
topic: setcontentblob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.387Z
keywords: [setContent, blob, Sets, content, zip, entry, that’s, written, Zip, archive., method, doesn’t, work, ZipReader, class., Signature, Parameters, Return, Value]
---

# setContent(blob)

> Sets the content of the zip entry that’s written to the Zip archive. This method doesn’t
    work with the ZipReader class.

### setContent(blob)

Sets the content of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setContent(Blob blob)

#### Parameters

blob

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")
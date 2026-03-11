---
title: "setComment(comment)"
domain: apex-reference
topic: setcommentcomment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.387Z
keywords: [setComment, comment, Sets, string, zip, entry, that’s, written, Zip, archive., method, doesn’t, work, ZipReader, class., Signature, Parameters, Return, Value]
---

# setComment(comment)

> Sets the comment string for the zip entry that’s written to the Zip archive. This method
    doesn’t work with the ZipReader class.

### setComment(comment)

Sets the comment string for the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setComment(String comment)

#### Parameters

comment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")
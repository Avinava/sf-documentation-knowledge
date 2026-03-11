---
title: "setLastModifiedTime(modTime)"
domain: apex-reference
topic: setlastmodifiedtimemodtime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.387Z
keywords: [setLastModifiedTime, modTime, Sets, last, modification, time, zip, entry, that’s, written, Zip, archive., method, doesn’t, work, ZipReader, class., Signature, Parameters, Return]
---

# setLastModifiedTime(modTime)

> Sets the last modification time of the zip entry that’s written to the Zip archive. This
    method doesn’t work with the ZipReader
    class.

### setLastModifiedTime(modTime)

Sets the last modification time of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setLastModifiedTime(Datetime modTime)

#### Parameters

modTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")
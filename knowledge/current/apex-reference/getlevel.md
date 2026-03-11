---
title: "getLevel()"
domain: apex-reference
topic: getlevel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [getLevel, Gets, compression, level, zip, file., Signature, Return, Value]
---

# getLevel()

> Gets the compression level of the zip file.

### getLevel()

Gets the compression level of the zip file.

#### Signature

public Compression.Level getLevel()

#### Return Value

Type: [Compression.Level](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Level.htm "Specifies the compression level for creating a zip file.")

Uses the Level enum values to indicate the compression level as BEST\_COMPRESSION, BEST\_SPEED, DEFAULT\_LEVEL, or NO\_COMPRESSION.
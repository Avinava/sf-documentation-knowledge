---
title: "getMethod()"
domain: apex-reference
topic: getmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.404Z
keywords: [getMethod, Gets, compression, method, zip, file., Signature, Return, Value]
---

# getMethod()

> Gets the compression method of the zip file.

### getMethod()

Gets the compression method of the zip file.

#### Signature

public Compression.Method getMethod()

#### Return Value

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses the Method enum values to indicate the compression method as DEFLATED or STORED.
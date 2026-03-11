---
title: "Method Enum"
domain: apex-reference
topic: method-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.493Z
keywords: [Method, Enum, Usage, Values]
---

# Method Enum

# Method Enum

Specifies the compression method for the zip entries.

## Usage

Use the Method enum with the getMethod() and setMethod(method) methods in the ZipEntry and ZipWriter classes.

## Enum Values

The following are the values of the Compression.Method enum.

| Value | Description |
| --- | --- |
| DEFLATED | Deflated compression method for compressed entries. |
| STORED | No compression method for zip entries. |
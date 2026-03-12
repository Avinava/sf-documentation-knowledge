---
title: "Method Enum"
domain: apex-reference
topic: method-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.651Z
estimatedTokens: 107
keywords: [Specifies, compression, zip, entries., Usage, Values]
---

# Method Enum

> Specifies the compression method for the zip entries.

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

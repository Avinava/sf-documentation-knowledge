---
title: "FieldMap"
domain: mc-apis
topic: fieldmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.824Z
estimatedTokens: 149
keywords: [FieldMap, how, imported, file, columns, map, Marketing, Cloud, attributes, Different, SOAP, clients, render, SourceName, SourceOrdinal]
---

# FieldMap

> The FieldMap object defines how the imported file columns map to Marketing Cloud attributes. Different SOAP clients render the SourceName and SourceOrdinal properties differently. .NET creates a single property name item that accepts either an integer or a string. In order to manually map these fiel

# FieldMap

The FieldMap object defines how the imported file columns map to Marketing Cloud attributes. Different SOAP clients render the SourceName and SourceOrdinal properties differently. .NET creates a single property name item that accepts either an integer or a string. In order to manually map these fields, you must include relationships for all fields using this object.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| DestinationName | xsd:string | Defines field where imported data resides. |
| Item | Object | Identifies an item in a mapped relationship. |

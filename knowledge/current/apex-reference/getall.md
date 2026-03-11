---
title: "getAll()"
domain: apex-reference
topic: getall
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.935Z
keywords: [getAll, Returns, map, containing, custom, metadata, records, specific, type., keys, record, DeveloperNames, values, sObjects., Signature, Return, Value, Usage, Example]
---

# getAll()

> Returns a map containing custom metadata records for the specific custom metadata type.
  The map keys are the record DeveloperNames  and the map values are the record
  sObjects.

## getAll()

Returns a map containing custom metadata records for the specific custom metadata type. The map keys are the record DeveloperNames and the map values are the record sObjects.

### Signature

public Map<String, CustomMetadataType\_\_mdt> getAll()

### Return Value

Type: Map<String, CustomMetadataType\_\_mdt>

### Usage

If no records are defined for the type, this method returns an empty map. To iterate over the list of custom metadata type record sObjects, use getAll().values(). Only the first 255 characters are returned for any field in a custom metadata type record, so longer text fields get truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

This sample returns a map of all the records for a custom metadata type named Games\_\_mdt.

```

```
---
title: "DeleteEvent"
domain: sfFieldRef
topic: deleteevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.026Z
estimatedTokens: 247
keywords: [DeleteEvent, record, soft, deleted, Search, API, version, 48.0, removed, 50.0]
---

# DeleteEvent

> Represents a record that has been soft deleted. Search on this object was
    available in API version 48.0, then removed in API version 50.0.

# DeleteEvent

Represents a record that has been soft deleted. Search on this object was available in API version 48.0, then removed in API version 50.0.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DeleteEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_deleteevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| DeletedById | Owner ID | reference |  | 18 |  |  |
| DeletedDate | Deleted Date | datetime |  |  |  |  |
| Id | Recycle Bin Item ID | id |  | 18 |  |  |
| Record | Record ID | string |  | 18 |  |  |
| RecordName | Record Name | string |  | 255 |  |  |
| SobjectName | Type | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

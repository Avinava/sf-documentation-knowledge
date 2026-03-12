---
title: "FieldChangeSnapshot"
domain: sfFieldRef
topic: fieldchangesnapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.915Z
estimatedTokens: 247
keywords: [FieldChangeSnapshot, virtual, opportunities, close, dates, changed, time, period, API, version, 52.0, later]
---

# FieldChangeSnapshot

> Use this virtual object to learn which opportunities' close dates changed
         during the specified time period. This object is available in API version 52.0 and
      later.

# FieldChangeSnapshot

Use this virtual object to learn which opportunities' close dates changed during the specified time period. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FieldChangeSnapshot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldchangesnapshot.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CurrentValueDateOnly | Current Value Date Only | date |  |  |  |  |
| FieldName | Field Name | string |  | 255 |  |  |
| Id | Field Change Snapshot ID | id |  | 18 |  |  |
| ParentId | Opportunity ID | reference |  | 18 |  |  |
| ValidFrom | From | datetime |  |  |  |  |
| ValidTo | To | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

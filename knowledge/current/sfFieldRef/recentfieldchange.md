---
title: "RecentFieldChange"
domain: sfFieldRef
topic: recentfieldchange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.696Z
estimatedTokens: 322
keywords: [RecentFieldChange, virtual, how, opportunity, changed, past, seven, days, previous, made, change, API, version, 52.0, later]
---

# RecentFieldChange

> Use this virtual object to see how an opportunity has changed in the past
         seven days. Learn the previous value of a field, who made the change, and when the change
         was made. This object is available in API version 52.0 and later.

# RecentFieldChange

Use this virtual object to see how an opportunity has changed in the past seven days. Learn the previous value of a field, who made the change, and when the change was made. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecentFieldChange](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recentfieldchange.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeDate | Change Date | datetime |  |  |  |  |
| FieldName | Field Name | string |  | 255 |  |  |
| Id | Recent Change ID | id |  | 18 |  |  |
| ParentId | Opportunity ID | reference |  | 18 |  |  |
| PreviousCurrencyValue | Previous Currency Value | currency |  |  | 18 | 2 |
| PreviousDateOnlyValue | Previous Date Only Value | date |  |  |  |  |
| PreviousNumberValue | Previous Number Value | double |  |  | 18 | 2 |
| PreviousTextValue | Previous Text Value | string |  | 255 |  |  |
| ValueChangedById | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

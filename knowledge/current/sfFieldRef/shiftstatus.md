---
title: "ShiftStatus"
domain: sfFieldRef
topic: shiftstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.892Z
estimatedTokens: 300
keywords: [ShiftStatus, shift, Tentative, Published, Confirmed, API, versions, 46.0, later]
---

# ShiftStatus

> Represents a shift, such as Tentative, Published, or Confirmed.
      Available in API versions 46.0 and later.

# ShiftStatus

Represents a shift, such as Tentative, Published, or Confirmed. Available in API versions 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ShiftStatus](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shiftstatus.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Shift Status Value ID | id |  | 18 |  |  |
| IsDefault | Is Default | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Master Label | string |  | 255 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StatusCode | Status Code | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

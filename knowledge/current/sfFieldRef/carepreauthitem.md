---
title: "CarePreauthItem"
domain: sfFieldRef
topic: carepreauthitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.762Z
estimatedTokens: 426
keywords: [CarePreauthItem, items, included, preauthorization, care, under, member’s, plan]
---

# CarePreauthItem

> Represents the details of items included in a preauthorization for
			care under a member’s plan.

# CarePreauthItem

Represents the details of items included in a preauthorization for care under a member’s plan.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePreauthItem in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarePreauthId | Care Preauth ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndingServiceCode | Ending Service Code | string |  | 64 |  |  |
| Id | Care Preauth Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Laterality | Laterality | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreauthitemSequence | Preauth Item Sequence | int | 9 |  |  |  |
| Quantity | Quantity | int | 9 |  |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| StartingServiceCode | Starting Service Code | string |  | 64 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Unit | Unit | string |  | 64 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

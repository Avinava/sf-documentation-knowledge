---
title: "AdverseEventAction"
domain: sfFieldRef
topic: adverseeventaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.680Z
estimatedTokens: 356
keywords: [AdverseEventAction, Preventive, actions, contributed, avoiding, adverse, event, Ameliorating, taken, occured, order, reduce, extent, harm, API]
---

# AdverseEventAction

> Preventive actions that contributed to avoiding the adverse event or
         Ameliorating actions taken after the adverse event occured in order to reduce the extent of
         harm. This object is available in API version 61.0 and later.

# AdverseEventAction

Preventive actions that contributed to avoiding the adverse event or Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AdverseEventAction in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionCodeId | Action CodeAction Code ID | reference |  | 18 |  |  |
| ActionReferenceId | Action ReferenceAction Reference ID | reference |  | 18 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| AdverseEventEntryId | Adverse Event Entry ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Adverse Event Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

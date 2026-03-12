---
title: "StageTransitionEntry"
domain: sfFieldRef
topic: stagetransitionentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.315Z
estimatedTokens: 383
keywords: [StageTransitionEntry, runtime, instance, stage, transition, API, version, 60.0, later]
---

# StageTransitionEntry

> Represents the information about the runtime instance of the object stage
         transition. This object is available in API version 60.0 and later.

# StageTransitionEntry

Represents the information about the runtime instance of the object stage transition. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StageTransitionEntry in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FromStageValueId | Stage Value ID | reference |  | 18 |  |  |
| FulfillmentPlanId | Fulfillment Plan ID | reference |  | 18 |  |  |
| Id | Stage Transition Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceRecord | Reference Record ID | string |  | 18 |  |  |
| StageTransitionId | Stage Transition ID | reference |  | 18 |  |  |
| StageTransitionPlanStatus | Stage Transition Plan Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToStageValueId | Stage Value ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

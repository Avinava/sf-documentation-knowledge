---
title: "BillingMilestonePlanItem"
domain: sfFieldRef
topic: billingmilestoneplanitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:49.936Z
estimatedTokens: 596
keywords: [BillingMilestonePlanItem, specific, billing, milestone, plan, that’s, manage, track, completion, certain, deliverables, stages, API, version, 63.0]
---

# BillingMilestonePlanItem

> Represents a specific billing milestone within the billing milestone
         plan that’s used to manage and track billing based on the completion of certain
         deliverables or stages. This object is available in API version 63.0 and later.

# BillingMilestonePlanItem

Represents a specific billing milestone within the billing milestone plan that’s used to manage and track billing based on the completion of certain deliverables or stages. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BillingMilestonePlanItem in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingMilestonePlanId | Billing Milestone Plan ID | reference |  | 18 |  |  |
| BillingScheduleGroupId | Billing Schedule Group ID | reference |  | 18 |  |  |
| CommencementDate | Milestone Commencement Trigger | picklist |  | 255 |  |  |
| CommencementDateOffset | Milestone Commencement Offset | int | 9 |  |  |  |
| CommencementDateOffsetUnit | Milestone Commencement Offset Unit | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| FlatAmount | Flat Amount | currency |  |  | 18 | 2 |
| Id | Billing Milestone Plan Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMilestoneAccomplished | Milestone accomplished | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MilestoneAccomplishmentDate | Milestone Accomplishment Date | date |  |  |  |  |
| MilestoneAmount | Milestone Amount | currency |  |  | 18 | 2 |
| MilestoneAmountDerived | Milestone Amount Derived | double |  |  | 18 | 2 |
| MilestoneType | Milestone Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Percentage | Percentage | percent |  |  | 5 | 2 |
| ServicePeriodEnd | Service Period End | picklist |  | 255 |  |  |
| ServicePeriodStart | Service Period Start | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Distribution Method | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

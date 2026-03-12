---
title: "CarePreauth"
domain: sfFieldRef
topic: carepreauth
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.742Z
estimatedTokens: 416
keywords: [CarePreauth, preauthorizations, care, under, member’s, plan]
---

# CarePreauth

> Represents the details of preauthorizations for care under a
			member’s plan.

# CarePreauth

Represents the details of preauthorizations for care under a member’s plan.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePreauth in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| Id | Care Preauth ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberPlanId | Member Plan ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PayerId | Account ID | reference |  | 18 |  |  |
| PreauthIdentifier | Preauth Identifier | string |  | 64 |  |  |
| ReferringPhysician | Referring Physician | string |  | 64 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

---
title: "MemberPlan"
domain: sfFieldRef
topic: memberplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.093Z
estimatedTokens: 613
keywords: [MemberPlan, insurance, coverage, member, subscriber]
---

# MemberPlan

> Represents details about the insurance coverage for a member or
			subscriber.

# MemberPlan

Represents details about the insurance coverage for a member or subscriber.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MemberPlan in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Affiliation | Affiliation | string |  | 64 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| GroupNumber | Group Number | string |  | 64 |  |  |
| Id | Member Plan ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IssuerNumber | Issuer Number | string |  | 64 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastVerification | Last Verification | date |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberId | Account ID | reference |  | 18 |  |  |
| MemberNumber | Member Number | string |  | 64 |  |  |
| Name | Name | string |  | 255 |  |  |
| Notes | Notes | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PayerId | Account ID | reference |  | 18 |  |  |
| PayerNetworkId | Healthcare Payer Network ID | reference |  | 18 |  |  |
| PlanId | Plan ID | reference |  | 18 |  |  |
| PrimaryCarePhysician | Primary Care Physician | string |  | 255 |  |  |
| PrimarySecondaryTertiary | Primary/Secondary/Tertiary | picklist |  | 40 |  |  |
| PriorityOrder | Priority Order | int | 9 |  |  |  |
| RelationshipToSubscriber | Relationship to Subscriber | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SubscriberId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

---
title: "ClaimCoverage"
domain: sfFieldRef
topic: claimcoverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.017Z
estimatedTokens: 482
keywords: [ClaimCoverage, causal, part, defective, asset, requires, repair, replacement, API, version, 58.0, later]
---

# ClaimCoverage

> Represents a causal part in a defective asset that requires repair or
         replacement. This object is available in API version 58.0 and later.

# ClaimCoverage

Represents a causal part in a defective asset that requires repair or replacement. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClaimCoverage in the Automotive Cloud Developer Guide, Financial Services Cloud Developer Guide, and Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| ClaimItemId | Claim Item ID | reference |  | 18 |  |  |
| ClaimParticipantId | Claim Participant ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| ExpenseReserveAmount | Expense Reserve Amount | currency |  |  | 18 | 2 |
| Id | Claim Coverage ID | id |  | 18 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| InsurancePolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| InternalReserveMode | Internal Reserve Mode | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LossReserveAmount | Loss Reserve Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
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

---
title: "FundingAwardAmendment"
domain: sfFieldRef
topic: fundingawardamendment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.940Z
estimatedTokens: 461
keywords: [FundingAwardAmendment, modification, scope, finances, previously, approved, award, API, version, 57.0, later]
---

# FundingAwardAmendment

> Represents a modification to the scope or finances of a previously approved award. This object is available in API version 57.0 and later.

# FundingAwardAmendment

Represents a modification to the scope or finances of a previously approved award. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FundingAwardAmendment in the Grantmaking Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedAwardAmount | Adjusted Award Amount | currency |  |  | 18 | 2 |
| AdjustedEndDate | Adjusted End Date | datetime |  |  |  |  |
| ApprovalStatus | Approval Status | picklist |  | 40 |  |  |
| Comments | Comments | textarea |  | 32000 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FundingAwardId | Funding Award ID | reference |  | 18 |  |  |
| Id | Funding Award Amendment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSubmitted | Submitted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProposedAwardAmount | Proposed Award Amount | currency |  |  | 18 | 2 |
| ProposedEndDate | Proposed End Date | datetime |  |  |  |  |
| Reason | Reason | textarea |  | 32000 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

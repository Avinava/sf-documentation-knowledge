---
title: "PartyFinancialAsset"
domain: sfFieldRef
topic: partyfinancialasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.653Z
estimatedTokens: 647
keywords: [PartyFinancialAsset, financial, asset, owned, individual, account, API, version, 58.0, later]
---

# PartyFinancialAsset

> Represents the financial asset owned by an individual or
         account. This object is available in API version 58.0 and later.

# PartyFinancialAsset

Represents the financial asset owned by an individual or account. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinancialAsset in the Automotive Cloud Developer Guide, Financial Services Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicantId | Applicant ID | reference |  | 18 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | Party Financial Asset ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLienExisting | Is Lien Existing | boolean |  |  |  |  |
| IsReadOnly | Is Read Only | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MakeName | Make Name | string |  | 40 |  |  |
| ModelName | Model Name | string |  | 40 |  |  |
| ModelYear | Model Year | string |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| OwnershipPercent | Ownership Percent | percent |  |  | 6 | 3 |
| OwnershipStartDateTime | Ownership Start Date Time | datetime |  |  |  |  |
| OwnershipType | Ownership Type | picklist |  | 40 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| PayoffDueAmount | Payoff Due Amount | currency |  |  | 18 | 2 |
| PledgeAmount | Pledge Amount | currency |  |  | 18 | 0 |
| PurchaseAmount | Purchase Amount | currency |  |  | 18 | 0 |
| SerialNumber | Serial Number | string |  | 40 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| ValuationAmount | Valuation Amount | currency |  |  | 18 | 0 |
| ValuationDateTime | Valuation Date Time | datetime |  |  |  |  |
| VerificationDate | Verification Date | date |  |  |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

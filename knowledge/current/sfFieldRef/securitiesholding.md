---
title: "SecuritiesHolding"
domain: sfFieldRef
topic: securitiesholding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.181Z
estimatedTokens: 532
keywords: [SecuritiesHolding, securities, associated, insurance, policy, API, version, 47.0, later]
---

# SecuritiesHolding

> Represents the securities associated with an insurance policy. This
		object is available in API version 47.0 and later.

# SecuritiesHolding

Represents the securities associated with an insurance policy. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SecuritiesHolding in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetCategory | Asset Category | picklist |  | 40 |  |  |
| AssetCategoryName | Asset Category Name | picklist |  | 40 |  |  |
| AssetClass | Asset Class | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GainLoss | Gain/Loss | currency |  |  | 18 | 2 |
| HouseholdId | Account ID | reference |  | 18 |  |  |
| Id | Securities Holding ID | id |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InvestmentEndDate | Investment End Date | date |  |  |  |  |
| InvestmentStartDate | Investment Start Date | date |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastUpdated | Last Updated | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MarketValue | Market Value | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PercentChange | Percent Change | percent |  |  | 16 | 2 |
| Price | Price | currency |  |  | 12 | 2 |
| PrimaryOwnerId | Account ID | reference |  | 18 |  |  |
| PurchasePrice | Purchase Price | currency |  |  | 12 | 2 |
| Sector | Sector | picklist |  | 40 |  |  |
| Shares | Shares | double |  |  | 14 | 4 |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

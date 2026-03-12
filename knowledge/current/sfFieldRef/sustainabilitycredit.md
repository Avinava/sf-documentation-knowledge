---
title: "SustainabilityCredit"
domain: sfFieldRef
topic: sustainabilitycredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.842Z
estimatedTokens: 511
keywords: [SustainabilityCredit, sustainability, credits, part, purchase]
---

# SustainabilityCredit

> Represents information about the sustainability credits that are a part of a
         sustainability purchase.

# SustainabilityCredit

Represents information about the sustainability credits that are a part of a sustainability purchase.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SustainabilityCredit in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CostPerUnit | Cost Per Unit | currency |  |  | 18 | 0 |
| CrbnCreditProjectId | Carbon Credit Project ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditsAllocated | Credits Allocated | double |  |  | 18 | 2 |
| CreditsAvailable | Credits Available | double |  |  | 18 | 2 |
| CreditsIssueDate | Credits Issue Date | date |  |  |  |  |
| CreditsPurchased | Credits Purchased | double |  |  | 18 | 0 |
| CreditsRetiredDate | Credits Retired Date | date |  |  |  |  |
| CreditsUnit | Credits Unit | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 80 |  |  |
| Id | Sustainability Credit ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PurchaseDate | Purchase Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SustainabilityPurchaseId | Sustainability Purchase ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCost | Total Spend | currency |  |  | 18 | 0 |
| VintageYear | Vintage Year | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

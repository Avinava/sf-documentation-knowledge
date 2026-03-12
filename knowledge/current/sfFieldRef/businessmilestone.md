---
title: "BusinessMilestone"
domain: sfFieldRef
topic: businessmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.723Z
estimatedTokens: 449
keywords: [BusinessMilestone, milestones, business, acquisition, market, listing, expansion]
---

# BusinessMilestone

> Represents the milestones of a business, such as acquisition, market
			listing, and expansion.

# BusinessMilestone

Represents the milestones of a business, such as acquisition, market listing, and expansion.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BusinessMilestone in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| ExpirationDescription | Expiration Description | textarea |  | 32000 |  |  |
| Id | Business Milestone ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExpired | Expired | boolean |  |  |  |  |
| IsTentative | Tentative | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MilestoneDate | Milestone Date | datetime |  |  |  |  |
| MilestoneDescription | Milestone Description | textarea |  | 32000 |  |  |
| MilestoneSiteId | Location ID | reference |  | 18 |  |  |
| MilestoneType | Milestone Type | picklist |  | 40 |  |  |
| Name | Milestone Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryAccountId | Account ID | reference |  | 18 |  |  |
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

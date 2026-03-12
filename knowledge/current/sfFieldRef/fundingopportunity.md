---
title: "FundingOpportunity"
domain: sfFieldRef
topic: fundingopportunity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.136Z
estimatedTokens: 492
keywords: [FundingOpportunity, pool, money, distribution, specific, purpose, API, version, 57.0, later]
---

# FundingOpportunity

> The pool of money available for distribution for a specific purpose. This object is available in API version 57.0 and later.

# FundingOpportunity

The pool of money available for distribution for a specific purpose. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FundingOpportunity in the Grantmaking Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionPlanTemplateId | Action Plan Template ID | reference |  | 18 |  |  |
| ApplicationInstructions | Application Instructions | textarea |  | 32000 |  |  |
| ApplicationTimelineId | Application Timeline ID | reference |  | 18 |  |  |
| BudgetTemplateId | Budget Template ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Funding Opportunity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumFundingAmount | Maximum Funding Amount | currency |  |  | 18 | 2 |
| MinimumFundingAmount | Minimum Funding Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentFundingOpportunityId | Funding Opportunity ID | reference |  | 18 |  |  |
| ProgramId | Program ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
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

---
title: "FundingAward"
domain: sfFieldRef
topic: fundingaward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.932Z
estimatedTokens: 500
keywords: [FundingAward, award, individual, organization, facilitate, goal, funder’s, mission, API, version, 57.0, later]
---

# FundingAward

> Represents an award given to an individual or organization to facilitate a goal related to the funder’s mission. This object is available in API version 57.0 and
		later.

# FundingAward

Represents an award given to an individual or organization to facilitate a goal related to the funder’s mission. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FundingAward in the Grantmaking Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AwardNumber | Award Number | string |  | 30 |  |  |
| AwardeeId | Awardee ID | reference |  | 18 |  |  |
| BudgetId | Budget ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DecisionDate | Decision Date | datetime |  |  |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| FundingOpportunityId | Funding Opportunity ID | reference |  | 18 |  |  |
| Id | Funding Award ID | id |  | 18 |  |  |
| IndividualApplicationId | Individual Application ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentFundingAwardId | Parent Funding Award ID | reference |  | 18 |  |  |
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

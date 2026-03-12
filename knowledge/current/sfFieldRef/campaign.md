---
title: "Campaign"
domain: sfFieldRef
topic: campaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.158Z
estimatedTokens: 665
keywords: [Campaign, tracks, marketing, direct, mail, promotion, webinar, trade, show]
---

# Campaign

> Represents and tracks a marketing campaign, such as a direct mail
			promotion, webinar, or trade show.

# Campaign

Represents and tracks a marketing campaign, such as a direct mail promotion, webinar, or trade show.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Campaign](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_campaign.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualCost | Actual Cost in Campaign | currency |  |  | 18 | 0 |
| AmountAllOpportunities | Value Opportunities in Campaign | currency |  |  | 18 | 0 |
| AmountWonOpportunities | Value Won Opportunities in Campaign | currency |  |  | 18 | 0 |
| BudgetedCost | Budgeted Cost in Campaign | currency |  |  | 18 | 0 |
| CampaignMemberRecordTypeId | Record Type ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExpectedResponse | Expected Response (%) | percent |  |  | 10 | 2 |
| ExpectedRevenue | Expected Revenue in Campaign | currency |  |  | 18 | 0 |
| Id | Campaign ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 80 |  |  |
| NumberOfContacts | Contacts in Campaign | int | 9 |  |  |  |
| NumberOfConvertedLeads | Converted Leads in Campaign | int | 9 |  |  |  |
| NumberOfLeads | Leads in Campaign | int | 9 |  |  |  |
| NumberOfOpportunities | Opportunities in Campaign | int | 9 |  |  |  |
| NumberOfResponses | Responses in Campaign | int | 9 |  |  |  |
| NumberOfWonOpportunities | Won Opportunities in Campaign | int | 9 |  |  |  |
| NumberSent | Num Sent in Campaign | double |  |  | 18 | 0 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent Campaign ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

---
title: "Opportunity"
domain: sfFieldRef
topic: opportunity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.497Z
estimatedTokens: 975
keywords: [Opportunity, sale, pending, deal]
---

# Opportunity

> Represents an opportunity, which is a sale or pending
		deal.

# Opportunity

Represents an opportunity, which is a sale or pending deal.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "HTML (New Window)") in the Design Registration Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityMetricId | Activity Metric ID | reference |  | 18 |  |  |
| ActivityMetricRollupId | Activity Metric Rollup ID | reference |  | 18 |  |  |
| AgeInDays | Age | int | 9 |  |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| CampaignId | Campaign ID | reference |  | 18 |  |  |
| CloseDate | Close Date | date |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Opportunity Currency | picklist |  | 3 |  |  |
| CurrentGenerators__c | Current Generator(s) | string |  | 100 |  |  |
| DeliveryInstallationStatus__c | Delivery/Installation Status | picklist |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| ExpectedRevenue | Expected Amount | currency |  |  | 18 | 2 |
| Fiscal | Fiscal Period | string |  | 6 |  |  |
| FiscalQuarter | Fiscal Quarter | int | 8 |  |  |  |
| FiscalYear | Fiscal Year | int | 8 |  |  |  |
| ForecastCategory | Forecast Category | picklist |  | 40 |  |  |
| ForecastCategoryName | Forecast Category | picklist |  | 255 |  |  |
| HasOpenActivity | Has Open Activity | boolean |  |  |  |  |
| HasOpportunityLineItem | Has Line Item | boolean |  |  |  |  |
| HasOverdueTask | Has Overdue Task | boolean |  |  |  |  |
| Id | Opportunity ID | id |  | 18 |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExcludedFromTerritory2Filter | Exclude from the territory assignment filter logic | boolean |  |  |  |  |
| IsPriorityRecord | Important | boolean |  |  |  |  |
| IsPrivate | Private | boolean |  |  |  |  |
| IsWon | Won | boolean |  |  |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastActivityInDays | Recent Activity | int | 9 |  |  |  |
| LastAmountChangedHistoryId | Opportunity History ID | reference |  | 18 |  |  |
| LastCloseDateChangedHistoryId | Opportunity History ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastStageChangeDate | Last Stage Change Date | datetime |  |  |  |  |
| LastStageChangeInDays | Days In Stage | int | 9 |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadSource | Lead Source | picklist |  | 255 |  |  |
| MainCompetitors__c | Main Competitor(s) | string |  | 100 |  |  |
| Name | Name | string |  | 120 |  |  |
| NextStep | Next Step | string |  | 255 |  |  |
| OrderNumber__c | Order Number | string |  | 8 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| Probability | Probability (%) | percent |  |  | 3 | 0 |
| PushCount | Push Count | int | 9 |  |  |  |
| StageName | Stage | picklist |  | 255 |  |  |
| SyncedQuoteId | Quote ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Id | Territory ID | reference |  | 18 |  |  |
| TotalOpportunityQuantity | Quantity | double |  |  | 18 | 2 |
| TrackingNumber__c | Tracking Number | string |  | 12 |  |  |
| Type | Opportunity Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

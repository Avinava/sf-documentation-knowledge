---
title: "PartnerMarketingBudget"
domain: sfFieldRef
topic: partnermarketingbudget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.462Z
estimatedTokens: 523
keywords: [PartnerMarketingBudget, budget, funds, channel, partners, selling, marketing, products, services, API, version, 41.0, later]
---

# PartnerMarketingBudget

> Represents a budget that provides funds to channel partners for selling
			and marketing products and services. This object is available in API version 41.0
		and later.

# PartnerMarketingBudget

Represents a budget that provides funds to channel partners for selling and marketing products and services. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PartnerMarketingBudget](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_partnermarketingbudget.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| ChannelPartnerId | Channel Partner ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Partner Marketing Budget ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsIgnoreValidation | Ignore Validation Rules | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Partner Marketing Budget Name | string |  | 255 |  |  |
| TotalAllocatedAmount | Total Allocated Amount | currency |  |  | 18 | 2 |
| TotalApprovedFcs | Total Approved Fund Claims | currency |  |  | 18 | 2 |
| TotalApprovedFrs | Total Approved Fund Requests | currency |  |  | 18 | 2 |
| TotalReimbursedFcs | Total Reimbursed Fund Claims | currency |  |  | 18 | 2 |
| Type | Budget Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

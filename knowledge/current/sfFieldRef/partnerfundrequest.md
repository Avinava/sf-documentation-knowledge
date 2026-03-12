---
title: "PartnerFundRequest"
domain: sfFieldRef
topic: partnerfundrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.438Z
estimatedTokens: 513
keywords: [PartnerFundRequest, funds, partner, marketing, budget, channel, API, version, 41.0, later]
---

# PartnerFundRequest

> Represents a request for funds from the partner marketing budget by
			a channel partner. This object is available in API version 41.0 and
		later.

# PartnerFundRequest

Represents a request for funds from the partner marketing budget by a channel partner. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PartnerFundRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_partnerfundrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Activity | Activity | picklist |  | 40 |  |  |
| AllocationId | Partner Fund Allocation ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| BudgetId | Partner Marketing Budget ID | reference |  | 18 |  |  |
| ChannelPartnerId | Channel Partner ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DesiredOutcome | Desired Outcome | textarea |  | 255 |  |  |
| Id | Partner Fund Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RequestedAmount | Requested Amount | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Partner Fund Request Name | string |  | 255 |  |  |
| TotalApprovedFcs | Total Approved Fund Claims | currency |  |  | 18 | 2 |
| TotalReimbursedFcs | Total Reimbursed Fund Claims | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

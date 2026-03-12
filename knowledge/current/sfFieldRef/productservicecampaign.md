---
title: "ProductServiceCampaign"
domain: sfFieldRef
topic: productservicecampaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.828Z
estimatedTokens: 497
keywords: [ProductServiceCampaign, activities, performed, product, service, campaign, asset, recall, safety, issues, defects, API, version, 51.0, later]
---

# ProductServiceCampaign

> Represents a set of activities to be performed on a product service campaign
      asset, such as a product recall for safety issues or product defects. This object is
    available in API version 51.0 and later.

# ProductServiceCampaign

Represents a set of activities to be performed on a product service campaign asset, such as a product recall for safety issues or product defects. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductServiceCampaign](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productservicecampaign.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Product Service Campaign ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductServiceCampaignName | Product Service Campaign Name | string |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

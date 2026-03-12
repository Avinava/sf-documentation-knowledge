---
title: "AssetDowntimePeriod"
domain: sfFieldRef
topic: assetdowntimeperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.694Z
estimatedTokens: 462
keywords: [AssetDowntimePeriod, period, asset, able, perform, expected, Downtime, periods, include, planned, activities, maintenance, unplanned, events, mechanical]
---

# AssetDowntimePeriod

> Represents a period during which an asset is not able to perform as expected.
      Downtime periods include planned activities, such as maintenance, and unplanned events, such
      as mechanical breakdown. This object is available in API version 49.0 and later.

# AssetDowntimePeriod

Represents a period during which an asset is not able to perform as expected. Downtime periods include planned activities, such as maintenance, and unplanned events, such as mechanical breakdown. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetDowntimePeriod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetdowntimeperiod.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetDowntimePeriodNumber | Asset Downtime Period Number | string |  | 255 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DowntimeType | Downtime Type | picklist |  | 255 |  |  |
| EndTime | End Date | datetime |  |  |  |  |
| Id | Asset Downtime Period ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExcluded | Outside Uptime Calculation Period | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| StartTime | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

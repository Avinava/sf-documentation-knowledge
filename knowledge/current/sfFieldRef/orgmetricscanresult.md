---
title: "OrgMetricScanResult"
domain: sfFieldRef
topic: orgmetricscanresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.160Z
estimatedTokens: 447
keywords: [OrgMetricScanResult, data, item, associated, feature’s, results, Salesforce, Optimizer, evaluation, Custom, Limit, feature, flagged, approaching, API]
---

# OrgMetricScanResult

> Represents data or an item associated with a feature’s
         results in a Salesforce Optimizer evaluation. For example, for the
         Custom Field Limit feature, an OrgMetricScanResult object represents an
         object flagged for approaching the custom field limit.  This
      object is available in API version 47.0 and later.

# OrgMetricScanResult

Represents data or an item associated with a feature’s results in a Salesforce Optimizer evaluation. For example, for the Custom Field Limit feature, an OrgMetricScanResult object represents an object flagged for approaching the custom field limit. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrgMetricScanResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orgmetricscanresult.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| Flags | Flags | int | 9 |  |  |  |
| Id | Org Metric Scan Result ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemStatus | Status | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Org Metric Scan Result | string |  | 255 |  |  |
| Object | Object | string |  | 255 |  |  |
| OrgMetricScanSummaryId | Org Metric Scan ID | reference |  | 18 |  |  |
| Profile | Profile | int | 9 |  |  |  |
| Quantity | Quantity | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | string |  | 255 |  |  |
| Url | Url | url |  | 255 |  |  |
| User | User | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

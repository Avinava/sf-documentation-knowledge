---
title: "OrgMetricScanSummary"
domain: sfFieldRef
topic: orgmetricscansummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.166Z
estimatedTokens: 414
keywords: [OrgMetricScanSummary, results, summary, specific, feature, Salesforce, Optimizer, evaluation, API, version, 47.0, later]
---

# OrgMetricScanSummary

> Represents the results summary for a specific feature in
         a Salesforce Optimizer evaluation. This object is available in API
      version 47.0 and later.

# OrgMetricScanSummary

Represents the results summary for a specific feature in a Salesforce Optimizer evaluation. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrgMetricScanSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orgmetricscansummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ErrorMessage | Error Message | picklist |  | 40 |  |  |
| FeatureLimit | Limit | int | 9 |  |  |  |
| Id | Org Metric Scan Summary ID | id |  | 18 |  |  |
| ImplementationEffort | Implementation Effort | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemCount | Count | int | 9 |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Org Metric Scan Summary | string |  | 255 |  |  |
| OrgMetricId | Org Metric ID | reference |  | 18 |  |  |
| PercentUsage | Percent Usage | percent |  |  | 3 | 0 |
| ScanDate | Scan Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Unit | Unit | string |  | 64 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

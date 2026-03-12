---
title: "ScorecardMetric"
domain: sfFieldRef
topic: scorecardmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.116Z
estimatedTokens: 360
keywords: [ScorecardMetric, Stores, Salesforce, report, run, summarized, stored, added, metric, Scorecard, API, version, 40.0, later]
---

# ScorecardMetric

> Stores information about a Salesforce report that is run and summarized to
         get a single value. The stored value is added as a metric to the related Scorecard
         object. This object is available in API version 40.0 and later.

# ScorecardMetric

Stores information about a Salesforce report that is run and summarized to get a single value. The stored value is added as a metric to the related Scorecard object. This object is available in API version 40.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ScorecardMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_scorecardmetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | Scorecard Metric Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ReportId | Report ID | reference |  | 18 |  |  |
| ScorecardId | Scorecard ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

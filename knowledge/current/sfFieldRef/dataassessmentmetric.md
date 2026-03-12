---
title: "DataAssessmentMetric"
domain: sfFieldRef
topic: dataassessmentmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.504Z
estimatedTokens: 411
keywords: [DataAssessmentMetric, summary, statistics, matched, unmatched, account, records, Data.com, API, version, 37.0, later]
---

# DataAssessmentMetric

> Represents a summary of statistics for fields matched and unmatched
			in your account records with Data.com account records. This object is available in
		API version 37.0 and later.

# DataAssessmentMetric

Represents a summary of statistics for fields matched and unmatched in your account records with Data.com account records. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DataAssessmentMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dataassessmentmetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Data Assessment Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Data Assessment Metric | string |  | 255 |  |  |
| NumDuplicates | Number of Duplicates | int | 9 |  |  |  |
| NumMatched | Number of Matched Records | int | 9 |  |  |  |
| NumMatchedDifferent | Number of Matched Records with different field values | int | 9 |  |  |  |
| NumProcessed | Number of Processed Records | int | 9 |  |  |  |
| NumTotal | Total Number of Records to access | int | 9 |  |  |  |
| NumUnmatched | Number of Unmatched Records | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

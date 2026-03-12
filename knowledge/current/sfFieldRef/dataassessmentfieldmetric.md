---
title: "DataAssessmentFieldMetric"
domain: sfFieldRef
topic: dataassessmentfieldmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.497Z
estimatedTokens: 460
keywords: [DataAssessmentFieldMetric, summary, statistics, matched, blank, differing, account, records, org, compared, Data.com, API, version, 37.0, later]
---

# DataAssessmentFieldMetric

> Represents summary statistics for matched, blank, and differing
			fields in account records of an org compared to records in Data.com. This object is
		available in API version 37.0 and later.

# DataAssessmentFieldMetric

Represents summary statistics for matched, blank, and differing fields in account records of an org compared to records in Data.com. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DataAssessmentFieldMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dataassessmentfieldmetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataAssessmentMetricId | Data Assessment Metric ID | reference |  | 18 |  |  |
| FieldName | Field Name | string |  | 255 |  |  |
| Id | Data Assessment Field Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Data Assessment Field Metric | string |  | 255 |  |  |
| NumMatchedBlanks | Number of Matched Records that have blanks for this field | int | 9 |  |  |  |
| NumMatchedDifferent | Number of Matched Records that have different value for this field than Data.com | int | 9 |  |  |  |
| NumMatchedInSync | Number of Matched Records that have the same value for this field as Data.com | int | 9 |  |  |  |
| NumUnmatchedBlanks | Number of Unmatched Records that have blanks for this field | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

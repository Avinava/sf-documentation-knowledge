---
title: "DataAssessmentValueMetric"
domain: sfFieldRef
topic: dataassessmentvaluemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.510Z
estimatedTokens: 366
keywords: [DataAssessmentValueMetric, Summarizes, number, matched, account, records, Data.com, records.This, API, version, 37.0, later]
---

# DataAssessmentValueMetric

> Summarizes the number of fields matched for your account records
			with Data.com account records.This object is available in API version 37.0 and
		later.

# DataAssessmentValueMetric

Summarizes the number of fields matched for your account records with Data.com account records.This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DataAssessmentValueMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dataassessmentvaluemetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataAssessmentFieldMetricId | Data Assessment Field Metric ID | reference |  | 18 |  |  |
| FieldValue | Field Value | string |  | 255 |  |  |
| Id | Data Assessment Field Value Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Data Assessment Field Value Metric | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValueCount | Number of times this value appears in this field | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

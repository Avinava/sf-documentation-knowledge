---
title: "MLModelMetric"
domain: sfFieldRef
topic: mlmodelmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.493Z
estimatedTokens: 431
keywords: [MLModelMetric, metric, statistic, model, accuracy, precision, RSquared, model’s, metrics, performance, compare, models, API, version, 53.0]
---

# MLModelMetric

> Represents a metric or statistic about the related model, such as accuracy,
         precision, or RSquared. Use a model’s metrics to learn about its performance and to compare
         it with other models. This object is available in API version 53.0 and later.

# MLModelMetric

Represents a metric or statistic about the related model, such as accuracy, precision, or RSquared. Use a model’s metrics to learn about its performance and to compare it with other models. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MLModelMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mlmodelmetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BasicMetricValue | Basic Metric Value | double |  |  | 24 | 8 |
| ComplexMetricValue | Complex Metric Value | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataSetType | Dataset Type | picklist |  | 255 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| GraphType | Graph Type | picklist |  | 255 |  |  |
| Id | ML Model Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MetricType | Metric Type | picklist |  | 255 |  |  |
| ModelId | ML Model ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| RowCount | Row Count | int | 9 |  |  |  |
| Span | Metric Span | picklist |  | 255 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)

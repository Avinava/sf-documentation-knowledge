---
title: "Base Object Type"
domain: bi-dev-guide-rest
topic: base-object-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.015Z
estimatedTokens: 801
keywords: [Base, Analytics, template, variable]
---

# Base Object Type

> The base type for an Analytics template object variable.

# Base Object Type

The base type for an Analytics template object variable.

## Properties

Inherits properties from [Variable​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm "The abstract type for an Analytics template variable.").

Inherited by [Calculated​Insight​Field​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm "The sobject field type of an Analytics template variable."), [Calculated​Insight​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm "The sobject type of an Analytics template variable."), [Data​Lake​Object​Field​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm "The sobject field type of an Analytics template variable."), [Data​Lake​Object​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm "The sobject type of an Analytics template variable."), [Data​Model​Object​Field​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm "The sobject field type of an Analytics template variable."), [Data​Model​Object​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm "The sobject type of an Analytics template variable."), [Dataset​Any​Field​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_any_field_type.htm "The dataset generic field type of an Analytics template variable."), [Dataset​Date​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_date_type.htm "The date in a dateset type of an Analytics template variable."), [Dataset​Dimension​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_dimension_type.htm "The dimension in a dateset type of an Analytics template variable."), [Dataset​Measure​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_measure_type.htm "The measure in a dateset type of an Analytics template variable."), [Dataset​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_type.htm "The dateset type of an Analytics template variable."), [Object​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_object_type.htm "The object type of an Analytics template variable."), [SObject​Field​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm "The sobject field type of an Analytics template variable."), and [SObject​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm "The sobject type of an Analytics template variable.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| properties | Map<String, Variable​Type> | A map of defined properties and types of the object. | Small, 36.0 | 36.0 |
| required | String[] | A list of required properties for the object. | Small, 36.0 | 36.0 |
| strict​Validation | Boolean | Indicates whether to use strict validation when unexpected properties exist in the object payload (true) or not (false). | Small, 36.0 | 36.0 |

## Related Topics

- Variable​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm)
- Calculated​Insight​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Calculated​Insight​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
- Data​Lake​Object​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Data​Lake​Object​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
- Data​Model​Object​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Data​Model​Object​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
- Dataset​Any​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_any_field_type.htm)
- Dataset​Date​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_date_type.htm)
- Dataset​Dimension​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_dimension_type.htm)

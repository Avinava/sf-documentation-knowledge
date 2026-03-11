---
title: "Eligibility Rule Parameter"
domain: omnistudio
topic: eligibility-rule-parameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.378Z
keywords: [Eligibility, Rule, Parameter]
---

# Eligibility Rule Parameter

# Eligibility Rule Parameter

Output representation of the input and output variables for the decision table.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columnDataType | String | The type of data in a column. | Small, 66.0 | 66.0 |
| columnMapping | String | Source object path for mapping to the column of an entity. Use this field to specify input and output fields from multiple source objects. | Small, 66.0 | 66.0 |
| dataType | String | Data type of the field used in a decision table. Valid values are:StringNumberDateBooleanCurrencyPercentDatetime | Small, 66.0 | 66.0 |
| decimalScale | Integer | Number of digits allowed after the decimal point. | Small, 66.0 | 66.0 |
| domainEntity | String | The domain entity associated with the field. | Small, 66.0 | 66.0 |
| fieldName | String | Name of the field that's used in the decision table. | Small, 66.0 | 66.0 |
| fieldPath | String | Path of the field that's used in the decision table. | Small, 66.0 | 66.0 |
| isCreatable | Boolean | Indicates whether the field can be created when the source object record is created (true) or not (false). | Small, 66.0 | 66.0 |
| isGroupByField | Boolean | Indicates whether the field is used to group the business rules of the decision table (true) or (not). | Small, 66.0 | 66.0 |
| isNullable | Boolean | Indicates whether the field can have a null value in the source object records (true) or (not). | Small, 66.0 | 66.0 |
| isPriority | Boolean | Indicates whether the field is priority (true) or (not). | Small, 66.0 | 66.0 |
| isRequired | Boolean | Indicates whether the field condition is required (true) or not (false). | Small, 66.0 | 66.0 |
| maxlength | Integer | Maximum length of the field. | Small, 66.0 | 66.0 |
| operator | String | The operator applied to an associated decision table field to filter the data. Valid values are:EqualsNot EqualsGreater ThanGreater Or EqualLess ThanLess or Equal | Small, 66.0 | 66.0 |
| sequence | Integer | Sequence in which input fields are processed. | Small, 66.0 | 66.0 |
| sortType | String | Type of sorting done on the rows of a decision table. Valid values are:AscNullFirst- Sort row values in ascending order, showing null values first.AscNullLast- Sort row values in ascending order, showing null values last.DescNullFirst- Sort row values in descending order, showing null values first.DescNullLast- Sort row values in descending order, showing null values last.None - Show rows as they are without sorting. | Small, 66.0 | 66.0 |
| targetLookupObject | String | The lookup object associated with the source object field. | Small, 66.0 | 66.0 |
| usage | String | Field usage in the decision table. Valid values are:InputOutputRowCriteria | Small, 66.0 | 66.0 |
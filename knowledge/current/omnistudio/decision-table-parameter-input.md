---
title: "Decision Table Parameter Input"
domain: omnistudio
topic: decision-table-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.293Z
estimatedTokens: 502
keywords: [Decision, Table, Input, representation, defined, decision, table.]
---

# Decision Table Parameter Input

> Input representation of parameters defined for the decision
      table.

# Decision Table Parameter Input

Input representation of parameters defined for the decision table.

Root XML tag

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columnMapping | String | Source object path for mapping to the column of an entity.Use this field to specify input and output fields from multiple source objects. | Optional | 58.0 |
| dataType | String | Data type of the field used. Possible values are:BooleanCurrencyDateNumberPercentString | Optional | 58.0 |
| decimalScale | Integer | Precision of the field used. | Optional | 58.0 |
| domainEntity | String | Entity domain the field is mapped to. | Optional | 58.0 |
| fieldName | String | Name of the field to be used in the decision table. | Required | 58.0 |
| isGroupByField | Boolean | Indicates whether the field is used to group the business rules of the decision table (true) or not (false). | Optional | 58.0 |
| isPriority | Boolean | Indicates whether it’s a priority field (true) or not (false). | Optional | 58.0 |
| maxlength | Integer | Maximum length of the field used. | Optional | 58.0 |
| operator | String | Valid operators for a field based on its usage. Possible values are:BetweenDoesNotExistInEqualsExistsInGreaterOrEqualGreaterThanLessOrEqualLessThanMatchesNotEquals | Optional | 58.0 |
| sequence | Integer | Sequence in which input fields are processed. | Optional | 58.0 |
| sortType | String | Type of sorting to be done on the rows of a decision table. Possible values are:AscNullFirst- Sort row values in ascending order, showing null values first.AscNullLast- Sort row values in ascending order, showing null values last.DescNullFirst- Sort row values in descending order, showing null values first.DescNullLast- Sort row values in descending order, showing null values last.None - Show rows as they are without sorting. | Optional | 58.0 |
| usage | String | Usage type for a field. Possible values are:InputOutput | Required | 58.0 |

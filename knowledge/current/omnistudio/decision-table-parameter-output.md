---
title: "Decision Table Parameter Output"
domain: omnistudio
topic: decision-table-parameter-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.757Z
estimatedTokens: 410
keywords: [Decision, Output, representation]
---

# Decision Table Parameter Output

> Output representation of a decision table parameter.

# Decision Table Parameter Output

Output representation of a decision table parameter.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columnMapping | String | Source object path for mapping to the column of an entity. | Small, 58.0 | 58.0 |
| dataType | String | Data type of the field used. Possible values are:BooleanCurrencyDateNumberPercentString | Small, 58.0 | 58.0 |
| decimalScale | Integer | Precision of the field used. | Small, 58.0 | 58.0 |
| domainEntity | String | Entity domain the field is mapped to. | Small, 58.0 | 58.0 |
| fieldName | String | Name of the field to be used in the decision table. | Small, 58.0 | 58.0 |
| isGroupByField | Boolean | Indicates whether the field is used to group the business rules of the decision table (true) or not (false). | Small, 58.0 | 58.0 |
| isPriority | Boolean | Indicates whether it is a priority field (true) or not (false). | Small, 58.0 | 58.0 |
| maxlength | Integer | Maximum length of the field used. | Small, 58.0 | 58.0 |
| operator | String | Valid operators for a field based on its usage. Possible values are:BetweenDoesNotExistInEqualsExistsInGreaterOrEqualGreaterThanLessOrEqualLessThanMatchesNotEquals | Small, 58.0 | 58.0 |
| sequence | Integer | Sequence in which input fields are processed. | Small, 58.0 | 58.0 |
| sortType | String | Type of sorting done on the rows of a decision table. Possible values are:AscNullFirstAscNullLastDescNullFirstDescNullLastNone | Small, 58.0 | 58.0 |
| usage | String | Usage type for a field. Possible values are:InputOutput | Small, 58.0 | 58.0 |

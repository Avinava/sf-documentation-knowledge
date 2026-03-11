---
title: "Decision Table Condition Input"
domain: omnistudio
topic: decision-table-condition-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:08.186Z
keywords: [Decision, Table, Condition, Input, Note, See]
---

# Decision Table Condition Input

# Decision Table Condition Input

Input representation of the decision table condition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

IsDeleted and LastModifiedDate are not supported in Decision Table Condition Input.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | The field name that is selected as an input for the decision table. | Required | 55.0 |
| value | String | The value of the data type that is selected as an input.Specify the value of a decision table’s group-by field in double quotes, which is also applicable for numeric or integer type fields. For example, specify "value": "1000" for a Price numeric type field, and "value" : "102.0" for a Number integer type field. | Required | 55.0 |
| operator | String | The operator used for the input field.Valid values are:DoesNotExistIn—Use to check if the input value doesn’t exist in a multi-select picklist.Equals—Use to check if the input value equals to the configured value in the rule.ExistsIn—Use to check if the input value exists in a multi-select picklist.GreaterOrEqual—Use to check if the input value is greater than or equal to the configured value in the rule.GreaterThan—Use to check if the input value is greater than the configured value in the rule.LessOrEqual—Use to check if the input value is less than or equal to the configured value in the rule.LessThan—Use to check if the input value is less than the configured value in the rule.Matches—Use to check if the input value is a substring of the value in the rule.NotEquals—Use to check if the input value doesn’t equal to the configured value in the rule.NoteThe operator specified here overrides the operator defined in Decision Table. | Optional | 55.0 |
| sourceObject | String | The name of the source object for the input field. If the dataset link is configured with a single source object, the source object field isn’t mandatory. | OptionalNoteThis field is required only when the dataset link definition contains multiple source objects. | 55.0 |

#### See Also

-   [Supported Data Types and Operators](https://help.salesforce.com/s/articleView?id=ind.reference_decision_table_data_type_operator.htm&type=5&language=en_US)
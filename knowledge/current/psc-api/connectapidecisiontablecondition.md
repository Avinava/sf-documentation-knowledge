---
title: "ConnectApi.DecisionTableCondition"
domain: psc-api
topic: connectapidecisiontablecondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.594Z
estimatedTokens: 426
keywords: [ConnectApi.DecisionTableCondition, Input, representation, decision, condition]
---

# ConnectApi.DecisionTableCondition

> Input representation of the decision table condition.

# ConnectApi.DecisionTableCondition

Input representation of the decision table condition.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | The field name that is selected as an input for the decision table. | Required | 51.0 |
| operator | String | The operator used for the input field.Valid values are:DoesNotExistIn—Use to check if the input value doesn’t exist in a multi-select picklist.Equals—Use to check if the input value equals to the configured value in the rule.ExistsIn—Use to check if the input value exists in a multi-select picklist.GreaterOrEqual—Use to check if the input value is greater than or equal to the configured value in the rule.GreaterThan—Use to check if the input value is greater than the configured value in the rule.LessOrEqual—Use to check if the input value is less than or equal to the configured value in the rule.LessThan—Use to check if the input value is less than the configured value in the rule.Matches—Use to check if the input value is a substring of the value in the rule.NotEquals—Use to check if the input value doesn’t equal to the configured value in the rule.NoteThe operator specified here overrides the operator defined in Decision Table. | Optional | 51.0 |
| sourceObject | String | The name of source object for the input field. The source object field is not mandatory if the dataset link is configured with a single source object.NoteThe source object field is required only when the dataset link definition contains multiple source objects. | Optional | 52.0 |
| value | Object | The value of the data type that is selected as an input. | Required | 51.0 |

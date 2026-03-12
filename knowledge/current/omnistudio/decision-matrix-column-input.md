---
title: "Decision Matrix Column
    Input"
domain: omnistudio
topic: decision-matrix-column-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.232Z
estimatedTokens: 303
keywords: [Decision, Matrix, Column, Input, representation, add, columns]
---

# Decision Matrix Column
    Input

> Input representation of the information required to add, update, or
      delete columns in a decision matrix.

# Decision Matrix Column Input

Input representation of the information required to add, update, or delete columns in a decision matrix.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | The type of action you want to perform on a column.Possible values are:deleteupdate | RequiredNoteLeave this field blank if you’re adding a column in a decision matrix. | 53.0 |
| apiName | String | The API name of a column. | Optional | 53.0 |
| columnType | String | The type of a column.Possible values are:InputOutput | Required | 53.0 |
| dataType | String | The data type of a column. | Optional | 53.0 |
| displaySequence | Integer | The display sequence of a column. | Optional | 53.0 |
| id | String | The ID of the column record to be updated or deleted. | RequiredNoteLeave this field blank if you’re adding a column in a decision matrix. | 53.0 |
| name | String | The name of a column. | Required | 53.0 |
| rangeValues | String | The range values of a column. The range columns contain a sorted list of comma-separated values, which are updated whenever a row is added to the Decision Matrix Version. | Optional | 53.0 |

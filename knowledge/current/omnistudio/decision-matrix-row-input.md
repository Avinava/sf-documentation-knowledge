---
title: "Decision Matrix Row Input"
domain: omnistudio
topic: decision-matrix-row-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.244Z
estimatedTokens: 206
keywords: [Decision, Matrix, Row, Input, representation, information, required, add, update, delete, rows, decision, matrix, version.]
---

# Decision Matrix Row Input

> Input representation of the information required to add, update, or
      delete rows in a decision matrix version.

# Decision Matrix Row Input

Input representation of the information required to add, update, or delete rows in a decision matrix version.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Type of action you want to perform on a row.Possible values are:deleteupdate | RequiredNoteLeave this field blank if you’re adding a row in a decision matrix version. | 53.0 |
| id | String | The ID of the row record to be updated or deleted. | RequiredNoteLeave this field blank if you’re adding a row to a decision matrix version. | 53.0 |
| name | String | Name of the row. | Optional | 53.0 |
| rowData | Map<String, Object> | The key-value pair for the row. All column values are required for update and delete operations. | Required | 53.0 |

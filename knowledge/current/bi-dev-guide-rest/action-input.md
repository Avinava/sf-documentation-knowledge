---
title: "Action Input"
domain: bi-dev-guide-rest
topic: action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.600Z
estimatedTokens: 300
keywords: [Action, Input, rule, macro, perform, JSON, transformation]
---

# Action Input

> The action for a rule or macro to perform during a JSON transformation.

# Action Input

The action for a rule or macro to perform during a JSON transformation.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | Connect​Action​Type​Enum | The action types. Valid values are:Add - Add a value to an existing array in the JSON tree.Delete - Delete an attribute or node from the JSON tree.Eval - Evaluate an expression, usually for a macro definition.Put - Insert an attribute or node into the JSON tree.Replace - Performs a global search and replace on the entire JSON document.Set - Set the value of an existing attribute in the JSON tree. | Required | 43.0 |
| condition | String | The condition to meet for the action to be run. | Optional | 43.0 |
| description | String | The description of the action. | Optional | 43.0 |
| index | Integer | The index into an array. Use with Add actions. | Optional | 43.0 |
| key | String | The key of the action. Use with Put actions. | Optional | 43.0 |
| path | String | The JSON path to perform the action on. | Required | 43.0 |
| value | String | The value of the action. Use with all actions expect the Delete action. | Optional | 43.0 |

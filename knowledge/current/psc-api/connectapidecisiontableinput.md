---
title: "ConnectApi.DecisionTableInput"
domain: psc-api
topic: connectapidecisiontableinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.589Z
estimatedTokens: 119
keywords: [ConnectApi.DecisionTableInput, Input, representation, decision]
---

# ConnectApi.DecisionTableInput

> Input representation of the decision table.

# ConnectApi.DecisionTableInput

Input representation of the decision table.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | List<ConnectApi.​DecisionTableCondition> | List of decision table conditions on which the decision table executes. | Required | 51.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 51.0 |

## Related Topics

- ConnectApi.​DecisionTableCondition (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_input_decision_table_condition_representatio.htm)

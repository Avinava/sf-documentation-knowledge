---
title: "ConnectApi.DecisionTableInput"
domain: omnistudio
topic: connectapidecisiontableinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.755Z
keywords: [ConnectApi.DecisionTableInput]
---

# ConnectApi.DecisionTableInput

# ConnectApi.DecisionTableInput

Input representation of the decision table.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | List<ConnectApi.​DecisionTableCondition> | List of decision table conditions on which the decision table executes. | Required | 51.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 51.0 |
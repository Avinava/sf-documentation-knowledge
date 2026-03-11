---
title: "ConnectApi.RecordAlertActionInput"
domain: omnistudio
topic: connectapirecordalertactioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.784Z
keywords: [ConnectApi.RecordAlertActionInput]
---

# ConnectApi.RecordAlertActionInput

# ConnectApi.RecordAlertActionInput

Representation of the record alert action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionName | String | The action to perform on a record alert.Possible values are:Dismiss—The record alert notification doesn’t appear again.Snooze—The record alert notification reappears after the specified time period. | Required | 54.0 |
| actionParameters | List<ConnectApi.RecordAlert​​​ActionParameterInput> | The parameter specified for the record alert action. | Optional | 54.0 |
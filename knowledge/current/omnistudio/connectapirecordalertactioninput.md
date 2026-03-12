---
title: "ConnectApi.RecordAlertActionInput"
domain: omnistudio
topic: connectapirecordalertactioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.723Z
estimatedTokens: 145
keywords: [ConnectApi.RecordAlertActionInput, Representation, record, alert, action]
---

# ConnectApi.RecordAlertActionInput

> Representation of the record alert action.

# ConnectApi.RecordAlertActionInput

Representation of the record alert action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionName | String | The action to perform on a record alert.Possible values are:Dismiss—The record alert notification doesn’t appear again.Snooze—The record alert notification reappears after the specified time period. | Required | 54.0 |
| actionParameters | List<ConnectApi.RecordAlert​​​ActionParameterInput> | The parameter specified for the record alert action. | Optional | 54.0 |

## Related Topics

- ConnectApi.RecordAlert​​​ActionParameterInput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_record_alert_action_parameter.htm)

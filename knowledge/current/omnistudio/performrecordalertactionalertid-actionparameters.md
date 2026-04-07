---
title: "performRecordAlertAction(alertId, actionParameters)"
domain: omnistudio
topic: performrecordalertactionalertid-actionparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:35.410Z
estimatedTokens: 229
keywords: [performRecordAlertAction, alertId, actionParameters, Snooze, internal, record, alerts, time, period, dismiss, API, Requires, Chatter]
---

> Snooze internal record alerts for a specified time period or dismiss
      them.

# performRecordAlertAction(alertId, actionParameters)

Snooze internal record alerts for a specified time period or dismiss them.

## API Version

53.0

## Requires Chatter

No

## Signature

public static ConnectApi.RecordAlertRepresentation performRecordAlertAction(String alertId, ConnectApi.RecordAlertActionInputRepresentation actionParameters)

## Parameters

alertId

Type: String

The record alert ID on which you want to perform an action.

actionParameters

Type: [ConnectApi.RecordAlertActionInput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_record_alert_action.htm "Representation of the record alert action.")

The parameter specified for the record alert action.

## Return Value

Type: [ConnectApi.RecordAlert](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_record_alert.htm "Representation of the details of a record alert.")

## Related Topics

- ConnectApi.RecordAlertActionInput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_record_alert_action.htm)
- ConnectApi.RecordAlert (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_record_alert.htm)

---
title: "performActionOnExternalAlerts(sourceSystemId, actionParameters)"
domain: omnistudio
topic: performactiononexternalalertssourcesystemid-actionparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.585Z
keywords: [performActionOnExternalAlerts, sourceSystemId, actionParameters, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# performActionOnExternalAlerts(sourceSystemId, actionParameters)

# performActionOnExternalAlerts(sourceSystemId, actionParameters)

Snooze external record alerts that are from an external source system for a specified time period or dismiss them.

## API Version

54.0

## Requires Chatter

No

## Signature

public static ConnectApi.RecordAlertRepresentation performActionOnExternalAlerts(String sourceSystemId, ConnectApi.RecordAlertActionInputRepresentation actionParameters)

## Parameters

sourceSystemId

Type: String

The ID of the system from which the record was sourced.

actionParameters

Type: [ConnectApi.RecordAlertActionInput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_record_alert_action.htm "Representation of the record alert action.")

The parameter specified for the record alert action.

## Return Value

Type: [ConnectApi.RecordAlert](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_record_alert.htm "Representation of the details of a record alert.")
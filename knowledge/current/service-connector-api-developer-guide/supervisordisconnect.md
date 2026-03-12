---
title: "supervisorDisconnect"
domain: service-connector-api-developer-guide
topic: supervisordisconnect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.647Z
estimatedTokens: 217
keywords: [supervisorDisconnect, Disconnect, supervised, call]
---

# supervisorDisconnect

> Disconnect a supervised call.

# supervisorDisconnect

Disconnect a supervised call.

## Signature

supervisorDisconnect(supervisedCallInfo) → Promise.<[SupervisorHangupResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisorhangupresult.htm "Represents a result type for an ended supervisor call.")\>

## Parameters

| Field | Details |
| --- | --- |
| supervisedCallInfo | TypeobjectDescriptionInformation about the call to be supervised. This value is a JavaScript object with the following properties:voiceCallId — The unique voice call ID.callId — The unique vendor call ID.to — The phone number in the "To" field of the call for outbound calls.from — The phone number in the "From" field of the call for inbound calls.callType — The type of call. Possible values are Inbound, Outbound, and Transfer. |

## Related Topics

- SupervisorHangupResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisorhangupresult.htm)

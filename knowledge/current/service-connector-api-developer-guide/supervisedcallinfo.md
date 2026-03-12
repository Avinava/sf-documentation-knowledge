---
title: "SupervisedCallInfo"
domain: service-connector-api-developer-guide
topic: supervisedcallinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.658Z
estimatedTokens: 354
keywords: [SupervisedCallInfo, supervised, call, Functions]
---

# SupervisedCallInfo

> Represents information about a supervised call.

# SupervisedCallInfo

Represents information about a supervised call.

## Constructor

new SupervisedCallInfo(param)

## Functions Where Used

-   [supervisorBargeIn()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisorbargein.htm "Barge in on a call as a supervisor. The supervisor becomes a new participant in the call. The supervisor is unmuted and has the usual call controls (mute, hold, and recording toggles).")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionInformation about the supervised call. |
| param.callId | TypestringDescriptionRequired. The unique vendor call ID. |
| param.voiceCallId | TypestringDescriptionThe unique voice call ID (voiceCallId). |
| param.callType | TypestringDescriptionThe type of call. Possible values include:InboundOutboundCallbackAddParticipantTransfer |
| param.from | TypestringDescriptionThe phone number in the "From" field of the call for inbound calls. |
| param.to | TypestringDescriptionThe phone number in the "To" field of the call for outbound calls. |
| param.supervisorName | TypestringDescriptionThe name of the supervisor who is barging in to the call. The name is shown to the supervised rep. |
| param.isBargedIn | TypebooleanDescriptionIndicates whether the supervisor has barged in (true) or is listening in (false) to the call. |

## Related Topics

- supervisorBargeIn() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisorbargein.htm)

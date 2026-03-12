---
title: "endCall"
domain: service-connector-api-developer-guide
topic: endcall
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.391Z
estimatedTokens: 129
keywords: [endCall, End, call]
---

# endCall

> End a call.

# endCall

End a call.

## Signature

endCall(call, agentStatus) → Promise.<[HangupResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_hangupresult.htm "Represents a result type for an ended call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionThe call to be ended. |
| agentStatus | TypestringDescriptionThe rep status to set after ending the call. Valid values correspond to the AGENT_STATUS enum. |

## Related Topics

- HangupResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_hangupresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

---
title: "unmute"
domain: service-connector-api-developer-guide
topic: unmute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.459Z
estimatedTokens: 117
keywords: [unmute, call]
---

# unmute

> Unmute a call.

# unmute

Unmute a call.

## Signature

unmute(call) → Promise.<[MuteToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_mutetoggleresult.htm "Represents the result when toggling the mute state for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionFor multi-party calls and consult calls, the call object of the call that’s being unmuted. |

## Related Topics

- MuteToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_mutetoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

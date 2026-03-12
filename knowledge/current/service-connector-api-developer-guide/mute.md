---
title: "mute"
domain: service-connector-api-developer-guide
topic: mute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.431Z
estimatedTokens: 115
keywords: [mute, call]
---

# mute

> Mute a call.

# mute

Mute a call.

## Signature

mute(call) → Promise.<[MuteToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_mutetoggleresult.htm "Represents the result when toggling the mute state for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionFor multi-party calls and consult calls, the call object of the call that’s being muted. |

## Related Topics

- MuteToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_mutetoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

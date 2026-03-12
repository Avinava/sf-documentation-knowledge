---
title: "pauseRecording"
domain: service-connector-api-developer-guide
topic: pauserecording
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.436Z
estimatedTokens: 127
keywords: [pauseRecording, Pause, recording, call]
---

# pauseRecording

> Pause the recording of a call.

# pauseRecording

Pause the recording of a call.

## Signature

pauseRecording(call) → Promise.<[RecordingToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm "Represents the result when toggling the recording for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionRequired if the callType is Consult; otherwise optional. The call to pause recording for. |

## Related Topics

- RecordingToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

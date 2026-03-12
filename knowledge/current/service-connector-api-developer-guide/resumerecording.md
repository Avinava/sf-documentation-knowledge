---
title: "resumeRecording"
domain: service-connector-api-developer-guide
topic: resumerecording
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.442Z
estimatedTokens: 126
keywords: [resumeRecording, Resume, recording, call]
---

# resumeRecording

> Resume recording a call.

# resumeRecording

Resume recording a call.

## Signature

resumeRecording(call) → Promise.<[RecordingToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm "Represents the result when toggling the recording for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionRequired if the callType is Consult; otherwise optional. The call to resume recording for. |

## Related Topics

- RecordingToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

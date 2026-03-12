---
title: "resume"
domain: service-connector-api-developer-guide
topic: resume
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.439Z
estimatedTokens: 118
keywords: [resume, call, hold]
---

# resume

> Resume a call that is on hold.

# resume

Resume a call that is on hold.

## Signature

resume(call) → Promise.<[HoldToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm "Represents the result when toggling the hold state for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call | TypePhoneCallDescriptionReserved for future use. Currently, this value isn’t used and is always null. |

## Related Topics

- HoldToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

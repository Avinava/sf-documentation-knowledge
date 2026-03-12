---
title: "conference"
domain: service-connector-api-developer-guide
topic: conference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.381Z
estimatedTokens: 278
keywords: [conference, call, multiple, calls, Multiparty, enabled, removes, rep, consult, adds]
---

# conference

> Create a conference call from multiple calls. If Multiparty
        Calls is enabled, this method removes a rep from a consult call and adds them to a
        multiparty call.

# conference

Create a conference call from multiple calls. If Multiparty Calls is enabled, this method removes a rep from a consult call and adds them to a multiparty call.

## Signature

conference(calls) → Promise.<[ConferenceResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_conferenceresult.htm "Represents the result for the conference() function.")\> (without Multiparty Calls enabled)

conference(calls) → Promise.<[HoldToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm "Represents the result when toggling the hold state for a call.")\> (with Multiparty Calls enabled)

## Parameters

| Field | Details |
| --- | --- |
| calls | TypeArray.<PhoneCall>DescriptionThe calls to conference together. In API version 63.0 or later, this function supports conferencing a consult call and a multiparty call if Multiparty Calls are enabled. In API version 62.0 and earlier, this function supports conferencing two calls together. |

## Related Topics

- ConferenceResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_conferenceresult.htm)
- HoldToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

---
title: "supervisorBargeIn"
domain: service-connector-api-developer-guide
topic: supervisorbargein
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.644Z
estimatedTokens: 215
keywords: [supervisorBargeIn, Barge, call, supervisor, becomes, new, participant, unmuted, usual, mute, hold, recording, toggles]
---

# supervisorBargeIn

> Barge in on a call as a supervisor. The supervisor becomes
        a new participant in the call. The supervisor is unmuted and has the usual call controls
        (mute, hold, and recording toggles).

# supervisorBargeIn

Barge in on a call as a supervisor. The supervisor becomes a new participant in the call. The supervisor is unmuted and has the usual call controls (mute, hold, and recording toggles).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=service_connector_api_developer_guide)

#### Note

This method can only be invoked if the rep has the capability hasSupervisorBargeIn.

## Signature

supervisorBargeIn(supervisedCallInfo) → Promise.<[SupervisedCallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm "Represents the result when supervising a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| supervisedCallInfo | TypeSupervisedCallInfoDescriptionInfo about the call to be supervised. |

## Related Topics

- SupervisedCallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm)
- SupervisedCallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm)

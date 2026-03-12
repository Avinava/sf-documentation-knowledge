---
title: "superviseCall"
domain: service-connector-api-developer-guide
topic: supervisecall
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.641Z
estimatedTokens: 261
keywords: [superviseCall, Supervise, call, supervised, connected, muted, exist, “Leave, Call”]
---

# superviseCall

> Supervise a call. The supervised call is connected and
        muted. No other call controls exist other than “Leave Call”.

# superviseCall

Supervise a call. The supervised call is connected and muted. No other call controls exist other than “Leave Call”.

The vendor call ID is part of the [SuperviseCallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm "Represents the result when supervising a call.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=service_connector_api_developer_guide)

#### Note

This method can only be invoked if the rep has the capability hasSupervisorListenIn.

## Signature

superviseCall(supervisedCallInfo) → Promise.<[SuperviseCallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm "Represents the result when supervising a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| supervisedCallInfo | TypeSupervisedCallInfoDescriptionInfo about the call to be supervised. |

## Related Topics

- SuperviseCallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm)
- SupervisedCallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm)

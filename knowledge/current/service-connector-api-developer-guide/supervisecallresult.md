---
title: "SuperviseCallResult"
domain: service-connector-api-developer-guide
topic: supervisecallresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.653Z
estimatedTokens: 246
keywords: [SuperviseCallResult, result, supervising, call, Functions]
---

# SuperviseCallResult

> Represents the result when supervising a call.

# SuperviseCallResult

Represents the result when supervising a call.

## Constructor

new SuperviseCallResult(param)

## Functions Where Used

-   [superviseCall()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisecall.htm "Supervise a call. The supervised call is connected and muted. No other call controls exist other than “Leave Call”.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe supervise call result. |
| param.call | TypePhoneCallDescriptionThe call to be supervised. |

## Related Topics

- superviseCall() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisecall.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

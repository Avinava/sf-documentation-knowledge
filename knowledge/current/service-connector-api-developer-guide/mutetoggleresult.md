---
title: "MuteToggleResult"
domain: service-connector-api-developer-guide
topic: mutetoggleresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.566Z
estimatedTokens: 313
keywords: [MuteToggleResult, result, toggling, mute, state, call, Functions]
---

# MuteToggleResult

> Represents the result when toggling the mute state for a
        call.

# MuteToggleResult

Represents the result when toggling the mute state for a call.

## Constructor

new MuteToggleResult(param)

## Functions Where Used

-   [mute()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_mute.htm "Mute a call.")
-   [unmute()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_unmute.htm "Unmute a call.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe mute toggle result. |
| param.isGlobal | TypebooleanDescriptionIndicates whether a mute action is for a rep to mute a specific call participant, such as themself (false) or to mute everyone on the call (true). The default is false. |
| param.isMuted | TypebooleanDescriptionIndicates whether the call is muted. |

## Related Topics

- mute() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_mute.htm)
- unmute() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_unmute.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)

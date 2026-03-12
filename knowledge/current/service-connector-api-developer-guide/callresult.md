---
title: "CallResult"
domain: service-connector-api-developer-guide
topic: callresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.507Z
estimatedTokens: 355
keywords: [CallResult, result, call-related, functions]
---

# CallResult

> Represents the result type for call-related
        functions.

# CallResult

Represents the result type for call-related functions.

## Constructor

new CallResult(param)

## Functions Where Used

-   [acceptCall()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [addParticipant()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm "Add a participant to a call.")
-   [declineCall()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_declinecall.htm "Decline a call.")
-   [dial()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm "Dial a contact.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the call result. |
| param.call | TypePhoneCallDescriptionThe call associated with this result. |

## Related Topics

- acceptCall() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- addParticipant() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm)
- declineCall() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_declinecall.htm)
- dial() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

---
title: "ParticipantResult"
domain: service-connector-api-developer-guide
topic: participantresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.570Z
estimatedTokens: 294
keywords: [ParticipantResult, result, addParticipant, function, Functions]
---

# ParticipantResult

> Represents the result for the addParticipant() function.

# ParticipantResult

Represents the result for the addParticipant() function.

## Constructor

new ParticipantResult(initialCallHasEnded, callInfo, phoneNumber, callId)

## Functions Where Used

-   [addParticipant()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm "Add a participant to a call.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| initialCallHasEnded | TypebooleanDescriptionThe parent call value for callAttributes.initialCallHasEnded. |
| callInfo | TypeCallInfoDescriptionCall info for the transfer call using key value pairs in a JSON object. |
| phoneNumber | TypestringDescriptionPhone number of the new participant. |
| callId | TypestringDescriptionOptional. New transfer call ID. |

## Related Topics

- addParticipant() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- CallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm)

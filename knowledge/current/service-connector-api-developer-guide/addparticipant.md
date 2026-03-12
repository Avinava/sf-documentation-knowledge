---
title: "addParticipant"
domain: service-connector-api-developer-guide
topic: addparticipant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.377Z
estimatedTokens: 255
keywords: [addParticipant, Add, participant, call]
---

# addParticipant

> Add a participant to a call.

# addParticipant

Add a participant to a call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=service_connector_api_developer_guide)

#### Note

As with outbound calls, you must create a voice call when adding a new participant. To learn more, see [Create Voice Call API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm).

## Signature

addParticipant(contact, parentCall, isBlindTransfer) → Promise.<[ParticipantResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_participantresult.htm "Represents the result for the addParticipant() function.")\>

## Parameters

| Field | Details |
| --- | --- |
| contact | TypeContactDescriptionThe contact to add. |
| parentCall | TypePhoneCallDescriptionThe existing parent call. |
| isBlindTransfer | TypebooleanDescriptionIndicates whether this participant is a blind transfer. |

## Related Topics

- ParticipantResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_participantresult.htm)
- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

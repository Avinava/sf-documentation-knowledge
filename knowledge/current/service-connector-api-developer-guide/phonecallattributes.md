---
title: "PhoneCallAttributes"
domain: service-connector-api-developer-guide
topic: phonecallattributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.587Z
estimatedTokens: 361
keywords: [PhoneCallAttributes, attributes, phone, call, key, pairs, JSON, Objects]
---

# PhoneCallAttributes

> Represents the attributes for the phone call using key
        value pairs in a JSON object.

# PhoneCallAttributes

Represents the attributes for the phone call using key value pairs in a JSON object.

## Constructor

new PhoneCallAttributes(param)

## Objects Where Used

-   [PhoneCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm "Represents information about a phone call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the call attributes. |
| param.dialerType | TypestringDescriptionThe dialer type of the call. Options are OutboundPreview and None. |
| param.hasSupervisorBargedIn | TypebooleanDescriptionIndicates whether the supervisor has barged into the call (true) or not (false). |
| param.isAutoMergeOn | TypebooleanDescriptionFor multi-party calls, indicates that the call can’t be put on hold and should be auto-merged. |
| param.isConsultCall | TypebooleanDescriptionIndicates whether the call is a consult call (true) or not (false). |
| param.isOnHold | TypebooleanDescriptionIndicates whether the call is on hold (true) or not (false). |
| param.parentId | TypestringDescriptionThe ID of the call that’s a parent to this call. |
| param.participantType | TypestringDescriptionThe participant type associated with the call. Options include Agent, Initial_Caller, Third_Party, and Supervisor. |
| param.voiceCallId | TypestringDescriptionThe ID of the voice call. |

## Related Topics

- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)

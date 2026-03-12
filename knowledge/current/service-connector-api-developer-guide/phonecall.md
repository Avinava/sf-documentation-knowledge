---
title: "PhoneCall"
domain: service-connector-api-developer-guide
topic: phonecall
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.582Z
estimatedTokens: 968
keywords: [PhoneCall, phone, call, Objects]
---

# PhoneCall

> Represents information about a phone call.

# PhoneCall

Represents information about a phone call.

## Constructor

new PhoneCall(param)

## Objects Where Used

-   [CallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm "Represents the result type for call-related functions.")
-   [HangupResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_hangupresult.htm "Represents a result type for an ended call.")
-   [RecordingToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm "Represents the result when toggling the recording for a call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with a phone call. |
| param.agentStatus | TypestringDescriptionOptional. Status of the rep on the call. |
| param.agentARN | TypestringDescriptionOptional. Amazon Resource Name (ARN) identifying the rep in the telephony system.RequiredNo |
| param.callAttributes | TypePhoneCallAttributesDescriptionAttributes associated with the call. The values in this object are immutable and can’t be updated by the partner.callAttributes: {                                                     voiceCallId: string,                                                     participantType: string,                                                     dialerType: string,                                                     parentId: string,                                                     hasSupervistorBargedIn: boolean,                                                     isAutoMergeOn: boolean,                                                     isConsultCall: boolean,                                                     isOnHold: boolean                                                     } |
| param.callId | TypestringDescriptionThe unique identifier for the phone call. This ID is used to track and manage the call within the system.RequiredYes |
| param.callInfo | TypeCallInfoDescriptionOptional. Call info using key value pairs in a JSON object.callInfo: {                                                 acceptEnabled: boolean,                                                  declineEnabled: boolean,                                                 holdEnabled: boolean,                                                 muteEnabled: boolean,                                                 extensionEnabled: boolean,                                                 swapEnabled: boolean,                                                 conferenceEnabled: boolean,                                                 extensionEnabled: boolean,                                                 recordEnabled: boolean,                                                 addCallerEnabled: boolean                                                 } |
| param.callType | TypestringDescriptionOptional. The type of call. One of these values:InboundOutboundCallbackAddParticipantConsult |
| param.closeCallOnError | TypebooleanDescriptionOptional. Whether the call was closed for an error. |
| param.connectionId | TypestringDescriptionOptional. An identifier for a call leg. By default, the connectionId value is the same as callId. Telephony providers other than Amazon Connect don’t need to set the connectionId. |
| param.contact | TypeContactDescriptionOptional. The call target or contact. |
| param.phoneNumber | TypestringDescriptionOptional. The phone number associated with this call; usually an external number. |
| param.reason | TypestringDescriptionOptional. Reason for phone call. |
| param.state | TypestringDescriptionOptional. The state of the call. For example: ringing, connected, declined, failed. |

## Code Examples

```
callAttributes: {
                                                    voiceCallId: string,
                                                    participantType: string,
                                                    dialerType: string,
                                                    parentId: string,
                                                    hasSupervistorBargedIn: boolean,
                                                    isAutoMergeOn: boolean,
                                                    isConsultCall: boolean,
                                                    isOnHold: boolean
                                                    }
```

```
callInfo: {
                                                acceptEnabled: boolean, 
                                                declineEnabled: boolean,
                                                holdEnabled: boolean,
                                                muteEnabled: boolean,
                                                extensionEnabled: boolean,
                                                swapEnabled: boolean,
                                                conferenceEnabled: boolean,
                                                extensionEnabled: boolean,
                                                recordEnabled: boolean,
                                                addCallerEnabled: boolean
                                                }
```

## Related Topics

- CallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm)
- HangupResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_hangupresult.htm)
- RecordingToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm)
- PhoneCallAttributes (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecallattributes.htm)
- CallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm)
- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)

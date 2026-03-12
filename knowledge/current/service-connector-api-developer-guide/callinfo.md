---
title: "CallInfo"
domain: service-connector-api-developer-guide
topic: callinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.504Z
estimatedTokens: 1064
keywords: [CallInfo, call, whether, softphone, control, buttons, enabled, key, pairs, JSON, sent, start, ongoing, Objects]
---

# CallInfo

> Represents information about a call such as whether it is a
        softphone call, call control buttons are enabled and so on, using key value pairs in a JSON
        object. The field values can be sent at the start of the call or during an ongoing
        call.

# CallInfo

Represents information about a call such as whether it is a softphone call, call control buttons are enabled and so on, using key value pairs in a JSON object. The field values can be sent at the start of the call or during an ongoing call.

## Constructor

new CallInfo(param)

## Objects Where Used

-   [PhoneCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm "Represents information about a phone call.")
-   [ParticipantResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_participantresult.htm "Represents the result for the addParticipant() function.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the call info. |
| param.acceptEnabled | TypebooleanDescriptionIndicates whether the accept call button is enabled. |
| param.addCallerEnabled | TypebooleanDescriptionIndicates whether the add caller button is enabled. |
| param.callStateTimestamp | TypedateDescriptionThe call timestamp. |
| param.conferenceEnabled | TypebooleanDescriptionIndicates whether the merge button is enabled. |
| param.declineEnabled | TypebooleanDescriptionIndicates whether the decline call button is enabled. |
| param.extensionEnabled | TypebooleanDescriptionIndicates whether an extension is enabled. |
| param.holdEnabled | TypebooleanDescriptionIndicates whether the hold button is enabled. |
| param.initialCallId | TypestringDescriptionInitial voice call ID. |
| param.isBargeable | TypebooleanDescriptionReserved for future use. |
| param.isMuted | TypebooleanDescriptionIndicates whether the call is on mute. |
| param.isOnHold | TypebooleanDescriptionIndicates whether the call is on hold. |
| param.isRecordingPaused | TypebooleanDescriptionIndicates whether the recording is paused. |
| param.isReplayable | TypebooleanDescriptionIndicates whether the call is replayable. |
| param.isSoftphoneCall | TypebooleanDescriptionIndicates whether this call is made with a softphone. |
| param.muteEnabled | TypebooleanDescriptionIndicates whether the mute button is enabled. |
| param.recordEnabled | TypebooleanDescriptionIndicates whether the toggle recording button is enabled. |
| param.removeParticipantVariant | TypestringDescriptionDescribes the remove participant button functionality.Possible values are:ALWAYS: Remove participant button is always enabled.NEVER: Remove participant button is always disabled.ALWAYS_EXCEPT_ON_HOLD: Remove participant button is disabled when the participant is on hold. |
| param.renderContactId | TypestringDescriptionIndicates the contact ID of the call intended to render. |
| param.showMuteButton | TypebooleanDescriptionIndicates whether to show the mute button. Default value is true. |
| param.showRecordButton | TypebooleanDescriptionIndicates whether to show the record button. Default value is true. |
| param.showAddCallerButton | TypebooleanDescriptionIndicates whether to show the add caller button. Default value is true. |
| param.showAddBlindTransferButton | TypebooleanDescriptionIndicates whether to show the blind transfer button. Default value is true. |
| param.showMergeButton | TypebooleanDescriptionIndicates whether to show the merge button. Default value is true. |
| param.showSwapButton | TypebooleanDescriptionIndicates whether to show the swap button. Default value is true. |
| param.swapEnabled | TypebooleanDescriptionIndicates whether the swap button is enabled. |
| param.queueId | TypestringDescriptionThe unique ID of the queue taken from the telephony provider's side. |
| param.queueName | TypestringDescriptionThe name of the queue that appears in the call record. |
| param.queueTimestamp | TypedateDescriptionThe date and time (in UTC) when the call entered the queue. Measured in milliseconds since the Unix epoch. |
| param.endCallDisabled | TypebooleanDescriptionIndicates whether the End Call button in the softphone is disabled (true) or enabled (false) for a call. By default, this value is false, meaning the End Call button is enabled for an active call. If true, the End Call button is disabled until enabled back for an active call. |

## Related Topics

- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
- ParticipantResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_participantresult.htm)

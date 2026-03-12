---
title: "Service Cloud Voice LWC Toolkit API Telephony Actions"
domain: voice-developer-guide
topic: service-cloud-voice-lwc-toolkit-api-telephony-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.731Z
estimatedTokens: 842
keywords: [Service, Cloud, Voice, LWC, Toolkit, API, Telephony, Actions, components, context-aware, listening, raising, events, phone, calls]
---

# Service Cloud Voice LWC Toolkit API Telephony Actions

> Make your components context-aware by listening to and raising events during phone
  calls.

# Service Cloud Voice LWC Toolkit API Telephony Actions

Make your components context-aware by listening to and raising events during phone calls.

Programmatically raise softphone call control events or even build your own softphone UI. For example, build integrations with peripherals like Bluetooth headsets, or programmatically perform actions on the rep’s behalf, such as adding a participant to a conference call.

The following methods are available.

| Method Name | Description | Arguments |
| --- | --- | --- |
| mute | Mute the call. | None. |
| unmute | Unmute the call. | None. |
| hold | Put the call on hold. | Name: participantTypeType: stringDescription: The participant type whose call was put on hold. Possible values are "Initial_Caller" and "Third_Party". |
| resume | Resume the call if it's on hold. | Name: participantTypeType: stringDescription: The participant type whose call was resumed. Possible values are "Initial_Caller" and "Third_Party". |
| endCall | End the call. | None. |
| acceptCall | Accept the call. | None. |
| declineCall | Decline the call. | None. |
| pauseRecording | Pause the call recording. | None. |
| resumeRecording | Resume the call recording. | None. |
| startPreviewCall | Start the preview call. | Name: phoneNumberType: stringDescription: The phone number for the preview call. |
| merge | Resume the call for all participants on a three-way call. | None. |
| swap | Swap two of the participants on a three-way call, where one participant is on hold. The call for the participant on hold resumes while the other participant is put on hold. | None. |
| addParticipant | Add a third participant to an existing call between a rep and a caller. | Name: contactTypeType: stringDescription: The transfer destination type for addParticipant provided by the customer. Possible values are "PhoneNumber" and "AgentOrQueueId".Name: contactValueType: stringDescription: The transfer destination value for addParticipant provided by the customer. Possible values are the phone number if contactType is "PhoneNumber", or the agent ID or queue ID if contactType is "AgentOrQueueId".Name: isBlindTransferType: booleanDescription: Indicates whether the participant was added through a blind transfer. If true, the participant was added through a blind transfer. For Service Cloud Voice with Amazon Connect and Service Cloud Voice with Partner Telephony from Amazon Connect, the only accepted value is false. |
| sendDigits | Send digits to the active call. | Name: digitType: stringDescription: The digits of the phone number sent by the rep. Possible values are 0-9, *, #, A, B, C, D, and comma (,). |
| endCall | End the call. | Name: participantTypeType: stringDescription: The participant who ended the call. Possible values are "Initial_Caller", "Third_Party", and "Agent". |

To perform telephony actions, load the Service Cloud Voice Lightning Web Components ToolkitApi, and then add a telephony method for each call control you want to allow administrators to perform.

For example, add the following components to accept calls, decline calls, end calls, pause call recordings, and resume paused recordings.

```

```

See the [Toolkit API sampleLWCComponent.js file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ToolkitAPI/sampleLWCComponent/sampleLWCComponent.js) in GitHub for more examples.

## Code Examples

```
({
   onAcceptCall() {
     this.getToolkitApi().acceptCall();
   }    
   onDeclineCall() {
     this.getToolkitApi().declineCall();
   }  
   onEndCall() {
     this.getToolkitApi().endCall(this.comboBoxRemoveParticipantValue);
   }
   onPauseRecording() {
     this.getToolkitApi().pauseRecording();
   }
   onResumeRecording() {
     this.getToolkitApi().resumeRecording();
   }
})
```

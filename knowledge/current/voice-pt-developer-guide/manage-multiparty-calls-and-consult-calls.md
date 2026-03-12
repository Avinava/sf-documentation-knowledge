---
title: "Manage Multiparty Calls and Consult Calls"
domain: voice-pt-developer-guide
topic: manage-multiparty-calls-and-consult-calls
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:22.077Z
estimatedTokens: 3944
keywords: [Manage, Multiparty, Calls, Consult, Include, six, participants, voice, call, including, rep, customer, addition, supervisor, listen]
---

# Manage Multiparty Calls and Consult Calls

> Include up to six participants on a voice call, including the rep and customer. In
  addition to the six participants, a supervisor can listen in or barge in. While on a call with a
  customer, a rep can make a separate consult call before merging the calls together or ending the
  consult call. During the consult call, multiparty call participants are on a type of hold.
  Telephony partners specify whether to disable hold music so that call group participants can
  continue their conversation.

# Manage Multiparty Calls and Consult Calls

Include up to six participants on a voice call, including the rep and customer. In addition to the six participants, a supervisor can listen in or barge in. While on a call with a customer, a rep can make a separate consult call before merging the calls together or ending the consult call. During the consult call, multiparty call participants are on a type of hold. Telephony partners specify whether to disable hold music so that call group participants can continue their conversation.

Before you begin, get access to the [demo connector sample code](https://github.com/salesforce-misc/byo-demo-connector) in GitHub. Use the demo connector as a reference when developing your custom integration code. Salesforce provides support for features in the demo connector, but we can’t debug or troubleshoot custom connector code.

Contact Salesforce Support to request that a support representative set these org permissions. If they’re set, the feature is automatically enabled and requires no admin setup.

-   Service Cloud Voice: Multi-party conferencing
-   Service Cloud Voice: Multi-party consult

To familiarize yourself with the API and event sequences for multiparty and consult calls, see [Call Scenario Diagrams](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm "Understand different call scenarios, such as a rep receiving or declining an inbound call or multiparty and consult calls.").

## Multiparty Calls and Consult Calls Limitations and Considerations

Keep these limitations and considerations in mind when setting up and using multiparty and consult calls.

Feature compatibility and support:

-   Service Cloud Voice Toolkit API isn’t supported for multiparty calls.
-   Omni-Channel Unified Routing isn’t compatible with multiparty calls.
-   Compact layout call controls on the Voice Call record page reflect the initial call before a multiparty call was started. The compact layout call controls don’t reflect a multiparty call or consult call.
-   Using keyboard shortcuts for call controls and using a headset to control call actions aren't supported for multiparty and consult calls.
-   When Service Cloud Voice is in [Voice Resiliency](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_resiliency.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.") mode, consult calls are supported, but there’s no association established between the consult call and multiparty call entities. Also, there’s no notification in the conversation component when a consult call starts.
-   Multiparty calls and consult calls aren’t supported if Service Cloud Voice is part of an app with standard navigation.

User experience:

-   By design, a rep on a multiparty call can’t end the call for all participants at one time. They must end the call for each participant one by one, or each participant must leave the call individually.
-   The contact list for adding a participant to a multiparty call doesn’t filter out reps that are already part of the call group. If a telephony partner requires this behavior, they are responsible for handling it when returning the getContacts() or getPhoneContacts() API.
-   Transfer calls and multiparty calls are not automatically merged if a rep selects New Call.
-   Unlike a warm transfer, where a rep can hold or resume a call, there are no hold and resume options on the call entry for multiparty or consult calls.
-   If the multiparty calls feature is enabled, phone controls in the Omni-Channel utility are updated for standard calls and multiparty calls.
-   When the call group is toggled open, the timer might default to 00:00 for less than a second before displaying the correct time.
-   In the demo connector implementation, if a rep adds an external contact to a multiparty call, the external contact appears in the call group for only the rep who added them. The external contact doesn’t appear in the call group for other call participants.
-   A rep can start a consult call when there is an active multiparty call.
-   A rep who receives a consult call isn’t able to add participants to the consult call or transfer the consult call. Their role is limited to consulting until the consult call is merged with a multiparty call.
-   A rep can’t end a multiparty call while on an active consult call. First, the rep should end or merge the consult call, then end the multiparty call.
-   A call participant’s name may appear incorrectly after starting a consult call or when merging a consult call and multiparty call.
-   In certain scenarios, a multiparty call’s status remains In Progress after the call has ended or a participant has been removed. Partners can resolve this by calling the [Update a VoiceCall Record API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm) to close the conversation.
-   If the multiparty calls feature is enabled, a supervisor with a Standard User profile can’t pause or resume call recording. If the supervisor joins an active call to listen in, reps on the call don’t get a supervisor joined notification. To work around this, reps can grant access to specific voice calls for supervisors with a Standard User profile by clicking Share Voice Call in the Voice Call record and searching for the supervisor they want to share the object with.

## Add Participants to a Multiparty Call

1.  To add a new participant to an ongoing call, use [addParticipant()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm). Check whether callAttributes for the [PhoneCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm) include isAutoMergeOn. The isAutoMergeOn attribute signifies that the call created with addParticipant() should be merged into the ongoing call without putting the initial caller on hold. If callAttributes.isAutoMergeOn is true for one or more of the calls in the multiparty call, the multiparty call is rendered as a collapsible call group. If all calls have callAttributes.isAutoMergeOn as false or undefined, the calls are rendered as two distinct calls instead, such as a warm transfer.
2.  As each new participant is added, call addParticipant().
3.  When implementing addParticipant(), create a Voice Call of CallType Transfer, and use these call attributes to auto merge the new participant to an existing multiparty call when the rep clicks the **Add User** button.

For an example, see the vendor-sdk.js file in the sample demo connector.

The isMultipleParticipants() method in the phone call controls template checks the length of phoneCallList and shows a call group if the length is greater than 1. The call group appears if there are additional participants in the call, aside from the rep and customer.

## Mute and Unmute Participants in a Multiparty Call

Mute call participants individually. Muting all participants in the call with one button click isn’t supported for multiparty calls.

1.  Pass a call object as a parameter to [mute()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_mute.htm) to mute a specific call participant.
2.  Optionally, pass isGlobal to [MuteToggleResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_mutetoggleresult.htm) to specify whether the mute action is for the rep (global mute) or for another participant (entry mute). If isGlobal is true, the rep is muted. If isGlobal is false, a participant in the call group is muted. The default is false.

    ```

    ```

3.  To unmute a specific participant, pass a call object as a parameter to [unmute()](https://developer.salesforce.com/docs/atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_unmute.htm). Pass isGlobal to MuteToggleResult.

    ```

    ```


## Remove Participants from a Multiparty Call

Remove call participants individually. Removing all participants in the call with one button click isn’t supported for multiparty calls.

1.  To end the call for a specific participant, pass a call object as a parameter to [endCall()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm).

    ```

    ```


## Create and Manage Consult Calls

To support consult calls, make these adjustments to your connector code.

1.  Vendors should set the value of hasConsult in [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to true. After Salesforce receives a value of true from the [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm) method, the hasConsult capability is turned on for reps that support consult calls.
2.  In your [dial()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm) implementation, make these adjustments.
    1.  Include a dialOptions object as a parameter to specify whether isConsultCall is true. When a rep starts a consult call, Salesforce calls vendorConnector.dial(contact, dialOptions) where dialOptions: {isCallback, isConsultCall} with isConsultCall as true. isConsultCall also exists in call.callAttributes. Salesforce creates a new Voice Call of CallType Consult upon resolving the dial(contact, isConsultCall) promise.
    2.  When implementing dial(contact, isConsultCall), create a new Consult call leg while the rest of the multiparty call has no hold music. Partners can choose whether to play hold music in a multiparty call when a consult call is started. Hold without music allows call group participants to continue their conversation while a consult call is active. Note that the Connector API hold() method isn’t invoked for the call group even though the UI shows a hold state for the call group.

## Pause and Resume Recording for Consult Calls

1.  To pause recording for a consult call, pass a call object as a parameter to [pauseRecording()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_pauserecording.htm). For a multiparty call, it’s optional to pass a call object as a parameter when pausing recording.
2.  Return a resolved [RecordingToggleResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm) that includes the callId in contactId.

    ```

    ```

3.  To resume recording for consult call, pass a call object as a parameter to [resumeRecording()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resumerecording.htm). For a multiparty call, it’s optional to pass a call object as a parameter when resuming recording.
4.  Return a resolved [RecordingToggleResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_recordingtoggleresult.htm) that includes the callId in contactId.

    ```

    ```


## End a Consult Call During an Ongoing Multiparty Call

To end a consult call while a multiparty call continues, invoke the [endCall()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm) API. When endCall() is invoked, it is typically handled in two ways: either the partner resolves the promise with the result and the base connector publishes HANGUP or PARTCIPANT\_REMOVED events, or the partner implementation fires the HANGUP or PARTICIPANT\_REMOVED events.

When ending a consult call while a multiparty call is ongoing, this is the order of events. This example assumes that the base connector publishes events.

-   If the consult call is ended, the base connector publishes a HANGUP event for the consult call. Salesforce handles cleaning up the consult call.
-   If a multiparty participant is removed from the consult call, the base connector publishes the PARTICIPANT\_REMOVED event.
-   If the current rep is the only participant left in the consult call, the base connector sends the HANGUP event because the activeCalls in this scenario are 0.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Always update the activeCalls list upon the endCall() API invocation, so that the base connector can handle the end call events correctly.

## Merge a Consult Call and Multiparty Call

1.  To merge a multiparty call and a consult call together, implement [conference()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm) where the first call is the initial multiparty call, and the second call is the consult call, where call.callAttributes.isConsultCall = true.
2.  To make sure the rep sees the merged calls in a call group, take these steps.
    1.  Once the rep clicks **Merge** in Omni-Channel, return a promise that resolves the connector conference() method with HoldToggleResult containing isCallMerged: true and the calls to be conferenced. See our [conference()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm) documentation for information on the promise.
    2.  If using a deskphone, call the [publishEvent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) method like this example.

        ```

        ```

3.  Remove the participant from the consult call and add them to the original call. Close the consult call after merging the calls and return a resolved [HoldToggleResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm). To make sure the calls are merged, HoldToggleResult must include these fields.
    -   param.calls: A list of phone calls associated with this result. Required if Multiparty Calls are enabled.
    -   param.isCallMerged: Indicates whether a consult call has been merged with a multiparty call. This must be true.

## Code Examples

```
mute(call) {
    const isMuted = true;
    call = this.updateCallInfo({ isMuted }, call);
    const isGlobal = /* implement condition check */
    return this.executeAsync("mute", new MuteToggleResult({ isMuted,  call, isGlobal }));
}
```

```
unmute(call) {
      const isMuted = false;
      call = this.updateCallInfo({ isMuted}, call);
      const isGlobal = /* implement condition check */
      return this.executeAsync("mute", new MuteToggleResult({ isMuted, call, isGlobal }));
}
```

```
endCall(call, agentErrorStatus) {
      this.log("endCall", call, agentErrorStatus);
      let destroyedCalls = this.processEndCall(call, agentErrorStatus, Constants.HANGUP_REASON.PHONE_CALL_ENDED, true);
      return this.executeAsync("endCall", new HangupResult({ calls: destroyedCalls }));
}
```

```
pauseRecording(call) {
   const isRecordingPaused = true;
   call = call || this.getCall({callAttributes: { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER }});
   if (this.isConsultCall(call)) {
       call = this.getCall({ callAttributes: { isConsultCall : true }});
   } 
   return this.executeAsync("pauseRecording", new RecordingToggleResult({ isRecordingPaused, contactId : call.callId }, this.updateCallInfo({ isRecordingPaused }, call)));
}
```

```
resumeRecording(call) {
    const isRecordingPaused = false;
    call = call || this.getCall({callAttributes: { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER }});
    if (this.isConsultCall(call)) {
       call = this.getCall({ callAttributes: { isConsultCall : true }});
    }
    return this.executeAsync("resumeRecording", new RecordingToggleResult({ isRecordingPaused, contactId : call.callId }, this.updateCallInfo({ isRecordingPaused }, call)));
}
```

## Related Topics

- Call Scenario Diagrams (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm)
- Voice Resiliency (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_resiliency.htm)

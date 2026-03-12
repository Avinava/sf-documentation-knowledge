---
title: "Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony"
domain: voice-pt-developer-guide
topic: supervisor-listen-in-or-barge-in-with-service-cloud-voice-for-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.934Z
estimatedTokens: 1203
keywords: [Supervisor, Listen, Barge, Service, Cloud, Voice, Partner, Telephony, rep, belongs, supervised, group, monitor, their, active]
---

# Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony

> When a rep belongs to a supervised group, a supervisor can monitor their active calls
        using the Supervisor Panel.

# Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony

When a rep belongs to a supervised group, a supervisor can monitor their active calls using the Supervisor Panel.

When a supervisor clicks **Monitor** on an active call, in addition to viewing the conversation entries (and real-time transcription), the supervisor can join and listen in, muted. If supported, the supervisor can also barge in (unmute), or disconnect.

For listening in to work, the supervisor can load the vendor’s connector using the Omni-Channel widget. The supervisor must belong to the contact center that they’re supervising.

In addition to these requirements, the supervisor must be assigned the SCV supervisor user permission and also have the value of the CapabilitiesResult field hasSupervisorListenIn set to true. In order for the supervisor to join a call unmuted, hasSupervisorBargeIn must also be set to true

In order for a supervisor to listen in or barge in:

1.  In Permission Sets, add the App Permission “Contact Center Supervisor” to the user in addition to “Contact Center Agent (Partner Telephony)”.
2.  When implementing getCapabilities(), have hasSupervisorListenIn set to true in the returned CapabilitiesResult. If you want to allow the supervisor to barge in, unmuted, set hasSupervisorBargeIn to true.
3.  Have the Omni-Channel widget available for this user.
4.  Add the supervisor to the same contact center that they’re supervising.
5.  [Create an Omni-Channel Supervisor configuration](https://help.salesforce.com/s/articleView?id=service.omnichannel_create_supervisor_configuration.htm&type=5&language=en_US).
6.  [Add Omni-Channel Supervisor to the Salesforce console](https://help.salesforce.com/s/articleView?id=service.omnichannel_add_supervisor_console.htm&type=5&language=en_US).
7.  [Add Omni-Channel Supervisor to a Lightning console app](https://help.salesforce.com/s/articleView?id=omnichannel_add_supervisor_console_LEX.htm&language=en_US).
8.  [Set up a supervisor queue](https://help.salesforce.com/s/articleView?id=service.automation_rules_queues_parent.htm&type=5&language=en_US).

After the setup is complete, a supervisor can see the **Listen In** button enabled when monitoring a Voice Call.

![Supervisor listen in](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_supervisor_listen_in.png&folder=voice_pt_developer_guide)

## Supervisor Listen In Details

When a supervisor clicks the **Listen In** button, the call information is delegated to the vendor’s connector superviseCall(supervisedCallInfo) method. The superviseCall(supervisedCallInfo) method creates a call leg between the supervisor and the parent call, updates the list of active calls, and returns a promise of type SupervisorCallResult.

If the supervisor is on a hard phone, after the returned promise is resolved successfully, the supervisor call leg enters a Dialing state. The hard phone is expected to publish the SUPERVISOR\_CALL\_STARTED event after the Supervisor picks up the headset.

If the Supervisor is on a softphone, after the returned promise is resolved successfully, the supervisor call leg enters the Connected state. No extra events should be fired.

When the supervisor leaves the call using the softphone, the call information is delegated to the vendor’s connector supervisorDisconnect(call) method. This method must create a call leg between the supervisor and the parent call and return a promise. The vendor implementation should destroy the supervisor leg and update the list of active calls.

When the supervisor leaves the call using the hard phone, the vendor implementation should destroy the supervisor leg and update the list of active calls, and fire the SUPERVISOR\_HANGUP event.

For example:

```

```

## Supervisor Barge In Details

When a supervisor barges in, we use the same VoiceCall record. The participant type is created automatically and is reused for transcription.

```

```

When a supervisor barges in, you can reuse the toggle callInfo.recordEnabled and the capability CapabilitiesResult.hasRecord to control whether the supervisor can toggle a recording. Specifically, a recording toggle is allowed if all these conditions are met:

1.  CapabilitiesResult.hasRecord is true.
2.  callInfo.recordEnabled is true.
3.  CapabilitiesResult.hasSupervisorListenIn and CapabilitiesResult.hasSupervisorBargeIn are both true.
4.  The call is connected.

When clicked, we call the same pauseRecording() and resumeRecording() functions.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

## Code Examples

```
// This is used when using deskphone as call controls (not Omni-Channel)

// Called by deskphone when initiating the SV call - the call starts ringing
superviseCallonHardphone(call){
   return await sdk.superviseCall(call);
}

// Called by deskphone after SV picks up on deskphone
connectSupervisedCallonHardphone(call){
  try {
    const result = await sdk.connectSupervisedCall(call);
    publishEvent({ eventType: constants.VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED, new SuperviseCallResult(call) });
  } catch (e) {
    publishError(constants.VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED, e);
  }
}
```

```
POST /voiceCalls/${vendorCallKey}/messages, {
   messageId,
   content,
   senderType: "SUPERVISOR",
   startTime,
   endTime,
   participantId: "supervisorId"
}, headers
```

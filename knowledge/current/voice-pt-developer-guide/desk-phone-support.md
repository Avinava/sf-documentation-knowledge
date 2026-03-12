---
title: "Desk Phone Support"
domain: voice-pt-developer-guide
topic: desk-phone-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.910Z
estimatedTokens: 1964
keywords: [Desk, Phone, Support, telephony, provider, supports, phones, reps, outbound, calls, answer, inbound, their, decline, initiate]
---

# Desk Phone Support

> If the telephony provider supports desk phones, reps can make outbound calls or answer
    inbound calls from their desk phone. Reps can also decline calls and initiate transfers from
    their desk phone. By default, the softphone is enabled for all reps. To use a deskphone,
    reps should enable the deskphone from the Omni-Channel utility.

# Desk Phone Support

If the telephony provider supports desk phones, reps can make outbound calls or answer inbound calls from their desk phone. Reps can also decline calls and initiate transfers from their desk phone. By default, the softphone is enabled for all reps. To use a deskphone, reps should enable the deskphone from the Omni-Channel utility.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

## Test Device Selection API

The Service Cloud Connector API getAgentConfig() and setAgentConfig() methods should be implemented in the vendor connector. The getAgentConfig() method is invoked when the rep clicks the Agent Settings icon. It returns an AgentConfigResult object. For example:

```

```

The setAgentConfig() method is implemented by the vendor and returns a [SetAgentConfigResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_objects_setagentconfigresult.htm) object indicating whether the operation is successful. For example:

```

```

## Publish an Event from a Desk Phone

When using the Omni-Channel softphone, call control events and errors get published automatically by Salesforce. Each promise can be resolved or rejected from the vendor’s Connector API Interface implementation. However, when using a desk phone, events and errors must be published from the vendor’s code using publishEvent() and publishError().

For example, when clicking the mute button from a softphone, the mute() method is called on the vendor’s Connector API Interface implementation and a promise is sent back to Salesforce.

![Soft phone example](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsoft_phone_example.png&folder=voice_pt_developer_guide)

When using a hard phone, you must explicitly call publishEvent() when the mute occurs.

![Hard phone example](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fhard_phone_example.png&folder=voice_pt_developer_guide)

The publishEvent() method can be called from the Connector API Interface implementation with many potential event types. The publishError() method can be called for desk phone events for the same events. For example:

-   MUTE\_TOGGLE — when the phone is muted or unmuted

-   HOLD\_TOGGLE — when the phone is on hold or resumed

-   RECORDING\_TOGGLE — when the recording is enabled or disabled

-   SWAP — when the hold state of two callers is switched

-   CONFERENCE — when two calls are being conferenced

-   ADD\_PARTICIPANT — when adding a call participant


See the [reference documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) for all the possible event types.

## Accept or Decline a Call

If accepting or declining a call from a hard phone (desk phone), add the attribute isSoftphoneCall: false to call.callInfo when calling the publishEvent() method.

```

```

When initiating an outbound or transfer call from a desk phone, isSoftphoneCall should also be false.

## Disable Call Controls Dynamically

When publishing call events such as CALL\_STARTED using publishEvent(), the connector can disable call controls if you prefer that reps not use the Omni-Channel softphone call controls at a desk phone. By default, all controls are enabled, but you can pass any of these values in the callInfo parameter (from the PhoneCall object) to disable call controls.

```

```

## Start an Outbound Call Programmatically

While in most cases, reps start outbound calls by click-to-dial on a contact or the Omni-Channel dial pad, there’s also a way to start a call programmatically using the Service Cloud Connector API. Specifically, use the publishEvent() method with the CALL\_STARTED event type and a CallResult payload.

This code sample is adapted from the [Demo Connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.") in GitHub ([byo-demo-connector](https://github.com/salesforce-misc/byo-demo-connector/blob/main/src/main/vendor-sdk.js#L361)).

```

```

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: Get Started with the Service Cloud Connector API](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_get_started.hm "Service Cloud Connector API Reference: Get Started with the Service Cloud Connector API - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: publishEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.hm "Service Cloud Connector API Reference: publishEvent - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: GenericResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.hm "Service Cloud Connector API Reference: GenericResult - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: getAgentConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.hm "Service Cloud Connector API Reference: getAgentConfig - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: setAgentConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.hm "Service Cloud Connector API Reference: setAgentConfig - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: CallResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.hm "Service Cloud Connector API Reference: CallResult - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: PhoneCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.hm "Service Cloud Connector API Reference: PhoneCall - HTML (New Window)")

## Code Examples

```
new AgentConfigResult({
    phones: ["SOFT_PHONE", "DESK_PHONE"],
    selectedPhone: new Phone("DESK_PHONE", “5554443333”)
})
```

```
new SetAgentConfigResult({ success: true })
```

```
publishEvent({ 
  eventType: Constants.VOICE_EVENT_TYPE.CALL_CONNECTED, 
  payload: new CallResult({ call }) // "call" contain the PhoneCall object
});
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

```
/**
 * Start a call
 * @param {Contact} contact
 * @param {Object} callInfo (callInfo.isSoftphoneCall is false if dialing from a desk phone)
 */
function dial(contact, callInfo) {
  const callAttributes = { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER };
  const call = new Call(Constants.CALL_TYPE.OUTBOUND, contact, callAttributes, new CallInfo(callInfo));
  if (!callInfo.isSoftphoneCall) {
    publishEvent({ eventType: Constants.VOICE_EVENT_TYPE.CALL_STARTED, payload: new CallResult({ call })});
  }
}

/**
 * Example usage
 */
dial(new Contact({ phoneNumber: "5554445555"}), {
  isSoftphoneCall: false,
  callStateTimestamp: new Date(),
  isOnHold: false,
  isMuted: false,
  isRecordingPaused: false,
  muteEnabled: true,
  swapEnabled: true,
  conferenceEnabled: true,
  extensionEnabled: true,
  holdEnabled: true,
  recordEnabled: true,
  addCallerEnabled: true
});
```

## Related Topics

- Demo
          Connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)

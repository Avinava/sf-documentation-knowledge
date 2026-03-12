---
title: "Queued Callbacks"
domain: voice-pt-developer-guide
topic: queued-callbacks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.925Z
estimatedTokens: 973
keywords: [Queued, Callbacks, customer, inbound, call, telephony, system, creates, voice, routes, rep, requests, callback, publish, QUEUED_CALLBACK_STARTED]
---

# Queued Callbacks

> When a customer makes an inbound call, the telephony system first creates a voice call
    and then routes the call to the available rep. If no rep is available and the customer
    requests a callback, you must publish a QUEUED_CALLBACK_STARTED event.

# Queued Callbacks

When a customer makes an inbound call, the telephony system first creates a voice call and then routes the call to the available rep. If no rep is available and the customer requests a callback, you must publish a QUEUED\_CALLBACK\_STARTED event.

Call the Service Cloud Connector API publishEvent() method with a Call payload having callType of callback and an original inbound call ID as initialCallId to link it with the new callback voice call.

On the QUEUED\_CALLBACK\_STARTED event, a new conversation and Voice Call record are created and the AgentWork is created.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

initialCallId is not a mandatory field. If you do not have a initial inbound call before a callback request, you can skip it.

For example, suppose that a customer makes an inbound call and the connecter creates a VoiceCall VC1. If no reps are available, the IVR asks the customer if they want a callback. If a customer asks for a callback, then the telephony system can queue a callback after an initial delay (in which the callback is initiated as soon as a rep is available) or a callback is scheduled for a customer on a particular date.

A callback can also be requested from a particular rep. The telephony system creates a new voice call VC2 and the connector sends a QUEUED\_CALL\_STARTED event as per rep availability and routing rules along with callback phone number and VC1 as the initialCallId. The callBack is displayed in Omni-Channel as shown in the following screenshot. When a rep accepts the call, an outbound call is triggered to the given phone number and the previousCall field on the VC2 becomes VC1 and next call on VC1 becomes VC2 in the Voice Call details.

Here are some scenarios where a callback request is accepted but fails to connect with the customer.![Accepted callback request fails to connect with customer.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_failed_callback_request.png&folder=voice_pt_developer_guide)

Callback acceptance and outbound call dialing: ![Callback and outbound call dialing in Omni-Channel](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_callback_accept_outbound_call_dialing.png&folder=voice_pt_developer_guide)

If a rep declines the call or the call times out, the telephony system can try to connect to another available rep with the same VC2.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: publishEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.hm "Service Cloud Connector API Reference: publishEvent - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: CallResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.hm "Service Cloud Connector API Reference: CallResult - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: PhoneCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.hm "Service Cloud Connector API Reference: PhoneCall - HTML (New Window)")

-   [Let Reps Control the Callback Experience](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm "Customize the way reps handle callbacks.")

## Code Examples

```
// Create phone call object
const call = new PhoneCall({ 
            callId: vendorCallKey,
            phoneNumber : '{CallBack number}',
            callInfo : { initialCallId: previousVendorCallKey},
            callType: Constants.CALL_TYPE.CALLBACK.toLowerCase()/*'callback'*/,
            contact: new Contact({ phoneNumber }),
            callAttributes: { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER } });

// Publish the event
publishEvent({ eventType: Constants.VOICE_EVENT_TYPE.QUEUED_CALL_STARTED, payload: new CallResult({ call })});
```

## Related Topics

- Let Reps Control the Callback Experience (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm)

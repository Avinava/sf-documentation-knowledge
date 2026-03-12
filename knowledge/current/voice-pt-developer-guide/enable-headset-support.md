---
title: "Enable Headset Support"
domain: voice-pt-developer-guide
topic: enable-headset-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.033Z
estimatedTokens: 572
keywords: [Enable, Headset, Support, reps, control, call, actions, accept, mute, unmute, decline, calls, their, headsets]
---

# Enable Headset Support

> Enable headset support so that reps can control call actions such as accept, mute,
  unmute, and decline calls from their headsets.

# Enable Headset Support

Enable headset support so that reps can control call actions such as accept, mute, unmute, and decline calls from their headsets.

This feature applies to the following telephony model:

-   Service Cloud Voice with Partner Telephony

Perform the following steps using the Connector API to enable headset support.

-   When implementing [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of isHidSupported in [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to true. When the rep selects the headset, the headset information is sent using the SET\_AGENT\_CONFIG event.
-   Add handlers to listen to the events from the headset, adding parsers for each type of HID device to determine the event type as accept, mute, unmute, or decline.
-   Each headset model has a specific signal for each of the actions. Configure the Connector API interface to explicitly publish each headset call event and error using the publishEvent() and publishError() APIs, respectively. For example, when muting the headset, call the mute() method on the Connector API Interface implementation and send a promise back to Salesforce.

See a sample implementation of the headset capabilities in the demo connector. The demo connector code available in [Github](https://github.com/salesforce-misc/byo-demo-connector/tree/main/src/hid) is not generic which means a headset parser is required for each kind of headset, for example the [Github](https://github.com/salesforce-misc/byo-demo-connector/tree/main/src/hid) sample supports only certain models such as:

-   Plantronics Blackwire 5220 Series - accept/decline/mute/unmute call actions supported
-   Jabra Evolve Link Ms - accept/decline call actions supported

#### See Also

-   [publishEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_base_publishevent.htm "publishEvent - HTML (New Window)")

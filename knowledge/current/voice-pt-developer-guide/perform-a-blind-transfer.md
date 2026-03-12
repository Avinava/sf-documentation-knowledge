---
title: "Perform a Blind Transfer"
domain: voice-pt-developer-guide
topic: perform-a-blind-transfer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.972Z
estimatedTokens: 639
keywords: [Perform, Blind, Transfer, feature, vendors, addParticipant, Connector, API, hang, call, rather, add, caller, conversation]
---

# Perform a Blind Transfer

> With the blind transfer feature, vendors can use the addParticipant Connector API method
    to hang up and transfer a call rather than add a caller to an existing conversation.

# Perform a Blind Transfer

With the blind transfer feature, vendors can use the addParticipant Connector API method to hang up and transfer a call rather than add a caller to an existing conversation.

To enable blind transfer:

1.  Using the Connector API, set the value of hasBlindTransfer in CapabilitiesResult to true. See [getCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcapabilities.htm).
2.  Update the implementation of addParticipant() to perform a blind transfer when the isBlindTransfer argument is true. A sample blind transfer is implemented in the [demo connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.").
3.  After a transfer voice call is created through addParticipant(), Salesforce fires a HANGUP event for the first call from the base connector. The vendor doesn’t need to publish a HANGUP event for the first voice call. Wait to [publish a HANGUP event](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) when the second rep ends the transferred call instead.

To perform a blind transfer:

1.  Using a softphone, when the call is connected, a new button with the label “Blind Transfer” shows up. Click this button to call addParticipant(contact, call, true).
2.  Using a hardphone, perform a blind transfer and [publish the PARTICIPANT\_ADDED event](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm).

![Blind transfer](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_blind_transfer.png&folder=voice_pt_developer_guide)

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

## Related Topics

- demo connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)

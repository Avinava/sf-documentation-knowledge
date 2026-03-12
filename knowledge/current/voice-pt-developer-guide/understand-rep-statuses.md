---
title: "Understand Rep Statuses"
domain: voice-pt-developer-guide
topic: understand-rep-statuses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.206Z
estimatedTokens: 728
keywords: [Understand, Rep, Statuses, how, setAgentStatus, Salesforce, core, connector, performs, action, phone, control, panel]
---

# Understand Rep Statuses

> See how setAgentStatus() is called from the
  Salesforce core to the connector when a rep performs an action in the Salesforce phone control
  panel.

# Understand Rep Statuses

See how setAgentStatus() is called from the Salesforce core to the connector when a rep performs an action in the Salesforce phone control panel.

This table explains how rep statuses are represented in Omni-Channel and in the connector.

| Rep Action in Salesforce | Rep Status in Omni | SetAgentStatus sent to Connector | Connector Event/Callback | Rep Status in Vendor/Queue |
| --- | --- | --- | --- | --- |
| Log in as offline | Offline | YES | SetAgentStatus | Offline/NotAvailableForRouting |
| Log in as online | Online | YES | SetAgentStatus | Online/AvailableForRouting |
| Make outbound call | Online | NO | dial() | NotAvailableForRouting |
| During outbound call | Online | NO | CALL_CONNECTED | NotAvailableForRouting |
| During After Conversation Work (ACW) after outbound call | Online | NO | HANG_UP/endCall() | NotAvailableForRouting |
| Close Voice Call tab during ACW after outbound call | Online | YES | SetAgentStatus | AvailableForRouting |
| Receive inbound call | Online | NO | CALL_STARTED | NotAvailableForRouting |
| Accept inbound call | Online | NO | acceptCall() | NotAvailableForRouting |
| Decline inbound call | Online | NO | declineCall() | AvailableForRouting |
| During inbound call | Online | NO | CALL_CONNECTED | NotAvailableForRouting |
| During ACW after inbound call | Online | NO | HANG_UP/endCall() | NotAvailableForRouting |
| Close Voice Call tab during ACW after inbound call | Online | YES | SetAgentStatus | AvailableForRouting |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

The telephony system should be in an infinite wrap-up for all calls (including for [After Conversation Work](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_after_conversation_work.htm "After Conversation Work (ACW) gives reps a set amount of time after a customer conversation to wrap up their work before they start a new conversation.")). This way, when a rep finishes a call, they aren’t added to the queue until they’re made available by logging in as online or by closing the Voice Call tab during an After Conversation Work period.

#### See Also

-   [*Service Cloud Connector API Reference*: Get Started with the Service Cloud Connector API](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_get_started.hm "Service Cloud Connector API Reference: Get Started with the Service Cloud Connector API - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: setAgentStatus](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentstatus.hm "Service Cloud Connector API Reference: setAgentStatus - HTML (New Window)")

## Related Topics

- After Conversation Work (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_after_conversation_work.htm)

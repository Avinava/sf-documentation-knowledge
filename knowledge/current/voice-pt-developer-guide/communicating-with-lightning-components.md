---
title: "Communicating with Lightning Components"
domain: voice-pt-developer-guide
topic: communicating-with-lightning-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.903Z
estimatedTokens: 402
keywords: [Communicating, Lightning, Components, Service, Cloud, Voice, Partner, Telephony, enable, communication, system, creating, Message, LMS, bridge]
---

# Communicating with Lightning Components

> If you set up Service Cloud Voice with Partner Telephony, you must enable communication
    between the Lightning components and your telephony system. You can do this by creating a
    Lightning Message Service (LMS) bridge and/or configuring the Service Cloud Voice Toolkit
    APIs.

# Communicating with Lightning Components

If you set up Service Cloud Voice with Partner Telephony, you must enable communication between the Lightning components and your telephony system. You can do this by creating a Lightning Message Service (LMS) bridge and/or configuring the Service Cloud Voice Toolkit APIs.

The Lightning Message Service bridge lets you:

-   Send messages to the connector and receive messages from the connector at any time.
-   Send custom messages between the telephony system and components on the page.

The Service Cloud Voice Toolkit API lets you:

-   Receive telephony events, including start, end, and mute call events.
-   Take advantage of a predefined set of Voice-related messages, such as CALL\_STARTED, CALL\_CONNECTED, and PAUSE\_RECORDING.

We recommend using the LMS Bridge for communication between the Omni-Channel softphone and your components because it’s more secure and flexible. However, you may choose to use the Service Cloud Voice Toolkit API instead because of its simplicity.

-   **[Use the Lightning Message Service Bridge](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm)**
    Use the Lightning Message Service Bridge component to enable communication between the telephony system and other Lightning components.
-   **[Use the Service Cloud Voice Toolkit API](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_toolkit_api.htm)**
    Configure the Service Cloud Voice Toolkit APIs to listen to telephony events and perform telephony actions.

## Related Topics

- Use the Lightning Message Service Bridge (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm)
- Use the Service Cloud Voice Toolkit API (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_toolkit_api.htm)

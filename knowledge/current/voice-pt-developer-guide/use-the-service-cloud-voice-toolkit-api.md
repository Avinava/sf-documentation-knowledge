---
title: "Use the Service Cloud Voice Toolkit API"
domain: voice-pt-developer-guide
topic: use-the-service-cloud-voice-toolkit-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.942Z
estimatedTokens: 409
keywords: [Service, Cloud, Voice, Toolkit, API, Configure, APIs, listen, telephony, events, perform, actions]
---

# Use the Service Cloud Voice Toolkit API

> Configure the Service Cloud Voice Toolkit APIs to listen to telephony events and
    perform telephony actions.

# Use the Service Cloud Voice Toolkit API

Configure the Service Cloud Voice Toolkit APIs to listen to telephony events and perform telephony actions.

To learn more about the Service Cloud Voice Toolkit API, see the [Toolkit API documentation in the Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_overview.htm). The following [examples in GitHub](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ToolkitAPI) show a Lightning Web Component and an Aura component that can subscribe to and handle call events (such as CALL\_STARTED, CALL\_CONNECTED).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Components (such as the [Lightning Message Bridge](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm)) that implement the [lightning:backgroundUtilityItem](https://developer.salesforce.com/docs/component-library/bundle/lightning:backgroundUtilityItem/documentation) interface aren’t supported locations for the Service Cloud Voice Toolkit API. Use this API in a component that resides on a page, or resides in a visible utility bar component.

#### See Also

-   [*Service Cloud Voice Implementation Guide:* Toolkit API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_overview.htm "Service Cloud Voice Implementation Guide: Toolkit API - HTML (New Window)")

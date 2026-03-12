---
title: "Unified Routing for Desk Phone"
domain: voice-pt-developer-guide
topic: unified-routing-for-desk-phone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.216Z
estimatedTokens: 610
keywords: [Unified, Routing, Desk, Phone, route, voice, call, rep’s, configure, managed, package]
---

# Unified Routing for Desk Phone

> To route a voice call to a rep’s desk phone, configure unified routing for desk phone
  in a managed package.

# Unified Routing for Desk Phone

To route a voice call to a rep’s desk phone, configure unified routing for desk phone in a managed package.

The high-level unified routing for desk phone design flow is:

![Unified routing flow for deskphone](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_unified_routing_deskphone.png&folder=voice_pt_developer_guide)

-   Receive incoming call: A customer initiates a call, which the telephony provider server receives.
-   Create a voice call: The telephony provider server sends a request to create a voice call to the telephony server. The telephony server processes the request and returns a voice call ID.
-   Execute Omni-Channel flow: The telephony provider server executes the Omni-Channel flow by invoking the [Salesforce Telephony Service's Execute an Omni Flow API Call](https://developer.salesforce.com/docs/atlas.en-us.258.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm). Salesforce Omni-Channel runs the flow and creates a Pending Service Routing (PSR) record to track the routing process.
-   Route call and notify rep: Salesforce pushes the work to a rep’s Omni-Channel console if the rep is in an available Presence Status and has capacity to receive a voice call. Simultaneously, the telephony connector listens for the WORK\_ASSIGNED event.
-   Ring desk phone: When the WORK\_ASSIGNED event is received, the telephony connector triggers the ring on the rep's desk phone.
-   Accept the call: When the rep accepts the call on the desk phone, the telephony connector publishes a CALL\_CONNECTED event to Salesforce to synchronize the call state.
-   Missed or declined calls: If the rep misses or declines the call, or if the connection fails, the telephony provider server sends a hang up signal and triggers the cancelAndReroute API. Then, Salesforce cancels the rep's work and reroutes the call to the next available rep in the queue.
-   Drop the call: When the customer drops the call, the telephony provider server calls the [clearRouting](https://developer.salesforce.com/docs/atlas.en-us.258.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm) API. Salesforce cancels the PSR record and deletes the routing session.

#### See Also

-   [Unified Routing](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm)

---
title: "External Routing Technical Architecture and Process"
domain: omni-channel-dev
topic: external-routing-technical-architecture-and-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.965Z
estimatedTokens: 337
keywords: [External, Routing, Technical, Architecture, Process, how, works, connect, Salesforce, implementation]
---

# External Routing Technical Architecture and Process

> See an overview of how external routing works to connect Salesforce with your
        external routing implementation.

# External Routing Technical Architecture and Process

See an overview of how external routing works to connect Salesforce with your external routing implementation.

The following image provides a visual description of how information is shared between Salesforce and your partner application.![Overview of how information is passed between Salesforce and your partner application.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fomnichannel%2Fimages%2Fexternal_routing_overview.png&folder=omni_channel_dev)

Information is shared using Salesforce APIs and the APIs for your partner application using the following process.

.

1.  Salesforce uses Change Data Capture to send event notifications to reps .
2.  Salesforce sends event notifications for new work items to the partner routing application.
3.  Partner routing application matches new work items with logged-in reps.
4.  Salesforce sends event notifications to the partner routing application after work is accepted, declined, or completed.
5.  Salesforce sends event notifications to the partner routing application after reps log out.

-   **[Salesforce API Resources for External Routing](atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_resources.htm)**
    Use the following resources as you integrate your partner application with Omni-Channel.

## Related Topics

- Salesforce API Resources for External Routing (atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_resources.htm)

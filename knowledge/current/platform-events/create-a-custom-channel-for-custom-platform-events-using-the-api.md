---
title: "Create a Custom Channel for Custom Platform Events Using the API"
domain: platform-events
topic: create-a-custom-channel-for-custom-platform-events-using-the-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.714Z
estimatedTokens: 423
keywords: [Custom, Channel, Platform, Events, API, Let’s, walk, steps, add, two, via, members, subscribe, validate, receiving]
---

# Create a Custom Channel for Custom Platform Events Using the API

> Let’s walk through the steps to create a channel and add two platform events via channel
  members. Then, you can subscribe to the channel to validate receiving event messages for platform
  events.

# Create a Custom Channel for Custom Platform Events Using the API

Let’s walk through the steps to create a channel and add two platform events via channel members. Then, you can subscribe to the channel to validate receiving event messages for platform events.

-   **[Prerequisite: Define Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_pe.htm)**
    The custom channel examples depend on a predefined custom platform events called Order\_NorthAmer\_\_e and Order\_EMEA\_\_e. Before creating the custom channel, define these events in Salesforce.
-   **[Create a Custom Channel and Add Platform Events with Tooling API](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_tooling_api.htm)**
    Create a channel for orders named Order\_Channel\_\_chn, and add two platform events as members: Order\_NorthAmer\_\_e and Order\_EMEA\_\_e.
-   **[Metadata API Example: Create a Custom Channel and Add Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_metadata_api.htm)**
    Instead of Tooling API, you can use Metadata API to create a channel and channel member. We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to only configure the channel, we recommend using Tooling API with REST.
-   **[Subscribe to the Channel](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm)**
    After creating a custom channel and its members, subscribe to the channel using a Pub/Sub API Java client, and receive event messages.

## Related Topics

- Prerequisite: Define Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_pe.htm)
- Create a Custom Channel and Add Platform Events with Tooling API (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_tooling_api.htm)
- Metadata API Example: Create a Custom Channel and Add Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_metadata_api.htm)
- Subscribe to the Channel (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm)

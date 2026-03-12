---
title: "Platform Event Considerations"
domain: platform-events
topic: platform-event-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.670Z
estimatedTokens: 502
keywords: [Platform, Event, Considerations, special, behaviors, defining, publishing, subscribing, events, how, test, various, Salesforce, offers]
---

# Platform Event Considerations

> Learn about special behaviors related to defining, publishing, and subscribing to
  platform events. Learn how to test platform events. And get an overview of the various events that
  Salesforce offers.

# Platform Event Considerations

Learn about special behaviors related to defining, publishing, and subscribing to platform events. Learn how to test platform events. And get an overview of the various events that Salesforce offers.

-   **[Considerations for Defining and Publishing Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm)**
    Take note of the considerations when defining and publishing platform events.
-   **[Considerations for Subscribing to Platform Events with Processes and Flows](atlas.en-us.platform_events.meta/platform_events/platform_events_process_considerations.htm)**
    Before you use processes or flows to subscribe to platform events, familiarize yourself with these considerations.
-   **[Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)**
    Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.
-   **[Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)**
    When the publish behavior of a platform event is set to **Publish Immediately**, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.
-   **[What’s the Difference Between the Salesforce Events?](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_other_events.htm)**
    Salesforce offers various features that use events, some of which are based on standard platform events. Other features are event-like but aren’t event notifications.

## Related Topics

- Considerations for Defining and Publishing Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm)
- Considerations for Subscribing to Platform Events with Processes and Flows (atlas.en-us.platform_events.meta/platform_events/platform_events_process_considerations.htm)
- Considerations for Publishing and Subscribing to Platform Events with Apex and APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)
- Decoupled Publishing and Subscription (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)
- What’s the Difference Between the Salesforce Events? (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_other_events.htm)

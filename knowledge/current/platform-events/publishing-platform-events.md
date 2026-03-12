---
title: "Publishing Platform Events"
domain: platform-events
topic: publishing-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.996Z
estimatedTokens: 545
keywords: [Publishing, Platform, Events, event, defined, Salesforce, org, publish, messages, app, processes, flows, Apex, external, APIs]
---

# Publishing Platform Events

> After a platform event has been defined in your Salesforce org,
            publish event messages from a Salesforce app using processes, flows, or Apex or an
            external app using Salesforce APIs.

# Publishing Platform Events

After a platform event has been defined in your Salesforce org, publish event messages from a Salesforce app using processes, flows, or Apex or an external app using Salesforce APIs.

-   **[Publish Event Messages with Flows](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_flow.htm)**
    Use flows to publish event messages from a Salesforce app as part of some user interaction, an automated process, Apex, or workflow action.
-   **[Publish Event Messages with Processes](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_process.htm)**
    Use Process Builder to publish event messages from a Salesforce app as part of an automated process.
-   **[Publish Event Messages with Apex](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm)**
    Use Apex to publish event messages from a Salesforce app.
-   **[Publish Event Messages with Salesforce APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_api.htm)**
    External apps use an API to publish platform event messages.
-   **[Publish Event Messages with Pub/Sub API](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_pubsub_api.htm)**
    Use Pub/Sub API to publish platform event messages from an external app and get final publish results. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient publishing of binary event messages in the Apache Avro format.

#### See Also

-   [Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm "When the publish behavior of a platform event is set to Publish Immediately, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.")

## Related Topics

- Publish Event Messages with Flows (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_flow.htm)
- Publish Event Messages with Processes (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_process.htm)
- Publish Event Messages with Apex (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm)
- Publish Event Messages with Salesforce APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_api.htm)
- Publish Event Messages with Pub/Sub API (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_pubsub_api.htm)
- Decoupled Publishing and Subscription (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)

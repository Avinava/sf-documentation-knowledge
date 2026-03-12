---
title: "Subscribe to Platform Event Messages with Processes"
domain: platform-events
topic: subscribe-to-platform-event-messages-with-processes
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:28.140Z
estimatedTokens: 959
keywords: [Subscribe, Platform, Event, Messages, Processes, built, Process, Builder, events, receive, published, Apex, APIs, flows, provide]
---

# Subscribe to Platform Event Messages with Processes

> Processes built in Process Builder can subscribe to platform events
      and receive event messages published through Apex, APIs, flows, and other processes. Processes
      provide an autosubscription mechanism.

# Subscribe to Platform Event Messages with Processes

Processes built in Process Builder can subscribe to platform events and receive event messages published through Apex, APIs, flows, and other processes. Processes provide an autosubscription mechanism.

To subscribe a process to a platform event, build the process to start when it receives a platform event message. In the process’s trigger, associate the process with a platform event and an object.

## Example

This process starts when it receives a Printer Status event message. When it starts, the process looks for an Asset record whose serial number matches the serial number in the event message. ![Sample process trigger](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fpb_event_subscribe_printer_status.png&folder=platform_events)

## Process and Platform Event Considerations

If platform event–triggered flows, paused flow interviews, and processes are subscribed to the same platform event, we can’t guarantee which one processes each event message first.

A process evaluates platform event messages in the order they’re received. The order of event messages is based on the event replay ID. A process can receive a batch of event messages at once, up to a maximum of 2,000 event messages. The order of event messages is preserved within each batch. The event messages in a batch can originate from multiple publishers.

Each event process runs asynchronously in a separate transaction from the transaction that published the event message. As a result, there can be a delay between when an event message is published and when the subscribed flow or interview evaluates the event message.

Debug logs corresponding to the process execution appear under the Automated Process user. But the process actions run in the context of the user who published the event message. So, for example, if a process creates or updates records, system fields like CreatedById and LastModifiedById reference the user who published the event message.

All processes are subject to entitlements, limits, and other considerations, including Apex governor limits.

#### See Also

-   [*Salesforce Help*: Process Limits and Considerations](https://help.salesforce.com/articleView?id=process_considerations.htm&language=en_US "Salesforce Help: Process Limits and Considerations - HTML (New Window)")

-   [Considerations for Subscribing to Platform Events with Processes and Flows](atlas.en-us.platform_events.meta/platform_events/platform_events_process_considerations.htm "Before you use processes or flows to subscribe to platform events, familiarize yourself with these considerations.")

-   [Set Up Debug Logs for Event Subscriptions](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm "Debug logs for platform event triggers, event processes, and resumed flow interviews are created by Automated Process and are separate from their corresponding Apex code logs. For a platform event trigger with an overridden running user, debug logs are created by the specified user. The debug logs aren’t available in the Developer Console’s Log tab.")

-   [Obtain Processes That Subscribe to a Platform Event in Metadata API](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_process.htm "Use Metadata API to retrieve all processes subscribed to a platform event.")

-   [Subscribe to Platform Event Messages with Flows](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_flow.htm "Launch flows or resume running instances of flows, called interviews, when platform event messages are received. Subscribed flows and interviews can receive event messages published through Apex, APIs, flows, and other processes. Flows and interviews provide an autosubscription mechanism.")

## Related Topics

- Considerations for Subscribing to Platform Events with Processes and Flows (atlas.en-us.platform_events.meta/platform_events/platform_events_process_considerations.htm)
- Set Up Debug Logs for Event Subscriptions (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm)
- Obtain Processes That Subscribe to a Platform Event in Metadata API (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_process.htm)
- Subscribe to Platform Event Messages with Flows (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_flow.htm)

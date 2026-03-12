---
title: "Enterprise Messaging Platform Events"
domain: platform-events
topic: enterprise-messaging-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.858Z
estimatedTokens: 2584
keywords: [Enterprise, Messaging, Platform, Events, Salesforce, offers, benefits, event-driven, software, architectures, event, messages, notifications, apps, send]
---

# Enterprise Messaging Platform Events

> The Salesforce enterprise messaging platform offers the benefits of
      event-driven software architectures. Platform events are the event messages (or notifications)
      that your apps send and receive to take further action. Platform events simplify the process
      of communicating changes and responding to them without writing complex logic. Publishers and
      subscribers communicate with each other through events. One or more subscribers can listen to
      the same event and carry out actions.

# Enterprise Messaging Platform Events

The Salesforce enterprise messaging platform offers the benefits of event-driven software architectures. Platform events are the event messages (or notifications) that your apps send and receive to take further action. Platform events simplify the process of communicating changes and responding to them without writing complex logic. Publishers and subscribers communicate with each other through events. One or more subscribers can listen to the same event and carry out actions.

For example, a software system can send events containing information about printer ink cartridges. Subscribers can subscribe to the events to monitor printer ink levels and place orders to replace cartridges with low ink levels.

## Custom Platform Events

Use custom platform events to publish and process custom notifications. For example, publish custom platform events to send order information to an order fulfillment service. Or publish custom platform events to send printer ink information that is processed by a service app.

You define a custom platform event in Salesforce in the same way that you define a custom object. Create a platform event definition by giving it a name and adding custom fields. Platform events support a subset of field types in Salesforce. See [Platform Event Fields](atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform events contain standard fields. Add custom fields for your custom data."). This table lists a sample definition of custom fields for a printer ink event.

| Field Name | Field API Name | Field Type |
| --- | --- | --- |
| Printer Model | Printer_Model__c | Text |
| Serial Number | Serial_Number__c | Text |
| Ink Percentage | Ink_Percentage__c | Number |

You can publish custom platform events on the Lightning Platform by using Apex or point-and-click tools, such as Process Builder and Flow Builder, or an API in external apps. Similarly, you can subscribe to an event either on the platform through an Apex trigger or point-and-click tools or in external apps, such as Pub/Sub API. When an app publishes an event message, event subscribers receive the event message and execute business logic. Using the printer ink example, a software system monitoring a printer makes an API call to publish an event when the ink is low. The printer event message contains the printer model, serial number, and ink level. After the printer sends the event message, an Apex trigger is fired in Salesforce. The trigger creates a case record to place an order for a new cartridge.

## Standard Platform Events

Salesforce provides events with predefined fields, called standard platform events. An example of a standard platform event is AssetTokenEvent, which monitors OAuth 2.0 authentication activity. Another example is BatchApexErrorEvent, which reports errors encountered in batch Apex jobs.

Salesforce publishes standard platform events in response to an action that occurred in the app or errors in batch Apex jobs. You can subscribe to a standard platform event stream using the subscription mechanism that the event supports.

## High-Volume Platform Events

Use high-volume platform events to publish and process millions of events efficiently and to scale your event-based apps.

Note the following characteristics of high-volume platform events.

Asynchronous Publishing

For efficient processing of high loads of incoming event messages, high-volume platform events are published asynchronously. After the publishing call returns with a successful result, the publish request is queued in Salesforce. When system resources become available, the system carries out the publish request and saves the event message in the event bus. If the publishing of the queued event fails, the system retries the publishing internally using the at-least-once model. See [Considerations for Publishing Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm#publish_considerations).

Separate Event Allocations

Each Salesforce edition provides default allocations and usage-based entitlements for the number of high-volume events delivered to clients. See [Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_event_limits "Learn about the allocations available for platform event definitions, publishing and subscribing to platform events, and event delivery in Pub/Sub API clients, CometD clients, empApi Lightning components, and event relays.").

Starting in Spring ’21, standard-volume platform events are also published asynchronously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Previously, standard-volume events were available. In API version 45.0 and later, your new custom event definitions are high volume by default. High-volume platform events offer better scalability than standard-volume platform events. Standard-volume custom platform events will be retired in Summer ’27. To migrate existing standard-volume events, see [Migrate Standard-Volume Platform Events to High-Volume Platform Events Before Retirement](https://help.salesforce.com/s/articleView?id=002280033&type=1&language=en_US).

## Platform Events and sObjects

A platform event is a special kind of Salesforce entity, similar in many ways to an sObject. An event message is an instance of a platform event, similar to how a record is an instance of a custom or standard object. Unlike custom or standard objects, you can’t update or delete event records. You also can’t view event records in the Salesforce user interface, and platform events don’t have page layouts. When you delete a platform event definition, it’s permanently deleted.

## Platform Event Permissions

Grant user permissions for publishing and subscribing to platform events.

| User Permissions Needed |
| --- |
| To publish a platform event: | Create for the platform event object |
| To subscribe to a platform event: | Read for the platform event object |

For more information about granting user permissions, see [Manage Data Access](https://help.salesforce.com/s/articleView?id=platform.security_data_access_mgmt.htm&type=5&language=en_US) in Salesforce Help.

## Platform Events and Transactions

Platform event messages are published either immediately or after a transaction is committed, depending on the publish behavior that you set in the platform event definition. Platform events defined to be published immediately don’t respect transaction boundaries, but those defined to be published after a transaction is committed do. The publish behavior doesn’t apply to Pub/Sub API. See [Platform Event Fields](atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform events contain standard fields. Add custom fields for your custom data.").

-   If the platform event publish behavior is set to **Publish Immediately**:
    -   The allOrNone header is ignored when publishing through the APIs. Some events can be published even when others fail in the same call.
    -   You can't roll back published event messages, and the Apex setSavepoint() and rollback() Database class methods aren’t supported.
-   If the publish behavior is set to **Publish After Commit**:
    -   The allOrNone header value takes effect for the initial enqueuing of the events when publishing through the APIs. If allOrNone is set to true, Salesforce doesn’t enqueue any events for publishing if even one event fails to be enqueued in the same call. As a result, no events are published. The failures are synchronous errors, such as event-validation or limit errors. After all events in the same call are successfully enqueued for publishing, the allOrNone header isn’t enforced for the eventual event publishing. If asynchronous system errors occur while the enqueued events are published, some of the enqueued events can be published when others fail.
    -   You can roll back published event messages with the Apex setSavepoint() and rollback() Database class methods.
-   The publishing of high-volume platform events is asynchronous.

When publishing platform events, DML limits and other Apex governor limits apply.

## Event Retention in the Event Bus

High-volume platform event messages are stored for 72 hours (3 days). Legacy standard-volume platform event messages are stored for 24 hours (1 day). You can retrieve past event messages when using Pub/Sub API to subscribe to a channel.

For more information, see [Event Message Durability](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-message-durability.html) in the Pub/Sub API Developer Guide.

## Order of Events

If you publish multiple events in one publish call, the order of events in a batch is guaranteed for that publish request. So the order of event messages that are stored in the event bus and delivered to subscribers matches the order of events that are passed in the call. You can publish multiple events in several ways, including the Apex EventBus.publish method or the REST API composite resource. For events published across different requests, the order of events isn’t guaranteed because publish requests can be processed by different Salesforce application servers. As a result, a later request could be processed faster than an earlier request.

Salesforce assigns a replay ID value to a received platform event message and persists it in the event bus. Subscribers receive platform event messages from the event bus in the order of the replay ID.

#### See Also

-   [Publishing Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_publish.htm "After a platform event has been defined in your Salesforce org, publish event messages from a Salesforce app using processes, flows, or Apex or an external app using Salesforce APIs.")

-   [Subscribing to Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm "Receive platform events in processes, flows, Apex triggers, Pub/Sub API, or CometD clients.")

-   [Standard Platform Event Objects](atlas.en-us.platform_events.meta/platform_events/platform_events_standard_platform_event_objects.htm "Check out the standard platform events that Salesforce publishes.")

## Related Topics

- Platform Event Fields (atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm)
- Considerations for Publishing Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm)
- Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Publishing Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_publish.htm)
- Subscribing to Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm)
- Standard Platform Event Objects (atlas.en-us.platform_events.meta/platform_events/platform_events_standard_platform_event_objects.htm)

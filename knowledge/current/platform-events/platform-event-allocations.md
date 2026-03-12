---
title: "Platform Event Allocations"
domain: platform-events
topic: platform-event-allocations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.698Z
estimatedTokens: 8652
keywords: [Platform, Event, Allocations, definitions, publishing, subscribing, events, delivery, Pub, Sub, API, clients, CometD, empApi, Lightning]
---

# Platform Event Allocations

> Learn about the allocations available for platform event definitions, publishing and
    subscribing to platform events, and event delivery in Pub/Sub API clients, CometD clients,
      empApi Lightning components, and event
    relays.

# Platform Event Allocations

Learn about the allocations available for platform event definitions, publishing and subscribing to platform events, and event delivery in Pub/Sub API clients, CometD clients, empApi Lightning components, and event relays.

-   **[Which Type of Platform Events Do Allocations Apply to?](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_which_events)**
    Platform events can be custom events, which are platform events that you define, or standard events, which are the events that Salesforce defines, including Real-Time Event Monitoring events.
-   **[Common Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_common)**
    Common allocations include allocations for platform event definitions, concurrent CometD clients, and allocations for processes and flows. The common allocations apply to standard-volume and high-volume platform events.
-   **[Default Platform Event Allocations for Event Publishing and Delivery](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_default)**
    If your org has no add-on licenses, default allocations apply for event publishing and delivery that can’t be exceeded. The default allocations are enforced to ensure fair sharing of resources in the multitenant environment and to protect the service.
-   **[Increase Your Event Delivery and Publishing Allocations with a Platform Event Add-On License](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_entitlement)**
    To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional platform events. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.
-   **[Monitor Event Usage Against Your Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_monitor)**
    Check your event publishing and delivery usage and maximum allocation in Setup, or using REST API or Apex.
-   **[Monitor Hourly Event Delivery Usage with REST API](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_hourly)**
    Get the hourly delivery usage by periodically retrieving the daily event delivery usage using REST API.
-   **[Monitor Event Usage with SOQL Queries by Using PlatformEventUsageMetric](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_usage_metric)**
    Perform a SOQL query on PlatformEventUsageMetric to get visibility into your event usage and usage trends. With enhanced usage metrics, you can view separate and combined metrics for platform events and change data capture events. Break down usage metrics by event name, client ID, event type, and usage type, and get usage data by granular time segments. PlatformEventUsageMetric data is available for CometD and Pub/Sub API clients, empApi Lightning components, and event relays.
-   **[Standard-Volume Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_svpe)**
    ﻿These allocations are for standard-volume events defined in API version 44.0 and earlier.

#### See Also

-   [Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm "Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.")

-   [Apex Publish Callback Limits](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_limits.htm "Keep in mind this limit for Apex publish callbacks.")

-   [*Change Data Capture Developer Guide*: Change Data Capture Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_allocations.htm "Change Data Capture Developer Guide: Change Data Capture
    Allocations - HTML (New Window)")


## Which Type of Platform Events Do Allocations Apply to?

Platform events can be custom events, which are platform events that you define, or standard events, which are the events that Salesforce defines, including Real-Time Event Monitoring events.

| Event Type | Counts towards event publishing allocation | Counts towards event delivery allocation and entitlement via add-on |
| --- | --- | --- |
| Custom events that you define |  |  |
| Standard events. See Standard Platform Event Object List. |  | Check the "Event Delivery Allocation Enforced" section in each event reference documentation in Standard Platform Event Object List. |
| Real-Time Event Monitoring events. See Real-Time Event Monitoring Objects. |  |  |

When allocations aren’t enforced, system protection limits apply.

## Common Platform Event Allocations

Common allocations include allocations for platform event definitions, concurrent CometD clients, and allocations for processes and flows. The common allocations apply to standard-volume and high-volume platform events.

| Description | Performance and Unlimited Editions | Enterprise Edition | Developer Edition | Professional Edition (with API Add-On) |
| --- | --- | --- | --- | --- |
| Maximum number of platform event definitions that can be created in an org. See note. | 100 | 50 | 5 | 5 |
| Maximum number of concurrent CometD clients (subscribers) across all channels and for all event types. See note. | 2,000 | 1,000 | 20 | 20 |
| Maximum number of Process Builder processes and flows that can subscribe to a platform event | 4,000 | 4,000 | 4,000 | 5 |
| Maximum number of active Process Builder processes and flows that can subscribe to a platform event | 2,000 | 2,000 | 2,000 | 5 |
| Maximum number of custom channels that can be created for all Platform Events events except Real-Time Event Monitoring events | 100 | 100 | 100 | 100 |
| Maximum number of custom channels that can be created for all Change Data Capture events | 100 | 100 | 100 | 100 |
| Maximum number of custom channels that can be created for Real-Time Event Monitoring events | 3 | 3 | 3 | 3 |
| Maximum number of distinct custom platform events that can be added to a channel as part of channel membersIf the same platform event is added to multiple channels, it’s counted once toward the allocation. | 50 | 50 | 5 | 5 |
| Maximum number of Real-Time Event Monitoring events that can be added to a channel as part of channel membersIf the same event is added to multiple channels, it’s counted once toward the allocation. | 10 | 10 | 10 | 10 |
| Maximum event message size that you can publishIf your event object has hundreds of custom fields or many long text area fields, you can hit this limit. In this case, the publishing call gets an error. | 1 MB | 1 MB | 1 MB | 1 MB |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Platform events that originate from an installed managed package share the org’s allocation for the maximum number of platform event definitions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   The concurrent client allocation applies to CometD and to all types of events: platform events, change events, PushTopic events, and generic events. It doesn’t apply to non-CometD clients, such as Apex triggers, flows, and Process Builder processes. Flows and Process Builder processes apply only to platform events and not to change events. The empApi Lightning component uses CometD and consumes the concurrent client allocation like any other CometD client. Each logged-in user using empApi counts as one concurrent client. If the user has multiple browser tabs using empApi, the streaming connection is shared and is counted as one client for that user. A client that exceeds the concurrent client allocation receives an error and can’t subscribe. When one of the clients disconnects and a connection is available, the new client can subscribe. For more information, see [Streaming API Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/streaming_error_codes.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm).

#### See Also

-   [Enterprise Messaging Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm "The Salesforce enterprise messaging platform offers the benefits of event-driven software architectures. Platform events are the event messages (or notifications) that your apps send and receive to take further action. Platform events simplify the process of communicating changes and responding to them without writing complex logic. Publishers and subscribers communicate with each other through events. One or more subscribers can listen to the same event and carry out actions.")


## Default Platform Event Allocations for Event Publishing and Delivery

If your org has no add-on licenses, default allocations apply for event publishing and delivery that can’t be exceeded. The default allocations are enforced to ensure fair sharing of resources in the multitenant environment and to protect the service.

-   The event publishing allocation is how many event messages you can send to the event bus per hour by using any method, including Apex, Pub/Sub API and other APIs, flows, and processes.
-   The event delivery allocation is how many event messages can be delivered in a 24-hour period to Pub/Sub API and CometD subscribers, empApi Lightning components, and event relays. It excludes non-API subscribers, such as Apex triggers, flows, and Process Builder processes. Published event messages that are delivered to non-API subscribers, such as Apex triggers, flows, and Process Builder processes, don’t count against the delivery allocation.
-   The event delivery allocation is shared between high-volume platform events and Change Data Capture events.

### Event Delivery Usage Combined for All Subscribers

The number of delivered events to clients is counted for each subscribed client, including event relays. If you have multiple client subscribers, your usage is added across all subscribers. For example, you have an Unlimited Edition org with a default allocation of 50,000 events in a 24-hour period. Within a few hours, 20,000 event messages are delivered to two subscribed clients. So you consumed 40,000 events and are still entitled to 10,000 events within the 24-hour period.

### How Is Event Publishing and Delivery Usage Calculated?

The event hourly publishing and daily delivery limits are rolling limits. The hourly publishing usage is calculated for the number of publishes in the last hour. Similarly, the daily delivery usage is calculated for the number of delivered events in the last 24 hours. As time goes by, the usage is updated. The event publishing limit is checked when a new event is published. The event delivery limit is checked when a new event is received.

To learn more about how event usage is calculated against your event allocations, see [Learn About Daily Rate Limits](https://trailhead.salesforce.com/content/learn/modules/app-development-without-limits/app-development-without-limits-rate) in the [App Development Without Limits](https://trailhead.salesforce.com/content/learn/modules/app-development-without-limits) Trailhead module.

### Default Allocations

| Description | Subscriber Clients | Performance and Unlimited Editions | Enterprise Edition and Professional Edition (with API Add-On) | Developer Edition |
| --- | --- | --- | --- | --- |
| Event Delivery: maximum number of delivered event messages in the last 24 hours, shared by all clients.To increase this allocation by purchasing an add-on, see Which Allocations Can Be Increased?. | This allocation applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | 50,000 | 25,000 | 10,000 |
| Event Delivery for Salesforce Order Management: maximum number of delivered event messages in the last 24 hours, shared by all clients.This allocation is provided with the purchase of a Salesforce Order Management license. | This allocation applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | 100 | 100 | 100 |
| Event Delivery for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS: maximum number of delivered event messages in the last 24 hours, shared by all clients.This allocation is per license and is provided with the purchase of Digital Engagement, Contact Center, or Einstein 1 Service. | This allocation applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | 25,000 | 25,000 | 25,000 |
| Event Publishing: maximum number of event messages published per hour.To increase this allocation by purchasing an add-on, see Which Allocations Can Be Increased?In addition to the event publishing allocation, daily API request allocations are consumed if you publish events with REST API, SOAP API, or Bulk API. If you publish events with Pub/Sub API, Apex, flows, or processes, the daily API request allocations aren't consumed. See API Request Limits and Allocations in the Salesforce Developer Limits and Allocations Quick Reference. | This allocation applies to all publishing methods, including: Apex Pub/Sub API REST API SOAP API Bulk API Flows Process Builder processes | 250,000 | 250,000 | 50,000 |

### Why Is the Publishing Allocation Higher than the Delivery Allocation?

The set of clients that the publishing allocation applies to is different than the one for the delivery allocation. The publishing allocation applies to all publishing methods. The delivery allocation applies to a subset of clients. It doesn’t apply to Apex triggers, flows, and Process Builder processes. For example, if you use Apex to publish events and an Apex trigger to subscribe to events, you consume the publishing allocation and not the delivery allocation. In this case, you can publish and process more events with the higher publishing allocation than when using other types of subscriber clients. Alternatively, if you use Apex to publish events and Pub/Sub API to subscribe to events, both the publishing and delivery allocations apply.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Even though Apex triggers, flows, and Process Builder processes don’t count against the event delivery limit, their event processing rate depends on the subscriber processing time and volume of events received. A higher processing time and event volume means that it takes longer for the subscriber to reach the tip of the event stream.

### How to Avoid Exceeding Event Allocations

Proactively monitor your event usage. For more information, see [Monitor Event Usage Against Your Allocations](#platform_events_limits_monitor "Check your event publishing and delivery usage and maximum allocation in Setup, or using REST API or Apex.") and [Monitor Event Usage with SOQL Queries by Using PlatformEventUsageMetric](#platform_events_limits_usage_metric "Perform a SOQL query on PlatformEventUsageMetric to get visibility into your event usage and usage trends. With enhanced usage metrics, you can view separate and combined metrics for platform events and change data capture events. Break down usage metrics by event name, client ID, event type, and usage type, and get usage data by granular time segments. PlatformEventUsageMetric data is available for CometD and Pub/Sub API clients, empApi Lightning components, and event relays."). When your event publishing usage gets close to the allocation, try these methods to reduce the consumption of delivered events.

-   Use stream filtering to reduce the amount of events delivered to the subscriber and receive only relevant events. For more information, see [Filter Your Stream of Platform Events with Custom Channels](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_section.htm "Receive only the event messages that match a predefined filter on a custom channel. Create a channel, and configure it with a filter expression. Subscribers to the channel, including Pub/Sub API clients, Streaming API (CometD) clients, and event relays, receive a filtered stream of events. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation.").
-   Make sure you don’t have unnecessary subscribers. Each event delivered to a subscriber counts against the event delivery allocation.

### What to Do If You Exceed the Event Publishing Allocation

If you exceed the hourly event publishing allocation, the publish call fails with the LIMIT\_EXCEEDED error. When the limit’s reached, the events aren’t published or queued. You must wait for the limit usage to decrease, and then republish the events.

### What to Do If You Exceed the Event Delivery Allocation

If you exceed the default event delivery allocation, an error is returned and the subscription is disconnected.

-   The error you receive in a CometD client is: 403::Organization total events daily limit exceeded. The error is returned in the Bayeux /meta/connect channel when a CometD subscriber first connects or in an existing subscriber connection. For more information, see [Streaming API Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/streaming_error_codes.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm).
-   The error code that you receive in a Pub/Sub API client is: sfdc.platform.eventbus.grpc.subscription.limit.exceeded. And the error message is: You have exceeded the event delivery limit for your org.

When the client reaches the event delivery allocation, perform one of these steps.

-   Keep the subscriber disconnected for a temporary time. While the subscriber is disconnected, the event usage for the last 24 hours decreases after some time. The events received in Salesforce during the disconnected state are stored for the retention period of 72 hours. After usage decreases, resume the subscription from where it left off and receive events. You can retrieve stored event messages with Pub/Sub API and CometD using the Replay ID.
-   If you reach the event delivery limit often and your event volume is high, consider purchasing an add-on to increase your event allocations by contacting your Salesforce Account Representative. See [Which Allocations Can Be Increased?](#increase_allocation)

### Which Allocations Can Be Increased?

You can increase the event delivery allocation via a platform events add-on. To purchase a platform events add-on, contact your Salesforce Account Representative. The add-on moves your event delivery usage to a monthly entitlement model and allows for spikes in usage. The add-on also increases your event publishing allocation for platform events. See [Increase Your Event Delivery and Publishing Allocations with a Platform Event Add-On License](#platform_events_limits_entitlement "To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional platform events. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.").

#### See Also

-   [Increase Your Event Delivery and Publishing Allocations with a Platform Event Add-On License](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_entitlement "To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional platform events. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.")

-   [Monitor Event Usage Against Your Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_monitor "Check your event publishing and delivery usage and maximum allocation in Setup, or using REST API or Apex.")

-   [*Change Data Capture Developer Guide*: Change Data Capture Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_allocations.htm "Change Data Capture Developer Guide: Change Data Capture
    Allocations - HTML (New Window)")

-   [*Salesforce Developers Blog*: How to Work Within Platform Events Delivery Limits](https://developer.salesforce.com/blogs/2021/08/how-to-work-within-platform-events-delivery-limits "Salesforce Developers Blog: How to Work Within Platform Events Delivery
    Limits - HTML (New Window)")

-   [*Pub/Sub API Developer Guide*](https://developer.salesforce.com/docs/platform/pub-sub-api/overview "Pub/Sub API Developer Guide - HTML (New Window)")

-   [*Salesforce Help*: Event Relay](https://help.salesforce.com/s/articleView?id=platform.ev_relay_intro.htm&type=5&language=en_US "Salesforce Help: Event Relay - HTML (New Window)")

-   [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm "Streaming API Developer Guide - HTML (New Window)")


## Increase Your Event Delivery and Publishing Allocations with a Platform Event Add-On License

To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional platform events. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.

Check out the benefits and facts about an add-on license.

-   The add-on increases the 24-hour allocation of delivered event messages by 100,000 per day (3 million a month) as a usage-based entitlement.
-   The add-on increases the hourly event publishing allocation by 25,000 events per hour.
-   The daily delivery usage isn’t as strictly enforced as the default allocation. The add-on allows for spikes in usage through a grace allocation. The grace allocation is higher than the allocation that you purchased through the add-on license. As long as the daily event delivery usage is within the grace allocation, your subscribers aren’t stopped and can continue receiving events. Salesforce reserves the right to adjust grace allocations at any time.
-   The entitlement is reset every month after your contract start date.
-   Entitlement usage is computed only for production orgs. It isn’t available in sandbox or trial orgs. For more information, see [Usage-based Entitlement Fields](https://help.salesforce.com/articleView?id=users_usagebased_entitlements_fields.htm&language=en_US "HTML (New Window)").
-   Salesforce monitors event overages based on a calendar month, starting with your contract start date. If you exceed the monthly entitlement, Salesforce contacts you to discuss your event usage needs. The entitlement used for monitoring monthly event overages is the daily allocation multiplied by 30.

| Description | Subscriber Clients | Performance and Unlimited Editions | Enterprise Edition and Professional Edition (with API Add-On) |
| --- | --- | --- | --- |
| Event Delivery: entitlement for delivered event messages, shared by all clients.You can exceed this entitlement by a certain amount before receiving an error. Salesforce uses the monthly entitlement for event overage monitoring. The monthly entitlement is returned in the limits REST API resource. | This entitlement applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | Last 24 hours: 150,000 (50 K included with org license + 100 K from add-on license + grace amount)Monthly entitlement: 4.5 million (1.5 million included with org license + 3 million from add-on license) | Last 24 hours: 125,000 (25 K included with org license + 100 K from add-on license + grace amount)Monthly entitlement: 3.75 million (0.75 million included with org license + 3 million from add-on license) |
| Event Publishing: maximum number of event messages published per hour. | This allocation applies to all publishing methods, including: Apex Pub/Sub API REST API SOAP API Bulk API Flows Process Builder processes | 275,000 (250 K included with org license + 25 K from add-on license) | 275,000 (250 K included with org license + 25 K from add-on license) |

## Monitor Event Usage Against Your Allocations

Check your event publishing and delivery usage and maximum allocation in Setup, or using REST API or Apex.

Check your event publishing and delivery usage in the user interface. From Setup, in the Quick Find box, enter Platform Events, and then select **Platform Events**. The usage is shown in the Event Allocations section.

![Event allocations section](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform-events-event-allocations-ui.png&folder=platform_events)

If your org purchased the add-on for platform events or change data capture, the grace allocation is displayed in addition to the allocation for daily event delivery. The daily event delivery usage corresponds to the DailyDeliveredPlatformEvents REST API limits value. The monthly event delivery usage is also displayed. It corresponds to the MonthlyPlatformEvents REST API limits value. To view the usage-based entitlement in Setup, check the Usage-based Entitlements related list in the Company Information page.

![Event Allocations section shows the Grace Allocation column](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform_events_allocations_ui_grace.png&folder=platform_events)

Learn about other ways to check event usage with REST API, Apex, and in the Company Information page.

| Allocation | Default Allocations | Add-On License |
| --- | --- | --- |
| Event Delivery: number of delivered event messages to CometD and Pub/Sub API clients, empApi Lightning components, and event relays | If your org hasn’t purchased the add-on, check your usage in one of these ways.Daily event delivery usage in the last 24 hours using REST API: check the DailyDeliveredPlatformEvents value with the REST API limits resource.Daily event delivery usage in the last 24 hours using Apex: use the System.OrgLimit class and check the DailyDeliveredPlatformEvents value.The daily event delivery usage is updated within a few minutes after event delivery. | If your org has purchased the add-on, check your usage in one of these ways.Daily event delivery in the last 24 hours as mentioned in the previous column.Monthly event delivery usage: From Setup, in the Quick Find box, enter Platform Events, and then select Platform Events. The monthly event delivery usage is displayed in the Event Allocations section. In the REST API limits resource, this value corresponds to MonthlyPlatformEvents in API version 47.0 and earlier. This value in the UI and API is updated within a few minutes after event delivery.Usage-based entitlement: From Setup, in the Quick Find box, enter Company Information, and then select Company Information. The usage is shown under the Usage-based Entitlements related list. In the REST API limits resource, this value corresponds to MonthlyPlatformEventsUsage​Entitlement in API version 48.0 and later. This value in the UI and API is updated once a day. |
| Event Publishing: number of event messages published per hour | With the REST API limits resource: usage information is returned in HourlyPublishedPlatformEvents. | With the REST API limits resource: usage information is returned in HourlyPublishedPlatformEvents. |

#### See Also

-   [*REST API Developer Guide*: Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "REST API Developer Guide: Limits - HTML (New Window)")

-   [*REST API Developer Guide*: List Org Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "REST API Developer Guide: List Org Limits - HTML (New Window)")

-   [*Apex Reference Guide*: OrgLimit Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_OrgLimit.htm "Apex Reference Guide: OrgLimit Class - HTML (New Window)")


## Monitor Hourly Event Delivery Usage with REST API

Get the hourly delivery usage by periodically retrieving the daily event delivery usage using REST API.

To monitor your org’s high-volume platform event and change event delivery hourly usage, make a REST API call to the limits resource every hour. The difference between the results obtained in the last 2 hours shows how many events were delivered in the last hour.

For example, you make a call at 12:00 PM and see that you have 40,000 events remaining. Then you run the same call at 1:00 PM and see that you have 38,500 events remaining. The returned responses indicate that 1,500 events were delivered to your API subscribers between 12:00 PM and 1:00 PM.

These results are examples of the responses that a GET request to the /services/data/v66.0/limits URI returns.

```

```

#### See Also

-   [*REST API Developer Guide*: Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "REST API Developer Guide: Limits - HTML (New Window)")

-   [*REST API Developer Guide*: List Org Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "REST API Developer Guide: List Org Limits - HTML (New Window)")


## Monitor Event Usage with SOQL Queries by Using PlatformEventUsageMetric

Perform a SOQL query on PlatformEventUsageMetric to get visibility into your event usage and usage trends. With enhanced usage metrics, you can view separate and combined metrics for platform events and change data capture events. Break down usage metrics by event name, client ID, event type, and usage type, and get usage data by granular time segments. PlatformEventUsageMetric data is available for CometD and Pub/Sub API clients, empApi Lightning components, and event relays.

For more information, see [Enhanced Usage Metrics](atlas.en-us.platform_events.meta/platform_events/platform_events_monitor_enhanced_usage.htm "In API version 58.0 and later, enable Enhanced Usage Metrics to get granular usage data and time segments in PlatformEventUsageMetric queries. You can break down usage metrics by event name, client ID, event type, and usage type. And you can get usage data by granular time segments, including daily, hourly, and 15-minute periods.").

## Standard-Volume Platform Event Allocations

﻿These allocations are for standard-volume events defined in API version 44.0 and earlier.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_events)

#### Important

You can no longer define new standard-volume custom platform events. New platform events are high volume by default. Standard-volume custom platform events will be retired in Summer ’27. To migrate existing standard-volume events, see [Migrate Standard-Volume Platform Events to High-Volume Platform Events Before Retirement](https://help.salesforce.com/s/articleView?id=002280033&type=1&language=en_US).

| Description | Performance and Unlimited Editions | Enterprise Edition | Developer Edition and Professional Edition (with API Add-On) |
| --- | --- | --- | --- |
| Event Delivery: maximum number of delivered event messages in the last 24 hours, shared by all CometD clients1 | 50,000 | 25,000 | 10,000 |
| Event Publishing: maximum number of event messages published per hour | 100,000 | 100,000 | 1,000 |

If you exceed the event delivery allocation, you receive this error: 403::Organization total events daily limit exceeded. The error is returned in the Bayeux /meta/connect channel when a CometD subscriber first connects or in an existing subscriber connection. For more information, see [Streaming API Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/streaming_error_codes.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm). Standard-volume event messages that are generated after exceeding the allocation are stored in the event bus. You can retrieve stored standard-volume event messages as long as they’re within the 24-hour retention window.

To monitor your standard-volume event delivery usage, use the limits REST API resource, and inspect the DailyStandardVolumePlatformEvents value. And to monitor the publishing usage, inspect the HourlyPublishedStandardVolumePlatformEvents value. For more information, see [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "HTML (New Window)") in the REST API Developer Guide.

1To request a higher number of standard-volume events delivered to CometD clients, contact Salesforce to purchase an add-on license. The add-on license increases your daily limit of delivered events by 100,000 more events. For example, for Unlimited Edition, the add-on license increases the daily limit of delivered events from 50,000 to 150,000 events. You can purchase multiple add-ons to meet your event requirements for CometD clients. To avoid deployment problems and degradation in service, we recommend that the number of events delivered to CometD clients not exceed 5 million per day. If you require more external events, contact your Salesforce representative to understand how the product can scale to meet your needs.

## Code Examples

```
First call result:
{
...  
  "DailyDeliveredPlatformEvents" : {
    "Max" : 50000,
    "Remaining" : 40000
  },

...
}
 
Second call result:
{
...  
  "DailyDeliveredPlatformEvents" : {
    "Max" : 50000,
    "Remaining" : 38500
  },

...
}
```

## Related Topics

- Which Type of Platform Events Do Allocations Apply to? (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Common Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Default Platform Event Allocations for Event Publishing and Delivery (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Increase Your Event Delivery and Publishing Allocations with a Platform Event Add-On License (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Monitor Event Usage Against Your Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Monitor Hourly Event Delivery Usage with REST API (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Monitor Event Usage with SOQL Queries by Using PlatformEventUsageMetric (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Standard-Volume Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Considerations for Publishing and Subscribing to Platform Events with Apex and APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)
- Apex Publish Callback Limits (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_limits.htm)

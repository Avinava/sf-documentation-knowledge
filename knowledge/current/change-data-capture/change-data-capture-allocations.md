---
title: "Change Data Capture Allocations"
domain: change-data-capture
topic: change-data-capture-allocations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.494Z
estimatedTokens: 6546
keywords: [Change, Data, Capture, Allocations, events, including, number, custom, channels, selected, entities, channel, event, delivery, Common]
---

# Change Data Capture Allocations

> Learn about the allocations for change events including the number of custom channels,
    selected entities in a channel, and event delivery.

# Change Data Capture Allocations

Learn about the allocations for change events including the number of custom channels, selected entities in a channel, and event delivery.

-   **[Common Change Event Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_common_allocations)**
    Common allocations include the concurrent CometD client allocation and the maximum event message size.
-   **[Default Change Event Allocations for Event Delivery](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_default_allocations)**
    If your org has no add-on licenses, default allocations apply for event publishing and delivery that can’t be exceeded. The default allocations are enforced to ensure fair sharing of resources in the multitenant environment and to protect the service.
-   **[Get the Number of Selected Entities](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_get_selected_entities)**
    To get the number of selected entities, perform a SOQL query in Tooling API on PlatformEventChannelMember.
-   **[Allocations for AppExchange Released Managed Packages](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_managed_packages)**
    The allocation for selected entities doesn’t include selections that installed AppExchange released managed packages make in a custom channel that’s part of the package. The maximum number of entity selections of 5 applies to selections that you make, or selections that an unmanaged or managed package makes, except for AppExchange released managed packages.
-   **[Increase Your Event Delivery Allocation with an Add-On License](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_entitlement)**
    To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional change events. The add-on also increases the event publishing allocation. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.
-   **[Monitor Event Usage Against Your Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_monitor_event_usage)**
    Check your event publishing and delivery usage and maximum allocation in Setup, or use REST API or Apex.

#### See Also

-   [*Platform Events Developer Guide*: Platform Event Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_event_limits.htm "Platform Events Developer Guide: Platform Event Allocations - HTML (New Window)")


## Common Change Event Allocations

Common allocations include the concurrent CometD client allocation and the maximum event message size.

| Description | Performance and Unlimited Editions | Enterprise Edition | Developer Edition |
| --- | --- | --- | --- |
| Maximum number of concurrent CometD clients (subscribers) across all channels and for all event types | 2,000 | 1,000 | 20 |
| The maximum event message size that Salesforce can publish is 1 MB.If your entity has hundreds of custom fields or many long text area fields, you can reach this limit. If so, the change event message isn’t delivered and is replaced by a gap event message. For more information, see Gap Events. | 1 MB | 1 MB | 1 MB |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

The concurrent client allocation applies to CometD and to all types of events: platform events, change events, PushTopic events, and generic events. It doesn’t apply to non-CometD clients, such as Apex triggers, flows, and Process Builder processes. Flows and Process Builder processes apply only to platform events and not to change events. The empApi Lightning component uses CometD and consumes the concurrent client allocation like any other CometD client. Each logged-in user using empApi counts as one concurrent client. If the user has multiple browser tabs using empApi, the streaming connection is shared and is counted as one client for that user. A client that exceeds the concurrent client allocation receives an error and can’t subscribe. When one of the clients disconnects and a connection is available, the new client can subscribe. For more information, see [Streaming API Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/streaming_error_codes.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm).

## Default Change Event Allocations for Event Delivery

If your org has no add-on licenses, default allocations apply for event publishing and delivery that can’t be exceeded. The default allocations are enforced to ensure fair sharing of resources in the multitenant environment and to protect the service.

-   The event delivery allocation is how many event messages can be delivered in a 24-hour period to Pub/Sub API and CometD subscribers, empApi Lightning components, and event relays. It excludes non-API subscribers, such as Apex triggers, flows, and Process Builder processes. Published event messages that are delivered to non-API subscribers, such as Apex triggers, flows, and Process Builder processes, don’t count against the delivery allocation.
-   The event delivery allocation is shared between high-volume platform events and Change Data Capture events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Even though Apex triggers don’t count against the event delivery limit, their event processing rate depends on the subscriber processing time and volume of events received. A higher processing time and event volume means that it takes longer for the subscriber to reach the tip of the event stream.

### Event Delivery Usage Combined for All Subscribers

The number of delivered events to clients is counted for each subscribed client, including event relays. If you have multiple client subscribers, your usage is added across all subscribers. For example, you have an Unlimited Edition org with a default allocation of 50,000 events in a 24-hour period. Within a few hours, 20,000 event messages are delivered to two subscribed clients. So you consumed 40,000 events and are still entitled to 10,000 events within the 24-hour period.

### How Is Event Delivery Usage Calculated?

The daily event delivery limit is a rolling limit. It’s calculated for the number of delivered events in the last 24 hours. As time goes by, the usage is updated. The event delivery limit is checked when a new event is received.

To learn more about how event usage is calculated against your event allocations, see [Learn About Daily Rate Limits](https://trailhead.salesforce.com/content/learn/modules/app-development-without-limits/app-development-without-limits-rate) in the [App Development Without Limits](https://trailhead.salesforce.com/content/learn/modules/app-development-without-limits) Trailhead module.

| Description | Subscriber Clients | Performance and Unlimited Editions | Enterprise Edition | Developer Edition |
| --- | --- | --- | --- | --- |
| Maximum number of entities, including standard and custom objects, that you can select across all channels, including the default standard channel and custom channels. This allocation doesn’t apply to entity selections made by AppExchange packages in a custom channel.If the same entity is selected in multiple channels, it’s counted once toward the allocation.To increase this allocation by purchasing an add-on, see Which Allocations Can Be Increased?. | Not applicable | 5 | 5 | 5 |
| Maximum number of custom channelsThis allocation is separate from the one for custom platform event channels. | Not applicable | 100 | 100 | 100 |
| Event Delivery: maximum number of delivered event messages in the last 24 hours, shared by all clients.To increase this allocation by purchasing an add-on, see Which Allocations Can Be Increased?. | This allocation applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | 50,000 | 25,000 | 10,000 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Salesforce publishes change events in response to record changes, so it doesn’t enforce a publishing limit for Change Data Capture because users don’t control the total events published.

### How to Avoid Exceeding Event Allocations

Proactively monitor your event usage. For more information, see [Monitor Event Usage Against Your Allocations](#cdc_allocations_monitor_event_usage "Check your event publishing and delivery usage and maximum allocation in Setup, or use REST API or Apex.") and [Enhanced Usage Metrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_monitor_enhanced_usage.htm) in the Platform Events Developer Guide. When your event delivery usage gets close to the allocation, try these methods to reduce the consumption of delivered events.

-   Use stream filtering to reduce the amount of events delivered to the subscriber and receive only relevant events. For more information, see [Filter Your Stream of Change Events with Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_section.htm "Receive only the change event messages that match a predefined filter on a channel in subscribers. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation. This feature supports Pub/Sub API, CometD (Streaming API), and event relays but not Apex triggers.").
-   Use custom channels instead of the default ChangeEvents channel to only receive the events related to the entities you’re interested in. See [Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.").
-   Make sure you don’t have unnecessary subscribers. Each event delivered to a subscriber counts against the event delivery allocation.

### What to Do If You Exceed the Event Delivery Allocation

If you exceed the default event delivery allocation, an error is returned and the subscription is disconnected.

-   The error you receive in a CometD client is: 403::Organization total events daily limit exceeded. The error is returned in the Bayeux /meta/connect channel when a CometD subscriber first connects or in an existing subscriber connection. For more information, see [Streaming API Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/streaming_error_codes.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm).
-   The error code that you receive in a Pub/Sub API client is: sfdc.platform.eventbus.grpc.subscription.limit.exceeded. And the error message is: You have exceeded the event delivery limit for your org.

When the client reaches the event delivery allocation, perform one of these steps.

-   Keep the subscriber disconnected for a temporary time. While the subscriber is disconnected, the event usage for the last 24 hours decreases after some time. The events received in Salesforce during the disconnected state are stored for the retention period of 72 hours. After usage decreases, resume the subscription from where it left off and receive events. You can retrieve stored event messages with Pub/Sub API and CometD using the Replay ID.
-   If you reach the event delivery limit often and your event volume is high, consider purchasing an add-on to increase your event allocations by contacting your Salesforce Account Representative. See [Which Allocations Can Be Increased?](#increase_allocation).

### Which Allocations Can Be Increased?

You can increase the event delivery allocation and remove the limit on the maximum number of entities selected for change notifications. To do so, purchase a Change Data Capture add-on by contacting your Salesforce Account Representative. The add-on moves your event delivery usage to a monthly entitlement model and allows for spikes in usage. See [Increase Your Event Delivery Allocation with an Add-On License](#cdc_allocations_entitlement "To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional change events. The add-on also increases the event publishing allocation. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.").

#### See Also

-   [Increase Your Event Delivery Allocation with an Add-On License](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_entitlement "To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional change events. The add-on also increases the event publishing allocation. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.")

-   [Monitor Event Usage Against Your Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations_monitor_event_usage "Check your event publishing and delivery usage and maximum allocation in Setup, or use REST API or Apex.")

-   [*Platform Events Developer Guide*: Platform Event Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_event_limits.htm "Platform Events Developer Guide: Platform Event Allocations - HTML (New Window)")

-   [*Salesforce Developers Blog*: How to Work Within Platform Events Delivery Limits](https://developer.salesforce.com/blogs/2021/08/how-to-work-within-platform-events-delivery-limits "Salesforce Developers Blog: How to Work Within Platform Events Delivery Limits - HTML (New Window)")

-   [*Pub/Sub API Developer Guide*](https://developer.salesforce.com/docs/platform/pub-sub-api/overview "Pub/Sub API Developer Guide - HTML (New Window)")

-   [*Salesforce Help*: Event Relay](https://help.salesforce.com/s/articleView?id=platform.ev_relay_intro.htm&type=5&language=en_US "Salesforce Help: Event Relay - HTML (New Window)")

-   [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm "Streaming API Developer Guide - HTML (New Window)")


## Get the Number of Selected Entities

To get the number of selected entities, perform a SOQL query in Tooling API on PlatformEventChannelMember.

To verify the current usage of selected entities, perform this Tooling API query through REST or in the Developer Console Query Editor.

```

```

The query gets the number of unique entities selected across all channels. The query can return a number higher than the selected entities allocation if entity selections are made by AppExchange packages. The latter selections aren’t counted against the selected entities allocation.

The SelectedEntity field of PlatformEventChannelMember in Metadata API and Tooling API represents the entities selected through the user interface or the API. For more information, see [Select Objects for Change Notifications with Metadata API and Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm "Use PlatformEventChannelMember in Metadata API or Tooling API to create or retrieve object event selections for the default standard channel or a custom channel. The default standard channel, ChangeEvents, corresponds to the selections that you configure in Setup in the Change Data Capture page. For a custom channel, the selections are set when you create the channel member. The SelectedEntity field in PlatformEventChannelMember represents a selected event.").

For more information about the Tooling API query REST resource, see [REST Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_rest_resources.htm) in the Tooling API Developer Guide.

## Allocations for AppExchange Released Managed Packages

The allocation for selected entities doesn’t include selections that installed AppExchange released managed packages make in a custom channel that’s part of the package. The maximum number of entity selections of 5 applies to selections that you make, or selections that an unmanaged or managed package makes, except for AppExchange released managed packages.

If you install an AppExchange released managed package, the selections made by the AppExchange package in a custom channel don’t count against your org’s allocation. You can install the AppExchange package even if the org reaches the maximum number of selected entities default allocation. Also, installing the AppExchange package doesn’t alter the current usage for the number of selected entities. This statement holds true for first- and second-generation packages. For package developers, the entity selection allocation is still enforced in the package development org.

#### See Also

-   [*Salesforce AppExchange*](https://appexchange.salesforce.com/ "Salesforce AppExchange - HTML (New Window)")


## Increase Your Event Delivery Allocation with an Add-On License

To increase your event delivery allocation for Pub/Sub API, CometD, empApi Lightning components, and event relays, purchase an add-on for additional change events. The add-on also increases the event publishing allocation. The add-on moves your event delivery usage to a monthly usage-based entitlement model and allows for spikes in usage. To purchase an add-on, contact your Salesforce Account Representative.

Check out the benefits and facts about an add-on license.

-   The add-on increases the 24-hour allocation of delivered event messages by 100,000 per day (3 million a month) as a usage-based entitlement.
-   The add-on removes the limit on the maximum number of entities selected for change notifications.
-   The daily delivery usage isn’t as strictly enforced as the default allocation. The add-on allows for spikes in usage through a grace allocation. The grace allocation is higher than the allocation that you purchased through the add-on license. As long as the daily event delivery usage is within the grace allocation, your subscribers aren’t stopped and can continue receiving events. Salesforce reserves the right to adjust grace allocations at any time.
-   The entitlement is reset every month after your contract start date.
-   Entitlement usage is computed only for production orgs. It isn’t available in sandbox or trial orgs. For more information, see [Usage-based Entitlement Fields](https://help.salesforce.com/articleView?id=users_usagebased_entitlements_fields.htm&language=en_US "HTML (New Window)").
-   Salesforce monitors event overages based on a calendar month, starting with your contract start date. If you exceed the monthly entitlement, Salesforce contacts you to discuss your event usage needs. The entitlement used for monitoring monthly event overages is the daily allocation multiplied by 30.

| Description | Subscriber Clients | Performance and Unlimited Editions | Enterprise Edition |
| --- | --- | --- | --- |
| Maximum number of entities, including standard and custom objects, that you can select for Change Data Capture. | Not Applicable | No limit | No limit |
| Event Delivery: entitlement for delivered event messages, shared by all clients.You can exceed this entitlement by a certain amount before receiving an error. Salesforce uses the monthly entitlement for event overage monitoring. The monthly entitlement is returned in the limits REST API resource. | This entitlement applies to: Pub/Sub API CometD empApi Lightning component Event relaysThis allocation doesn’t apply to: Apex triggers Flows Process Builder processes | Last 24 hours: 150,000 (50 K included with org license + 100 K from add-on license + grace amount)Monthly entitlement: 4.5 million (1.5 million included with org license + 3 million from add-on license) | Last 24 hours: 125,000 (25 K included with org license + 100 K from add-on license + grace amount)Monthly entitlement: 3.75 million (0.75 million included with org license + 3 million from add-on license) |

To increase the entitlement for event delivery, contact your Salesforce Account Representative to purchase the add-on for additional change events.

## Monitor Event Usage Against Your Allocations

Check your event publishing and delivery usage and maximum allocation in Setup, or use REST API or Apex.

Check your change event delivery usage in the user interface, which is shared with platform events. From Setup, in the Quick Find box, enter Platform Events, and then select **Platform Events**. The usage is shown in the Event Allocations section. The publishing usage doesn’t apply to change events.

![Event allocations section](/docs/resources/img/en-us/260.0?doc_id=change_data_capture%2Fimages%2Fplatform-events-event-allocations-ui.png&folder=change_data_capture)

If your org purchased the add-on for platform events or change data capture, the grace allocation is displayed in addition to the allocation for daily event delivery. This value corresponds to the DailyDeliveredPlatformEvents REST API limits value. The monthly event delivery usage is also displayed. It corresponds to the MonthlyPlatformEvents REST API limits value.

![Event Allocations section shows the Grace Allocation column](/docs/resources/img/en-us/260.0?doc_id=change_data_capture%2Fimages%2Fplatform_events_allocations_ui_grace.png&folder=change_data_capture)

Learn about other ways to check event usage with REST API, Apex, and in the Company Information page.

| Allocation | Default Allocations | Add-On License |
| --- | --- | --- |
| Event Delivery: number of delivered event notifications to CometD and Pub/Sub API clients, empApi Lightning components, and event relays | If your org hasn’t purchased the add-on, check your usage in one of these ways.Daily event delivery usage in the last 24 hours using REST API: Check the DailyDeliveredPlatformEvents value with the REST API limits resource.Daily event delivery usage in the last 24 hours using Apex: Use the System.OrgLimit class and check the DailyDeliveredPlatformEvents value.The daily event delivery usage is updated within a few minutes after event delivery. | If your org has purchased the add-on, check your usage in one of these ways.Daily event delivery in the last 24 hours as mentioned in the previous column.Monthly event delivery usage: From Setup, in the Quick Find box, enter Platform Events, and then select Platform Events. The monthly event delivery usage is displayed in the Event Allocations section. In the REST API limits resource, this value corresponds to MonthlyPlatformEvents in API version 47.0 and earlier. This value in the UI and API is updated within a few minutes after event delivery.Usage-based entitlement: From Setup, in the Quick Find box, enter Company Information, and then select Company Information. The usage is shown under the Usage-based Entitlements related list. In the REST API limits resource, this value corresponds to MonthlyPlatformEventsUsage​Entitlement in API version 48.0 and later. This value in the UI and API is updated once a day. |

### Monitor Hourly Event Usage

To monitor event delivery usage by the hour, retrieve the daily event delivery usage using REST API every hour. For more information, see [Monitor Hourly Event Delivery Usage with REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_limits_hourly.htm) in the Platform Events Developer Guide.

### Track Event Usage Trends with SOQL Queries by Using PlatformEventUsageMetric

Perform a SOQL query on PlatformEventUsageMetric to get visibility into your event usage and usage trends. With enhanced usage metrics, you can view separate and combined metrics for platform events and change data capture events. Break down usage metrics by event name, client ID, event type, and usage type, and get usage data by granular time segments. PlatformEventUsageMetric data is available for CometD and Pub/Sub API clients, empApi Lightning components, and event relays. For more information, see [Enhanced Usage Metrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_monitor_enhanced_usage.htm) in the Platform Events Developer Guide.

#### See Also

-   [*REST API Developer Guide*: Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "REST API Developer Guide: Limits - HTML (New Window)")

-   [*REST API Developer Guide*: List Org Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "REST API Developer Guide: List Org Limits - HTML (New Window)")

-   [*Apex Reference Guide*: OrgLimit Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_OrgLimit.htm "Apex Reference Guide: OrgLimit Class - HTML (New Window)")

## Code Examples

```
SELECT COUNT_DISTINCT(SelectedEntity) FROM PlatformEventChannelMember
```

## Related Topics

- Common Change Event Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Default Change Event Allocations for Event Delivery (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Get the Number of Selected Entities (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Allocations for AppExchange Released Managed Packages (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Increase Your Event Delivery Allocation with an Add-On License (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Monitor Event Usage Against Your Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Gap Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm)
- Filter Your Stream of Change Events with Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_section.htm)
- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Select Objects for Change Notifications with Metadata API and Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm)

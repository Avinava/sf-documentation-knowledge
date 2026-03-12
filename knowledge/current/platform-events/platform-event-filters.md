---
title: "Platform Event Filters"
domain: platform-events
topic: platform-event-filters
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.832Z
estimatedTokens: 529
keywords: [Platform, Event, Filters, Tooling, API, Metadata, administrator, Customize, Application, permission, configure, complex, filter, expression, multiple]
---

# Platform Event Filters

> Using Tooling API or Metadata API, an administrator with the Customize
                Application permission can configure a complex filter expression that contains
                multiple fields.

# Platform Event Filters

Using Tooling API or Metadata API, an administrator with the Customize Application permission can configure a complex filter expression that contains multiple fields.

The filter expression is associated with a custom channel and is included in a channel member. You can add one or more filter expressions via channel members to a custom channel. For more information about channels and their allocations, see [Group Platform Events into One Stream with a Custom Channel](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_custom_channels.htm "With a custom channel, you can receive a stream of event messages corresponding to one or more custom platform events, or Real-Time Event Monitoring events. For example, if you’ve defined platform events corresponding to orders for different regions, one client can subscribe to all those events and process them. Custom channels are supported in Pub/Sub API clients, CometD clients, and event relays only. You can also add filters to custom channels. By using only one client to subscribe to all events and using filters, your subscriptions are optimized.").

-   **[Filter Expression Format](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_expression_format.htm)**
    The filter expression format is based on SOQL and supports a subset of SOQL operators and field types. The filter expression can contain one or more field expressions, joined by a logical operator.
-   **[Field Considerations](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_considerations.htm)**
    Keep these considerations in mind for the fields in a filter expression.
-   **[Event Delivery Usage for Filtered Streams](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_allocations.htm)**
    The event delivery allocation applies to the number of events delivered after the filter is applied and not before filtering. Because a filter can reduce the number of events delivered to a subscriber, using a filter helps lower a subscriber's usage of the event delivery allocation.

## Related Topics

- Group Platform Events into One Stream with a Custom Channel (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_custom_channels.htm)
- Filter Expression Format (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_expression_format.htm)
- Field Considerations (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_considerations.htm)
- Event Delivery Usage for Filtered Streams (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_allocations.htm)

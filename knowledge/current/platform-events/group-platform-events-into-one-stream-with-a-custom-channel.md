---
title: "Group Platform Events into One Stream with a Custom Channel"
domain: platform-events
topic: group-platform-events-into-one-stream-with-a-custom-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.123Z
estimatedTokens: 1729
keywords: [Group, Platform, Events, Stream, Custom, Channel, receive, event, messages, corresponding, Real-Time, Monitoring, you’ve, defined, orders]
---

# Group Platform Events into One Stream with a Custom Channel

> With a custom channel, you can receive a stream of event messages corresponding to one or
    more custom platform events, or Real-Time Event Monitoring events. For example, if you’ve
    defined platform events corresponding to orders for different regions, one client can subscribe
    to all those events and process them. Custom channels are supported in Pub/Sub API clients,
    CometD clients, and event relays only. You can also add filters to custom channels. By using
    only one client to subscribe to all events and using filters, your subscriptions are
    optimized.

# Group Platform Events into One Stream with a Custom Channel

With a custom channel, you can receive a stream of event messages corresponding to one or more custom platform events, or Real-Time Event Monitoring events. For example, if you’ve defined platform events corresponding to orders for different regions, one client can subscribe to all those events and process them. Custom channels are supported in Pub/Sub API clients, CometD clients, and event relays only. You can also add filters to custom channels. By using only one client to subscribe to all events and using filters, your subscriptions are optimized.

## Types of Events Supported

Custom channels are available for high-volume custom platform events that you define and for Real-Time Event Monitoring events. They aren’t supported for standard platform events or legacy standard-volume custom platform events.

## PlatformEventChannel and PlatformEventChannelMember Objects in the API

Create a custom channel, and specify the platform events it contains in Tooling API and Metadata API.

PlatformEventChannel represents a custom channel. The ChannelType field indicates which members the custom channel can contain. A ChannelType value of event means that the channel can contain platform events via its channel members. To specify the specific type of events a channel can hold, such as Real-Time Event Monitoring events, use the optional EventType field in combination with ChannelType.

A custom channel can contain events for only one event product. You can’t mix events from different event products in one channel. For example, you can’t add platform events and change data capture events to the same channel.

PlatformEventChannelMember represents a member of a channel. It contains a platform event in the SelectedEntity field and is associated with the channel via the EventChannel field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   After you create a channel, you can't change its ChannelType or EventType field values.
-   When you delete a channel by deleting PlatformEventChannel, all its associated members (PlatformEventChannelMember entities) are also deleted.
-   You can’t add the ApiEventStream and ReportEventStream Real-Time Event Monitoring events to a custom channel via Tooling API because they aren't available in Tooling API. You can add them via Metadata API.

## Example Diagram

This diagram shows the object relationships and definitions of the custom channel Order\_Channel\_\_chn and its members. The channel is set up to receive order events for North America, EMEA, and the APAC regions. A custom event is defined for each region: Order\_NorthAmer\_\_e, Order\_EMEA\_\_e, Order\_APAC\_\_e. Each of these platform events is added to the channel via PlatformEventChannelMember objects. An order management app can subscribe to the custom channel, Order\_Channel\_\_chn, and receive messages of the three platform events.

![Custom order channel containing three platform events, one event per region](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fcustom_channel_order.png&folder=platform_events)

## Subscribing to a Custom Channel and Getting the Event API Name with Pub/Sub API

When you subscribe to a custom channel, provide the channel name in the format /event/ChannelName\_\_chn, such as /event/Order\_Channel\_\_chn. Your subscriber receives event messages of all events that are part of the channel. If you subscribe to the custom channel with Pub/Sub API, get the API name of the event received through the event schema. To retrieve the event schema, call the GetSchema RPC method using the schema ID contained in the received event. The schema name is in the schema\_json field in the response and identifies the event API name. See [GetSchema RPC Method](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/getschema-rpc.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

This example shows a received event with Pub/Sub API with the event name taken from the event schema.

```

```

## Subscribing to a Custom Channel and Getting the Event API Name with CometD via the EventApiName Field

When you subscribe to a custom channel, provide the channel name in the format /event/ChannelName\_\_chn, such as /event/Order\_Channel\_\_chn. Your subscriber receives event messages of all events that are part of the channel. In a CometD client, each event message contains the EventApiName field, which contains the type of the event. For example, this event message has an EventApiName of Order\_EMEA\_\_e, which means that it’s an Order\_EMEA\_\_e event.

```

```

The EventApiName field is available in event messages received in CometD clients that use a Streaming API endpoint with API version 55.0 and later. It isn't available in event messages received in other subscribers, such as Apex triggers, flows, and Pub/Sub API. It isn't included in change data capture events and events that don't support custom channels. Also, the EventApiName field isn’t part of the event schema that the [REST eventSchema resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_eventschema.htm) or the describe call returns.

## Custom Channel Allocations

The maximum number of custom channels and channel members that you can add differ based on the type of events the channel holds. There are separate allocations for custom channels and channel members. See [Common Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_events_limits_common "Common allocations include allocations for platform event definitions, concurrent CometD clients, and allocations for processes and flows. The common allocations apply to standard-volume and high-volume platform events.").

-   **[Create a Custom Channel for Custom Platform Events Using the API](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_configure.htm)**
    Let’s walk through the steps to create a channel and add two platform events via channel members. Then, you can subscribe to the channel to validate receiving event messages for platform events.
-   **[Create a Custom Channel for Real-Time Event Monitoring Events Using the API](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_configure_em.htm)**
    Let’s walk through the steps to create a channel and add two Real-Time Event Monitoring events via channel members.
-   **[List Custom Channels and Channel Members](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_list.htm)**
    You can find which channels and channel members are set up in your Salesforce org by performing SOQL queries through Tooling API.

## Code Examples

```
{
  "CreatedDate": 1711497484289,
  "CreatedById": "0055f000005mc66AAA",
  "Order_Number__c": "2",
  "City__c": "London",
  "Amount__c": 20.0
} 
with schema name: Order_EMEA__e
```

```
{
  "schema": "e8jMOnID4xDThlaPBMx5gg",
  "payload": {
    "City__c": "London",
    "CreatedById": "005RM000002Qu16YAC",
    "Amount__c": 20,
    "CreatedDate": "2022-03-29T13:45:19.230Z",
    "Order_Number__c": "2"
  },
  "event": {
    "EventApiName": "Order_EMEA__e",
    "EventUuid": "218544ad-0472-4315-970f-8825a2802de6",
    "replayId": 10306
  }
}
```

## Related Topics

- Common Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
- Create a Custom Channel for Custom Platform Events Using the API (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_configure.htm)
- Create a Custom Channel for Real-Time Event Monitoring Events Using the API (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_configure_em.htm)
- List Custom Channels and Channel Members (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_list.htm)

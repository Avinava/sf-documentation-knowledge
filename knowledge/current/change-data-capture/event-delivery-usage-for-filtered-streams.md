---
title: "Event Delivery Usage for Filtered Streams"
domain: change-data-capture
topic: event-delivery-usage-for-filtered-streams
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.574Z
estimatedTokens: 240
keywords: [Event, Delivery, Usage, Filtered, Streams, allocation, number, events, delivered, filter, applied, filtering, Because, reduce, subscriber]
---

# Event Delivery Usage for Filtered Streams

> The event delivery allocation applies to the number of events delivered after the filter
    is applied and not before filtering. Because a filter can reduce the number of events delivered
    to a subscriber, using a filter helps lower a subscriber's usage of the event delivery
    allocation.

# Event Delivery Usage for Filtered Streams

The event delivery allocation applies to the number of events delivered after the filter is applied and not before filtering. Because a filter can reduce the number of events delivered to a subscriber, using a filter helps lower a subscriber's usage of the event delivery allocation.

For example, a client subscribes to a channel to receive account change events, and the event bus contains 100 such events to deliver. But the channel member for AccountChangeEvent has a filter that matches only accounts whose Industry field is set to Agriculture. Out of the 100 account change events, 15 match this field value and are delivered. The event delivery usage is in this case 15 events and not 100. For more information about the event delivery allocation, see [Change Data Capture Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_allocations.htm).

---
title: "QuoteToOrderCompletedEvent"
domain: platform-events
topic: quotetoordercompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.133Z
estimatedTokens: 678
keywords: [QuoteToOrderCompletedEvent, Notifies, subscribers, actions, standard, createOrderFromQuote, REST, successful, event, Order, record, isn’t, errors, associated, API]
---

# QuoteToOrderCompletedEvent

> Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the
			request is successful, use this event to learn about the Order record. If the request
			isn’t successful, use this event to learn about the errors associated with the
			request. This object is available in API version 56.0 and later.

# QuoteToOrderCompletedEvent

Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/QuoteToOrderCompletedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available with Revenue Cloud.

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptionContains true if errors occurred during the process; otherwise false. The default value is false. |
| OrderId | TypestringPropertiesNillableDescriptionThe ID of the order created from the quote. If the process failed, this field is null. |
| OrderNumber | TypestringPropertiesNillableDescriptionThe user-friendly, unique number assigned to the order created from the quote. |
| QuoteToOrderErrorDetailEvents | TypeQuoteToOrderErrDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the actions/standard/createOrderFromQuote response. Use this ID to identify the event for a specific request. |

-   **[QuoteToOrderErrDtlEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_quotetoordererrdtlevent.htm)**
    Contains information about any errors that occurred while processing the /actions/standard/createOrderFromQuote REST request. One QuoteToOrderErrDtlEvent record is created for each error that occurred. This object is included in an QuoteToOrderCompletedEvent message. You can't subscribe to QuoteToOrderErrDtlEvent directly. This object is available in API version 56.0 and later.

## Related Topics

- QuoteToOrderErrDtlEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_quotetoordererrdtlevent.htm)

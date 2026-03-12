---
title: "QuoteSaveEvent"
domain: revenue-cloud
topic: quotesaveevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:12.353Z
estimatedTokens: 437
keywords: [QuoteSaveEvent, Notifies, subscribers, process, started, Place, Quote, Sales, Transaction, API, successful, event, updated, isn't, errors]
---

# QuoteSaveEvent

> Notifies subscribers that the process started by the Place Quote or
			Place Sales Transaction API request is complete. If the process is successful, use this
			event to learn about the updated quote. If the request isn't successful, use this event
			to learn about the errors and how to fix them. This object is available in API
		version 60.0 and later.

# QuoteSaveEvent

Notifies subscribers that the process started by the Place Quote or Place Sales Transaction API request is complete. If the process is successful, use this event to learn about the updated quote. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Streaming API (CometD) |  |

## Streaming API Subscription Channel

/event/QuoteSaveEvent

## Special Access Rules

This object is available in orgs with Subscription Management or Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptionThe default value is false.Possible values are:falsetrue |
| QuoteId | TypereferencePropertiesNillableDescriptionThe ID of the quote associated with this event. This field is a relationship field. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionID of the request that triggered the event. |

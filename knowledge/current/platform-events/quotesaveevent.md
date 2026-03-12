---
title: "QuoteSaveEvent"
domain: platform-events
topic: quotesaveevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.127Z
estimatedTokens: 532
keywords: [QuoteSaveEvent, Notifies, subscribers, process, started, actions, standard, successful, event, updated, quote, isn't, errors, how, fix]
---

# QuoteSaveEvent

> Notifies subscribers that the process started by the /actions/standard/quotesaveevent request is complete.
			If the process is successful, use this event to learn about the updated quote. If the
			request isn't successful, use this event to learn about the errors and how to fix
			them. This object is available in API version 58.0 and later.

# QuoteSaveEvent

Notifies subscribers that the process started by the /actions/standard/quotesaveevent request is complete. If the process is successful, use this event to learn about the updated quote. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 58.0 and later.

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

/event/QuoteSaveEvent

## Special Access Rules

This object is available when Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| QuoteId | TypereferencePropertiesNillableDescriptionThe ID of the quote associated with this event. This field is a relationship field.Relationship NameQuoteRelationship TypeLookupRefers ToQuote |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the /quotesaveevent response. Use this ID to identify the event for the specific request. |
| Status | TypepicklistPropertiesDefaulted on create, Nillable, Restricted picklistDescriptionThe default value is NotStarted.Possible values are:CompletedWithPricingCompletedWithTaxCompletedWithoutPricingNotStartedPriceCalculationFailedPriceCalculationInProgressPriceCalculationQueuedSaveFailedOrIncompleteSavingTaxCalculationFailedTaxCalculationInProgressTaxCalculationSuccessTaxCalculationWaiting |

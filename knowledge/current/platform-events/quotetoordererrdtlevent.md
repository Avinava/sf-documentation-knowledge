---
title: "QuoteToOrderErrDtlEvent"
domain: platform-events
topic: quotetoordererrdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.139Z
estimatedTokens: 453
keywords: [QuoteToOrderErrDtlEvent, any, errors, occurred, processing, actions, standard, createOrderFromQuote, REST, record, created, error, included, QuoteToOrderCompletedEvent, message]
---

# QuoteToOrderErrDtlEvent

> Contains information about any errors that occurred while processing
			the /actions/standard/createOrderFromQuote REST
			request. One QuoteToOrderErrDtlEvent record is
			created for each error that occurred. This object is included in an QuoteToOrderCompletedEvent message. You can't subscribe to
			QuoteToOrderErrDtlEvent directly. This object is
		available in API version 56.0 and later.

# QuoteToOrderErrDtlEvent

Contains information about any errors that occurred while processing the /actions/standard/createOrderFromQuote REST request. One QuoteToOrderErrDtlEvent record is created for each error that occurred. This object is included in an QuoteToOrderCompletedEvent message. You can't subscribe to QuoteToOrderErrDtlEvent directly. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionThe error code; for example, INVALID_INPUT. |
| ErrorMessage | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionInformation about the error that occurred during processing. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| PrimaryRecordId | TypereferencePropertiesDescriptionThe record on which the error occurred; for example, the order that was created by the request.Relationship NamePrimaryRecordRelationship TypeLookupRefers ToAsset, Invoice, Order |
| RelatedRecordId | TypereferencePropertiesNillableDescriptionOptional. A secondary record on which the error occurred; for example, the order item.Relationship NameRelatedRecordRelationship TypeLookupRefers ToInvoiceLine, OrderItem |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |

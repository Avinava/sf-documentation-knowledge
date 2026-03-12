---
title: "ProcessExceptionEvent"
domain: platform-events
topic: processexceptionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.119Z
estimatedTokens: 900
keywords: [ProcessExceptionEvent, Notifies, subscribers, errors, occur, payment, processing, capture, apply, refund, order, summary, event, trigger, flows]
---

# ProcessExceptionEvent

> Notifies subscribers of errors that occur during payment processing
			(capture, apply, and refund) on an order summary. Use this event to trigger subscribers
			such as flows in your order workflow. This object is available in API version 50.0
		and later.

# ProcessExceptionEvent

Notifies subscribers of errors that occur during payment processing (capture, apply, and refund) on an order summary. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 50.0 and later.

## Supported Calls

create(), describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/ProcessExceptionEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| AttachedToId | TypereferencePropertiesCreateDescriptionID of the object associated with the ProcessException.This field is a polymorphic relationship field.Relationship NameAttachedToRelationship TypeLookupRefers ToCreditMemo, FulfillmentOrder, Invoice, Order, OrderItem, OrderItemSummary, OrderPaymentSummary, OrderSummary, Payment, PaymentAuthorization, Refund, ReturnOrder, WebCart, WebStore |
| BackgroundOperationId | TypereferencePropertiesCreate, NillableDescriptionThe operation where the exception occurred.This field is a relationship field.Relationship NameBackgroundOperationRelationship TypeLookupRefers ToBackgroundOperation |
| Description | TypetextareaPropertiesCreate, NillableDescriptionDetailed description of the ProcessException. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message.This field is available in API version 52.0 and later. |
| ExceptionType | TypepicklistPropertiesCreateDescriptionProcess type that caused the exception.Possible values are:Commerce Inventory Delete Reservation Failed This value is reserved for future use.Commerce Inventory Update Reservation Failed This value is reserved for future use.OM Apply FailedOM Capture FailedOM Cancel All Order Item Summaries FailedOM Refund FailedOM RMA Failed This value is available in API v52.0 and later.Order Activation FailedOrder Item Summary To Asset FailedOrder To Asset FailedOrder To Billing Schedule FailedPlace Order Failed This value is available in API v57.0 and later. |
| ExternalReference | TypestringPropertiesCreate, NillableDescriptionDescription of external entities associated with the ProcessException. |
| Message | TypestringPropertiesCreateDescriptionShort description of the ProcessException |
| OrderSummaryId | TypereferencePropertiesCreate, NillableDescriptionID of the OrderSummary associated with the ProcessException. The ProcessException component is displayed on this OrderSummary.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Severity | TypepicklistPropertiesCreate, Defaulted on create, NillableDescriptionSeverity of the ProcessException. Each severity value corresponds to one severity category. You can customize the severity picklist to represent your business processes. If you customize the severity picklist, include at least one severity value for each severity category.Severity is set to Null when creating events for payment failures.Possible values are:HighLowNullThe default value is High. |

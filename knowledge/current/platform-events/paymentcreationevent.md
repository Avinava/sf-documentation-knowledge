---
title: "PaymentCreationEvent"
domain: platform-events
topic: paymentcreationevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.049Z
estimatedTokens: 748
keywords: [PaymentCreationEvent, Notifies, subscribers, process, started, actions, standard, paymentSale, API, version, 55.0, later, Calls, Subscription, Channel]
---

# PaymentCreationEvent

> Notifies subscribers when the process started by the /actions/standard/paymentSale request is complete.
		This object is available in API version 55.0 and later.

# PaymentCreationEvent

Notifies subscribers when the process started by the /actions/standard/paymentSale request is complete. This object is available in API version 55.0 and later.

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

/event/PaymentCreationEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

To access Commerce Payments entities, your org must have a Salesforce Order Management license with the Payment Platform org permission activated. Commerce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| ErrorCode | TypestringPropertiesNillableDescriptionError code sent from the payment gateway after a request encountered an error. |
| ErrorMessage | TypetextareaPropertiesNillableDescriptionMessage sent from the payment gateway after a request encountered an error. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request was successful.The default value is 'false'. |
| PaymentGatewayLogId | TypereferencePropertiesNillableDescriptionThe payment gateway log containing information about the communication with the payment gateway.This is a relationship field.Relationship NamePaymentGatewayLogRelationship TypeLookupRefers ToPaymentGatewayLog |
| PaymentId | TypereferencePropertiesNillableDescriptionThe payment created as the result of a successful request.This is a relationship field.Relationship NamePaymentRelationship TypeLookupRefers ToPayment |
| PaymentStatus | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe status of the payment created after a successful request. This field reflects the status upon payment creation, and isn’t updated after further changes to the payment’s status.Possible values are:CanceledDraftFailedPendingProcessed |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the /actions/standard/paymentSale response. Use this ID to identify the event for a specific request. |
| Type | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether the payment was made for a payment capture request or payment sale request.Possible values are:CaptureSale |

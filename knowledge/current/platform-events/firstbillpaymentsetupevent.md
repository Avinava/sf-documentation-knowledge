---
title: "FirstBillPaymentSetupEvent"
domain: platform-events
topic: firstbillpaymentsetupevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.605Z
estimatedTokens: 563
keywords: [FirstBillPaymentSetupEvent, Notifies, subscribers, bill, payment, API, version, 60.0, later, Calls, Subscription, Channel, Event, Delivery, Allocation]
---

# FirstBillPaymentSetupEvent

> Notifies subscribers when a first bill payment is set up. This object is available in
      API version 60.0 and later.

# FirstBillPaymentSetupEvent

Notifies subscribers when a first bill payment is set up. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

FirstBillPaymentSetupEvent is available when B2B Commerce or D2C Commerce is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionCorrelation ID passed in the invocable action input. |
| ErrorCode | TypestringPropertiesNillableDescriptionError code for a failed first bill payment setup result. |
| ErrorMessage | TypestringPropertiesNillableDescriptionError message for a failed first bill payment setup result. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionRequired. Shows whether the first bill payment is successfully set up.The default value is false. |
| OrderSummaryId | TypereferencePropertiesNillableDescriptionID of the OrderSummary in the first bill payment setup process.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| ProcessingStage | TypepicklistPropertiesNillable, Restricted picklistDescriptionProcessing Stage Enum.Possible values are:BillingSchedulesCreationFirstBillingRecovery—Available in API version 63.0 and later.InvoiceGenerationPaymentApplicationPaymentMethodAssociationPreProcessing |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionRequest ID returned as an output of an invocable action. |

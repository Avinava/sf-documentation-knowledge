---
title: "NegInvcLineProcessedEvent"
domain: revenue-cloud
topic: neginvclineprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.730Z
estimatedTokens: 675
keywords: [NegInvcLineProcessedEvent, notification, customers, negative, invoice, line, converted, credit, memo, API, version, 62.0, later, Calls, Subscribers]
---

# NegInvcLineProcessedEvent

> Represents the notification to the customers when a negative invoice
         line is converted to a credit memo This object is available in API version 62.0 and
      later.

# NegInvcLineProcessedEvent

Represents the notification to the customers when a negative invoice line is converted to a credit memo This object is available in API version 62.0 and later.

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

/event/NegInvcLineProcessedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| CrMemoProcessErrDtlEvents | TypeCrMemoProcessErrDtlEventPropertiesNillableDescriptionA compilation of error messages and error codes for a failed request. See the ErrorDetails field for error messages and error codes. |
| CreditMemoId | TypereferencePropertiesNillableDescriptionThe ID of the credit memo created as a result of the successful conversion of a negative invoice line.This field is a relationship field.Relationship NameCreditMemoRefers ToCreditMemo |
| ErrorDetails | TypestringPropertiesNillableDescriptionIf the request fails, this field shows error messages, error codes, and the ID of the record on which the errors occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceId | TypereferencePropertiesNillableDescriptionThe ID of the invoice that this event is in reference to.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| IsAutomatedNegativeInvoiceLineConversion | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether this event is generated either by an automated process to convert negative invoice lines to credit memos (true) or by a manual process (false).The default value is false. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionRequired. Indicates whether the negative invoice lines were converted successfully to credit memos (true) or not (false).The default value is false. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that’s populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique identifier of the request. This field is always empty. |

## Related Topics

- CrMemoProcessErrDtlEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_crmemoprocesserrdtlevent.htm)

---
title: "CreditMemoProcessedEvent"
domain: revenue-cloud
topic: creditmemoprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.270Z
estimatedTokens: 550
keywords: [CreditMemoProcessedEvent, notification, customers, process, initiated, commerce, invoicing, credit-memos, API, version, 62.0, later, Calls, Subscribers, Subscription]
---

# CreditMemoProcessedEvent

> Represents the notification to the customers after the process initiated by
         the /commerce/invoicing/credit-memos request is
         complete. This object is available in API version 62.0 and later.

# CreditMemoProcessedEvent

Represents the notification to the customers after the process initiated by the /commerce/invoicing/credit-memos request is complete. This object is available in API version 62.0 and later.

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

/event/CreditMemoProcessedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| CrMemoProcessErrDtlEvents | TypeCrMemoProcessErrDtlEvent[]PropertiesNillableDescriptionA compilation of error messages and error codes for a failed request. See the ErrorDetails field for error messages and error codes. |
| CreditMemoId | TypereferencePropertiesNillableDescriptionThe credit memo created as the result of a successful request.This field is a relationship field.Relationship NameCreditMemoRefers ToCreditMemo |
| ErrorDetails | TypestringPropertiesNillableDescriptionIf the request fails, this field shows error messages, error codes, and the ID of the record on which the errors occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionRequired. Indicates whether the request was successful (true) or not (false).The default value is false. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that’s populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the response. Use this ID to identify the event for a specific request. |

## Related Topics

- CrMemoProcessErrDtlEvent[] (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_crmemoprocesserrdtlevent.htm)

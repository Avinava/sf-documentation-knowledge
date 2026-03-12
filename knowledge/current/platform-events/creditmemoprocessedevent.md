---
title: "CreditMemoProcessedEvent"
domain: platform-events
topic: creditmemoprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.500Z
estimatedTokens: 678
keywords: [CreditMemoProcessedEvent, Notifies, subscribers, process, started, commerce, invoicing, credit-memos, API, version, 55.0, later, Calls, Subscription, Channel]
---

# CreditMemoProcessedEvent

> Notifies subscribers when the process started by the /commerce/invoicing/credit-memos request is
			complete. This object is available in API version 55.0 and later.

# CreditMemoProcessedEvent

Notifies subscribers when the process started by the /commerce/invoicing/credit-memos request is complete. This object is available in API version 55.0 and later.

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

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| CrMemoProcessErrDtlEvents | TypeCreditMemoProcessedErrDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. This field is available only in API versions 55.0–58.0.See the ErrorDetails field for error messages and error codes. |
| CreditMemoId | TypereferencePropertiesNillableDescriptionThe credit memo created as the result of a successful request.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| ErrorDetails | TypestringPropertiesNillableDescriptionIf the request fails, this field shows error messages, error codes, and the ID of the record on which the errors occurred. This field is available in API 58.0 and later. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the Create Standalone Credit Memo action was successful.The default value is 'false'. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the /commerce/invoicing/credit-memos response. Use this ID to identify the event for a specific request. |

## Example

A user successfully runs a /commerce/invoicing/credit-memos, creates one credit memo, and receives this platform event when the request completes.

```

```

## Example

A user runs a /commerce/invoicing/invoices/{invoiceId}/actions/credit request, which fails because the credit memo’s amount is greater than the invoice’s balance.

```

```

## Code Examples

```
{
		"IsSuccess": true,
		"CrMemoProcessErrDtlEvents": null,
		"CreatedById": "005RO000000g4LYYAY",
		"CorrelationIdentifier": "50gRO0000000jxc",
		"CreatedDate": "2023-03-17T15:09:18Z",
		"ErrorDetails": "[]",
		"InvoiceId": "3ttRO0000006839YAA",
		"CreditMemoId": "50gRO0000000jxcYAA",
		"RequestIdentifier": "d488e070-0fd8-4cde-a9fd-d7ca38d040f5"
}
```

```
{
		"IsSuccess": false,
		"CrMemoProcessErrDtlEvents": null,
		"CreatedById": "005RO000000g4LYYAY",
		"CorrelationIdentifier": "50gRO0000000jzi",
		"CreatedDate": "2023-03-17T22:55:11Z",
		  "ErrorDetails": "[{
	"ErrorSourceId": "50gRO0000000jzi",
	"ErrorCode": "RECORD_UPDATE_FAILED",
	"ErrorMessage": "An error occurred while updating the credit memo status to POSTED: Child events testing - fail updating credit memo status to posted Failed object Ids : 50gRO0000000jzi"
}]",
		"CreditMemoId": "50gRO0000000jziYAA",
		"RequestIdentifier": "9123a706-4a64-4beb-8942-4eb5abd1e59f"
	},
```

## Related Topics

- CreditMemoProcessedErrDtlEvent[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_crmemoprocesserrdtlevent.htm)

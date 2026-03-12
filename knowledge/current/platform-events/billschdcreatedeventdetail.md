---
title: "BillSchdCreatedEventDetail"
domain: platform-events
topic: billschdcreatedeventdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.352Z
estimatedTokens: 387
keywords: [BillSchdCreatedEventDetail, order, item, actions, any, errors, occurred, processing, included, BillingScheduleCreatedEvent, message, can't, subscribe, directly, API]
---

# BillSchdCreatedEventDetail

> Contains information about each order item in the  /actions/standardCreateBillingScheduleFromOrderItem
			request and any errors that occurred while processing the request. This object is
		included in an BillingScheduleCreatedEvent message. You
		can't subscribe to BillSchdCreatedEventDetail directly.
		This object is available in API version 55.0 and later.

# BillSchdCreatedEventDetail

Contains information about each order item in the /actions/standardCreateBillingScheduleFromOrderItem request and any errors that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to BillSchdCreatedEventDetail directly. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BillingScheduleId | TypeIdPropertiesNillableDescriptionIf the request was successful, this field contains the ID of the billing schedule for the order item. |
| ErrorCode | TypestringPropertiesNillableDescriptionIf the request wasn’t successful, this field contains the error code. |
| ErrorMessage | TypestringPropertiesNillableDescriptionIf the request wasn’t successful, this field contains the error message. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesNillableDescriptionIndicates whether the request to create a billing schedule for the order item was successful. |
| OrderItemId | TypereferencePropertiesNillableDescriptionThe ID of the order item used in the /actions/standardCreateBillingScheduleFromOrderItem REST request.This field is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
|  |  |

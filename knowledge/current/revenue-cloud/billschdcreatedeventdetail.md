---
title: "BillSchdCreatedEventDetail"
domain: revenue-cloud
topic: billschdcreatedeventdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.834Z
estimatedTokens: 417
keywords: [BillSchdCreatedEventDetail, Contains, details, order, item, commerce, invoicing, billing-schedules, actions, create, request, any, errors, occurred, while, processing, request., included, BillingScheduleCreatedEvent, message.]
---

# BillSchdCreatedEventDetail

> Contains details about each order item in the /commerce/invoicing/billing-schedules/actions/create request and any errors
         that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to
         the BillSchdCreatedEventDetail platform event
         directly. This object is available in API version 63.0 and later.

# BillSchdCreatedEventDetail

Contains details about each order item in the /commerce/invoicing/billing-schedules/actions/create request and any errors that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to the BillSchdCreatedEventDetail platform event directly. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Billing is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BillingScheduleId | TypereferencePropertiesNillableDescriptionIf the request was successful, this field contains the ID of the billing schedule for the order item.This field is a relationship field.Relationship NameBillingScheduleRefers ToBillingSchedule |
| ErrorCode | TypestringPropertiesNillableDescriptionIf the request wasn’t successful, this field contains the error code. |
| ErrorMessage | TypestringPropertiesNillableDescriptionIf the request wasn’t successful, this field contains the error message. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request to create a billing schedule for the order item is successful (true) or not (false).The default value is false. |
| OrderItemId | TypereferencePropertiesDescriptionThe ID of the order item used in the /actions/standardCreateBillingScheduleFromOrderItem REST request.This field is a relationship field.Relationship NameOrderItemRefers ToOrderItem |

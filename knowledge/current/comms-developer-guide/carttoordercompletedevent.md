---
title: "CartToOrderCompletedEvent"
domain: comms-developer-guide
topic: carttoordercompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.215Z
estimatedTokens: 576
keywords: [CartToOrderCompletedEvent, row, notifies, subscribers, actions, standard, createOrderFromCart, REST, successful, event, Order, record, isn’t, errors, associated]
---

# CartToOrderCompletedEvent

> Each row represents information that notifies subscribers when the
            /actions/standard/createOrderFromCart REST request is
         complete. If the request is successful, use this event to learn about the Order
      record. If the request isn’t successful, use this event to learn about the errors associated
      with the request. This object is available in API version 66.0 and later.

# CartToOrderCompletedEvent

Each row represents information that notifies subscribers when the /actions/standard/createOrderFromCart REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects()

## Subscription Channel

/event/CartToOrderCompletedEvent

## Special Access Rules

This object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionThe ID specified by a client, such as Cart ID. |
| ErrorCode | TypestringPropertiesNillableDescriptionAn error code indicating the type of error. |
| ErrorMessage | TypetextareaPropertiesNillableDescriptionA message that provides the details of the error. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether an error occurred during the Place Order API call (true) or not (false).The default value is false. |
| OrderId | TypereferencePropertiesNillableDescriptionThe ID of the order created from the cart. If the process failed, this field is null.This field is a relationship field.Relationship NameOrderRefers ToOrder |
| OrderNumber | TypestringPropertiesNillableDescriptionThe unique number assigned to the order created from the cart. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID that's returned in the actions/standard/createCartFromOrder response. Use this ID to identify the event for a specific request. |
| RevenueTransactionErrorLogId | TypereferencePropertiesNillableDescriptionThe ID of the revenue transaction error log when error occurs.This field is a relationship field.Relationship NameRevenueTransactionErrorLogRefers ToRevenueTransactionErrorLog |

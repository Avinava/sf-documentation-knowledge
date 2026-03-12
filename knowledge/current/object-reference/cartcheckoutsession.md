---
title: "CartCheckoutSession"
domain: object-reference
topic: cartcheckoutsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.114Z
estimatedTokens: 662
keywords: [CartCheckoutSession, checkout, session, Lightning, B2B, Commerce, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# CartCheckoutSession

> Represents a checkout session used in Lightning B2B Commerce checkout.
    This object is available in API version 48.0 and later.

# CartCheckoutSession

Represents a checkout session used in Lightning B2B Commerce checkout. This object is available in API version 48.0 and later.

A checkout session is tied to a single web cart, but there can be multiple checkout sessions for a single cart.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| BackgroundOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the in progress background operation. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency used for the checkout session. Default value is USD.Possible values are:USD—U.S. Dollar |
| IsArchived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether checkout processing is archived (true) or not (false). After a session is archived, it can’t be unarchived. Default value is false. |
| IsError | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the session is in error state (true) or not (false). Default value is false. |
| IsProcessing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether checkout processing is in progress (true) or not (false). Default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the checkout session. |
| NextState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next state of the checkout session. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a created order after the checkout session has gone from cart to order. |
| OrderReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique reference number the shopper can use to refer to the order. In API version 63.0 and later, LWR stores don't populate this field upon checkout. Instead, the InitialOrderReferenceNumber field on the WebCart object is populated. |
| State | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe current state of the checkout session. |
| WebCartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the cart that is used to create the checkout session. |

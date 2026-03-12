---
title: "GuestBuyerProfile"
domain: object-reference
topic: guestbuyerprofile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.013Z
estimatedTokens: 315
keywords: [GuestBuyerProfile, store's, guest, buyer, profile, unauthenticated, buyers, browse, store, API, version, 51.0, later, Calls]
---

# GuestBuyerProfile

> Represents a store's guest buyer profile, which allows unauthenticated buyers
      to browse the store. This object is available in API version 51.0 and later.

# GuestBuyerProfile

Represents a store's guest buyer profile, which allows unauthenticated buyers to browse the store. This object is available in API version 51.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency displayed to the guest buyer when they’re viewing the store.Possible values are:USD—U.S. Dollar |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetailed description of the profile. Includes information like which store the profile is used in. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time when one or more of the fields were modified |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time when one or more of the fields were viewed |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the guest buyer profile. Including a reference to the store helps with later identification. |

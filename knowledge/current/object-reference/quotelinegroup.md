---
title: "QuoteLineGroup"
domain: object-reference
topic: quotelinegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.893Z
estimatedTokens: 422
keywords: [QuoteLineGroup, Stores, group, line, items, quote, aggregated, subtotal, parent-child, relationship, API, version, 61.0, later, Calls]
---

# QuoteLineGroup

> Stores the group information for line items in a quote. It also stores the
         aggregated line field information (subtotal). It contains a parent-child relationship to
         quote. This object is available in API version 61.0 and later.

# QuoteLineGroup

Stores the group information for line items in a quote. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to quote. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the group. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the group. |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote associated with the group.This field is a relationship field.Relationship NameQuoteRelationship TypeMaster-detailRefers ToQuote (the master object) |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber indicating the sort order selected by the user. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| SummarySubtotal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of all the line items in the group. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the group.Possible values are:CPQQuoteGroup—CPQ Line GroupingThe default value is CPQQuoteGroup. |

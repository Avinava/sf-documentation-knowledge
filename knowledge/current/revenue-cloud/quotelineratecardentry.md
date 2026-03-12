---
title: "QuoteLineRateCardEntry"
domain: revenue-cloud
topic: quotelineratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.348Z
estimatedTokens: 672
keywords: [QuoteLineRateCardEntry, catalog, negotiated, rates, usage, resource, associated, quote, line, item, that's, charge, overage, consumption, API]
---

# QuoteLineRateCardEntry

> Represents the catalog and negotiated rates of a usage resource associated
         with a quote line item that's used to charge overage consumption. This object is
      available in API version 62.0 and later.

# QuoteLineRateCardEntry

Represents the catalog and negotiated rates of a usage resource associated with a quote line item that's used to charge overage consumption. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsChosenRate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this rate is the chosen rate for the associated binding target and usage resource (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to the quote line rate card entry record. |
| NegotiatedRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe base negotiated rate used to charge overage consumption. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent quote line item associated with the quote line rate card entry.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |
| RateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe rate card entry containing catalog rates that's associated with the quote line rate card entry.This field is a relationship field.Relationship NameRateCardEntryRefers ToRateCardEntry |
| RateCardId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe rate card associated with the quote line rate card entry.This field is a relationship field.Relationship NameRateCardRefers ToRateCard |
| RateUnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe standard unit of measure containing the unit for the negotiated rate that's associated with the quote line rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureRefers ToUnitOfMeasure |
| UsageResourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe usage resource associated with the quote line rate card entry.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |

---
title: "QuoteRecipientGroup"
domain: object-reference
topic: quoterecipientgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.987Z
estimatedTokens: 444
keywords: [QuoteRecipientGroup, recipient, group, offers, products, configuration, added, includes, reusing, groups, add, remove, recipients, API, version]
---

# QuoteRecipientGroup

> Represents a recipient group for which offers or products with the same
         configuration are being added. This also includes reusing these groups to add or remove
         recipients. This object is available in API version 64.0 and later.

# QuoteRecipientGroup

Represents a recipient group for which offers or products with the same configuration are being added. This also includes reusing these groups to add or remove recipients. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualMemberCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe actual number of members in the quote recipient group. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the quote recipient group. |
| ExpectedMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected number of members in the quote recipient group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the quote recipient group. |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a quote recipient group.This field is a relationship field.Relationship NameQuoteRelationship TypeMaster-detailRefers ToQuote (the master object) |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the quote recipient group is active.Possible values are:ActiveInactiveThe default value is Active. |

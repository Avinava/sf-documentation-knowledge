---
title: "QuoteRecipientGroupMember"
domain: object-reference
topic: quoterecipientgroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.992Z
estimatedTokens: 401
keywords: [QuoteRecipientGroupMember, junction, quote, line, item, recipient, group, API, version, 64.0, later, Calls]
---

# QuoteRecipientGroupMember

> Represents a junction between a quote line item recipient and a quote
         recipient group. This object is available in API version 64.0 and later.

# QuoteRecipientGroupMember

Represents a junction between a quote line item recipient and a quote recipient group. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the quote recipient group member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of a quote recipient group member.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| QuoteLineItemRecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote line item recipient associated with the quote recipient group.This field is a relationship field.Relationship NameQuoteLineItemRecipientRefers ToQuoteLineItemRecipient |
| QuoteRecipientGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote line item recipient group associated with the quote recipient group.This field is a relationship field.Relationship NameQuoteRecipientGroupRefers ToQuoteRecipientGroup |

---
title: "InteractionSumDiscussedAccount"
domain: nonprofit-cloud
topic: interactionsumdiscussedaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.625Z
estimatedTokens: 498
keywords: [InteractionSumDiscussedAccount, companies, discussed, interaction, Calls, Associated, Objects]
---

# InteractionSumDiscussedAccount

> Represents information about the companies discussed in an
      interaction.

# InteractionSumDiscussedAccount

Represents information about the companies discussed in an interaction.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes about the account that’s associated with the interaction summary. |
| DiscussedAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe company or organization mentioned in the interaction summary.This is a relationship field.Relationship NameDiscussedAccountRelationship TypeLookupRefers ToAccount |
| InteractionSummaryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The interaction summary associated with the interaction summary account record.This is a relationship field.Relationship NameInteractionSummaryRelationship TypeLookupRefers ToInteractionSummary |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the interaction summary account. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

InteractionSumDiscussedAccountFeed

Feed tracking is available for the object.

InteractionSumDiscussedAccountHistory

History is available for tracked fields of the object.

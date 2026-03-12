---
title: "InteractionRelatedAccount"
domain: nonprofit-cloud
topic: interactionrelatedaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.620Z
estimatedTokens: 540
keywords: [InteractionRelatedAccount, junction, interaction, account, that's, Calls, Associated, Objects]
---

# InteractionRelatedAccount

> Represents a junction between an interaction and account that's related to
         that interaction.

# InteractionRelatedAccount

Represents a junction between an interaction and account that's related to that interaction.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of a company that's associated with the interaction.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AccountRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the role of the account in the interaction.Possible values are:AuditLegalParticipatingPrimary |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description about the account that's associated with the interaction. |
| InteractionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The interaction associated with the account.This field is a relationship field.Relationship NameInteractionRelationship TypeLookupRefers ToInteraction |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account that's related to the interaction. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

InteractionRelatedAccountFeed

Feed tracking is available for the object.

InteractionRelatedAccountHistory

History is available for tracked fields of the object.

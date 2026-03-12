---
title: "Interaction"
domain: nonprofit-cloud
topic: interaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.604Z
estimatedTokens: 836
keywords: [Interaction, phone, call, in-person, meeting, video, conference, two, people, attendees, typically, including, least, representative, customer]
---

# Interaction

> Represents an interaction (phone call, in-person meeting, or video
			conference) between two or more people (attendees), typically including at least one
			representative and one customer or partner.

# Interaction

Represents an interaction (phone call, in-person meeting, or video conference) between two or more people (attendees), typically including at least one representative and one customer or partner.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the customer or partner who attended the interaction.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the interaction. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the interaction ended. |
| InteractionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of interaction.Possible values are:ConferenceEmailIn PersonPhone Call |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastSyncedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when a sync was performed to create or update an interaction from an email client or other solutions in Salesforce. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of the interaction.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the interaction. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique reference ID of the interaction. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity or financial deal associated with the interaction.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToFinancialDeal, Opportunity |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the interaction started. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

InteractionFeed

Feed tracking is available for the object.

InteractionHistory

History is available for tracked fields of the object.

InteractionOwnerSharingRule

Sharing rules are available for the object.

InteractionShare

Sharing is available for the object.

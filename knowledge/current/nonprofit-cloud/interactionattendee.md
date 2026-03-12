---
title: "InteractionAttendee"
domain: nonprofit-cloud
topic: interactionattendee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.612Z
estimatedTokens: 807
keywords: [InteractionAttendee, attendee, interaction, Calls, Associated, Objects]
---

# InteractionAttendee

> Represents an attendee of an interaction.

# InteractionAttendee

Represents an attendee of an interaction.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttendeeResponse | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the response of the attendee to the interaction.Possible values are:AcceptedDeclinedAwaiting Response |
| AttendeeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of attendee.Possible values are:ExternalInternal |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact who attended the interaction.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the attendee. |
| EventId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe event on Salesforce calendar for this attendee.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| InteractionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The interaction for which this attendee record is created.Relationship NameInteractionRelationship TypeMaster-DetailRefers ToInteraction |
| IsOrganizer | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attendee is the interaction organizer (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastSyncedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when a sync was performed to create or update an interaction from an email client or other solutions in Salesforce. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the interaction attendee. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who attended the interaction. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

InteractionAttendeeFeed

Feed tracking is available for the object.

InteractionAttendeeHistory

History is available for tracked fields of the object.

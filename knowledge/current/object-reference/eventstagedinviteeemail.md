---
title: "EventStagedInviteeEmail"
domain: object-reference
topic: eventstagedinviteeemail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.805Z
estimatedTokens: 563
keywords: [EventStagedInviteeEmail, relationship, event, email, address, invited, doesn’t, match, user, contact, lead, record, Data, unmatched, represented]
---

# EventStagedInviteeEmail

> Represents the relationship between an event and an email address invited to
         the event that doesn’t match to a user, contact, or lead record. Data about the unmatched
         email address is represented in StagedInviteeEmail. This object represents event-related
         details, such as the invitee's attendance response to the event. This object is
      available in API version 66.0 and later.

# EventStagedInviteeEmail

Represents the relationship between an event and an email address invited to the event that doesn’t match to a user, contact, or lead record. Data about the unmatched email address is represented in StagedInviteeEmail. This object represents event-related details, such as the invitee's attendance response to the event. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Special Access Rules

This object is available with Einstein Activity Capture when Sync Email as Salesforce Activity is turned on.

## Fields

| Field | Details |
| --- | --- |
| EventId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the related event record.This field is a relationship field.Relationship NameEventRefers ToEvent |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the event is archived (true) or not (false). This value helps manage high volumes of archived events, improving query performance.The default value is false. |
| IsOrganizer | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the invitee is the event organizer (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe invited email address. |
| StagedInviteeEmailId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the related invitee email address record.This field is a relationship field.Relationship NameStagedInviteeEmailRelationship TypeMaster-detailRefers ToStagedInviteeEmail |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe attendance response to the event from the invitee.Possible values are:AcceptedDeclinedMaybeNewUninvited |

---
title: "EmailMessageRelation"
domain: object-reference
topic: emailmessagerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.395Z
estimatedTokens: 542
keywords: [EmailMessageRelation, relationship, email, contacts, leads, users, API, version, 37.0, later, Special, Access, Rules, Calls, Usage]
---

# EmailMessageRelation

> Represents the relationship
				between an email and contacts, leads, and users.
		This object is available in API version 37.0 and later.

# EmailMessageRelation

Represents the relationship between an email and contacts, leads, and users. This object is available in API version 37.0 and later.

## Special Access Rules

EmailMessageRelation is only available for organizations that use Email-to-Case or Enhanced Email, which is automatically enabled for most customers.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| EmailMessageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the EmailMessage record.This is a relationship field.Relationship NameEmailMessageRelationship TypeLookupRefers ToEmailMessage |
| RelationAddress | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe email address of the sender or recipient.NoteIf a record relates an email to an existing contact, lead, or user record in Salesforce, the value of RelationAddress is the current value of the email address. If the value is not set, it is auto-populated from RelationId. |
| RelationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe RecordId of the sender or recipient.NoteIf a record relates an email to an email address that’s not associated with an existing contact, lead, or user record in Salesforce, the value of RelationId is null.This is a polymorphic relationship field.Relationship NameRelationRelationship TypeLookupRefers ToContact, Lead, User |
| RelationObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the object type of the RecordId in the RelationId field. It can be a contact, lead, or user. |
| RelationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of relationship the contact, lead, or user has with the email message. Possible values include:ToAddressCcAddressBccAddressFromAddressOtherAddressFor an Experience Cloud site user who is not the sender of the email, no BccAddress relations are returned. |

## Usage

EmailMessageRelation allows an email to be related to contacts, leads, and users.

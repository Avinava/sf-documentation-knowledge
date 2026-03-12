---
title: "ListEmailIndividualRecipient"
domain: object-reference
topic: listemailindividualrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.257Z
estimatedTokens: 513
keywords: [ListEmailIndividualRecipient, email, Salesforce, recipient, record, link, Recipients, contacts, leads, campaign, members, one-to-many, relationship, ListEmail, API]
---

# ListEmailIndividualRecipient

> For a list email in Salesforce, represents a recipient. Each record
         represents a link from a list email to exactly one recipient for that list email.
         Recipients can be contacts, leads, or campaign members. Has a one-to-many relationship with
         ListEmail. This object is available in API version 44.0 and later.

# ListEmailIndividualRecipient

For a list email in Salesforce, represents a recipient. Each record represents a link from a list email to exactly one recipient for that list email. Recipients can be contacts, leads, or campaign members. Has a one-to-many relationship with ListEmail. This object is available in API version 44.0 and later.

The visibility and accessibility of this object is inherited from the related list email.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceStepTrackerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnderstand which action cadence step tracker the list email individual recipient is related to. Used for automated emails in Sales Engagement.Users must have the Sales Engagement Cadence Creator or Sales Engagement User permission enabled.This field is available in API version 54.0 and later.Relationship NameActionCadenceStepTrackerRelationship TypeLookupRefers ToActionCadenceStepTracker |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:EUR (Euro)INR (Indian Rupee)USD (US Dollars) |
| ListEmailId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe related list email record. Required on record creation; read-only otherwise.This is a relationship field.Relationship NameListEmailRelationship TypeLookupRefers ToListEmail |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the list email recipient source. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionthe contact, lead, person account, or campaign member ID of the individual list email recipient.This is a relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToCampaignMember, Contact, Lead |

## Usage

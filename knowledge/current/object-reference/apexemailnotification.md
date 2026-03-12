---
title: "ApexEmailNotification"
domain: object-reference
topic: apexemailnotification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.438Z
estimatedTokens: 289
keywords: [ApexEmailNotification, Stores, Salesforce, user, external, email, address, notified, unhandled, Apex, exceptions, occur, API, version, 35.0]
---

# ApexEmailNotification

> Stores a Salesforce user ID or external email address to be notified when
         unhandled Apex exceptions occur. This object is available in API version 35.0 and
      later.

# ApexEmailNotification

Stores a Salesforce user ID or external email address to be notified when unhandled Apex exceptions occur. This object is available in API version 35.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Each ApexEmailNotification contains either an email or a user ID, but not both.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(),upsert()

## Fields

| Field | Details |
| --- | --- |
| Email | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external email address to which the notification is sent. Mutually exclusive with the UserId field. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user to which the notification is sent. Mutually exclusive with the Email field.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

To notify users of your org at the email addresses they have on record, use UserId. To notify external users or alternate email addresses, use Email.

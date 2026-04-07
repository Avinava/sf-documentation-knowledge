---
title: "ApexEmailNotification"
domain: tooling-api
topic: apexemailnotification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:02:46.290Z
estimatedTokens: 478
keywords: [ApexEmailNotification, Stores, Salesforce, user, external, email, address, notified, unhandled, Apex, exceptions, occur, API, version, 35.0]
---

# ApexEmailNotification

> Stores a Salesforce user ID or external email address to be notified when
         unhandled Apex exceptions occur. This object is available in API version 35.0 and
      later.

# ApexEmailNotification

Stores a Salesforce user ID or external email address to be notified when unhandled Apex exceptions occur. This object is available in API version 35.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

System-generated emails from an unverified email-sending domain aren’t delivered, even if the From email address is verified. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Each ApexEmailNotification contains either an email or a user ID, but not both.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(),upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Email | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external email address to which the notification is sent. Mutually exclusive with the UserId field. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user to which the notification is sent. Mutually exclusive with the Email field.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

To notify users of your org at the email addresses they have on record, use UserId. To notify external users or alternate email addresses, use Email.

#### See Also

-   [*Apex Developer Guide*: Exceptions in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_exception_definition.htm#unhandled_exception_emails "Apex Developer Guide: Exceptions in Apex - HTML (New Window)")

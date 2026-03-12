---
title: "GoogleDoc"
domain: object-reference
topic: googledoc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.973Z
estimatedTokens: 309
keywords: [GoogleDoc, link, Google, Document, API, version, 14.0, later, Calls, Special, Access, Rules]
---

# GoogleDoc

> Represents a link to a Google Document. This object is available
    in API version 14.0 and later.

# GoogleDoc

Represents a link to a Google Document. This object is available in API version 14.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in **All** Editions except **Database.com** for Google Apps Premier Edition accounts. See the Salesforce online help for more information.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Google document. |
| Owner | TypereferencePropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe ID of the user who currently owns this Google Document. Default value is the user logged in to the API to perform the create. |
| ParentId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the attachment's parent object. The following objects are supported as parents of Google documents: Account, Asset, Campaign, Case, Contact, Contract, Custom Object Behavior, Lead, Opportunity, Product2, and Solution. |
| Url | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe URL of the Google document. |

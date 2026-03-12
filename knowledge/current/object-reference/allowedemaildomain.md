---
title: "AllowedEmailDomain"
domain: object-reference
topic: allowedemaildomain
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.213Z
estimatedTokens: 201
keywords: [AllowedEmailDomain, allowed, email, domain, users, organization, define, allowlist, restrict, domains, user’s, API, version, 29.0, later]
---

# AllowedEmailDomain

> Represents an allowed email domain for users in your organization. You
   can define an allowlist to restrict the email domains allowed in a user’s
    Email field. This object is available in API version 29.0 and
  later.

# AllowedEmailDomain

Represents an allowed email domain for users in your organization. You can define an allowlist to restrict the email domains allowed in a user’s Email field. This object is available in API version 29.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You must have the “Manage Internal Users” user permission to use this object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you don't see this object, contact your Salesforce representative to enable it.

## Fields

| Field | Details |
| --- | --- |
| Domain | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionAn allowed email domain for users. |

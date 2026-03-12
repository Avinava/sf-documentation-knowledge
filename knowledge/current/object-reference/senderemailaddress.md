---
title: "SenderEmailAddress"
domain: object-reference
topic: senderemailaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.741Z
estimatedTokens: 327
keywords: [SenderEmailAddress, address, marketing, email, API, version, 63.0, later, Calls]
---

# SenderEmailAddress

> Represents a From address in a marketing email. This object is available
      in API version 63.0 and later.

# SenderEmailAddress

Represents a From address in a marketing email. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA descriptive name that makes the sender email address easier to identify. |
| EmailDomainKeyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique system ID of the domain associated with the sender email address.This field is a relationship field.Relationship NameEmailDomainKeyRefers ToEmailDomainKey |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique identifier for the sender email address. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique user ID of the user who owns the sender email address object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Username | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe part of the email address that comes before the @ symbol. |

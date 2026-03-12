---
title: "AdditionalNumber"
domain: object-reference
topic: additionalnumber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.056Z
estimatedTokens: 356
keywords: [AdditionalNumber, additional, number, call, center, visible, center's, phone, directory, Calls, Special, Access, Rules, Usage]
---

# AdditionalNumber

> Represents an optional additional number for a call center. This
      additional number is visible in the call center's phone directory.

# AdditionalNumber

Represents an optional additional number for a call center. This additional number is visible in the call center's phone directory.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| CallCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem field that contains the ID of the user who created the call center associated with this additional number. If value is null, this additional number is displayed in every call center's phone directory. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the additional number, such as Conference Room B.Limit: 255 characters. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the additional number.Limit: 80 characters. |
| Phone | TypephonePropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionThe phone number that corresponds to this additional number. |

## Usage

Create an additional number for a call center directory. Use this object if the number is not easily categorized as a User, Contact, Lead, Account, or the other object. Examples include phone queues or conference rooms.

---
title: "UserEsignVendorIdentifier"
domain: clm-developer-guide
topic: useresignvendoridentifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.901Z
estimatedTokens: 450
keywords: [UserEsignVendorIdentifier, integrating, eSignature, users, API, version, 56.0, later, Calls, Associated, Objects]
---

# UserEsignVendorIdentifier

> Used for integrating eSignature users. This object is available in API version 56.0 and later.

# UserEsignVendorIdentifier

Used for integrating eSignature users. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExternalUserIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user identifier used by the eSignature provider. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Salesforce user identifier.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Vendor | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe eSignature provider.Possible values are:DocuSignThe default value is 'DocuSign’. |
| VendorType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of vendor.Possible values are:InternaleSignatureThe default value is 'eSignature'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

UserEsignVendorIdentifierChangeEvent

Change events are available for the object.

UserEsignVendorIdentifierFeed

Feed tracking is available for the object.

UserEsignVendorIdentifierHistory

History is available for tracked fields of the object.

UserEsignVendorIdentifierOwnerSharingRule

Sharing rules are available for the object.

UserEsignVendorIdentifierShare

Sharing is available for the object.

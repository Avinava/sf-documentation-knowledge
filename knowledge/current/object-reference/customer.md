---
title: "Customer"
domain: object-reference
topic: customer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.672Z
estimatedTokens: 443
keywords: [Customer, role, individual, respect, particular, company, organization, API, version, 53.0, later, Calls]
---

# Customer

> Represents the customer role of an individual with respect to a particular
         company or organization. This object is available in API version 53.0 and
      later.

# Customer

Represents the customer role of an individual with respect to a particular company or organization. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomerStatusType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the customer account.Possible values are:ActiveInactive |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this customer. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Represents the individual object related to this customer record.This is a relationship field.Relationship NamePartyRelationship TypeLookupRefers ToIndividual |
| TotalLifeTimeValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total revenue amount gained from this customer. |

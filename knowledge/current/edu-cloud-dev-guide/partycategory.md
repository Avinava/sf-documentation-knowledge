---
title: "PartyCategory"
domain: edu-cloud-dev-guide
topic: partycategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.280Z
estimatedTokens: 687
keywords: [PartyCategory, criteria, categorizing, contacts, accounts, specific, classification, time, period, API, version, 64.0, later, Calls, Special]
---

# PartyCategory

> The criteria for categorizing contacts and accounts based on specific
         classification information for a specified time period. This object is available in
      API version 64.0 and later.

# PartyCategory

The criteria for categorizing contacts and accounts based on specific classification information for a specified time period. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account ID related to the classification record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification associated with the contact or account.Possible values are:High Net Worth ProspectInfluencer ProspectLYBUNTLapsed DonorLegacy ProspectLifetime StewardshipSYBUNTTop 100Top 25Undergrad or Grad Prospect |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact ID related to the classification record.This field is a relationship field.Relationship NameContactRefers ToContact |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the classification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the classification record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the classification. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the classification record.Possible values are:ActiveArchivedErrorInactivePendingSuperseded |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

PartyCategoryHistory

History is available for tracked fields of the object.

PartyCategoryOwnerSharingRule

Sharing rules are available for the object.

PartyCategoryShare

Sharing is available for the object.

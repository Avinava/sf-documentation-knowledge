---
title: "LocationTrustMeasure"
domain: object-reference
topic: locationtrustmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.500Z
estimatedTokens: 574
keywords: [LocationTrustMeasure, COVID, safety, protocols, business, follows, enforcement, masks, social, distancing, cleanliness, capacity, limits, API, version]
---

# LocationTrustMeasure

> Represents the COVID safety protocols that your business follows. For example,
      enforcement of masks, social distancing, cleanliness, and capacity limits. This object is
    available in API version 50.0 and later.

# LocationTrustMeasure

Represents the COVID safety protocols that your business follows. For example, enforcement of masks, social distancing, cleanliness, and capacity limits. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA brief description of the safety protocol. For example, “Employees and customers are required to wear a mask in the store.” |
| IconUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA public image URL to display for the LocationTrustMeasure object. |
| IsVisibleInPublic | TypebooleanPropertiesCreate, defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, displays the LocationTrustMeasure object on your site. If false, hides the LocationTrustMeasure object on your site. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record was last viewed. |
| LocationExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAn ID assigned to the LocationTrustMeasure objects for a particular location. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID for the location associated with the LocationTrustMeasure. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned name for the LocationTrustMeasure. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner for this record. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which to display LocationTrustMeasure objects on your site. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the safety protocol. For example, Enforcement of Masks. |

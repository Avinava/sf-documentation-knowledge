---
title: "AuthApplicationPlace"
domain: psc-api
topic: authapplicationplace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.101Z
estimatedTokens: 351
keywords: [AuthApplicationPlace, association, location, application, license, API, version, 49.0, later, Calls]
---

# AuthApplicationPlace

> Information related to the association between a location and its application for the license of the location. This object is available in API version 49.0 and
		later.

# AuthApplicationPlace

Information related to the association between a location and its application for the license of the location. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthorizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the authorization application place association. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the authorization application asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the authorization application asset record owner. |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated place. |
| RgltyAuthApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated regulatory authorization application. |

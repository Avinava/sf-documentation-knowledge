---
title: "NetworkReferencedObject"
domain: loyalty
topic: networkreferencedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.381Z
estimatedTokens: 332
keywords: [NetworkReferencedObject, junction, associates, loyalty, program, Experience, Cloud, site, API, version, 51.0, later, Calls]
---

# NetworkReferencedObject

> A junction object that associates the loyalty program with the Experience Cloud
      site. This object is available in API version 51.0 and later.

# NetworkReferencedObject

A junction object that associates the loyalty program with the Experience Cloud site. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the Network Referenced Object. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The Id of the Experience Cloud site associated with the loyalty program.This is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
| ReferencedObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe object associated with the Experience Cloud site.This is a polymorphic relationship field.Relationship NameReferencedObjectRelationship TypeLookupRefers ToLoyaltyProgram |

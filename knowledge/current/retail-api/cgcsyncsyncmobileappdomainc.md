---
title: "cgc_sync__Sync_Mobile_App_Domain__c"
domain: retail-api
topic: cgcsyncsyncmobileappdomainc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.777Z
estimatedTokens: 255
keywords: [cgc_sync__Sync_Mobile_App_Domain__c, Stores, domains, dropdown, boxes, mobile, app, API, version, 53.0, later, cgc, _sync, _Mobile, _App]
---

# cgc_sync__Sync_Mobile_App_Domain__c

> Stores information about domains that are available as dropdown boxes in the
         mobile app. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Domain\_\_c

Stores information about domains that are available as dropdown boxes in the mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

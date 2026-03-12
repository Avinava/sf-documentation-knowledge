---
title: "cgc_sync__Sync_Mobile_App_Macro__c"
domain: retail-api
topic: cgcsyncsyncmobileappmacroc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.824Z
estimatedTokens: 407
keywords: [cgc_sync__Sync_Mobile_App_Macro__c, color, macros, themes, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _Macro, Calls]
---

# cgc_sync__Sync_Mobile_App_Macro__c

> Contains the color macros that are used for themes. This object is
      available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Macro\_\_c

Contains the color macros that are used for themes. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgc_sync__Color__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionColor code of the mobile device. This can be a color macro or an RGBA code. |
| cgc_sync__Description__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes where this color code is used in the mobile device. |
| cgc_sync__Macro_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionColor code of the mobile device. This can be a color macro or an RGBA code.Possible values are:ButtonColorImage |
| cgc_sync__Sync_Mobile_App_Theme__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the mobile app theme.This is a relationship field.Relationship Namecgc_sync__Sync_Mobile_App_Theme__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Mobile_App_Theme__c (the master object) |

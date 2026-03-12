---
title: "cgc_sync__Sync_Mobile_App_Component__c"
domain: retail-api
topic: cgcsyncsyncmobileappcomponentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.744Z
estimatedTokens: 409
keywords: [cgc_sync__Sync_Mobile_App_Component__c, settings, different, customizable, components, theme, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _Component]
---

# cgc_sync__Sync_Mobile_App_Component__c

> Contains the settings for different customizable UI components in the
         theme. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Component\_\_c

Contains the settings for different customizable UI components in the theme. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the theme. |
| cgc_sync__Color__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the color code that's used in the mobile app. This can be a color code macro or an RGBA code. |
| cgc_sync__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the __property_name__c property. |
| cgc_sync__Property_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique names of the mobile app framework control to adjust the color based on themes. |
| cgc_sync__Property_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionProperty type of the UI component.Possible values are:ButtonColorThe default value is Color. |
| cgc_sync__Sync_Mobile_App_Theme__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the mobile app theme.This is a relationship field.Relationship Namecgc_sync__Sync_Mobile_App_Theme__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Mobile_App_Theme__c (the master object) |

---
title: "cgc_sync__Sync_Mobile_App_Theme__c"
domain: retail-api
topic: cgcsyncsyncmobileappthemec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.861Z
estimatedTokens: 597
keywords: [cgc_sync__Sync_Mobile_App_Theme__c, themes, mobile, app, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _Theme, Calls]
---

# cgc_sync__Sync_Mobile_App_Theme__c

> Represents the themes of a mobile app. This object is available in API
      version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Theme\_\_c

Represents the themes of a mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the record was last viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the mobile app theme. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync_Attachment_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the theme icon or image file. |
| cgc_sync_Attachment_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the attached .zip file. |
| cgc_sync_Description__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the theme. |
| cgc_sync_Label_Languages__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key-value pair of language codes and related translated label text for the theme name.For example,{"en": "Dark Theme", "de" : "dunkles theme"} |
| cgc_sync_isActive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the theme is active (true) or not (false). Only active themes are available on the mobile device.The default value is false. |
| cgc_sync_isCore__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the theme is editable (false) or not (true). If set as true, the client or project cannot edit the theme.The default value is false. |
| cgc_sync_isDefault__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the theme is a default theme (true) or not (false).The default value is false. |

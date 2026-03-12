---
title: "cgc_sync__Sync_Mobile_App_PL_Map__c"
domain: retail-api
topic: cgcsyncsyncmobileappplmapc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.834Z
estimatedTokens: 417
keywords: [cgc_sync__Sync_Mobile_App_PL_Map__c, mapping, picklists, dropdown, boxes, mobile, application, API, version, 53.0, later, cgc, _sync, _Mobile, _App]
---

# cgc_sync__Sync_Mobile_App_PL_Map__c

> Contains
         the
         mapping information of picklists and dropdown boxes
         in
         the mobile application. This object is
      available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Map\_\_c

Contains the mapping information of picklists and dropdown boxes in the mobile application. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce field name of the picklist. |
| cgc_sync__HasChildren__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether there’s an extension record (true) or not (false).The default value is false. |
| cgc_sync__Has_Empty_Item__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the picklist contains an empty item (true) or not (false).The default value is false. |
| cgc_sync__Mobile_App_Domain__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionToggle ID of the mobile app domain. |
| cgc_sync__Object__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the Salesforce object that contains the picklist. |

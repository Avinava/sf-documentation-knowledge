---
title: "cgc_sync__Sync_ID_Mapping__c"
domain: retail-api
topic: cgcsyncsyncidmappingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.712Z
estimatedTokens: 289
keywords: [cgc_sync__Sync_ID_Mapping__c, mappings, local, mobile, application, IDs, Salesforce, API, version, 53.0, later, cgc, _sync, _ID, _Mapping]
---

# cgc_sync__Sync_ID_Mapping__c

> Contains information about the mappings of the local mobile application IDs
         to Salesforce IDs. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_ID\_Mapping\_\_c

Contains information about the mappings of the local mobile application IDs to Salesforce IDs. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Device_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInstallation ID of the device. |
| cgc_sync__Local_Id__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPrimary key ID of the device |
| cgc_sync__Salesforce_Id__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMapped Salesforce ID of the device. |

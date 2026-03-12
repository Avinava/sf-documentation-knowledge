---
title: "cgc_sync__Sync_Client_App_Profile_Mapping__c"
domain: retail-api
topic: cgcsyncsyncclientappprofilemappingc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.667Z
estimatedTokens: 314
keywords: [Maps, either, user, role, profile, specific, sync, configuration, API, version, 53.0, later, cgc, _sync, _Client]
---

# cgc_sync__Sync_Client_App_Profile_Mapping__c

> Maps either a user, role, or profile to a specific sync configuration. This object is
      available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Client\_App\_Profile\_Mapping\_\_c

Maps either a user, role, or profile to a specific sync configuration. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the profile mapping. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync__Client_App_ID__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the client application. |
| cgc_sync__Client_App_Profile__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionProfile details of the client application. |
| cgc_sync__Mapped_Record_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the record that's mapped to the sync configuration. |

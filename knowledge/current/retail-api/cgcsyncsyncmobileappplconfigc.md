---
title: "cgc_sync__Sync_Mobile_App_PL_Config__c"
domain: retail-api
topic: cgcsyncsyncmobileappplconfigc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:39:12.535Z
estimatedTokens: 200
keywords: [cgc_sync__Sync_Mobile_App_PL_Config__c, mapping, picklists, dropdown, boxes, mobile, app, API, 53.0, cgc, _sync, _Mobile, _App, _PL, _Config]
---

> Contains the mapping information of picklists for dropdown boxes in the
         mobile app. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Config\_\_c

Contains the mapping information of picklists for dropdown boxes in the mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |

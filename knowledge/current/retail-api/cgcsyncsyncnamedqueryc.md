---
title: "cgc_sync__Sync_Named_Query__c"
domain: retail-api
topic: cgcsyncsyncnamedqueryc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.875Z
estimatedTokens: 419
keywords: [cgc_sync__Sync_Named_Query__c, SOQL, Salesforce, Query, Language, statements, named, API, version, 53.0, later, cgc, _sync, _Named, _Query]
---

# cgc_sync__Sync_Named_Query__c

> Contains details and SOQL (Salesforce Object Query Language) statements for a
         named query. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Named\_Query\_\_c

Contains details and SOQL (Salesforce Object Query Language) statements for a named query. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync_Bindable_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the named query. |
| cgc_sync_SOQL_Statement2__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond part of the SOQL statement. |
| cgc_sync_SOQL_Statement3__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThird part of the SOQL statement. |
| cgc_sync_SOQL_Statement4__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFourth part of the SOQL statement. |
| cgc_sync_SOQL_Statement__c | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSOQL statement that's used to retrieve data from the back end of the mobile device |
| cgc_sync_Type__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of named query that's used. |

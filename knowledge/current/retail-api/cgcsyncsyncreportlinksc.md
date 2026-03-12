---
title: "cgc_sync__Sync_Report_Links__c"
domain: retail-api
topic: cgcsyncsyncreportlinksc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.886Z
estimatedTokens: 312
keywords: [cgc_sync__Sync_Report_Links__c, conjunction, reports, logs, API, version, 53.0, later, cgc, _sync, _Report, _Links, Calls]
---

# cgc_sync__Sync_Report_Links__c

> Contains information about the conjunction object for reports and related logs. This
      object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Report\_Links\_\_c

Contains information about the conjunction object for reports and related logs. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync__Device_Event_Logs_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReport ID of the device event logs. |
| cgc_sync__KPI_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReport ID of the API's Key Performance Indicators (KPIs). |
| cgc_sync__Sync_History_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReport ID of the sync history. |

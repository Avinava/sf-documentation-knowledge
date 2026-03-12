---
title: "cgc_sync__Sync_Remote_Request__c"
domain: retail-api
topic: cgcsyncsyncremoterequestc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.881Z
estimatedTokens: 460
keywords: [cgc_sync__Sync_Remote_Request__c, Stores, requests, trigger, technical, activities, mobile, app, data, resupply, clean-up, upload, queue, API, version]
---

# cgc_sync__Sync_Remote_Request__c

> Stores requests to trigger technical activities on the mobile app. For
         example, data resupply and clean-up upload queue. This object is available in API
      version 53.0 and later.

# cgc\_sync\_\_Sync\_Remote\_Request\_\_c

Stores requests to trigger technical activities on the mobile app. For example, data resupply and clean-up upload queue. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier of the remote request. |
| cgc_sync__App_Installation__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRelationship field to app installation.This is a relationship field.Relationship Namecgc_sync__App_Installation__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Mobile_App_Installation__c (the master object) |
| cgc_sync__Is_Processed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the remote request is processed by the mobile device (true) or not (false).The default value is false. |
| cgc_sync__Processed_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the remote request was processed by the mobile device. |
| cgc_sync__Request_Data__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRequested data or log collected from the mobile device. |
| cgc_sync__Request_Name__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the remote request.Possible values are:CLEAN_FAILURE_QUEUE—Clear Upload FailuresREQUEST_DB_CONTENT—Request DataREQUEST_STATS—Request StatisticsRESET_STATS—Reset API StatsRESUPPLY—ResupplyTECH_PANEL—Activate Debug WindowTRACE_MODE—Activate Trace ModeUPLOAD_LOG_DUMP—Request Logs |

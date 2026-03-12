---
title: "cgc_sync__Sync_History_Detail__c"
domain: retail-api
topic: cgcsyncsynchistorydetailc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.707Z
estimatedTokens: 545
keywords: [cgc_sync__Sync_History_Detail__c, detailed, sync, history, records, API, version, 53.0, later, cgc, _sync, _History, _Detail, Calls]
---

# cgc_sync__Sync_History_Detail__c

> Contains detailed information about all sync history records. This
      object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_History\_Detail\_\_c

Contains detailed information about all sync history records. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgc_sync__Api_Calls__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of API calls made during the synchronization process. |
| cgc_sync__Duration__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTime taken to complete the synchronization process.This is a calculated field.Formula( cgc_sync__End_Date_Time__c -  cgc_sync__Start_Date_Time__c ) * 24*60*60 |
| cgc_sync__End_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the synchronization process is completed. |
| cgc_sync__Processed_Records__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of records processed during the synchronization process. |
| cgc_sync__Start_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the synchronization process started. |
| cgc_sync__Sync_History__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the related sync history.This is a relationship field.Relationship Namecgc_sync__Sync_History__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_History__c (the master object) |
| cgc_sync__Sync_Step__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSync step used when the sync history was uploaded.Possible values are:DownloadDownload_App_ContentDownload_AttachmentDownload_NFTExecute_FSODPurging_DataUpload |
| cgc_sync__Sync_Success__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the sync completed successfully (true) or not (false).The default value is false. |

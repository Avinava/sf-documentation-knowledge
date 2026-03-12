---
title: "cgc_sync__Sync_History__c"
domain: retail-api
topic: cgcsyncsynchistoryc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.701Z
estimatedTokens: 1260
keywords: [cgc_sync__Sync_History__c, Stores, every, sync, that's, performed, mobile, app, along, status, associated, Key, Performance, Indicators, KPIs]
---

# cgc_sync__Sync_History__c

> Stores information about every sync that's performed on the mobile app along
         with its status information and associated Key Performance Indicators (KPIs). This
      object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_History\_\_c

Stores information about every sync that's performed on the mobile app along with its status information and associated Key Performance Indicators (KPIs). This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Connection_Type_At_Start__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConnection type at the start of the sync. |
| cgc_sync__Device_ID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInstallation ID of the device. |
| cgc_sync__Duration__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal time taken for the synchronization process to complete.This is a calculated field.Formula( cgc_sync__End_Date_Time__c -  cgc_sync__Start_Date_Time__c ) * 24*60*60 |
| cgc_sync__End_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the synchronization is completed. |
| cgc_sync__KPIData__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionCollects and stores sync KPI data in a compressed format when a sync operation is run. The KPI data includes metrics such as duration and record count for named fetch trees, named queries, and tracked objects. |
| cgcloud_dev__KPISbmsStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionNo longer in use. Indicated the status of KPIs that were submitted for analysis. Possible values were:CompleteInProgressReady |
| cgc_sync__Number_Of_Detailed_Logs__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of detailed log messages.This is a calculated field. |
| cgc_sync__Number_Of_Download_Records__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of downloaded records. |
| cgc_sync__Number_Of_Upload_Records__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of uploaded records. |
| cgc_sync__Start_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the sync started. |
| cgcloud_dev__Sync_Completion_Time__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTime taken in seconds to complete a sync process, excluding the queue waiting time. If the Queue sync users at maximum limit setting is disabled, the field takes the Duration value.This field is a calculated field.Formula(cgcloud_dev__End_Date_Time__c - cgcloud_dev__Start_Date_Time__c) * 24*60*60 - cgcloud_dev__Time_In_Queue__c |
| cgc_sync__Sync_History_Log__c | TypestringPropertiesFilter, Nillable, SortDescriptionHistory of the logs created during synchronization.This is a calculated field.FormulaHYPERLINK(LEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + '/one/one.app#/alohaRedirect/apex/SyncHistory?deviceid='+ cgc_sync__Device_ID__c + '&datestart=' + TEXT(cgc_sync__Start_Date_Time__c) + '&dateend=' + TEXT(cgc_sync__End_Date_Time__c),  Name , '_blank') |
| cgc_sync__Sync_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the unique id of the sync request. |
| cgc_sync__Sync_State__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe system's current synchronization state.Possible values are:CancelledConnection IssueDownload IssueErrorSynchronizedUp and Download IssuesUpload Issue |
| cgc_sync__Sync_Success__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the sync completed successfully (true) or not (false).The default value is false. |
| cgc_sync__Sync_Triggered_By__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSource that triggered the sync.Possible values are:SchedulerSyncOnOnlineSyncOnResumeSyncOnStartupUser Action |
| cgc_sync__Sync_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of the sync.Possible values are:Background SyncFSODInitial SyncOn DemandRegular Sync |
| cgcloud_dev__Time_In_Queue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQueue waiting time of a sync request in seconds. Value is zero if the Queue Sync User feature is disabled. |
| cgc_sync__Total_Api_Calls__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of all API calls made during the sync. |

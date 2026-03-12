---
title: "cgc_sync__Sync_Mobile_App_Installation__c"
domain: retail-api
topic: cgcsyncsyncmobileappinstallationc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.807Z
estimatedTokens: 3545
keywords: [user, whom, deployment, package, distributed, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _Installation, Calls]
---

# cgc_sync__Sync_Mobile_App_Installation__c

> Contains information about the user to whom the deployment package is to be
         distributed. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Installation\_\_c

Contains information about the user to whom the deployment package is to be distributed. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__API_Calls_Down__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of API calls that are grouped by downloads since either the first installation or the last reset. |
| cgc_sync__API_Calls_Everything__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls made during installation. |
| cgc_sync__API_Calls_Misc__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls not considered during upload, download, and NFT (Named Fetch Tree) syncs since either the first installation or the last reset. |
| cgc_sync__API_Calls_NFT__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of all API calls that are grouped by NFT synchronizations since either the first installation or the last reset. |
| cgc_sync__API_Calls_Up__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls that are grouped by upload synchronizations since either the first installation or the last reset. |
| cgc_sync__Avg_API_Calls_Down_Per_Day__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeighted average of the API calls that are down per day. |
| cgc_sync__Avg_API_Calls_Everything_Per_Day__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeighted average of API calls per day. |
| cgc_sync__Avg_API_Calls_Misc_Per_Day__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeighted average of all API calls that aren't considered during upload, download, or NFT syncs. |
| cgc_sync__Avg_API_Calls_NFT_Per_Day__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeighted average of API calls for NFT syncs. |
| cgc_sync__Avg_API_Calls_Up_Per_Day__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeighted average of API calls for upload. It's calculated only on the view, and not on the persistent fields. |
| cgc_sync__Client_App_ID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClient app ID that the device uses and the user combination for a specific sync App_Installation__c record. |
| cgc_sync__Deployment_Package__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the deployment package that's installed on the device. |
| cgc_sync__DeviceId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInstallation ID of the device. |
| cgc_sync__Device_Model__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModel number of the client device. |
| cgc_sync__Device_OS_Version__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOperating system that runs on the client device. |
| cgc_sync__Encryption_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEncryption key of the client device. |
| cgc_sync__Event_Period_Length_Hours__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTime duration (in hours) for controlling maximum event quantity limitations. |
| cgc_sync__Free_Persistent_Storage_Space__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAvailable storage space (in bytes) of the device. |
| cgc_sync__Installation_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the package was installed. |
| cgc_sync__Installed_App_Version__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVersion of the application installed on the client device. |
| cgc_sync__IsEncrypted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the database on the client device is encrypted (true) or not (false). The default value is false. |
| cgc_sync__Last_Connection_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last attempted upload or download. |
| cgc_sync__Last_Failed_Sync_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last failed sync. |
| cgc_sync__Last_Reset_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the last reset was performed. |
| cgc_sync__Last_Successful_Download_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last successful download. |
| cgc_sync__Last_Successful_FSOD_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last successfully executed First Sync of Day. |
| cgc_sync__Last_Successful_Upload_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last successful upload. |
| cgc_sync__Link_to_Device_Details__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the device details record.This is a calculated field.FormulaHYPERLINK(LEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + '/'+ Id + '/e?retURL=/one/one.app#/alohaRedirect/apex/AppInstallations', 'Device Details', '_blank') |
| cgc_sync__Link_to_Device_Logs__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the device logs.This is a calculated field.FormulaHYPERLINK(LEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + '/lightning/r/Report/'+$Setup.cgc_sync_Sync_Report_Links__c.cgc_sync_Device_Event_Logs_Id__c+'/view?fv0=' + cgc_sync_DeviceId__c, "Logs", "_blank") & " \| " &  HYPERLINK(LEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + '/lightning/r/Report/'+ $Setup.cgc_sync_Sync_Report_Links__c.cgc_sync_Sync_History_Id__c +'/view?fv1=' + cgc_sync_DeviceId__c, "Sync History", "_blank") & " \| " &  HYPERLINK(LEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + '/lightning/r/Report/'+  $Setup.cgc_sync_Sync_Report_Links__c.cgc_sync_KPI_Id__c  +'/view?fv0=' + cgc_sync_DeviceId__c, "KPIs", "_blank") |
| cgc_sync__Link_to_the_Record__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the sync record.This is a calculated field.FormulaLEFT($Api.Partner_Server_URL_260, FIND( '/services', $Api.Partner_Server_URL_260)) + Id |
| cgc_sync__Local_Database_Record_Count__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of records on the local database of the device. |
| cgc_sync__Max_Error_Events_Per_Period__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of error events that a device can send over a period of time (set in Events Period field), when Log Level field is set as Error. |
| cgc_sync_Max_Other_Events_Per_Period__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of events that a device can send over a period of time (set in Events Period field), when Log Level field is set as either Debug, Info, or Log. |
| cgc_sync_Number_Of_Resets__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of resets performed. |
| cgc_sync_Pending_Record_Count__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of records that are yet to be synced. |
| cgc_sync_Permission_Set_Assigned__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a permission set is assigned (true) or not (false).The default value is false. |
| cgc_sync_Platform__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPlatform of the device. |
| cgc_sync_Record_Error_Count__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of errors detected. |
| cgc_sync_Remote_Procedure_Call_Log__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionList of command instances executed by the client. . |
| cgc_sync_Remote_Procedure_Call_Queue__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA semicolon-separated list of command instances (in order of insertion). Clients can use this list to determine the remote procedures that are called from the back end. |
| cgc_sync_Remote_Procedure_Call_Supported_Commands__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA semicolon-separated list of command code names. Clients can populate this list to determine the remote procedures that can be called from the back end. |
| cgc_sync_Schemaless_Extension_JSON__c | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionUser or project-specific data that's associated to a specific application without a schema. |
| cgc_sync_Status_BL__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the functional state of the business logic.Possible values are:G—OKR—ErrorY—WarningThe default value is G. |
| cgc_sync_Status_FW__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the function state of the Consumer Goods Cloud offline mobile app framework using a traffic light indicator. This field derives values from the Device Status picklist.Possible values are:G— OKR— ErrorY— WarningThe default value is G. |
| cgc_sync_Status_Sync__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the function state of the Sync engine using a traffic light indicator. This field derives values from the Device Status picklist.Possible values are:G—OKR—ErrorY—WarningThe default value is G. |
| cgc_sync_Sync_Error_Message__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMessage to display when an error occurs during sync. |
| cgc_sync_Sync_Status__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the latest sync process. Possible values are:SyncErrorSynchronizedSynchronizingAwaitingSynchronization |
| cgc_sync_TechPanel__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionToggle to enable (true) or disable (false) the tech panel on the mobile device. The default value is false'\. |
| cgc_sync_Total_API_Calls_Down__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls made during sync between Salesforce back-end and the mobile device since the first installation. This value is not affected by a reset. |
| cgc_sync_Total_API_Calls_Everything__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls since the first installation. This value is not affected by a reset. |
| cgc_sync_Total_API_Calls_Misc__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal numer of API calls since the first installation, not considered in upload, download, or NFT syncs. This value is not affected by a reset. |
| cgc_sync_Total_API_Calls_NFT__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls used to sync NFT (Named Fetch Tree) data since the first installation. This value is not affected by a reset. |
| cgc_sync_Total_API_Calls_Up__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of API calls grouped by upload syncs since the first installation. This value is not affected by a reset. |
| cgc_sync_TraceModeTill__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the trace mode will be active on the mobile device. |
| cgc_sync_Trace_Mode_Area__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionArea on which trace mode is active.Possible values are:AllApplicationSynchronizationThe default value is Application. |
| cgc_sync_Trace_Mode_Duration__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of hours for which trace mode logging can remain active on the mobile device. |
| cgc_sync_Trace_Mode_On__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnable (true) or disable (false) trace mode.The default value is false. |
| cgc_sync_User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInformation about the app user.This is a relationship field.Relationship Namecgc_sync_User__rRelationship TypeLookupRefers ToUser |
| cgc_sync_minCacheLogLevel__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum cache log level. |
| cgc_sync_minPrintLogLevel__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum print log level. |
| cgc_sync_minSubmitLogLevel__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum submit log level. |

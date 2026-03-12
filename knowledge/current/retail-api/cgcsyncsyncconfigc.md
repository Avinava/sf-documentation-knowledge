---
title: "cgc_sync__Sync_Config__c"
domain: retail-api
topic: cgcsyncsyncconfigc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.688Z
estimatedTokens: 2575
keywords: [cgc_sync__Sync_Config__c, settings, synchronization, engine, client, backend, background, sync, startup, Apex, endpoint, thresholds, API, version, 53.0]
---

# cgc_sync__Sync_Config__c

> Represents the settings for synchronization engine client and its backend. For
      example, background sync, sync on startup, and Apex endpoint thresholds. This object is
      available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Config\_\_c

Represents the settings for synchronization engine client and its backend. For example, background sync, sync on startup, and Apex endpoint thresholds. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionName of the sync configuration file. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the owner who set up the configuration.It’s a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync__Analyze_Threshold__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThreshold value for DB analyze. Range: 100-100000. |
| cgc_sync__Back_End_KPIs_Enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the system allocates additional computational resources to gather performance statistics at run time (true) or not (false)..The default value is false. |
| cgc_sync__Batch_Soql_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the batch SOQL heap size limit in milliseconds. |
| cgc_sync__Batch_Soql_Page_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the batch SOQL page size limit in bytes. |
| cgc_sync__Batch_Soql_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionBatch SOQL response time in milliseconds. Recommended value: 4000.Range: 2000-4000. |
| cgc_sync__Business_Area_Mapping__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaps a field from the User entity to segregate data downloaded to a mobile device based on business area. |
| cgc_sync__CPU_Time_Calculation_Buffer__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionBuffer time in milliseconds that system includes when calculating CPU time limit to protect the system from Apex CPU time limit exceptions during sync processes. Recommended value: 6500. |
| cgc_sync__ClientApp_ID__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionInstallation ID or Client App ID of the device. |
| cgc_sync__Download_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the download heap size limit in bytes. |
| cgc_sync__Download_Page_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of records to be processed inside an Apex endpoint until paging starts. |
| cgc_sync__Download_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionDownload response time in milliseconds. Recommended value: 2000.Range: 2000-4000. |
| cgc_sync__Encryption_Platforms__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionComma-separated list of operating systems. For example, iOS and Android. These systems activate encryption. |
| cgc_sync__Event_Period_Length_Hours__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTime period in hours for controlling the event's maximum quantity limitations. |
| cgc_sync__Ignore_Client_Overrides__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether ignores client overrides is active (true) or not (false).The default value is true. |
| cgc_sync__Last_Generated_LU_Name__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionLast generated Logical Unit (LU) value generated in the back end. |
| cgc_sync__Max_Error_Events_Per_Period__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of error events that a device can send in a specified duration when you set the value of the log level field as Error. |
| cgc_sync__Max_Other_Events_Per_Period__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of events that a device can send in a specified duration when you set the log level field as Debug, Info, or Log. |
| cgc_sync__NFT_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNamed Fetch Tree heap size in bytes. Range: 1048576 (1MB) - 6291456 (6MB). Recommended value: 5242500 (5MB). |
| cgc_sync__NFT_Page_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum allowed page size for Named Fetch Tree (in bytes). Range: 1000 - 50000. |
| cgc_sync__NFT_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNFT response time limit in milliseconds. Recommended value: 4000. |
| cgc_sync__Named_Query_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNamed query heap size limit in bytes. |
| cgc_sync__Named_Query_Page_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNamed query page size limit in bytes. |
| cgc_sync__Named_Query_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNamed query response time limit in bytes. |
| cgc_sync__Namespace_Macro__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionContains the replacement key to the settings for the SOQL macro in the CG Cloud Synchronization namespace.For example, if this method returns the MY_NAMESPACE string, then every SOQL query that the system executes is replaced as shown here.SELECT $MY_NAMESPACE.MyCustomField__c FROM $MY_NAMESPACE.MyCustomObject__cis replaced withSELECT cgcloud__.MyCustomField__c FROM cgcloud__.MyCustomObject__cwhere, the cgcloud__ string is the prefix that's obtained from {@link SYNCConstants.NAMESPACEPREFIX}. |
| cgc_sync__SObject_Describe_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionHeap size limit of sObject Describe in bytes. |
| cgc_sync__SObject_Describe_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionResponse time limit of sObject Describe in milliseconds. |
| cgc_sync__Sync_At_App_Start__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines how often the data sync is performed when the mobile app starts. Possible values are:ALWAYS- Perform a data sync each time the mobile app starts.TIME_THRESHOLD- Skip sync if threshold is not reached at the start of the mobile appNO_SYNC- Ignore data sync at the start of the mobile app. |
| cgc_sync__Sync_Background_SyncType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of background sync.Available options are:Upload onlyUpload & download (complete sync)Deactivated |
| cgc_sync__Sync_Concurrent_Users_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of users that can simultaneously perform synchronization when the Queue sync users at maximum limit setting is enabled. Recommended value: 200Range: 2-600. |
| cgc_sync__Sync_Interval__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBackground sync interval in minutes. |
| cgc_sync__Sync_On_Online__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionExecutes the last incomplete sync attempt and is triggered when an online connection is available. It mainly synchronizes the tracked objects.Stores the value as true when the sync is performed online. |
| cgc_sync__Sync_On_Resume__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionExecutes the last incomplete sync and gets executed when the device resumes from the background. It mainly synchronizes the tracked objects.Stores the value as true when the sync resumes. |
| cgc_sync__Sync_On_Startup__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis synchronization option is triggered every time the application is launched. Tracked objects and NFTs are optional for this synchronization method. It mainly synchronizes the schema and runtime artifacts (RTAs).Stores the value as true when the sync is on start. |
| cgc_sync__Sync_Upload_Chunk_Weight__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionDefines the total size of the records that an upload request contains. The record weight is directly proportional to the required computational resources. |
| cgc_sync__Time_Interval_For_Sync_At_App_Start__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the duration after which the data sync is performed when the offline mobile app starts. Range 10-1440 minutes. The default value is 30 minutes. |
| cgc_sync__Upload_Heap_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionHeap size upload in bytes. |
| cgc_sync__Upload_Page_Size_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUpload page size limit in bytes. |
| cgc_sync__Upload_Response_Time_Limit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUpload response time limit in milliseconds. |
| cgc_sync__Vertical_Namespace__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNamespace of the vertical package that's used with this sync configuration. |

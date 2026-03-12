---
title: "cgc_sync__Sync_Tracked_Object_Config__c"
domain: retail-api
topic: cgcsyncsynctrackedobjectconfigc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.902Z
estimatedTokens: 1765
keywords: [cgc_sync__Sync_Tracked_Object_Config__c, configurations, tracked, objects, including, data, distribution, sync, settings, client, schema, API, version, 53.0, later]
---

# cgc_sync__Sync_Tracked_Object_Config__c

> Contains configurations for tracked objects including data distribution, sync
      settings, and client schema. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Tracked\_Object\_Config\_\_c

Contains configurations for tracked objects including data distribution, sync settings, and client schema. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the tracked object is active (true) or not (false).The default value is true. |
| cgc_sync__Allow_Null__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether null values instead of default datatype values in the offline database are allowed (true) or not (false).The default value is false. |
| cgc_sync__Batch_SOQL_Param_Chunk_Size__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBatch SOQL parameter chunk size in bytes. |
| cgc_sync__Clear_Upload_Failures__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to clear upload failures for this tracked object (true) or not (false).The default value is false. |
| cgc_sync__ClientApp_ID__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionInstallation ID of the device. |
| cgc_sync__Custom_Index_List2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom set of indexes named List2 for the current object. |
| cgc_sync__Custom_Index_List3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom set of indexes named List3 for the current object. |
| cgc_sync__Custom_Index_List4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom set of indexes named List4 for the current object. |
| cgc_sync__Custom_Index_List__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom set of indexes named List for the current object. |
| cgc_sync__Dependent_Lookups__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the dependent lookups. |
| cgc_sync__Displayable__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to display this object in the mobile app (true) or not (false).The default value is true. |
| cgc_sync__Enable_Enhanced_Delta_Sync__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the delta sync is active (true) or not (false).The default value is true. |
| cgc_sync__Fieldset_Name_List__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComma-separated list of field set names for the object. |
| cgc_sync__Layout_Needed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this layout is required in the mobile app (true) or not (false).The default value is false. |
| cgc_sync__List_Header_Fieldset__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionList header of the field set. |
| cgc_sync__Max_Records_Before_Full_Sync__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum number of single records that the device can sync before switching to full sync mode. |
| cgc_sync__Object_Api_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAPI name of the tracked object. |
| cgc_sync__On_the_Road_Sync__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnable (true) or disable (false) synchronizing only tracked objects marked as On The Road Sync.The default value is false. |
| cgc_sync__Only_Metadata_Needed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether only metadata is allowed and no data is downloaded for this tracked object (true) or not (false).The default value is false. |
| cgc_sync__Order_By__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value for ORDER BY. |
| cgc_sync__SF_Rest_Enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the client must use standard Salesforce REST API to synchronize tracked objects (true) or not (false).The default value is false. |
| cgc_sync__Sync_Overview_Condition_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCondition to display this record on the Sync Overview screen as a pending upload. |
| cgc_sync__Sync_Overview_Condition_Operator__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConditional operators (IN, >, <, =, !=) for sync overview. |
| cgc_sync__Sync_Overview_Condition_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCondition for sync overview. |
| cgc_sync__Sync_Overview__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to display this record in sync overview (true) or not (false).The default value is false. |
| cgc_sync__Sync_Record_Weight__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionWeight of this record. Weight of a record is directly proportional to the computational resources that are required for processing. |
| cgc_sync__Tracked_Relationship__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the dependency on another tracked object. Clients can evaluate this field to propagate sync states from child to parent records. |
| cgc_sync__Tracking_enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a tracked object relationship must be considered (true) or ignored (false).The default value is false. |
| cgc_sync__Where_2__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond part of the where clause. |
| cgc_sync__Where_3__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThird part of the where clause. |
| cgc_sync__Where_4__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFourth part of the where clause. |
| cgc_sync__Where__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConditions of the where clause. |

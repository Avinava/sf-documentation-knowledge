---
title: "cgc_sync__Sync_API_Log__c"
domain: retail-api
topic: cgcsyncsyncapilogc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.662Z
estimatedTokens: 712
keywords: [cgc_sync__Sync_API_Log__c, Stores, performance, that's, executed, synchronization, endpoints, API, version, 53.0, later, cgc, _sync, _API, _Log]
---

# cgc_sync__Sync_API_Log__c

> Stores performance information that's executed on synchronization
         endpoints. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_API\_Log\_\_c

Stores performance information that's executed on synchronization endpoints. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the log. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who created the log.A polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Category__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the category of Key Performace Indicators (KPIs). |
| cgc_sync__Device_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the device from which the log was created. |
| cgc_sync__Endpoint_Class_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Apex REST endpoints implementer class name. |
| cgc_sync__Input_Data_Volume__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the size and volume of input data for the measured task. For example, if you want to measure a named query execution, you can enter the number of characters in the SOQL string here. |
| cgc_sync__Measured_At__c | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the date and time when the measurement was performed for the KPI. |
| cgc_sync__Output_Data_Volume__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the size and volume of output data for the task that's measured (if applicable). For example, if you want to measure a named query execution, you can place in this field the number of records that the result set contains. |
| cgc_sync__Request_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier that's generated once for each API call. |
| cgc_sync__SOQL_Statement__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the related SOQL statement that is measured, or set as a blank string when the KPI isn’t related to any specific SOQL statement. |
| cgc_sync__Subcategory__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the subcategory of the KPI. |
| cgc_sync__Sync_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the unique ID of the sync request. |
|  |  |
| cgc_sync__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the value of the KPI. |

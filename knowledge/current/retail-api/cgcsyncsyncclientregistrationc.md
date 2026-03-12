---
title: "cgc_sync__Sync_Client_Registration__c"
domain: retail-api
topic: cgcsyncsyncclientregistrationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.654Z
estimatedTokens: 509
keywords: [cgc_sync__Sync_Client_Registration__c, Stores, Consumer, Goods, Cloud, offline, mobile, app, device, synchronization, Salesforce, initiated, API, version, 61.0]
---

# cgc_sync__Sync_Client_Registration__c

> Stores the details of the Consumer Goods Cloud offline mobile app device that
         a synchronization request to Salesforce is initiated from. This object is available in
      API version 61.0 and later.

# cgc\_sync\_\_Sync\_Client\_Registration\_\_c

Stores the details of the Consumer Goods Cloud offline mobile app device that a synchronization request to Salesforce is initiated from. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the sync client registry. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who sets up the configuration.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Device_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier of the device that initiates a synchronization request. |
| cgc_sync__Get_First_Sync_Request_Queue_Time__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the milliseconds of the first synchronization request to get a position in the sync queue. |
| cgc_sync__Last_Queue_Status_Request_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the last synchronization request. |
| cgc_sync__Sync_Action_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the last initiated synchronization process.Possible values are:BACKGROUND_SYNC—Background SyncFSODINITIAL_SYNC—Initial SyncON_DEMAND_SYNC—On DemandREGULAR_SYNC—Regular Sync |
| cgc_sync__Sync_Client_Queue_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the synchronization request.Possible values are:CANCELLED—CancelledDONE—DonePROCESSING—ProcessingWAITING—WaitingThe default value is DONE. |

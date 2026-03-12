---
title: "cgcloud__Batch_Run_Status__c"
domain: retail-api
topic: cgcloudbatchrunstatusc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.188Z
estimatedTokens: 1495
keywords: [cgcloud__Batch_Run_Status__c, Keeps, track, batch, processes, API, version, 54.0, later, cgcloud, _Batch, _Run, _Status, Calls, Associated]
---

# cgcloud__Batch_Run_Status__c

> Keeps track of batch processes. This object is available in API
      version 54.0 and later.

# cgcloud\_\_Batch\_Run\_Status\_\_c

Keeps track of batch processes. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Batch_Chain__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies processes that are running in one process chain. |
| cgcloud__Batch_ID__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIdentifier of the batch process instance. |
| cgcloud__Batch_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the batch process. |
| cgcloud__Batch_State__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionState of the batch process.Possible values are:DoneErrorFatalRunning |
| cgcloud__Batch_Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the batch process.Possible values are:APEXManagedWebWorker |
| cgcloud__Duration_Time__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRun time of the batch process in milliseconds. |
| cgcloud__End_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date and time of the batch process. |
| cgcloud__Items_Done__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of job items that were successfully processed. |
| cgcloud__Items_Error__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of job items that were processed with an error. |
| cgcloud__Items_Scheduled__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of job items that were scheduled for a job. |
| cgcloud__Job_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJob Name under which the process is scheduled. |
| cgcloud__Last_Update_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast update date and time of the batch process. |
| cgcloud__Process_Count__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCount of process instances that were involved in the job processing. |
| cgcloud__Progress_Current_Value__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast progress update of the batch process. |
| cgcloud__Sales_Org__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSalesOrg context on which the batch process is running. |
| cgcloud__Start_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart date and time of the batch process. |
| cgcloud__Transaction_ID__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLog transaction ID that's assigned to the batch process. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Batch\_Run\_Status\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Batch\_Run\_Status\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Batch\_Run\_Status\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Batch\_Run\_Status\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Batch\_Run\_Status\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Batch_Run_Status__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Batch_Run_Status__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Batch_Run_Status__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Batch_Run_Status__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Batch_Run_Status__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

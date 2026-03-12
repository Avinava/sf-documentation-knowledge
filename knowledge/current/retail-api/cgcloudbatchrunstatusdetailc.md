---
title: "cgcloud__Batch_Run_Status_Detail__c"
domain: retail-api
topic: cgcloudbatchrunstatusdetailc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.195Z
estimatedTokens: 1055
keywords: [cgcloud__Batch_Run_Status_Detail__c, Collects, further, batch, monitoring, API, version, 54.0, later, cgcloud, _Batch, _Run, _Status, _Detail, Calls]
---

# cgcloud__Batch_Run_Status_Detail__c

> Collects further batch monitoring details. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Batch\_Run\_Status\_Detail\_\_c

Collects further batch monitoring details. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Batch_Run_Status__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the main Batch Monitoring record.This is a relationship field.Relationship Namecgcloud__Batch_Run_Status__rRelationship TypeMaster-detailRefers Tocgcloud__Batch_Run_Status__c (the master object) |
| cgcloud__Detail_Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the detail record.Possible values are:ErrorKPIProgress |
| cgcloud__Entry_Date__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionTime stamp of the API call that created this entry. |
| cgcloud__Error_Value__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionError summary that contains information about the issue that a batch process encountered. |
| cgcloud__KPI_Value__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSummary that contains relevant KPIs of the batch process execution. |
| cgcloud__Progress_Value__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue that indicates the progress of the batch process. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLinks to the detail record page.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Batch_Run_Status_Detail__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Batch_Run_Status_Detail__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Batch_Run_Status_Detail__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Batch_Run_Status_Detail__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Batch_Run_Status_Detail__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

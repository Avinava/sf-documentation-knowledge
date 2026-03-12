---
title: "cgcloud__Batch_Process_Configuration__c"
domain: retail-api
topic: cgcloudbatchprocessconfigurationc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:38.176Z
estimatedTokens: 1667
keywords: [cgcloud__Batch_Process_Configuration__c, Custom, setting, captures, configuration, batch, process, API, version, 54.0, later, cgcloud, _Batch, _Process, _Configuration]
---

# cgcloud__Batch_Process_Configuration__c

> Custom setting that captures the configuration of the batch
         process. This object is available in API version 54.0 and later.

# cgcloud\_\_Batch\_Process\_Configuration\_\_c

Custom setting that captures the configuration of the batch process. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgcloud__Apex_Class__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBatch process class that's to be executed. |
| cgcloud__Batch_Size__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionSize of the batch. |
| cgcloud__Execute_Nightly_Calculation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration indicating that the TPM Calculation Chain should be initiated once per night.The default value is false. |
| cgcloud__Friday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Fridays.The default value is false. |
| cgcloud__Job_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the Batch Job to be executed. |
| cgcloud__Last_Run__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the server for this sales org was last started. |
| cgcloud__Monday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Mondays.The default value is false. |
| cgcloud__Promotion_Template__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPromotion Template filter, in case of promotion calculations only promotions of this type are calculated. |
| cgcloud__Refresh_Account_Product_List__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the mode of Account Product List.The default value is false. |
| cgcloud__Run_Mode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines whether the complex pricing processes run in Delta or Full mode.This field is available in API version 55.0 and later. |
| cgcloud__Sales_Org__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSales Org for which this setting is defined. |
| cgcloud__Saturday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Saturdays.The default value is false. |
| cgcloud__Start_Time__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTime at which the server is to be started. Restricted to full hours. It's stored in GMT+0 (UTC) in a 24-hour format. |
| cgcloud__Sunday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Sundays.The default value is false. |
| cgcloud__Thursday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Thursdays.The default value is false. |
| cgcloud__Tuesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Tuesdays.The default value is false. |
| cgcloud__Wednesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfiguration flag, indicating that the Batch Process in context should run on Wednesdays.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Batch\_Process\_Configuration\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Batch\_Process\_Configuration\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Batch\_Process\_Configuration\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Batch\_Process\_Configuration\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Batch\_Process\_Configuration\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Batch_Process_Configuration__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Batch_Process_Configuration__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Batch_Process_Configuration__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Batch_Process_Configuration__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Batch_Process_Configuration__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

---
title: "cgcloud__BO_API_Workflow_Entity__c"
domain: retail-api
topic: cgcloudboapiworkflowentityc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.252Z
estimatedTokens: 1103
keywords: [cgcloud__BO_API_Workflow_Entity__c, stores, entities, Business, API, Workflows, version, 54.0, later, cgcloud, _BO, _API, _Workflow, _Entity, Calls]
---

# cgcloud__BO_API_Workflow_Entity__c

> This object stores the entities that Business Object API Workflows
         use. This object is available in API version 54.0 and later.

# cgcloud\_\_BO\_API\_Workflow\_Entity\_\_c

This object stores the entities that Business Object API Workflows use. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__BO_API_Entity__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the business object API entity.This is a relationship field.Relationship Namecgcloud__BO_API_Entity__rRelationship TypeMaster-detailRefers Tocgcloud__BO_API_Entity__c (the master object) |
| cgcloud__BO_API_Workflow__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the business object API workflow.This is a relationship field.Relationship Namecgcloud__BO_API_Workflow__rRelationship TypeMaster-detailRefers Tocgcloud__BO_API_Workflow__c (the detail object) |
| cgcloud__Input_Mapping_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the input mapping field. If Output Entity has been set, then this field must also be set. |
| cgcloud__Output_Entity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the business object API entity.This is a relationship field.Relationship Namecgcloud__Output_Entity__rRelationship TypeLookupRefers Tocgcloud__BO_API_Entity__c |
| cgcloud__Output_Mapping_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the output mapping field. If Output Entity has been set, then this field must also be set. |
| cgcloud__Unique_Key__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionStores schema constraints. This is a technical field that the workflow updates. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__BO_API_Workflow_Entity__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__BO_API_Workflow_Entity__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__BO_API_Workflow_Entity__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__BO_API_Workflow_Entity__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__BO_API_Workflow_Entity__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

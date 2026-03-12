---
title: "cgcloud__Workflow_State_Transition__c"
domain: retail-api
topic: cgcloudworkflowstatetransitionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.525Z
estimatedTokens: 1059
keywords: [cgcloud__Workflow_State_Transition__c, Stores, workflow, state, transition, API, version, 54.0, later, cgcloud, _Workflow, _State, _Transition, Calls, Associated]
---

# cgcloud__Workflow_State_Transition__c

> Stores the details of the workflow state transition. This object
      is available in API version 54.0 and later.

# cgcloud\_\_Workflow\_State\_Transition\_\_c

Stores the details of the workflow state transition. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| cgcloud__Event__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEvent that triggers the state transition. For example, Save or Delete. |
| cgcloud__From_Initial_Stage__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFrom initial stage value.The default value is false. |
| cgcloud__From_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the state that's valid before the state transition.Possible values are:ActiveApprovedCancelledCheckClosedCommittedCorrectionForApprovalFrozenHoldBackPlanningReadyRejectedReleasedSendFaxWorkCompletedfinalinitialnormal |
| cgcloud__To_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the state that's valid after the state transition.Possible values are:ActiveApprovedCancelledCheckClosedCommittedCorrectionForApprovalFrozenHoldBackPlanningReadyRejectedReleasedSendFaxWorkCompletedfinalinitialnormal |
| cgcloud__Workflow__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the workflow.This is a relationship field.Relationship Namecgcloud__Workflow__rRelationship TypeMaster-detailRefers Tocgcloud__Workflow__c (Master object) |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Workflow\_State\_Transition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Workflow\_State\_Transition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Workflow\_State\_Transition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Workflow\_State\_Transition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Workflow\_State\_Transition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Workflow_State_Transition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Workflow_State_Transition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Workflow_State_Transition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Workflow_State_Transition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Workflow_State_Transition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

---
title: "cgcloud__Job_DL_Job_Definition_Template__c"
domain: retail-api
topic: cgcloudjobdljobdefinitiontemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.871Z
estimatedTokens: 2155
keywords: [stores, questions, surveys, job, definition, API, version, 54.0, later, cgcloud, _Job, _DL, _Definition, _Template, Calls]
---

# cgcloud__Job_DL_Job_Definition_Template__c

> This object stores the questions or surveys that are used in the job
         definition list. This object is available in API version 54.0 and later.

# cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_c

This object stores the questions or surveys that are used in the job definition list. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Composite_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier of the record. |
| cgcloud__Condition_Answers__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionList of relevant answers for the parent condition. |
| cgcloud__Condition_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of Activity Job Definition Template of the parent condition.This is a calculated field.Formulacgcloud__Condition__r.cgcloud__Job_Definition_Template__r.cgcloud__Description__c |
| cgcloud__Condition_Operator__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionOperator that's applied to the Conditional answer.Possible values are:InNot In |
| cgcloud__Condition__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionActivity Job Definition Template that represents the parent condition.This is a relationship field.Relationship Namecgcloud__Condition__rRelationship TypeLookupRefers Tocgcloud__Job_DL_Job_Definition_Template__c |
| cgcloud__Consider_Score__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the question is score relevant.Possible values are:NoYesThe default value is No. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the referenced Job Definition Template.This is a calculated field.Formulacgcloud__Job_Definition_Template__r.cgcloud__Description__c |
| cgcloud__Excluded__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed to exclude the activity job definition template from the call execution.The default value is false. |
| cgcloud__Job_Action_Success__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls detachment behavior and validation (mandatory) when completing the call.Possible values are:DetachNoneValidation |
| cgcloud__Job_Definition_List__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the activity.This is a relationship field.Relationship Namecgcloud__Job_Definition_List__rRelationship TypeMaster-detailRefers Tocgcloud__Job_Definition_List__c (the master object) |
| cgcloud__Job_Definition_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the job definition template.This is a relationship field.Relationship Namecgcloud__Job_Definition_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_Template__c |
| cgcloud__Job_Template__c | TypestringPropertiesFilter, Nillable, SortDescriptionJob template of the job definition template.This is a calculated field.Formulacgcloud__Job_Definition_Template__r.cgcloud__Job_Template__r.Name |
| cgcloud__Mandatory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRespective question or survey that must be answered during the call execution.The default value is false. |
| cgcloud__Measure_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionMeasure Type of the referenced Job Definition Template.This is a calculated field.FormulaTEXT(cgcloud__Job_Definition_Template__r.cgcloud__Measure_Type__c) |
| cgcloud__POS_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the POS template.This is a relationship field.Relationship Namecgcloud__POS_Template__rRelationship TypeLookupRefers Tocgcloud__POS_Template__c |
| cgcloud__POS_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of POS.Possible values are:ct—Cigarette Carrierdairycase—Dairy Casefreezer—Freezerrefrigerator—Refrigeratorsc—Sales Countershelf—Shelfsmt—Cigarette Sales Panelvm—Vending Machine |
| cgcloud__Presetting__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the presetting of the corresponding answer in the call.Possible values are:LastValueNoneTargetValue |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the job definition template assignment of the activity (and the activity itself) belongs.Possible values are:0000000100020003 |
| cgcloud__Save_Presetting__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed only in the back end in validations and to control whether preset answers are to be automatically stored when completing the call. Represents the save presetting configuration of the referenced job definition template. As a result, the attribute is pre-populated when adding the job definition template to the activity. On mobility devices, the corresponding job definition template is evaluated directly.The default value is false. |
| cgcloud__Score_Relevant_Answers__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionList of relevant answers for the question. |
| cgcloud__Score__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionScore of the question. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSorts Job definitions, and is auto-populated from Job_Definition_Template.Sort |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Job_DL_Job_Definition_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_DL_Job_Definition_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_DL_Job_Definition_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_DL_Job_Definition_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_DL_Job_Definition_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

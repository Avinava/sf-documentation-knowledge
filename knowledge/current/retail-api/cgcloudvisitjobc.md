---
title: "cgcloud__Visit_Job__c"
domain: retail-api
topic: cgcloudvisitjobc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.432Z
estimatedTokens: 1903
keywords: [cgcloud__Visit_Job__c, answered, questions, product, surveys, jobs, API, version, 54.0, later, cgcloud, _Visit, _Job, Calls, Associated]
---

# cgcloud__Visit_Job__c

> This object contains answered questions and product surveys
         (jobs). This object is available in API version 54.0 and later.

# cgcloud\_\_Visit\_Job\_\_c

This object contains answered questions and product surveys (jobs). This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Data_Type_Option__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the answer of a pick list. internally required.This is a relationship field.Relationship Namecgcloud__Data_Type_Option__rRelationship TypeLookupRefers Tocgcloud__Data_Type_Option__c |
| cgcloud__Display_Value__c | TypestringPropertiesFilter, Nillable, SortDescriptionIf the reference Job_Definition_Template is of type Toggle, description of the toggle value is shown else value is shownThis is a calculated field.FormulaIF(ISPICKVAL(cgcloud__Job_Definition_Template__r.cgcloud__Data_Type__r.cgcloud__Data_Type__c, "Toggle") ,   cgcloud__Data_Type_Option__r.cgcloud__Description__c   ,  cgcloud__Value__c ) |
| cgcloud__Done__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe answer has been entered: The job will be marked as Yes.The default value is false. |
| cgcloud__Job_Definition_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription text taken from job definition template.This is a calculated field.Formulacgcloud__Job_Definition_Template__r.cgcloud__Description__c |
| cgcloud__Job_Definition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the job definition template.This is a relationship field.Relationship Namecgcloud__Job_Definition_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_Template__c |
| cgcloud__Job_Definition__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the job definition of the respective activity.This is a relationship field.Relationship Namecgcloud__Job_Definition__rRelationship TypeLookupRefers Tocgcloud__Job_DL_Job_Definition_Template__c |
| cgcloud__Job_List__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to job list of a non-standard JDLThis is a relationship field.Relationship Namecgcloud__Job_List__rRelationship TypeLookupRefers Tocgcloud__Job_List__c |
| cgcloud__Job_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription text taken from job definition template.This is a calculated field.Formulacgcloud__Job_Definition_Template__r.cgcloud__Job_Template__r.cgcloud__Description__c |
| cgcloud__Last_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAnswered value taken from the last relevant call. The Value depends on the DataType that has been specified in the job definition template. |
| cgcloud__Manually__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe answer (job) has been manually added by the user.The default value is false. |
| cgcloud__Number_of_Pictures__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionCount of number of pictures associated with the question. |
| cgcloud__POS__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to POS.This is a relationship field.Relationship Namecgcloud__POS__rRelationship TypeLookupRefers Tocgcloud__POS__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product (in case of a product related survey).This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the name of the promotion.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Target_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStored value taken from the relevant product assortment where the product was taken from. |
| cgcloud__Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAnswered value. The value depends on the DataType that has been specified in the job. definition template. |
| cgcloud__Visit_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of visit. |
| cgcloud__Visit__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Visit.This is a relationship field.Relationship Namecgcloud__Visit__rRelationship TypeMaster-detailRefers ToVisit (Master object) |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Visit\_Job\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Visit\_Job\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Visit\_Job\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Visit\_Job\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Visit\_Job\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Visit_Job__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Visit_Job__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Visit_Job__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Visit_Job__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Visit_Job__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

---
title: "cgcloud__Job_DL_Template_Def_Template__c"
domain: retail-api
topic: cgcloudjobdltemplatedeftemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.877Z
estimatedTokens: 1118
keywords: [Stores, job, definition, templates, template, creating, assigned, preset, definitions, API, version, 54.0, later, cgcloud, _Job]
---

# cgcloud__Job_DL_Template_Def_Template__c

> Stores the list of job definition templates in the Job definition list
         template. When creating a job definition list based on this template, the assigned job
         definition templates are used to preset job definitions. This object is available in
      API version 54.0 and later.

# cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_c

Stores the list of job definition templates in the Job definition list template. When creating a job definition list based on this template, the assigned job definition templates are used to preset job definitions. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is active.The default value is true. |
| cgcloud__Composite_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains concatenation of the related records' Job definition List Template and Job Definition Template. The field is set by workflow. This prevents a Job Definition Template from being added twice to a Job Definition List. |
| cgcloud__Job_Definition_List_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the activity template.This is a relationship field.Relationship Namecgcloud__Job_Definition_List_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Job_Definition_List_Template__c (the master object) |
| cgcloud__Job_Definition_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the job definition template.This is a relationship field.Relationship Namecgcloud__Job_Definition_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_Template__c |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionReplaces Name by Hyperlink View.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Job_DL_Template_Def_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_DL_Template_Def_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_DL_Template_Def_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_DL_Template_Def_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_DL_Template_Def_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

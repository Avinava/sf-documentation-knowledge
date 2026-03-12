---
title: "cgcloud__User_Document_Template_Activity__c"
domain: retail-api
topic: cgclouduserdocumenttemplateactivityc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.359Z
estimatedTokens: 1046
keywords: [Stores, relationship, daily, report, template, user, activity, API, version, 54.0, later, cgcloud, _User, _Document, _Template]
---

# cgcloud__User_Document_Template_Activity__c

> Stores the details of the relationship between the daily report
         template and user activity. This object is available in API version 54.0 and later.

# cgcloud\_\_User\_Document\_Template\_Activity\_\_c

Stores the details of the relationship between the daily report template and user activity. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Activity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the activity.This is a relationship field.Relationship Namecgcloud__Activity__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |
| cgcloud__Max_Hours__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximal number of hours that's allowed for an activity. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the user document template activity record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Unique_Activity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTechnical field that verifies whether an activity is added only once to a daily report template. |
| cgcloud__User_Document_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the user document template.This is a relationship field.Relationship Namecgcloud__User_Document_Template__rRelationship TypeMaster-detailRefers Tocgcloud__User_Document_Template__c (the master object) |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_User\_Document\_Template\_Activity\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_User\_Document\_Template\_Activity\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_User\_Document\_Template\_Activity\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_User\_Document\_Template\_Activity\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_User\_Document\_Template\_Activity\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__User_Document_Template_Activity__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__User_Document_Template_Activity__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__User_Document_Template_Activity__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__User_Document_Template_Activity__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__User_Document_Template_Activity__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

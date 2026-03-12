---
title: "cgcloud__User_Document__c"
domain: retail-api
topic: cgclouduserdocumentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.330Z
estimatedTokens: 1539
keywords: [cgcloud__User_Document__c, Stores, daily, report, API, version, 54.0, later, cgcloud, _User, _Document, Calls, ields, Associated, Objects]
---

# cgcloud__User_Document__c

> Stores the details of the daily report object. This object is
      available in API version 54.0 and later.

# cgcloud\_\_User\_Document\_\_c

Stores the details of the daily report object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## ields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Accountable__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the accountable user.This is a relationship field.Relationship Namecgcloud__Accountable__rRelationship TypeLookupRefers ToUser |
| cgcloud__Annotation__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAnnotations for the user document. |
| cgcloud__Creation_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate of initiation of the daily report. |
| cgcloud__Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the daily report. |
| cgcloud__Phase__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPhase of a user document.Possible values are:ApprovedCorrection—RejectedInitialReleased |
| cgcloud__Responsible__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user who's responsible for the user document.This is a relationship field.Relationship Namecgcloud__Responsible__rRelationship TypeLookupRefers ToUser |
| cgcloud__Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the daily report template.This is a calculated field.Formulacgcloud__User_Document_Template__r.cgcloud__Description__c |
| cgcloud__Total_Duration_Min__c | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates the sum of activities in minutes.This is a calculated field. |
| cgcloud__Total_Working_Duration_Min__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal working duration in minutes (difference of work time from and work time thru).This is a calculated field.Formula(VALUE(LEFT(cgcloud__Work_Time_Thru__c, 2)) * 60 + VALUE(RIGHT(cgcloud__Work_Time_Thru__c, 2))) - (VALUE(LEFT(cgcloud__Work_Time_From__c, 2)) * 60 + VALUE(RIGHT(cgcloud__Work_Time_From__c, 2))) |
| cgcloud__User_Document_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user document template.This is a relationship field.Relationship Namecgcloud__User_Document_Template__rRelationship TypeLookupRefers Tocgcloud__User_Document_Template__c |
| cgcloud__Work_Time_From__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStart of the working time. |
| cgcloud__Work_Time_Thru__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionEnd of the working time. |
| cgcloud__Workflow__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the workflow that the corresponding daily report uses.This is a calculated field.Formulacgcloud__User_Document_Template__r.cgcloud__Workflow__r.Name |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_User\_Document\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_User\_Document\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_User\_Document\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_User\_Document\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_User\_Document\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__User_Document__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__User_Document__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__User_Document__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__User_Document__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__User_Document__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

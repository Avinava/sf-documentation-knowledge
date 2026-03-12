---
title: "cgcloud__Job_List__c"
domain: retail-api
topic: cgcloudjoblistc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.888Z
estimatedTokens: 1453
keywords: [cgcloud__Job_List__c, Stores, job, generated, non-standard, definition, API, version, 54.0, later, cgcloud, _Job, _List, Calls, Associated]
---

# cgcloud__Job_List__c

> Stores the job lists that are generated from non-standard job
         definition lists. This object is available in API version 54.0 and later.

# cgcloud\_\_Job\_List\_\_c

Stores the job lists that are generated from non-standard job definition lists. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Description_JDL__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the job definition list.This is a calculated field.Formulacgcloud__Job_Definition_List__r.cgcloud__Description__c |
| cgcloud__Done__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the job list.Possible values are:0—Not Done1—Done2—CanceledThe default value is 0. |
| cgcloud__Job_Definition_List__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the activity.This is a relationship field.Relationship Namecgcloud__Job_Definition_List__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_List__c |
| cgcloud__Manager__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the manager.This is a relationship field.Relationship Namecgcloud__Manager__rRelationship TypeLookupRefers ToUser |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionReplaces Name by Hyperlink View.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the entry is valid. |
| cgcloud__Visit_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionVisit of the call to which the job list is magnetized.This is a calculated field.Formulacgcloud__Visit__r.cgcloud__Start_Date__c |
| cgcloud__Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVisit template that's assigned to the activity.This is a relationship field.Relationship Namecgcloud__Visit_Template__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |
| cgcloud__Visit__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVisit to which the job list is magnetized.This is a relationship field.Relationship Namecgcloud__Visit__rRelationship TypeLookupRefers ToVisit |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_List\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_List\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_List\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_List\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_List\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Job_List__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_List__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_List__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_List__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_List__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

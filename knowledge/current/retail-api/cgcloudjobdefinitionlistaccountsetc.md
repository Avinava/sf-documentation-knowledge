---
title: "cgcloud__Job_Definition_List_Account_Set__c"
domain: retail-api
topic: cgcloudjobdefinitionlistaccountsetc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.812Z
estimatedTokens: 1189
keywords: [Junction, Job, Definition, Customer, API, version, 54.0, later, cgcloud, _Job, _Definition, _List, _Account, _Set, Calls]
---

# cgcloud__Job_Definition_List_Account_Set__c

> Junction object between Job Definition List and Customer Set.
      This object is available in API version 54.0 and later.

# cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_c

Junction object between Job Definition List and Customer Set. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account_Set_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionTransfers Account_Set.Description.This is a calculated field.Formulacgcloud__Account_Set__r.cgcloud__Description__c |
| cgcloud__Account_Set_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionTransfers Account_Set.Name.This is a calculated field.Formulacgcloud__Account_Set__r.Name |
| cgcloud__Account_Set__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the Customer set.This is a relationship field.Relationship Namecgcloud__Account_Set__rRelationship TypeMaster-detailRefers Tocgcloud__Account_Set__c (the detail object) |
| cgcloud__Composite_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains concatenation of the related records' Job definition List and Customer Set. The field is set by workflow. This prevents a Customer Set from being added twice to a Job Definition List. |
| cgcloud__Job_Definition_List__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to Activity.This is a relationship field.Relationship Namecgcloud__Job_Definition_List__rRelationship TypeMaster-detailRefers Tocgcloud__Job_Definition_List__c (the master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionReplaces Name by Hyperlink View.This is a calculated field.FormulaHYPERLINK("/" &Id, /*IMAGE("/img/func_icons/util/lookup20.gif", "View")*/"View", "_top") |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales Organization to which the account set assignment of the activity (and the activity itself) belongs.Possible values are:0000000100020003 |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Job_Definition_List_Account_Set__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_Definition_List_Account_Set__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_Definition_List_Account_Set__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_Definition_List_Account_Set__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_Definition_List_Account_Set__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

---
title: "cgcloud__Org_Unit_Hierarchy__c"
domain: retail-api
topic: cgcloudorgunithierarchyc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.264Z
estimatedTokens: 1263
keywords: [cgcloud__Org_Unit_Hierarchy__c, Stores, relationship, two, org, units, It's, typically, sales, unit, hierarchy, API, version, 54.0, later]
---

# cgcloud__Org_Unit_Hierarchy__c

> Stores the details of the relationship between two org units. It's typically
         used for the sales org unit hierarchy. This object is available in API version 54.0
      and later.

# cgcloud\_\_Org\_Unit\_Hierarchy\_\_c

Stores the details of the relationship between two org units. It's typically used for the sales org unit hierarchy. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Child_Org_Level__c | TypestringPropertiesFilter, Nillable, SortDescriptionChild Org Level.This is a calculated field.FormulaTEXT(cgcloud__Child_Org_Unit__r.cgcloud__Org_Level__c) |
| cgcloud__Child_Org_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionChild Org Type.This is a calculated field.FormulaTEXT(cgcloud__Child_Org_Unit__r.cgcloud__Org_Type__c) |
| cgcloud__Child_Org_Unit__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to a child org unit in an org unit hierarchy.This is a relationship field.Relationship Namecgcloud__Child_Org_Unit__rRelationship TypeMaster-detailRefers Tocgcloud__Org_Unit__c (the master object) |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user specific language.This is a calculated field.Formulacgcloud__Parent_Org_Unit__r.cgcloud__Description__c |
| cgcloud__Parent_Org_Level__c | TypestringPropertiesFilter, Nillable, SortDescriptionParent Org Level.This is a calculated field.FormulaTEXT(cgcloud__Parent_Org_Unit__r.cgcloud__Org_Level__c) |
| cgcloud__Parent_Org_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionParent Org Type.This is a calculated field.FormulaTEXT(cgcloud__Parent_Org_Unit__r.cgcloud__Org_Type__c) |
| cgcloud__Parent_Org_Unit__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the parent org unit in an org unit hierachy.This is a relationship field.Relationship Namecgcloud__Parent_Org_Unit__rRelationship TypeLookupRefers Tocgcloud__Org_Unit__c |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionHyperlink to the detail page of the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDate from which the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDate until which the entry is valid. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Org\_Unit\_Hierarchy\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Org\_Unit\_Hierarchy\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Org\_Unit\_Hierarchy\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Org\_Unit\_Hierarchy\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Org\_Unit\_Hierarchy\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Org_Unit_Hierarchy__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Org_Unit_Hierarchy__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Org_Unit_Hierarchy__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Org_Unit_Hierarchy__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Org_Unit_Hierarchy__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

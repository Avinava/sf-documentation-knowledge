---
title: "cgcloud__Flatten_Account_Hierarchy__c"
domain: retail-api
topic: cgcloudflattenaccounthierarchyc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.605Z
estimatedTokens: 2029
keywords: [cgcloud__Flatten_Account_Hierarchy__c, stores, node, hierarchy, Customer, Segmentation, functionality, API, version, 54.0, later, cgcloud, _Flatten, _Account, _Hierarchy]
---

# cgcloud__Flatten_Account_Hierarchy__c

> This object stores node hierarchy information for the Customer
         Segmentation functionality. This object is available in API version 54.0 and later.

# cgcloud\_\_Flatten\_Account\_Hierarchy\_\_c

This object stores node hierarchy information for the Customer Segmentation functionality. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account_Level_01__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_01__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_02__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_02__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_03__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_03__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_04__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_04__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_05__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_05__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_06__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_06__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_07__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_07__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_08__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_08__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_09__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_09__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_10__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_10__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_11__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_11__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_12__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_12__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_13__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_13__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_14__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_14__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account_Level_15__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account level hierarchy.This is a relationship field.Relationship Namecgcloud__Account_Level_15__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Account of the hierarchy node.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Node_Level__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReference to the level of the node in the hierarchy. |
| cgcloud__Result_Level__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionDefines the level from which to retrieve customers.Possible values are:StoreTrade OrgThe default value is Store. |
| cgcloud__UpsertID__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique ID to upsert records from CGCloud Processing Service. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Flatten_Account_Hierarchy__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Flatten_Account_Hierarchy__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Flatten_Account_Hierarchy__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Flatten_Account_Hierarchy__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Flatten_Account_Hierarchy__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

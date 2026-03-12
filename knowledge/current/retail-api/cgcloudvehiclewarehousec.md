---
title: "cgcloud__Vehicle_Warehouse__c"
domain: retail-api
topic: cgcloudvehiclewarehousec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.409Z
estimatedTokens: 1001
keywords: [cgcloud__Vehicle_Warehouse__c, stores, relationship, vehicle, warehouse, API, version, 54.0, later, cgcloud, _Vehicle, _Warehouse, Calls, Associated, Objects]
---

# cgcloud__Vehicle_Warehouse__c

> This object stores the relationship between a vehicle and a
         warehouse.  This object is available in API version 54.0 and later.

# cgcloud\_\_Vehicle\_Warehouse\_\_c

This object stores the relationship between a vehicle and a warehouse. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive flag.The default value is false. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the vehicle warehouse record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the vehicle warehouse belongs.Possible values are:0000000100020003 |
| cgcloud__Vehicle__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the vehicle.This is a relationship field.Relationship Namecgcloud__Vehicle__rRelationship TypeMaster-detailRefers Tocgcloud__Vehicle__c (the master object) |
| cgcloud__Warehouse__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the warehouse.This is a relationship field.Relationship Namecgcloud__Warehouse__rRelationship TypeMaster-detailRefers Tocgcloud__Warehouse__c (the detail object) |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Vehicle\_Warehouse\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Vehicle\_Warehouse\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Vehicle\_Warehouse\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Vehicle\_Warehouse\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Vehicle\_Warehouse\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Vehicle_Warehouse__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Vehicle_Warehouse__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Vehicle_Warehouse__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Vehicle_Warehouse__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Vehicle_Warehouse__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

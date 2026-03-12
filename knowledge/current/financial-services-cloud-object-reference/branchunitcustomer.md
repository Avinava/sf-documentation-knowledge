---
title: "BranchUnitCustomer"
domain: financial-services-cloud-object-reference
topic: branchunitcustomer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.619Z
estimatedTokens: 800
keywords: [BranchUnitCustomer, customer, account, assigned, attributed, branch, unit, API, version, 5`.0, later, Calls, Associated, Objects]
---

# BranchUnitCustomer

> Represents a customer account that is assigned to or attributed to a branch
      unit. This object is available in API version 5`.0 and later.

# BranchUnitCustomer

Represents a customer account that is assigned to or attributed to a branch unit. This object is available in API version 5\`.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a customer account associated with the branch. |
| AssociationLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the branch's level of responsibility for managing the customer account.Possible values are:PrimarySecondaryThe default value is 'Primary'. |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe branch that is handling the associated customer account. |
| LastInteractionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the customer account was associated with the branch. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the branch unit customer relationship. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BranchUnitCustomerChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BranchUnitCustomerFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BranchUnitCustomerHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BranchUnitCustomerChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- BranchUnitCustomerFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- BranchUnitCustomerHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)

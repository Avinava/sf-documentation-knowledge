---
title: "CollectionPlanItem"
domain: omnistudio
topic: collectionplanitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.864Z
keywords: [CollectionPlanItem, Supported, Calls, Fields, Associated, Objects]
---

# CollectionPlanItem

# CollectionPlanItem

Represents an instance of a collection plan. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollectionPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent collection plan associated with the collection plan item record.This field is a relationship field.Relationship NameCollectionPlanRelationship TypeMaster-detailRefers ToCollectionPlan (the master object) |
| FinancialAccountStatementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial account statement associated with the collection plan item record.This field is a relationship field.Relationship NameFinancialAccountStatementRefers ToFinancialAccountStatement |
| Invoice | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice associated with the collection plan item record.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and <parmname>LastReferenceDate</parmname> is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the collection plan item record. |
| SourceSystemRecordIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the collection plan item in an external system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the collection plan item, such as new, pending, paid, and closed.Possible values are:NewPaidPendingClosed |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CollectionPlanItemChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CollectionPlanItemHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.
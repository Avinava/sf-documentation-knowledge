---
title: "AccountPlanProduct"
domain: life-sciences-dev-guide
topic: accountplanproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.870Z
estimatedTokens: 735
keywords: [AccountPlanProduct, products, associated, account, plan, objectives, API, version, 65.0, later, Calls, Objects]
---

# AccountPlanProduct

> Represents all the products associated with an account plan or its
         objectives. This object is available in API version 65.0 and later.

# AccountPlanProduct

Represents all the products associated with an account plan or its objectives. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan associated with a product.This field is a relationship field.Relationship NameAccountPlanRelationship TypeMaster-detailRefers ToAccountPlan (the master object) |
| AccountPlanObjectiveId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account plan objective associated with a product.This field is a relationship field.Relationship NameAccountPlanObjectiveRefers ToAccountPlanObjective |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan product record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe specific product associated with an account plan or objective.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanProductChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- AccountPlanProductChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)

---
title: "AccountPlanStkhldrProduct"
domain: life-sciences-dev-guide
topic: accountplanstkhldrproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.914Z
estimatedTokens: 985
keywords: [AccountPlanStkhldrProduct, junction, account, plan, stakeholder, product, Stores, products, associated, API, version, 65.0, later, Calls, Objects]
---

# AccountPlanStkhldrProduct

> Represents a junction between an account plan stakeholder and a
         product. Stores information about the products associated with a stakeholder for an account
         plan. This object is available in API version 65.0 and later.

# AccountPlanStkhldrProduct

Represents a junction between an account plan stakeholder and a product. Stores information about the products associated with a stakeholder for an account plan. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanStakeholderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan stakeholder associated with the account plan.This field is a relationship field.Relationship NameAccountPlanStakeholderRelationship TypeMaster-detailRefers ToAccountPlanStakeholder (the master object) |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional description about the relationship between the account plan, account plan stakeholder, and the associated products. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan stakeholder product record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the account plan stakeholder.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| StakeholderName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the referenced stakeholder, defined as an account or contact. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanStkhldrProductChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanStkhldrProductFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountPlanStkhldrProductHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanStkhldrProductChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AccountPlanStkhldrProductFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountPlanStkhldrProductHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

---
title: "cgcloud__Promotion_Template_Hierarchy__c"
domain: retail-api
topic: cgcloudpromotiontemplatehierarchyc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.723Z
estimatedTokens: 1422
keywords: [helps, promotion, hierarchies, API, version, 54.0, later, cgcloud, _Promotion, _Template, _Hierarchy, Calls, Associated, Objects]
---

# cgcloud__Promotion_Template_Hierarchy__c

> Object that helps create promotion hierarchies. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Template\_Hierarchy\_\_c

Object that helps create promotion hierarchies. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Child_Promo_Relevant_KPI_Definition_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the first KPI that's used to transfer values from the parent to the child process.This is a relationship field.Relationship Namecgcloud__Child_Promo_Relevant_KPI_Definition_1__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Child_Promo_Relevant_KPI_Definition_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the first KPI that's used to transfer values from the parent to the child process.This is a relationship field.Relationship Namecgcloud__Child_Promo_Relevant_KPI_Definition_2__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Child_Promo_Relevant_KPI_Definition_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the first KPI that's used to transfer values from the parent to the child process.This is a relationship field.Relationship Namecgcloud__Child_Promo_Relevant_KPI_Definition_3__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Child_Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup to a promotion template.This is a relationship field.Relationship Namecgcloud__Child_Promotion_Template__rRelationship TypeLookupRefers Tocgcloud__Promotion_Template__c |
| cgcloud__Copied_Components__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionComponents of a promotion that must be copied to the child promotion when a promotion is copied or derived.Possible values are:ManualInput—Manual InputNotesProductsTactics |
| cgcloud__Parent_Child_Usage_Combo__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIt stores the combination of parent promotion template and child promotion template for Derive Usage to avoid duplication of entries. |
| cgcloud__Parent_Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent (current) promotion template.This is a relationship field.Relationship Namecgcloud__Parent_Promotion_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Template__c (the master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Promotion Template Hierarchy.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the process type for which the relation record is used.Possible values are:CopyDerivePush |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Template_Hierarchy__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Template_Hierarchy__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Template_Hierarchy__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Template_Hierarchy__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Template_Hierarchy__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

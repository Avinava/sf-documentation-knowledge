---
title: "cgcloud__KPI_Map__c"
domain: retail-api
topic: cgcloudkpimapc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.947Z
estimatedTokens: 1676
keywords: [cgcloud__KPI_Map__c, Holds, KPI, Map, configuration, API, version, 54.0, later, cgcloud, _KPI, _Map, Calls, Associated, Objects]
---

# cgcloud__KPI_Map__c

> Holds the information about the KPI Map configuration. This
      object is available in API version 54.0 and later.

# cgcloud\_\_KPI\_Map\_\_c

Holds the information about the KPI Map configuration. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI map description. |
| cgcloud__Field_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the field that belongs to sObject Type and is used for KPI mapping. |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the fund template. If the fund template isn't specified, then this is the default mapping for all fund records. If the fund template is specified, then the mapping is specific to the related fund records.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__KPI_Definition_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMeasure code from the KPI Definition lookup. |
| cgcloud__KPI_Definition__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the KPI definition to be used in the mapping.This is a relationship field.Relationship Namecgcloud__KPI_Definition__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Precision__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHolds the total number of digits allowed for the target field. |
| cgcloud__Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion template. If the promotion template isn't specified, then this is the default mapping for all promotion records. If the promotion template is specified, then the mapping is specific to the related promotion records.This is a relationship field.Relationship Namecgcloud__Promotion_Template__rRelationship TypeLookupRefers Tocgcloud__Promotion_Template__c |
| cgcloud__RBF_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the rate-based funding (RBF) template. If the RBF template isn't specified, then this is the default mapping for all RBF records. If the RBF template is specified, then the mapping is specific to the related RBF records.This is a relationship field.Relationship Namecgcloud__RBF_Template__rRelationship TypeLookupRefers Tocgcloud__RBF_Template__c |
| cgcloud__SObject_Type__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the type of sObject supported for KPI mapping. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales org that the KPI map belongs to.Possible values are:0000000100020003 |
| cgcloud__Scale__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHolds the number of decimal places allowed for the target field. |
| cgcloud__Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Tactic template. If the tactic template isn't specified, then this is the default mapping for all tactic records. If the tactic template is specified, then the mapping is specific to the related tactic records.This is a relationship field.Relationship Namecgcloud__Tactic_Template__rRelationship TypeLookupRefers Tocgcloud__Tactic_Template__c |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_KPI\_Map\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_KPI\_Map\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_KPI\_Map\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_KPI\_Map\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_KPI\_Map\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__KPI_Map__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__KPI_Map__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__KPI_Map__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__KPI_Map__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__KPI_Map__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

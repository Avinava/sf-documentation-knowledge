---
title: "cgcloud__RBF_Template__c"
domain: retail-api
topic: cgcloudrbftemplatec
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.778Z
estimatedTokens: 2117
keywords: [cgcloud__RBF_Template__c, Creation, template, Rate-based, Funding, RBF, records, API, version, 54.0, later, cgcloud, _RBF, _Template, Calls]
---

# cgcloud__RBF_Template__c

> Creation template for Rate-based Funding (RBF) records. This
      object is available in API version 54.0 and later.

# cgcloud\_\_RBF\_Template\_\_c

Creation template for Rate-based Funding (RBF) records. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the template can be used to create a Rate-Based Funding Record, regardless of User Role.The default value is true. |
| cgcloud__Anchor_Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCustomer Anchor Type for the Rate-Based Funding record which drives the visibility for the Anchor attribute.Possible values are:Customer |
| cgcloud__Condition_Source_KPI__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCondition Source KPI (Lookup to KPI Definition).This is a relationship field.Relationship Namecgcloud__Condition_Source_KPI__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Condition_Target_KPI__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCondition Target KPI (Lookup to KPI Definition).This is a relationship field.Relationship Namecgcloud__Condition_Target_KPI__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Currency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrency of the Sales Org assigned to the template. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to Fund Template. Template from which the RBF Template determines the fund type.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__Internal_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternal ID is created to ensure that the same short code doesn't correspond to the same Sales Org. |
| cgcloud__KPI_Set_KPI_Definition__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI that's used to populate the Total RBF attribute on the Rate Based Funding.This is a relationship field.Relationship Namecgcloud__KPI_Set_KPI_Definition__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to KPI Set.This is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeLookupRefers Tocgcloud__KPI_Set__c |
| cgcloud__KPI_Subset__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAllows filtering of KPI Definitions in the GridHierarchyView component.Possible values are:AdjustmentBaselineManagement—Baseline ManagementBrokerFinanceMidLevelPlanning—Mid Level PlanningMonitoringPlanningPromoUIPromotionScenarios—Promotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is Planning. |
| cgcloud__RBF_Total_KPI__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to KPI Definition.This is a relationship field.Relationship Namecgcloud__RBF_Total_KPI__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Rate_Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAllows for the various calculation methods of Rate Based Funding KPIs.Possible values are:Currency/CaseFixedPercent of Revenue |
| cgcloud__Sales_Org__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to sales organization.This is a relationship field.Relationship Namecgcloud__Sales_Org__rRelationship TypeLookupRefers Tocgcloud__Sales_Organization__c |
| cgcloud__Short_Code__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique code that's used as a Legacy System reference for integration. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort order of the Rate Based Fund template. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_RBF\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_RBF\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_RBF\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_RBF\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_RBF\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__RBF_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__RBF_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__RBF_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__RBF_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__RBF_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

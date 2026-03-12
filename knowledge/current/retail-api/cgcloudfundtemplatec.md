---
title: "cgcloud__Fund_Template__c"
domain: retail-api
topic: cgcloudfundtemplatec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:38.668Z
estimatedTokens: 2021
keywords: [cgcloud__Fund_Template__c, Template, creation, Fund, API, version, 54.0, later, cgcloud, _Fund, _Template, Calls, Associated, Objects]
---

# cgcloud__Fund_Template__c

> Template for the creation of a Fund. This object is available in
      API version 54.0 and later.

# cgcloud\_\_Fund\_Template\_\_c

Template for the creation of a Fund. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the template is active.The default value is true. |
| cgcloud__Actual_RBF__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI definition that's used for the Actual RBF Total KPI.This is a relationship field.Relationship Namecgcloud__Actual_RBF__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Anchor_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the anchor type of the fund.Possible values are:CustomerCustomer ProductThe default value is Customer. |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency of the sales organization that's linked to this Fund Template.Possible values are:CAD—Canadian DollarCHF—Swiss FrancEUR—EuroGBP—Pound SterlingJPY—YenNOK—Norwegian KroneRUB—Russian CurrencyUSD—US Dollar |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of the template.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Fund_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls the Level of the Product Anchor (if any) of the Fund.Possible values are:BrandCategory |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI Set that's associated with the Fund Template. The KPI sets that are associated with Fund Templates can't be deleted.This is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeLookupRefers Tocgcloud__KPI_Set__c |
| cgcloud__KPI_Subset__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis subset helps filter KPI Definitions in the GridHierarchyView component. If you don't select a filter, no subset filter is applied.Possible values are:AdjustmentBaselineManagement—Baseline ManagementBrokerFinanceMidLevelPlanning—Mid Level PlanningMonitoringPlanningPromoUIPromotionScenarios—Promotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is Planning. |
| cgcloud__LE_RBF__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI definition that's used for the LE RBF Total KPI.This is a relationship field.Relationship Namecgcloud__LE_RBF__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__LE_Revenue__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI definition that's used for the LE Revenue Total KPI.This is a relationship field.Relationship Namecgcloud__LE_Revenue__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__LE_Volume__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKPI definition that's used for the LE Volume Total KPI.This is a relationship field.Relationship Namecgcloud__LE_Volume__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Product_Anchor_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls the Level of the Product Anchor (if any) of the Fund.Possible values are:BrandCategory |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org of the template.Possible values are:0000000100020003 |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the Sort number. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Fund\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Fund\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Fund\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Fund\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Fund\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Fund_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Fund_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Fund_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Fund_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Fund_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

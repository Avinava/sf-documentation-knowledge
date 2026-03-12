---
title: "cgcloud__Tactic_Template__c"
domain: retail-api
topic: cgcloudtactictemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.127Z
estimatedTokens: 2547
keywords: [cgcloud__Tactic_Template__c, Template, behavior, tactic, API, version, 54.0, later, cgcloud, _Tactic, _Template, Calls, Associated, Objects]
---

# cgcloud__Tactic_Template__c

> Template that controls the behavior of a tactic. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Tactic\_Template\_\_c

Template that controls the behavior of a tactic. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a tactic template is active.The default value is true. |
| cgcloud__Additional_Condition_KPI_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to additional KPI Definition 1 for the condition.This is a relationship field.Relationship Namecgcloud__Additional_Condition_KPI_1__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_Condition_KPI_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to additional KPI Definition 2 for the condition.This is a relationship field.Relationship Namecgcloud__Additional_Condition_KPI_2__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_Condition_KPI_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to additional KPI Definition 3 for the condition.This is a relationship field.Relationship Namecgcloud__Additional_Condition_KPI_3__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Condition_Change_Rule__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the rule to handle past conditions.Possible values are:finishupdate |
| cgcloud__Condition_Creation_Definition_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines which configuration is used to create conditions out of tactics.Possible values are:TacticTacticTemplateThis field is available in API version 55.0 and later. |
| cgcloud__Condition_Product_Group_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the product level at which the condition can be set.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupProductSubCategory |
| cgcloud__Condition_Source_Kpi_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionKPI source definition name.This is a calculated field.Formulacgcloud__Condition_Source_Kpi__r.Name |
| cgcloud__Condition_Source_Kpi__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the KPI definition.This is a relationship field.Relationship Namecgcloud__Condition_Source_Kpi__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Default_Lift_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLift type used as the default for the tactic.Possible values are:AbsolutePercentageThe default value is Percentage. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionSelects the description depending on the current language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Display_KPI_Subset__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSubset of KPIs that are shown on the Spend Planning card.Possible values are:AdjustmentBrokerFinanceMonitoringPlanningPromotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is SPC. |
| cgcloud__Enable_Condition_Creation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the condition creation is enabled.The default value is false. |
| cgcloud__Number_Of_TT_Cond_Creation_Def__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of tactic template condition creation definitions. A maximum of 3 TCCDs are allowed per tactic template.This field is a calculated field.This field is available in API version 55.0 and later. |
| cgcloud__Order_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionBoolean that identifies whether the tactic template is order-relevant.The default value is false. |
| cgcloud__Possible_Lift_Types__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLift type to be used or shown for the lift calculation.Possible values are:PercentagePercentage/AbsoluteThe default value is Percentage. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org of the tactic template.Possible values are:0000000100020003 |
| cgcloud__Tactic_Total_Amount__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the configuration that provides the total amount for a tactic to be used in the progress bar.Possible values are:100%LE_Spend__c—LE SpendPlan_Spend__c—Plan SpendThe default value is Plan_Spend__c. |
| cgcloud__Target_Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the target tactic template.This field is a relationship field.Relationship Namecgcloud__Target_Tactic_Template__rRelationship TypeLookupRefers Tocgcloud__Tactic_Template__c |
| cgcloud__Tactic_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionType of the tactic template.Possible values are:DisplayDisplayPerAbsPriceReductionPriceReductionPerAbsThe default value is Display. |
| cgcloud__UI_Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the UI Contract that's mapped to the tactic template. This is used to display the layout of the tactics.This is a relationship field.Relationship Namecgcloud__UI_Contract__rRelationship TypeLookupRefers Tocgcloud__UI_Contract__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Tactic_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

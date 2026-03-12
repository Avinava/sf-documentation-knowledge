---
title: "cgcloud__Payment_Template__c"
domain: retail-api
topic: cgcloudpaymenttemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.391Z
estimatedTokens: 2514
keywords: [cgcloud__Payment_Template__c, Stores, payment, template, that's, payments, API, version, 54.0, later, cgcloud, _Payment, _Template, Calls, Associated]
---

# cgcloud__Payment_Template__c

> Stores the details of the payment template that's to be used for
         payments. This object is available in API version 54.0 and later.

# cgcloud\_\_Payment\_Template\_\_c

Stores the details of the payment template that's to be used for payments. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionMost recent date on which a user last performed an action on the record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the template can be used to create a payment.The default value is true. |
| cgcloud__Additional_PTP_Kpi_Definition_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the additional KPI. The KPI is written back into the payment tactic product records at the defined product level.This is a relationship field.Relationship Namecgcloud__Additional_PTP_Kpi_Definition_1__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_PTP_Kpi_Definition_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the additional KPI. The KPI is written back into the payment tactic product records at the defined product level.This is a relationship field.Relationship Namecgcloud__Additional_PTP_Kpi_Definition_2__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_PTP_Kpi_Definition_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the additional KPI. The KPI is written back into the payment tactic product records at the defined product level.This is a relationship field.Relationship Namecgcloud__Additional_PTP_Kpi_Definition_3__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Currency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrency of the payment template based on the sales org currency. |
| cgcloud__Date_From_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUsed for the Link Tactics feature: linkable tactics must overlap with the time range [payment.reference_date__c - Date_From_Offset__c:payment.reference_Date__c + Date_Thru_Offset__c]. |
| cgcloud__Date_Thru_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUsed for the Link Tactics feature: linkable tactics must overlap with the time range [payment.reference_date__c - Date_From_Offset__c:payment.reference_Date__c + Date_Thru_Offset__c]. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Internal_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternal ID that's created to ensure that the same short code doesn't correspond to the same sales org. |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the KPI set.This is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeLookupRefers Tocgcloud__KPI_Set__c |
| cgcloud__KPI_Subset__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAllows the filtering of KPI definitions in the GridHierarchyView component.Possible values are:AdjustmentBaselineManagement—Baseline ManagementBrokerFinanceMidLevelPlanning—Mid Level PlanningMonitoringPlanningPromoUIPromotionScenarios—Promotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is Planning. |
| cgcloud__Payment_Adjustment_Process_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the payment adjustment process type of the payment template.Possible values are:InterfacedManualNone |
| cgcloud__Payment_Tactic_Product_Level__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the product level of the payment tactic at which the calculation is performed.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupProductSubCategory—Sub CategoryThe default value is Category. |
| cgcloud__Payment_Type_Formula__c | TypestringPropertiesFilter, Nillable, SortDescriptionDefines the payment type of the payment template.This is a calculated field.FormulaTEXT( cgcloud__Payment_Type__c ) |
| cgcloud__Payment_Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines the payment type of the payment template.Possible values are:Check RequestCredit MemoDeductionInvoice-Based |
| cgcloud__Requires_Funds__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the payment requires funds to be approved.The default value is true. |
| cgcloud__Sales_Org__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the sales organization.This is a relationship field.Relationship Namecgcloud__Sales_Org__rRelationship TypeLookupRefers Tocgcloud__Sales_Organization__c |
| cgcloud__Short_Code__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique code that's used as a Legacy System Reference. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort number. |
| cgcloud__Tactic_Payout_KPI_Definition__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionKPI on the Tactic - Product that's used to distribute the Tactic Payout.This is a relationship field.Relationship Namecgcloud__Tactic_Payout_KPI_Definition__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Payment_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

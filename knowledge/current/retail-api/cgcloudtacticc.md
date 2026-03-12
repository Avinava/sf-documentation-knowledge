---
title: "cgcloud__Tactic__c"
domain: retail-api
topic: cgcloudtacticc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:40.058Z
estimatedTokens: 3412
keywords: [cgcloud__Tactic__c, Configures, relation, Promotion, Tactic, API, version, 54.0, later, cgcloud, _Tactic, Calls, Associated, Objects]
---

# cgcloud__Tactic__c

> Configures the relation between a Promotion and a Tactic. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Tactic\_\_c

Configures the relation between a Promotion and a Tactic. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Absolute_Lift__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated Lift value of the tactic. If the tactic is executed, the Baseline Volume is increased by this volume. |
| cgcloud__Aggregation_Category__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAggregation category for the tactic under the promotion. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTactic Cost Amount. |
| cgcloud__Anchor__c | TypestringPropertiesFilter, Nillable, SortDescriptionAnchor of the promotion to which the tactic is related.This is a calculated field.Formulacgcloud__Promotion__r.cgcloud__Anchor_Account__r.Name |
| cgcloud__Comment__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the comment that describes different tactics. |
| cgcloud__Compensation_Model__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the compensation model for the tactic execution.Possible values are:LumpSumPerCasePercentageWeeklyLumpSumThe default value is LumpSum. |
| cgcloud__Condition_Creation_Incidents__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation about duplicate condition incidents.This field is available in API version 55.0 and later. |
| cgcloud__Condition_Creation_Levels__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON file which contains a list of effective product levels.This field is available in API version 55.0 and later. |
| cgcloud__Condition_Maintenance__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the action on the conditions that the tactic generates.Possible values are:deletefreezeinitialupsertThe default value is initial. |
| cgcloud__Create_Default_Conditions__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the system needs to create the default tactic condition creation definitions for the tactics when this tactic is saved in the database.This field is available in API version 55.0 and later.The default value is false. |
| cgcloud__Custom1_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the start of a project-specific time range. |
| cgcloud__Custom1_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the end of a project-specific time range. |
| cgcloud__Custom2_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the start of a project-specific time range. |
| cgcloud__Custom2_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the end of a project-specific time range. |
| cgcloud__Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart of a project-specific time range. For example, pre-dip. |
| cgcloud__Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd of a project-specific time range. For example, pre-dip. |
| cgcloud__Effective_Brands__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionEffective brands of the tactic. The field stores a list of sfIds of effective brands that are calculated from the effective SKUs or LDPs of the tactic. |
| cgcloud__Effective_Categories__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionEffective categories of the tactic. The field stores a list of sfIds of effective categories that are calculated from the effective SKUs or LDPs of the tactic. |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionReference to the promotion ID that the external system uses to import tactic-specific actuals into the offplatform back end. |
| cgcloud__Filter_Criteria__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText field that stores the .json file that's used to apply product filters. |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFund Type of the funds that are automatically assigned to the tactic.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__Included__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIncluded in the promotion.The default value is true. |
| cgcloud__Instore_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInstore start date of a tactic |
| cgcloud__Instore_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInstore end date of a tactic. |
| cgcloud__KPI_Value_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback synchronized KPI 1. |
| cgcloud__KPI_Value_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback synchronized KPI 2. |
| cgcloud__KPI_Value_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback synchronized KPI 3. |
| cgcloud__KPI_Value_4__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback synchronized KPI 4. |
| cgcloud__LE_Spend__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLE Spend KPI value that's to be distributed to the associated tactic funds based on the funding percentage. |
| cgcloud__Liabilities__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLiability Accrual KPI value that's to be distributed to the associated tactic funds based on the funding percentage. |
| cgcloud__Lift_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of lift of the tactic.Possible values are:%Abs |
| cgcloud__Lift_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of the lift type (fixed or percentage value). |
| cgcloud__Lift__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIncremental Lift Factor. |
| cgcloud__OI_Costs__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLink to the tactic in the parent promotion that created this tactic. |
| cgcloud__Parent_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLink to the tactic in the parent promotion that created this tactic.This is a relationship field.Relationship Namecgcloud__Parent_Tactic__rRelationship TypeLookupRefers Tocgcloud__Tactic__c |
| cgcloud__Payment_Method__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPayment method that a business partner uses to pay the costs due to the tactic execution.Possible values are:CheckDeductionOffInvoice—Off InvoiceOnInvoice—On InvoiceThe default value is Deduction. |
| cgcloud__Pct_of_Stores__c | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionPercentage of stores that participate in the tactic. |
| cgcloud__Pending_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionAmount that's pending to be paid.This is a calculated field. |
| cgcloud__Plan_Spend__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPlanned costs of the tactic. |
| cgcloud__Promotion_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionSlogan of the promotion to which this tactic is assigned.This is a calculated field.FormulaHYPERLINK("/one/one.app#/sObject/" & cgcloud__Promotion__r.Id & "/view", cgcloud__Promotion__r.cgcloud__Slogan__c) |
| cgcloud__Promotion_Phase__c | TypestringPropertiesFilter, Nillable, SortDescriptionPhase of the promotion to which this tactic is assigned.This is a calculated field.FormulaTEXT(cgcloud__Promotion__r.cgcloud__Phase__c) |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the promotion.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion__c (Master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Tactic when accessed from the related list of the Promotion object.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales org of the tactic.This is a calculated field.FormulaTEXT(cgcloud__Tactic_Template__r.cgcloud__Sales_Org__c) |
| cgcloud__Scenario_Participation__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the scenarios to which the tactic belongs. |
| cgcloud__Shipment_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShipment start date of a tactic. |
| cgcloud__Source_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the source tactic.This field is a relationship field.Relationship Namecgcloud__Source_Tactic__rRelationship TypeLookupRefers Tocgcloud__Tactic__c |
| cgcloud__Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the tactic template.This is a relationship field.Relationship Namecgcloud__Tactic_Template__rRelationship TypeLookupRefers Tocgcloud__Tactic_Template__c |
| cgcloud__Tactic_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionLabel of the Tactic Template of this tactic.This is a calculated field.Formulacgcloud__Tactic_Template__r.cgcloud__Description__c |
| cgcloud__Tier_Definition__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText field that stores the .json file that's used to define the tiers of the tactic. |
| cgcloud__To_Date_Paid_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal amount paid until the current date.This is a calculated field. |
| cgcloud__Total_Plan_Spend__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of all plan spends of funds.This is a calculated field. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tactic__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

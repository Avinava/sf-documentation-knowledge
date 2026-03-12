---
title: "cgcloud__Tactic_Fund__c"
domain: retail-api
topic: cgcloudtacticfundc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:40.080Z
estimatedTokens: 1559
keywords: [cgcloud__Tactic_Fund__c, stores, relationship, Fund, Payment, Tactic, junction, objects, API, version, 54.0, later, cgcloud, _Tactic, _Fund]
---

# cgcloud__Tactic_Fund__c

> This object stores the relationship between the Fund and Payment
         Tactic junction objects. This object is available in API version 54.0 and later.

# cgcloud\_\_Tactic\_Fund\_\_c

This object stores the relationship between the Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Active_Tactic__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the referred tactic is included.The default value is false. |
| cgcloud__Calculated_Funding_Percent__c | TypepercentPropertiesFilter, Nillable, SortDescriptionFunding Percent value that's calculated based on the Plan Spend amount that's allocated to the Tactic Fund and Total Plan Spend amount for the tactic. It is used when the Fund Auto-Determination option is disabled.This is a calculated field.FormulaIF( NOT(ISBLANK(cgcloud__Tactic__r.cgcloud__Total_Plan_Spend__c)) , (cgcloud__Plan_Spend__c/ cgcloud__Tactic__r.cgcloud__Total_Plan_Spend__c), 0) |
| cgcloud__Fund_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the related fund.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__Description__c |
| cgcloud__Fund__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the fund.This is a relationship field.Relationship Namecgcloud__Fund__rRelationship TypeMaster-detailRefers Tocgcloud__Fund__c (Detail object) |
| cgcloud__Funding_Percent__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionValue that drives amount distribution for the fund. |
| cgcloud__LE_Spend__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTactic-level spend KPI that's synced to this tactic fund record (restricted to the product spend of the fund's anchor product). |
| cgcloud__Liabilities__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTactic-level liabilities KPI that's synced to this tactic fund record (restricted to the product spend of the fund's anchor product). |
| cgcloud__OI_Costs__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTactic-level costs that appear on invoices, and the KPI is synced to this tactic fund record (restricted to the product spend of the fund's anchor product). |
| cgcloud__Phase__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the phase field on the Promotion object. |
| cgcloud__Plan_Spend__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTactic-level planned spend KPI that's synced to this tactic fund record (restricted to the product spend of the fund's anchor product). |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the Tactic Fund Record for related custom lists.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Tactic_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionReads Tactic Type off of related Tactic record; helpful for reporting purposes.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Tactic_Type__c |
| cgcloud__Tactic__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tactic.This is a relationship field.Relationship Namecgcloud__Tactic__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic__c (Master object) |
| cgcloud__Unaccrued_Costs__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSubtracts the Tactic Fund Liabilities value from the LE Spend value.This is a calculated field.Formulacgcloud__LE_Spend__c  -  cgcloud__Liabilities__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_Fund\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_Fund\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_Fund\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_Fund\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_Fund\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tactic_Fund__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic_Fund__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic_Fund__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic_Fund__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic_Fund__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

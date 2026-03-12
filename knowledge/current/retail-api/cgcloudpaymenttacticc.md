---
title: "cgcloud__Payment_Tactic__c"
domain: retail-api
topic: cgcloudpaymenttacticc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.341Z
estimatedTokens: 2435
keywords: [cgcloud__Payment_Tactic__c, relationship, Fund, Payment, Tactic, junction, objects, API, version, 54.0, later, cgcloud, _Payment, _Tactic, Calls]
---

# cgcloud__Payment_Tactic__c

> This object represents the relationship between Fund and Payment
         Tactic junction objects. This object is available in API version 54.0 and later.

# cgcloud\_\_Payment\_Tactic\_\_c

This object represents the relationship between Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate on which a user last performed an action on the record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecord type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Adjustment_Type__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf a payment is to be adjusted, this field defines the type of adjustment. |
| cgcloud__Amount_Offset__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTactic payout that's pending after having associated payment tactic funds.This is a calculated field.FormulaABS( cgcloud__Tactic_Payout__c  -  cgcloud__Payment_Tactic_Fund_Summary__c ) |
| cgcloud__Anchor__c | TypestringPropertiesFilter, Nillable, SortDescriptionAnchor of the tactic.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Anchor__c |
| cgcloud__Calculation_Date_From__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionStart date of the calculation timeframe for the payment tactic.This is a calculated field.FormulaIF(ISBLANK(cgcloud__Custom_Calculation_Date_From__c), cgcloud__Tactic__r.cgcloud__Date_From__c,cgcloud__Custom_Calculation_Date_From__c) |
| cgcloud__Calculation_Date_Thru__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date of the calculation timeframe for the payment tactic.This is a calculated field.FormulaIF(ISBLANK(cgcloud__Custom_Calculation_Date_Thru__c), cgcloud__Tactic__r.cgcloud__Date_Thru__c,cgcloud__Custom_Calculation_Date_Thru__c) |
| cgcloud__Custom_Calculation_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of the custom calculation timeframe for the payment tactic. |
| cgcloud__Custom_Calculation_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the custom calculation timeframe for the payment tactic. |
| cgcloud__End_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date of the tactic.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Date_Thru__c |
| cgcloud__Fund_Distribution_Metric__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDistribution metric that a user can choose to calculate funding percentage and payout amount.Possible values are:LE_Revenue__c—LE RevenueLE_Volume__c—LE VolumeThe default value is LE_Volume__c. |
| cgcloud__Has_Calculated_Amount__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates when a payment is updated and saved so that the recalculation of the tactic payout amount can be triggered.The default value is false. |
| cgcloud__KPI_Subset__c | TypestringPropertiesFilter, Nillable, SortDescriptionKPI Subset defines the KPIs that are shown in the Payment Tactic KPI Grid of this payment tactic.This is a calculated field.FormulaTEXT(cgcloud__Payment__r.cgcloud__Payment_Template__r.cgcloud__KPI_Subset__c) |
| cgcloud__Payment_Method__c | TypestringPropertiesFilter, Nillable, SortDescriptionPayment method of the tactic.This is a calculated field.FormulaText(cgcloud__Tactic__r.cgcloud__Payment_Method__c) |
| cgcloud__Payment_Status__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the payment. |
| cgcloud__Payment_Tactic_Fund_Summary__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSummary of the Payment Tactic Funds that's associated to the payment. |
| cgcloud__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUser-friendly payment tactic identifier.This is a relationship field.Relationship Namecgcloud__Payment__rRelationship TypeMaster-detailRefers Tocgcloud__Payment__c (Master object) |
| cgcloud__Pending_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionPending amount that's to be paid.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Pending_Amount__c |
| cgcloud__Promotion_Slogan__c | TypestringPropertiesFilter, Nillable, SortDescriptionPromotion slogan of the source promotion to which the tactic is related.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Promotion__r.cgcloud__Slogan__c |
| cgcloud__Promotion_Tactic__c | TypestringPropertiesFilter, Nillable, SortDescriptionCombination of the source promotion and tactic name that's used in the payment.This is a calculated field.FormulaHYPERLINK("/one/one.app#/sObject/" & Id & "/view",   cgcloud__Tactic__r.cgcloud__Promotion__r.cgcloud__Slogan__c &' - '& cgcloud__Tactic__r.cgcloud__Tactic_Template__r.cgcloud__Description__c  ) |
| cgcloud__Requires_Fund__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDefines whether the payment requires funds to be approved.This is a calculated field.Formulacgcloud__Payment__r.cgcloud__Payment_Template__r.cgcloud__Requires_Funds__c |
| cgcloud__Start_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionStart date of the tactic.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Date_From__c |
| cgcloud__Tactic_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the tactic.This is a calculated field.FormulaHYPERLINK("/one/one.app#/sObject/" & Id & "/view",  cgcloud__Tactic__r.cgcloud__Tactic_Template__r.cgcloud__Description__c) |
| cgcloud__Tactic_Payout__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionPayment amount that's allocated for the specified tactic. Depending on the orientation of the payment, you can enter either negative or positive values in this field. For positive payments, only positive values are allowed and for negative payments, only negative values are allowed. |
| cgcloud__Tactic_Template__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the tactic template of the tactic.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__Tactic_Template__r.Name |
| cgcloud__Tactic__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tactic.This is a relationship field.Relationship Namecgcloud__Tactic__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic__c (Detail object) |
| cgcloud__To_Date_Paid_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionAmount that's paid until the current date.This is a calculated field.Formulacgcloud__Tactic__r.cgcloud__To_Date_Paid_Amount__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_Tactic\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_Tactic\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_Tactic\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_Tactic\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_Tactic\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Payment_Tactic__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment_Tactic__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment_Tactic__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment_Tactic__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment_Tactic__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
